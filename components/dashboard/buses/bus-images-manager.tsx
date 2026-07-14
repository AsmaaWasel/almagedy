"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Upload } from "lucide-react";
import { uploadBusImage, deleteBusImage } from "@/app/actions/buses";

type Props = {
  busId: number;

  images: {
    id: number;
    imageUrl: string;
  }[];
};

export default function BusImagesManager({
  busId,
  images: initialImages,
}: Props) {
  const [images, setImages] = useState(initialImages);

  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    setLoading(true);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.url) {
          const image = await uploadBusImage({
            busId,
            imageUrl: data.url,
          });

          setImages((prev) => [...prev, image]);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBusImage(id);

      setImages((prev) => prev.filter((image) => image.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload */}

      <div>
        <label
          className="
          flex
          items-center
          gap-2
          cursor-pointer
          w-fit
          rounded-lg
          bg-black
          px-5
          py-3
          text-white
          "
        >
          <Upload size={18} />

          {loading ? "جاري الرفع..." : "إضافة صور"}

          <input
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={handleUpload}
          />
        </label>
      </div>

      {/* Images */}

      {images.length === 0 ? (
        <div
          className="
          rounded-lg
          border
          p-10
          text-center
          text-gray-500
        "
        >
          لا يوجد صور للباص
        </div>
      ) : (
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
        "
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="
              relative
              group
              overflow-hidden
              rounded-xl
              "
            >
              <Image
                src={image.imageUrl}
                alt="bus"
                width={300}
                height={200}
                className="
                h-48
                w-full
                object-cover
                "
              />

              <button
                onClick={() => handleDelete(image.id)}
                className="
                absolute
                top-2
                right-2
                rounded-full
                bg-white
                p-2
                text-red-600
                shadow
                opacity-0
                group-hover:opacity-100
                transition
                "
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
