import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { packages } from '@/lib/db/schema'

export async function GET() {
  try {
    const allPackages = await db.query.packages.findMany()

    return NextResponse.json(allPackages)
  } catch (error) {
    console.error('GET PACKAGES ERROR:', error)
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    )
  }
}
