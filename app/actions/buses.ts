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

// =========================
// Get All Buses
// =========================

export async function getBuses() {
  const userId = await getUserId();

  return await db.query.buses.findMany({
    where: eq(buses.userId, userId),

    with: {
      images: true,
    },

    orderBy: [desc(buses.createdAt)],
  });
}

// =========================
// Create Bus
// =========================

export async function createBus(data: {
  title: string;
  description?: string;
  busType: string;
  images: string[];
}) {
  const userId = await getUserId();

  const [bus] = await db
    .insert(buses)
    .values({
      userId,
      title: data.title,
      description: data.description,
      busType: data.busType,
    })
    .returning();

  if (data.images.length) {
    await db.insert(busImages).values(
      data.images.map((image) => ({
        busId: bus.id,
        imageUrl: image,
      })),
    );
  }

  revalidatePath("/dashboard/buses");

  return bus;
}

// =========================
// Update Bus
// =========================

export async function updateBus(
  id: number,
  data: {
    title: string;
    description?: string;
    busType: string;
    images: string[];
  },
) {
  const userId = await getUserId();

  await db
    .update(buses)
    .set({
      title: data.title,
      description: data.description,
      busType: data.busType,
      updatedAt: new Date(),
    })
    .where(and(eq(buses.id, id), eq(buses.userId, userId)));

  await db.delete(busImages).where(eq(busImages.busId, id));

  if (data.images.length) {
    await db.insert(busImages).values(
      data.images.map((image) => ({
        busId: id,
        imageUrl: image,
      })),
    );
  }

  revalidatePath("/dashboard/buses");
}

// =========================
// Delete Bus
// =========================

export async function deleteBus(id: number) {
  const userId = await getUserId();

  await db.delete(buses).where(and(eq(buses.id, id), eq(buses.userId, userId)));

  revalidatePath("/dashboard/buses");
}

export async function getBusById(id: number) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const result = await db.query.buses.findFirst({
    where: eq(buses.id, id),

    with: {
      images: true,
    },
  });

  return result;
}
