"use client";

import { Trash2, Upload } from "lucide-react";
import { useState } from "react";

type Props = {
  hotelId: number;

  images: {
    id: number;
    imageUrl: string;
  }[];
};

export default function HotelImagesManager({
  hotelId,
  images: initialImages,
}: Props) {
  const [images, setImages] = useState(initialImages);
  const [loading, setLoading] = useState(false);

  async function uploadImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (!files) return;

    setLoading(true);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();

        formData.append("file", file);

        // رفع Cloudinary
        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadResponse.json();

        if (uploadData.url) {
          // حفظ الصورة في DB
          const saveResponse = await fetch("/api/hotel-images", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              hotelId,
              imageUrl: uploadData.url,
            }),
          });

          const newImage = await saveResponse.json();

          setImages((prev) => [...prev, newImage]);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  async function deleteImage(id: number) {
    await fetch(`/api/hotel-images/${id}`, {
      method: "DELETE",
    });

    setImages((prev) => prev.filter((image) => image.id !== id));
  }

  return (
    <div className="space-y-6">
      <label
        className="
        flex cursor-pointer items-center gap-2
        rounded-lg bg-black
        px-5 py-3 text-white w-fit
        "
      >
        <Upload size={18} />

        {loading ? "جاري الرفع..." : "إضافة صور"}

        <input
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={uploadImages}
        />
      </label>

      <div
        className="
        grid grid-cols-2
        md:grid-cols-4
        gap-5
        "
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="
            relative overflow-hidden
            rounded-xl border
            "
          >
            <img
              src={image.imageUrl}
              className="
              h-48 w-full object-cover
              "
            />

            <button
              onClick={() => deleteImage(image.id)}
              className="
              absolute top-2 right-2
              rounded-full bg-red-500
              p-2 text-white
              "
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
