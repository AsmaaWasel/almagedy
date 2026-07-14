import { getHotel } from "@/app/actions/hotels";
import HotelImagesManager from "@/components/dashboard/hotels/hotel-images-manager";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HotelImagesPage({ params }: Props) {
  const { id } = await params;

  const hotel = await getHotel(Number(id));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">صور الفندق</h1>

        <p className="text-gray-500">{hotel.title}</p>
      </div>

      <HotelImagesManager hotelId={hotel.id} images={hotel.images} />
    </div>
  );
}
