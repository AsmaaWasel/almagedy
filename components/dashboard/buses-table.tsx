"use client";

import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import BusActions from "./buses/bus-actions";

type Bus = {
  id: number;
  title: string;
  description?: string | null;
  busType: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
};

type Props = {
  buses: Bus[];
};

export default function BusTable({ buses }: Props) {
  const router = useRouter();

  const openImages = (id: number) => {
    router.push(`/dashboard/buses/${id}/images`);
  };

  const editBus = (id: number) => {
    router.push(`/dashboard/buses/${id}/edit`);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full text-right">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4">اسم الباص</th>
            <th className="p-4">شرح الباص</th>
            <th className="p-4">نوع الباص</th>
            <th className="p-4">عدد الصور</th>
            <th className="p-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {buses.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500">
                لا يوجد باصات
              </td>
            </tr>
          ) : (
            buses.map((bus) => (
              <tr key={bus.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">{bus.title}</td>

                <td className="p-4 max-w-xs">
                  <p className="line-clamp-2 text-gray-600">
                    {bus.description || "لا يوجد شرح"}
                  </p>
                </td>

                <td className="p-4">
                  {bus.busType === "vip"
                    ? "VIP"
                    : bus.busType === "economy"
                      ? "اقتصادي"
                      : bus.busType}
                </td>

                <td className="p-4">
                  <button
                    type="button"
                    onClick={() => openImages(bus.id)}
                    className="flex gap-2 cursor-pointer"
                  >
                    {bus.images.slice(0, 3).map((image) => (
                      <img
                        key={image.id}
                        src={image.imageUrl}
                        alt="bus"
                        className="w-12 h-12 rounded-lg object-cover hover:opacity-80 transition"
                      />
                    ))}

                    {bus.images.length === 0 && (
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                        لا يوجد
                      </div>
                    )}
                  </button>

                  <p className="mt-2 text-sm text-gray-500">
                    {bus.images.length} صور
                  </p>
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => editBus(bus.id)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                    >
                      <Pencil size={18} />
                    </button>

                    <BusActions id={bus.id} />
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
