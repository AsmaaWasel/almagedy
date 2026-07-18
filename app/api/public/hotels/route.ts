import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hotels } from '@/lib/db/schema'

export async function GET() {
  try {
    const allHotels = await db.query.hotels.findMany({
      with: {
        images: true,
      },
    })

    return NextResponse.json(allHotels)
  } catch (error) {
    console.error('GET HOTELS ERROR:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hotels' },
      { status: 500 }
    )
  }
}
