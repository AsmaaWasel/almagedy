"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

type BusFormProps = {
  onSubmit?: (data: FormData) => void;
};

export default function BusForm({ onSubmit }: BusFormProps) {
  const [images, setImages] = useState<File[]>([]);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImages(Array.from(e.target.files));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    images.forEach((image) => {
      formData.append("images", image);
    });

    onSubmit?.(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      space-y-6
      bg-white
      p-6
      rounded-xl
      shadow
      "
    >
      {/* اسم الباص */}
      <div>
        <label className="block mb-2 font-semibold">اسم الباص</label>

        <input
          name="title"
          type="text"
          placeholder="مثال: باص VIP موديل 2026"
          className="
          w-full
          rounded-lg
          border
          p-3
          "
          required
        />
      </div>

      {/* الوصف */}
      <div>
        <label className="block mb-2 font-semibold">شرح الباص</label>

        <textarea
          name="description"
          placeholder="اكتب تفاصيل الباص والخدمات..."
          rows={5}
          className="
          w-full
          rounded-lg
          border
          p-3
          "
        />
      </div>

      {/* نوع الباص */}
      <div>
        <label className="block mb-2 font-semibold">نوع الباص</label>

        <select
          name="busType"
          className="
          w-full
          rounded-lg
          border
          p-3
          "
          required
        >
          <option value="">اختر نوع الباص</option>

          <option value="vip">VIP</option>

          <option value="economic">اقتصادي</option>
        </select>
      </div>

      {/* الصور */}
      <div>
        <label className="block mb-2 font-semibold">صور الباص</label>

        <label
          className="
          flex
          cursor-pointer
          items-center
          gap-3
          rounded-lg
          border
          p-4
          hover:bg-gray-50
          "
        >
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
              <div
                key={image.name}
                className="
                text-sm
                text-gray-600
                "
              >
                {image.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="
        w-full
        rounded-lg
        bg-black
        py-3
        text-white
        "
      >
        حفظ الباص
      </button>
    </form>
  );
}
