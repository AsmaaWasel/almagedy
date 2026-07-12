"use client";

import { useState } from "react";
import { createBus, updateBus } from "@/app/actions/buses";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Bus = {
  id?: number;
  title: string;
  busType: string;
  description?: string;
  images: {
    imageUrl: string;
  }[];
};

type Props = {
  bus?: Bus;
};

export default function BusForm({ bus }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(bus?.title || "");

  const [busType, setBusType] = useState(bus?.busType || "");

  const [description, setDescription] = useState(bus?.description || "");

  const [images, setImages] = useState<string[]>(
    bus?.images?.map((img) => img.imageUrl) || [],
  );

  const [loading, setLoading] = useState(false);

  const uploadImages = async (files: FileList) => {
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      uploadedUrls.push(data.url);
    }

    setImages((prev) => [...prev, ...uploadedUrls]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = {
        title,
        busType,
        description,
        images,
      };

      if (bus?.id) {
        await updateBus(bus.id, data);
      } else {
        await createBus(data);
      }

      router.push("/dashboard/buses");

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">عنوان الباص</label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="مثال: باص VIP موديل 2026"
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
        <label className="block mb-2 font-medium">نوع الباص</label>

        <input
          value={busType}
          onChange={(e) => setBusType(e.target.value)}
          placeholder="VIP - اقتصادي"
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
        <label className="block mb-2 font-medium">وصف الباص</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

      <div>
        <label className="block mb-2 font-medium">صور الباص</label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              uploadImages(e.target.files);
            }
          }}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
        />
      </div>

      {/* Preview */}

      {images.length > 0 && (
        <div
          className="
          flex
          gap-4
          flex-wrap
          "
        >
          {images.map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img}
                width={120}
                height={80}
                alt="bus"
                className="
                    rounded-lg
                    object-cover
                    "
              />
            </div>
          ))}
        </div>
      )}

      <button
        disabled={loading}
        className="
        rounded-lg
        bg-black
        px-6
        py-3
        text-white
        hover:bg-gray-800
        disabled:opacity-50
        "
      >
        {loading ? "جاري الحفظ..." : bus ? "تعديل الحافلة" : "إضافة الحافلة"}
      </button>
    </form>
  );
}
