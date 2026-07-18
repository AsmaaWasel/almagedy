import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { trips } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function GET() {
  try {
    const activeTrips = await db.query.trips.findMany({
      where: eq(trips.status, 'active'),
    })

    return NextResponse.json(activeTrips)
  } catch (error) {
    console.error('GET TRIPS ERROR:', error)
    return NextResponse.json(
      { error: 'Failed to fetch trips' },
      { status: 500 }
    )
  }
}
