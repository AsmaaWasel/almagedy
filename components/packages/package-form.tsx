"use client";

import { useState } from "react";
import { createPackage, updatePackage } from "@/app/actions/packages";

import { useRouter } from "next/navigation";

type Package = {
  id?: number;

  name: string;

  description?: string | null;
};

type Props = {
  packageData?: Package;
};

export default function PackageForm({ packageData }: Props) {
  const router = useRouter();

  const [name, setName] = useState(packageData?.name || "");

  const [description, setDescription] = useState(
    packageData?.description || "",
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = {
        name,

        description,
      };

      if (packageData?.id) {
        await updatePackage(packageData.id, data);
      } else {
        await createPackage(data);
      }

      router.push("/dashboard/packages");

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
      <div>
        <label className="block mb-2 font-medium">اسم الباقة</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: باقة VIP"
          className="
          w-full
          rounded-lg
          border
          px-4
          py-3
          "
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">شرح الباقة</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="اكتب تفاصيل الباقة"
          className="
          w-full
          rounded-lg
          border
          px-4
          py-3
          h-32
          "
        />
      </div>

      <button
        disabled={loading}
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-gray-800
        disabled:opacity-50
        "
      >
        {loading
          ? "جاري الحفظ..."
          : packageData
            ? "تعديل الباقة"
            : "إضافة الباقة"}
      </button>
    </form>
  );
}
