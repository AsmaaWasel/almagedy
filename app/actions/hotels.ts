"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { hotels, hotelImages } from "@/lib/db/schema";
import { and, eq, desc } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function getUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
}

// ============================
// Get All Hotels
// ============================

export async function getHotels() {
  const userId = await getUserId();

  const result = await db.query.hotels.findMany({
    where: eq(hotels.userId, userId),

    with: {
      images: true,
    },

    orderBy: desc(hotels.createdAt),
  });

  return result;
}

// ============================
// Get Hotel By ID
// ============================

export async function getHotelById(id: number) {
  const userId = await getUserId();

  const hotel = await db.query.hotels.findFirst({
    where: and(eq(hotels.id, id), eq(hotels.userId, userId)),

    with: {
      images: true,
    },
  });

  return hotel || null;
}

// ============================
// Create Hotel
// ============================

export async function createHotel(formData: FormData) {
  const userId = await getUserId();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const hotelType = formData.get("hotelType") as string;
  const packageType = formData.get("packageType") as string;

  const images = formData.getAll("images") as File[];

  console.log("Images count:", images.length);

  // رفع الصور على Cloudinary
  const uploadedImages: string[] = [];

  for (const image of images) {
    const uploadData = new FormData();

    uploadData.append("file", image);

    const response = await fetch(`${process.env.BETTER_AUTH_URL}/api/upload`, {
      method: "POST",
      body: uploadData,
    });

    const data = await response.json();

    if (data.url) {
      uploadedImages.push(data.url);
    }
  }

  console.log("Uploaded Images:", uploadedImages);

  // إنشاء الفندق
  const result = await db
    .insert(hotels)
    .values({
      userId,
      title,
      description,
      hotelType,
      packageType,
    })
    .returning();

  const hotel = result[0];

  // حفظ صور الفندق
  if (uploadedImages.length > 0) {
    await db.insert(hotelImages).values(
      uploadedImages.map((url) => ({
        hotelId: hotel.id,
        imageUrl: url,
      })),
    );
  }

  revalidatePath("/dashboard/hotels");

  return hotel;
}

// ============================
// Update Hotel
// ============================

export async function updateHotel(formData: FormData) {
  const id = Number(formData.get("id"));

  await db
    .update(hotels)
    .set({
      title: String(formData.get("title")),
      description: String(formData.get("description") || ""),
      hotelType: String(formData.get("hotelType")),
      packageType: String(formData.get("packageType")),
    })
    .where(eq(hotels.id, id));

  revalidatePath("/dashboard/hotels");
}

// ============================
// Delete Hotel
// ============================

export async function deleteHotel(id: number) {
  const userId = await getUserId();

  // حذف الصور أولاً

  await db
    .delete(hotelImages)

    .where(eq(hotelImages.hotelId, id));

  // حذف الفندق

  await db
    .delete(hotels)

    .where(
      and(
        eq(hotels.id, id),

        eq(hotels.userId, userId),
      ),
    );

  revalidatePath("/dashboard/hotels");
}

// ============================
// Add Hotel Image
// ============================

export async function uploadHotelImage(data: {
  hotelId: number;
  imageUrl: string;
}) {
  await db
    .insert(hotelImages)

    .values({
      hotelId: data.hotelId,

      imageUrl: data.imageUrl,
    });

  revalidatePath("/dashboard/hotels");
}

// ============================
// Delete Hotel Image
// ============================

export async function deleteHotelImage(imageId: number) {
  await db
    .delete(hotelImages)

    .where(eq(hotelImages.id, imageId));

  revalidatePath("/dashboard/hotels");
}

export async function getHotel(id: number) {
  const hotel = await db.query.hotels.findFirst({
    where: eq(hotels.id, id),

    with: {
      images: true,
    },
  });

  if (!hotel) {
    throw new Error("Hotel not found");
  }

  return hotel;
}
