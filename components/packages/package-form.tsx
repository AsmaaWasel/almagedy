"use client";

import { useState } from "react";
import { createPackage, updatePackage } from "@/app/actions/packages";
import { useRouter } from "next/navigation";

type Package = {
  id: number;
  title: string;
  subtitle: string | null;
  badge: string | null;
  button: string | null;
  packageType: string;
  features: string[];
};

type Props = {
  packageData?: Package;
};

export default function PackageForm({ packageData }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(packageData?.title || "");

  const [subtitle, setSubtitle] = useState(packageData?.subtitle || "");

  const [badge, setBadge] = useState(packageData?.badge || "");

  const [button, setButton] = useState(packageData?.button || "");

  const [packageType, setPackageType] = useState(
    packageData?.packageType || "economic",
  );

  const [features, setFeatures] = useState<string[]>(
    packageData?.features || [""],
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = {
        title,
        subtitle,
        badge,
        button,
        packageType,
        features: features.filter((f) => f.trim() !== ""),
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="مثال: الباقة الاقتصادية"
          className="w-full rounded-lg border px-4 py-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">وصف الباقة</label>

        <textarea
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="رحلات يومية من الرياض"
          className="w-full rounded-lg border px-4 py-3 h-28"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">البادج</label>

        <input
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          placeholder="الأكثر حجزاً"
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">نص الزر</label>

        <input
          value={button}
          onChange={(e) => setButton(e.target.value)}
          placeholder="تفاصيل أكثر عن الباقة والحجز"
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">نوع الباقة</label>

        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="w-full rounded-lg border px-4 py-3"
        >
          <option value="economic">اقتصادية</option>

          <option value="vip">VIP</option>

          <option value="seat">حجز مقعد</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">مميزات الباقة</label>

        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              value={feature}
              onChange={(e) => {
                const copy = [...features];
                copy[index] = e.target.value;
                setFeatures(copy);
              }}
              className="flex-1 rounded-lg border px-4 py-3"
              placeholder="مثال: باص VIP حديث"
            />

            <button
              type="button"
              onClick={() => {
                setFeatures(features.filter((_, i) => i !== index));
              }}
              className="px-4 bg-red-500 text-white rounded-lg"
            >
              حذف
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => setFeatures([...features, ""])}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          + إضافة ميزة
        </button>
      </div>

      <button
        disabled={loading}
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
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
