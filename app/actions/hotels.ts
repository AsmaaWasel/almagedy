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

export async function createHotel(data: {
  title: string;
  description?: string;
  hotelType: string;
  packageType: string;
}) {
  const userId = await getUserId();

  const result = await db
    .insert(hotels)
    .values({
      userId,

      title: data.title,

      description: data.description,

      hotelType: data.hotelType,

      packageType: data.packageType,
    })
    .returning();

  revalidatePath("/dashboard/hotels");

  return result[0];
}

// ============================
// Update Hotel
// ============================

export async function updateHotel(
  id: number,

  data: {
    title?: string;
    description?: string;
    hotelType?: string;
    packageType?: string;
  },
) {
  const userId = await getUserId();

  await db
    .update(hotels)

    .set({
      ...data,

      updatedAt: new Date(),
    })

    .where(
      and(
        eq(hotels.id, id),

        eq(hotels.userId, userId),
      ),
    );

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
