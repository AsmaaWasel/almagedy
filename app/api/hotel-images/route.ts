import { db } from "@/lib/db";
import { hotelImages } from "@/lib/db/schema";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await db
    .insert(hotelImages)
    .values({
      hotelId: body.hotelId,
      imageUrl: body.imageUrl,
    })
    .returning();

  return Response.json(result[0]);
}
