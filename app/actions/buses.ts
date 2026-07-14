"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { buses, busImages } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
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
// Get All Buses
// ============================

export async function getBuses() {
  const userId = await getUserId();

  const result = await db.query.buses.findMany({
    where: eq(buses.userId, userId),

    with: {
      images: true,
    },

    orderBy: desc(buses.createdAt),
  });

  return result;
}

// ============================
// Get Bus By ID
// ============================

export async function getBusById(id: number) {
  const userId = await getUserId();

  const bus = await db.query.buses.findFirst({
    where: and(eq(buses.id, id), eq(buses.userId, userId)),

    with: {
      images: true,
    },
  });

  return bus || null;
}

// ============================
// Create Bus
// ============================

export async function createBus(formData: FormData) {
  const userId = await getUserId();

  const title = formData.get("title") as string;

  const description = formData.get("description") as string;

  const busType = formData.get("busType") as string;

  const images = formData.getAll("images") as File[];

  const uploadedImages: string[] = [];

  // Upload Images Cloudinary

  for (const image of images) {
    const uploadData = new FormData();

    uploadData.append("file", image);

    const response = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: uploadData,
    });

    const data = await response.json();

    if (data.url) {
      uploadedImages.push(data.url);
    }
  }

  // Create Bus

  const result = await db
    .insert(buses)
    .values({
      userId,
      title,
      description,
      busType,
    })
    .returning();

  const bus = result[0];

  // Save Images

  if (uploadedImages.length > 0) {
    await db.insert(busImages).values(
      uploadedImages.map((url) => ({
        busId: bus.id,
        imageUrl: url,
      })),
    );
  }

  revalidatePath("/dashboard/buses");

  return bus;
}

// ============================
// Update Bus
// ============================

export async function updateBus(
  id: number,

  data: {
    title?: string;
    description?: string;
    busType?: string;
  },
) {
  const userId = await getUserId();

  await db
    .update(buses)

    .set({
      ...data,
      updatedAt: new Date(),
    })

    .where(and(eq(buses.id, id), eq(buses.userId, userId)));

  revalidatePath("/dashboard/buses");
}

// ============================
// Delete Bus
// ============================

export async function deleteBus(id: number) {
  const userId = await getUserId();

  // حذف الصور

  await db
    .delete(busImages)

    .where(eq(busImages.busId, id));

  // حذف الباص

  await db
    .delete(buses)

    .where(and(eq(buses.id, id), eq(buses.userId, userId)));

  revalidatePath("/dashboard/buses");
}

// ============================
// Add Bus Image
// ============================

export async function uploadBusImage(data: {
  busId: number;
  imageUrl: string;
}) {
  const image = await db
    .insert(busImages)

    .values({
      busId: data.busId,
      imageUrl: data.imageUrl,
    })

    .returning();

  revalidatePath(`/dashboard/buses/${data.busId}/images`);

  return image[0];
}

// ============================
// Delete Bus Image
// ============================

export async function deleteBusImage(imageId: number) {
  await db
    .delete(busImages)

    .where(eq(busImages.id, imageId));

  revalidatePath("/dashboard/buses");
}
