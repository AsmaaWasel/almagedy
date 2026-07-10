"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { bookings, customers, trips } from "@/lib/db/schema";
import { and, desc, eq, ilike } from "drizzle-orm";
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

export async function getBookings(
  page = 1,
  limit = 10,
  search = "",
  status = "",
) {
  const userId = await getUserId();

  const offset = (page - 1) * limit;

  const conditions = [eq(bookings.userId, userId)];

  if (search) {
    conditions.push(ilike(customers.name, `%${search}%`));
  }

  if (status && status !== "all") {
    conditions.push(eq(bookings.status, status));
  }

  const result = await db
    .select({
      id: bookings.id,

      customerId: bookings.customerId,
      tripId: bookings.tripId,

      status: bookings.status,
      numberOfPassengers: bookings.numberOfPassengers,
      totalPrice: bookings.totalPrice,

      bookingDate: bookings.bookingDate,
      notes: bookings.notes,

      customerName: customers.name,
      customerEmail: customers.email,

      tripTitle: trips.name,
      tripDestination: trips.destination,
    })
    .from(bookings)
    .leftJoin(customers, eq(bookings.customerId, customers.id))
    .leftJoin(trips, eq(bookings.tripId, trips.id))
    .where(and(...conditions))
    .orderBy(desc(bookings.bookingDate))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getBookingById(id: number) {
  const userId = await getUserId();

  const booking = await db
    .select()
    .from(bookings)
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)))
    .limit(1);

  return booking[0] || null;
}

export async function createBooking(data: {
  customerId: number;
  tripId: number;
  numberOfPassengers: number;
  totalPrice: number;
  notes?: string;
}) {
  const userId = await getUserId();

  const result = await db.insert(bookings).values({
    userId,

    customerId: data.customerId,
    tripId: data.tripId,

    numberOfPassengers: data.numberOfPassengers,

    totalPrice: String(data.totalPrice),

    notes: data.notes,

    status: "pending",
  });

  revalidatePath("/dashboard/bookings");

  return result;
}

export async function updateBooking(
  id: number,
  data: {
    status?: string;
    numberOfPassengers?: number;
    totalPrice?: number;
    notes?: string;
  },
) {
  const userId = await getUserId();

  await db
    .update(bookings)
    .set({
      ...data,
      totalPrice:
        data.totalPrice !== undefined ? String(data.totalPrice) : undefined,
    })
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)));

  revalidatePath("/dashboard/bookings");
}

export async function deleteBooking(id: number) {
  const userId = await getUserId();

  await db
    .delete(bookings)
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)));

  revalidatePath("/dashboard/bookings");
}

export async function updateBookingStatus(id: number, status: string) {
  const userId = await getUserId();

  await db
    .update(bookings)
    .set({
      status,
    })
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)));

  revalidatePath("/dashboard/bookings");
}
