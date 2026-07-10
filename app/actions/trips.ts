"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { trips } from "@/lib/db/schema";
import { and, count, desc, eq, ilike } from "drizzle-orm";
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

export async function getTrips(page = 1, limit = 10, search = "", status = "") {
  const userId = await getUserId();

  const offset = (page - 1) * limit;

  const conditions = [eq(trips.userId, userId)];

  if (search) {
    conditions.push(ilike(trips.name, `%${search}%`));
  }

  if (status && status !== "all") {
    conditions.push(eq(trips.status, status));
  }

  const result = await db
    .select()
    .from(trips)
    .where(and(...conditions))
    .orderBy(desc(trips.startDate))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getTripById(id: number) {
  const userId = await getUserId();

  const trip = await db
    .select()
    .from(trips)
    .where(and(eq(trips.id, id), eq(trips.userId, userId)))
    .limit(1);

  return trip[0] || null;
}

export async function createTrip(data: {
  name: string;
  description?: string;
  destination: string;
  startDate: string;
  endDate: string;
  duration: number;
  price: number;
  capacity: number;
}) {
  const userId = await getUserId();

  const result = await db.insert(trips).values({
    userId,
    name: data.name,
    description: data.description,
    destination: data.destination,
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
    duration: data.duration,
    price: String(data.price),
    capacity: data.capacity,
    status: "active",
  });

  revalidatePath("/dashboard/trips");

  return result;
}

export async function updateTrip(
  id: number,
  data: {
    name?: string;
    description?: string;
    destination?: string;
    startDate?: string;
    endDate?: string;
    duration?: number;
    price?: number;
    capacity?: number;
    status?: string;
  },
) {
  const userId = await getUserId();

  const updateData: any = {
    ...data,
  };

  if (data.startDate) {
    updateData.startDate = new Date(data.startDate);
  }

  if (data.endDate) {
    updateData.endDate = new Date(data.endDate);
  }

  if (data.price !== undefined) {
    updateData.price = String(data.price);
  }

  await db
    .update(trips)
    .set(updateData)
    .where(and(eq(trips.id, id), eq(trips.userId, userId)));

  revalidatePath("/dashboard/trips");
}

export async function deleteTrip(id: number) {
  const userId = await getUserId();

  await db.delete(trips).where(and(eq(trips.id, id), eq(trips.userId, userId)));

  revalidatePath("/dashboard/trips");
}

export async function getTripCount() {
  const userId = await getUserId();

  const result = await db
    .select({
      count: count(),
    })
    .from(trips)
    .where(eq(trips.userId, userId));

  return result[0]?.count ?? 0;
}
