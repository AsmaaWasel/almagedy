"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Edit } from "lucide-react";
import { deleteBus } from "@/app/actions/buses";

type Bus = {
  id: number;
  title: string;
  busType: string;
  description: string | null;
  images: {
    id: number;
    imageUrl: string;
  }[];
};

type Props = {
  buses: Bus[];
};

export default function BusesTable({ buses }: Props) {
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("هل أنت متأكد من حذف الحافلة؟");

    if (!confirmDelete) return;

    await deleteBus(id);

    window.location.reload();
  };
  if (!buses.length) {
    return (
      <div className="p-8 text-center text-gray-500">
        لا توجد حافلات مضافة حاليا
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4">الصورة</th>

            <th className="px-6 py-4">اسم الحافلة</th>

            <th className="px-6 py-4">نوع الباص</th>

            <th className="px-6 py-4">الوصف</th>

            <th className="px-6 py-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr
              key={bus.id}
              className="
              border-b
              hover:bg-gray-50
              "
            >
              {/* Image */}

              <td className="px-6 py-4">
                {bus.images?.length > 0 ? (
                  <Image
                    src={bus.images[0].imageUrl}
                    width={80}
                    height={60}
                    alt={bus.title}
                    className="
                      rounded-lg
                      object-cover
                      "
                  />
                ) : (
                  <div
                    className="
                      w-20
                      h-14
                      bg-gray-200
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      text-xs
                      "
                  >
                    لا صورة
                  </div>
                )}
              </td>

              {/* Title */}

              <td className="px-6 py-4 font-semibold">{bus.title}</td>

              {/* Type */}

              <td className="px-6 py-4">{bus.busType}</td>

              {/* Description */}

              <td className="px-6 py-4 max-w-md text-gray-600">
                {bus.description || "-"}
              </td>

              {/* Actions */}

              <td className="px-6 py-4">
                <div className="flex gap-3">
                  <Link
                    href={`/dashboard/buses/${bus.id}/edit`}
                    className="
                    flex
                    items-center
                    gap-1
                    rounded-lg
                    bg-blue-50
                    px-3
                    py-2
                    text-blue-600
                    hover:bg-blue-100
                    "
                  >
                    <Edit size={16} />
                    تعديل
                  </Link>

                  <button
                    onClick={() => handleDelete(bus.id)}
                    className="
  flex
  items-center
  gap-1
  rounded-lg
  bg-red-50
  px-3
  py-2
  text-red-600
  hover:bg-red-100
  "
                  >
                    <Trash2 size={16} />
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
