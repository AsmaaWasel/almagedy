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

  async function deleteImage(id: number) {
    await fetch(`/api/hotel-images/${id}`, {
      method: "DELETE",
    });

    setImages((prev) => prev.filter((image) => image.id !== id));
  }

  return (
    <div className="space-y-6">
      <button
        className="
        flex items-center gap-2
        rounded-lg bg-black
        px-5 py-3 text-white
        "
      >
        <Upload size={18} />
        إضافة صور
      </button>

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
        relative
        overflow-hidden
        rounded-xl
        border
        "
          >
            <img
              src={image.imageUrl}
              className="
          h-48
          w-full
          object-cover
          "
            />

            <button
              onClick={() => deleteImage(image.id)}
              className="
          absolute
          top-2
          right-2
          rounded-full
          bg-red-500
          p-2
          text-white
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
