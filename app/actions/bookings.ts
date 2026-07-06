'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { bookings, customers, trips, buses } from '@/lib/db/schema'
import { and, desc, eq, like, ilike } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getBookings(page = 1, limit = 10, search = '', status = '') {
  const userId = await getUserId()
  const offset = (page - 1) * limit

  let query = db
    .select({
      id: bookings.id,
      customerId: bookings.customerId,
      tripId: bookings.tripId,
      busId: bookings.busId,
      status: bookings.status,
      numberOfPassengers: bookings.numberOfPassengers,
      totalPrice: bookings.totalPrice,
      bookingDate: bookings.bookingDate,
      departureDate: bookings.departureDate,
      notes: bookings.notes,
      customerName: customers.name,
      customerEmail: customers.email,
      tripTitle: trips.title,
      tripDestination: trips.destination,
      busName: buses.name,
    })
    .from(bookings)
    .leftJoin(customers, eq(bookings.customerId, customers.id))
    .leftJoin(trips, eq(bookings.tripId, trips.id))
    .leftJoin(buses, eq(bookings.busId, buses.id))
    .where(eq(bookings.userId, userId))

  if (search) {
    query = query.where(
      ilike(customers.name, `%${search}%`)
    )
  }

  if (status && status !== 'all') {
    query = query.where(eq(bookings.status, status))
  }

  const result = await query
    .orderBy(desc(bookings.bookingDate))
    .limit(limit)
    .offset(offset)

  return result
}

export async function getBookingById(id: number) {
  const userId = await getUserId()
  const booking = await db
    .select()
    .from(bookings)
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)))
    .limit(1)

  return booking[0] || null
}

export async function createBooking(data: {
  customerId: number
  tripId: number
  busId?: number
  numberOfPassengers: number
  totalPrice: number
  departureDate: string
  notes?: string
}) {
  const userId = await getUserId()
  const result = await db.insert(bookings).values({
    userId,
    customerId: data.customerId,
    tripId: data.tripId,
    busId: data.busId,
    numberOfPassengers: data.numberOfPassengers,
    totalPrice: data.totalPrice,
    departureDate: new Date(data.departureDate),
    notes: data.notes,
    status: 'pending',
  })

  revalidatePath('/dashboard/bookings')
  return result
}

export async function updateBooking(
  id: number,
  data: {
    status?: string
    numberOfPassengers?: number
    totalPrice?: number
    notes?: string
  }
) {
  const userId = await getUserId()
  await db
    .update(bookings)
    .set(data)
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)))

  revalidatePath('/dashboard/bookings')
}

export async function deleteBooking(id: number) {
  const userId = await getUserId()
  await db.delete(bookings).where(
    and(eq(bookings.id, id), eq(bookings.userId, userId))
  )

  revalidatePath('/dashboard/bookings')
}

export async function updateBookingStatus(id: number, status: string) {
  const userId = await getUserId()
  await db
    .update(bookings)
    .set({ status })
    .where(and(eq(bookings.id, id), eq(bookings.userId, userId)))

  revalidatePath('/dashboard/bookings')
}
