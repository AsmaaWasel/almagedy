"use client";

import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";
import { deletePackage } from "@/app/actions/packages";

type Package = {
  id: number;
  name: string;
  description: string | null;
};

type Props = {
  packages: Package[];
};

export default function PackageTable({ packages }: Props) {
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("هل أنت متأكد من حذف الباقة؟");

    if (!confirmDelete) return;

    try {
      await deletePackage(id);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (!packages.length) {
    return (
      <div className="p-8 text-center text-gray-500">
        لا توجد باقات مضافة حاليا
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4">اسم الباقة</th>

            <th className="px-6 py-4">الشرح</th>

            <th className="px-6 py-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {packages.map((item) => (
            <tr
              key={item.id}
              className="
                border-b
                hover:bg-gray-50
                "
            >
              <td
                className="
                px-6
                py-4
                font-semibold
                "
              >
                {item.name}
              </td>

              <td
                className="
                px-6
                py-4
                text-gray-600
                max-w-md
                "
              >
                {item.description || "-"}
              </td>

              <td className="px-6 py-4">
                <div className="flex gap-3">
                  <Link
                    href={`/dashboard/packages/${item.id}/edit`}
                    className="
                      flex
                      items-center
                      gap-1
                      bg-blue-50
                      text-blue-600
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-blue-100
                      "
                  >
                    <Edit size={16} />
                    تعديل
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="
                      flex
                      items-center
                      gap-1
                      bg-red-50
                      text-red-600
                      px-3
                      py-2
                      rounded-lg
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
