import { db } from "@/lib/db";
import { hotelImages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  await db.delete(hotelImages).where(eq(hotelImages.id, Number(params.id)));

  return NextResponse.json({
    success: true,
  });
}
