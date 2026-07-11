// app/dashboard/hotels/page.tsx

import Link from "next/link";
import { getHotels, deleteHotel } from "@/app/actions/hotels";
import HotelTable from "@/components/dashboard/hotels/hotel-table";
import { Plus } from "lucide-react";

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الفنادق</h1>

          <p className="mt-2 text-gray-500">إدارة فنادق العمرة والباقات</p>
        </div>

        <Link
          href="/dashboard/hotels/new"
          className="flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800"
        >
          <Plus size={20} />
          إضافة فندق
        </Link>
      </div>

      {/* Table */}
      <HotelTable hotels={hotels} />
    </div>
  );
}
