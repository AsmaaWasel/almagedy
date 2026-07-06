'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { trips } from '@/lib/db/schema'
import { and, desc, eq, ilike } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getTrips(page = 1, limit = 10, search = '', status = '') {
  const userId = await getUserId()
  const offset = (page - 1) * limit

  let query = db
    .select()
    .from(trips)
    .where(eq(trips.userId, userId))

  if (search) {
    query = query.where(
      ilike(trips.title, `%${search}%`)
    )
  }

  if (status && status !== 'all') {
    query = query.where(eq(trips.status, status))
  }

  const result = await query
    .orderBy(desc(trips.startDate))
    .limit(limit)
    .offset(offset)

  return result
}

export async function getTripById(id: number) {
  const userId = await getUserId()
  const trip = await db
    .select()
    .from(trips)
    .where(and(eq(trips.id, id), eq(trips.userId, userId)))
    .limit(1)

  return trip[0] || null
}

export async function createTrip(data: {
  title: string
  description?: string
  destination: string
  startDate: string
  endDate: string
  price: number
  maxCapacity: number
}) {
  const userId = await getUserId()
  const result = await db.insert(trips).values({
    userId,
    title: data.title,
    description: data.description,
    destination: data.destination,
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
    price: data.price,
    maxCapacity: data.maxCapacity,
    status: 'active',
  })

  revalidatePath('/dashboard/trips')
  return result
}

export async function updateTrip(
  id: number,
  data: {
    title?: string
    description?: string
    destination?: string
    startDate?: string
    endDate?: string
    price?: number
    maxCapacity?: number
    status?: string
  }
) {
  const userId = await getUserId()
  const updateData: any = { ...data }
  
  if (data.startDate) {
    updateData.startDate = new Date(data.startDate)
  }
  if (data.endDate) {
    updateData.endDate = new Date(data.endDate)
  }

  await db
    .update(trips)
    .set(updateData)
    .where(and(eq(trips.id, id), eq(trips.userId, userId)))

  revalidatePath('/dashboard/trips')
}

export async function deleteTrip(id: number) {
  const userId = await getUserId()
  await db.delete(trips).where(
    and(eq(trips.id, id), eq(trips.userId, userId))
  )

  revalidatePath('/dashboard/trips')
}

export async function getTripCount() {
  const userId = await getUserId()
  const result = await db
    .select({ count: db.fn.count() })
    .from(trips)
    .where(eq(trips.userId, userId))

  return result[0]?.count || 0
}
