'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { buses } from '@/lib/db/schema'
import { and, desc, eq, ilike } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getBuses(page = 1, limit = 10, search = '') {
  const userId = await getUserId()
  const offset = (page - 1) * limit

  let query = db
    .select()
    .from(buses)
    .where(eq(buses.userId, userId))

  if (search) {
    query = query.where(
      ilike(buses.name, `%${search}%`)
    )
  }

  const result = await query
    .orderBy(desc(buses.createdAt))
    .limit(limit)
    .offset(offset)

  return result
}

export async function getBusById(id: number) {
  const userId = await getUserId()
  const bus = await db
    .select()
    .from(buses)
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))
    .limit(1)

  return bus[0] || null
}

export async function createBus(data: {
  name: string
  registrationNumber: string
  capacity: number
  type: string
}) {
  const userId = await getUserId()
  const result = await db.insert(buses).values({
    userId,
    name: data.name,
    registrationNumber: data.registrationNumber,
    capacity: data.capacity,
    type: data.type,
  })

  revalidatePath('/dashboard/buses')
  return result
}

export async function updateBus(
  id: number,
  data: {
    name?: string
    capacity?: number
    type?: string
  }
) {
  const userId = await getUserId()
  await db
    .update(buses)
    .set(data)
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))

  revalidatePath('/dashboard/buses')
}

export async function deleteBus(id: number) {
  const userId = await getUserId()
  await db.delete(buses).where(
    and(eq(buses.id, id), eq(buses.userId, userId))
  )

  revalidatePath('/dashboard/buses')
}

export async function getBusCount() {
  const userId = await getUserId()
  const result = await db
    .select({ count: db.fn.count() })
    .from(buses)
    .where(eq(buses.userId, userId))

  return result[0]?.count || 0
}
