import { db } from "@/lib/db";
import { hotels } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import HotelForm from "@/components/dashboard/hotels/hotel-form";
import { updateHotel } from "@/app/actions/hotels";

export default async function EditHotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const hotel = await db.query.hotels.findFirst({
    where: eq(hotels.id, Number(id)),
  });

  if (!hotel) {
    return <div className="p-6">الفندق غير موجود</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">تعديل الفندق</h1>

      <HotelForm initialData={hotel} onSubmit={updateHotel} />
    </div>
  );
}
