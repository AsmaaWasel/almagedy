'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { customers } from '@/lib/db/schema'
import { and, desc, eq, ilike } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getCustomers(page = 1, limit = 10, search = '') {
  const userId = await getUserId()
  const offset = (page - 1) * limit

  let query = db
    .select()
    .from(customers)
    .where(eq(customers.userId, userId))

  if (search) {
    query = query.where(
      ilike(customers.name, `%${search}%`)
    )
  }

  const result = await query
    .orderBy(desc(customers.createdAt))
    .limit(limit)
    .offset(offset)

  return result
}

export async function getCustomerById(id: number) {
  const userId = await getUserId()
  const customer = await db
    .select()
    .from(customers)
    .where(and(eq(customers.id, id), eq(customers.userId, userId)))
    .limit(1)

  return customer[0] || null
}

export async function createCustomer(data: {
  name: string
  email: string
  phone: string
  address?: string
  city?: string
}) {
  const userId = await getUserId()
  const result = await db.insert(customers).values({
    userId,
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    city: data.city,
  })

  revalidatePath('/dashboard/customers')
  return result
}

export async function updateCustomer(
  id: number,
  data: {
    name?: string
    email?: string
    phone?: string
    address?: string
    city?: string
  }
) {
  const userId = await getUserId()
  await db
    .update(customers)
    .set(data)
    .where(and(eq(customers.id, id), eq(customers.userId, userId)))

  revalidatePath('/dashboard/customers')
}

export async function deleteCustomer(id: number) {
  const userId = await getUserId()
  await db.delete(customers).where(
    and(eq(customers.id, id), eq(customers.userId, userId))
  )

  revalidatePath('/dashboard/customers')
}

export async function getCustomerCount() {
  const userId = await getUserId()
  const result = await db
    .select({ count: db.fn.count() })
    .from(customers)
    .where(eq(customers.userId, userId))

  return result[0]?.count || 0
}
