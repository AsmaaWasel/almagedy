"use client";

import { Pencil } from "lucide-react";

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
  onEdit?: (id: number) => void;
};

export default function BusTable({ buses, onEdit }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full text-right">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="p-4">اسم الباص</th>

            <th className="p-4">الشرح</th>

            <th className="p-4">نوع الباص</th>

            <th className="p-4">عدد الصور</th>

            <th className="p-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {buses.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500">
                لا توجد باصات
              </td>
            </tr>
          ) : (
            buses.map((bus) => (
              <tr key={bus.id} className="border-b hover:bg-gray-50">
                {/* اسم الباص */}
                <td className="p-4 font-semibold">{bus.title}</td>

                {/* الوصف */}
                <td className="max-w-sm p-4">
                  <p className="line-clamp-2 text-gray-600">
                    {bus.description || "لا يوجد شرح"}
                  </p>
                </td>

                {/* النوع */}
                <td className="p-4">
                  {bus.busType === "vip" ? "VIP" : "اقتصادي"}
                </td>

                {/* عدد الصور */}
                <td className="p-4">{bus.images?.length || 0}</td>

                {/* الإجراءات */}
                <td className="p-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => onEdit?.(bus.id)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                    >
                      <Pencil size={18} />
                    </button>
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
