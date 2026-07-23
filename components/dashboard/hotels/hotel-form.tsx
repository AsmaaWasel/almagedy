"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
type Hotel = {
  id: number;
  title: string;
  description?: string | null;
  hotelType: string;
  packageType: string;
};

type HotelFormProps = {
  onSubmit?: (data: FormData) => void;
  initialData?: Hotel;
};

export default function HotelForm({ onSubmit, initialData }: HotelFormProps) {
  const [images, setImages] = useState<File[]>([]);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    images.forEach((image) => {
      formData.append("images", image);
    });

    await onSubmit?.(formData);

    window.location.href = "/dashboard/hotels";
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow"
    >
      {initialData && <input type="hidden" name="id" value={initialData.id} />}
      {/* اسم الفندق */}
      <div>
        <label className="block mb-2 font-semibold">اسم الفندق</label>

        <input
          name="title"
          type="text"
          defaultValue={initialData?.title}
          placeholder="مثال: فندق ميلينيوم"
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      {/* الوصف */}
      <div>
        <label className="block mb-2 font-semibold">شرح الفندق</label>

        <textarea
          name="description"
          defaultValue={initialData?.description ?? ""}
          placeholder="اكتب تفاصيل الفندق والخدمات..."
          rows={5}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* نوع الفندق */}
      <div>
        <label className="block mb-2 font-semibold">نوع الفندق</label>

        <select
          name="hotelType"
          defaultValue={initialData?.hotelType}
          className="w-full rounded-lg border p-3"
          required
        >
          <option value="">اختر نوع الفندق</option>

          <option value="3_stars">3 نجوم</option>

          <option value="4_stars">4 نجوم</option>

          <option value="5_stars">5 نجوم</option>
        </select>
      </div>

      {/* نوع الباقة */}
      <div>
        <label className="block mb-2 font-semibold">نوع الباقة</label>

        <select
          name="packageType"
          defaultValue={initialData?.packageType}
          className="w-full rounded-lg border p-3"
          required
        >
          <option value="">اختر الباقة</option>

          <option value="vip">VIP</option>

          <option value="economic">اقتصادي</option>
        </select>
      </div>

      {/* الصور */}
      <div>
        <label className="block mb-2 font-semibold">صور الفندق</label>

        <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-gray-50">
          <Upload size={20} />

          <span>اختر صور</span>

          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImages}
          />
        </label>

        {images.length > 0 && (
          <div className="mt-4 space-y-2">
            {images.map((image) => (
              <div key={image.name} className="text-sm text-gray-600">
                {image.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black py-3 text-white"
      >
        حفظ الفندق
      </button>
    </form>
  );
}
