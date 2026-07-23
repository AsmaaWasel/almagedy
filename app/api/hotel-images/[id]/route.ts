import { db } from "@/lib/db";
import { hotelImages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = await params;

    await db.delete(hotelImages).where(eq(hotelImages.id, Number(id)));

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to delete image",
      },
      {
        status: 500,
      },
    );
  }
}
