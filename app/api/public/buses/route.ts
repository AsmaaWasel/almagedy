import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { buses } from '@/lib/db/schema'

export async function GET() {
  try {
    const allBuses = await db.query.buses.findMany({
      with: {
        images: true,
      },
    })

    return NextResponse.json(allBuses)
  } catch (error) {
    console.error('GET BUSES ERROR:', error)
    return NextResponse.json(
      { error: 'Failed to fetch buses' },
      { status: 500 }
    )
  }
}
