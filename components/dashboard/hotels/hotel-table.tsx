"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import HotelActions from "./hotel-actions";

type Hotel = {
  id: number;
  title: string;
  description?: string | null;
  hotelType: string;
  packageType: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
};

type Props = {
  hotels: Hotel[];
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
};

export default function HotelTable({ hotels, onDelete, onEdit }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full text-right">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4">الصورة</th>

            <th className="p-4">اسم الفندق</th>

            <th className="p-4">نوع الفندق</th>

            <th className="p-4">نوع الباقة</th>

            <th className="p-4">الصور</th>

            <th className="p-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {hotels.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-8 text-center text-gray-500">
                لا يوجد فنادق
              </td>
            </tr>
          ) : (
            hotels.map((hotel) => (
              <tr key={hotel.id} className="border-b hover:bg-gray-50">
                {/* الصورة */}
                <td className="p-4">
                  {hotel.images?.[0]?.imageUrl ? (
                    <Image
                      src={hotel.images[0].imageUrl}
                      alt={hotel.title}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-[70px] w-[70px] rounded-lg bg-gray-200 flex items-center justify-center text-xs">
                      لا يوجد
                    </div>
                  )}
                </td>

                {/* الاسم */}
                <td className="p-4 font-semibold">{hotel.title}</td>

                {/* نوع الفندق */}
                <td className="p-4">
                  {hotel.hotelType === "3_stars" && "3 نجوم"}

                  {hotel.hotelType === "4_stars" && "4 نجوم"}

                  {hotel.hotelType === "5_stars" && "5 نجوم"}
                </td>

                {/* الباقة */}
                <td className="p-4">
                  {hotel.packageType === "vip" ? "VIP" : "اقتصادي"}
                </td>

                {/* عدد الصور */}
                <td className="p-4">{hotel.images?.length || 0}</td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => onEdit?.(hotel.id)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                    >
                      <Pencil size={18} />
                    </button>

                    <HotelActions id={hotel.id} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
