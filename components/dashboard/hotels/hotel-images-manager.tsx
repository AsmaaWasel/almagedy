"use client";

import { Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { uploadHotelImage, deleteHotelImage } from "@/app/actions/hotels";
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

  const uploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
          const image = await uploadHotelImage({
            hotelId,
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

  const deleteImage = async (id: number) => {
    try {
      await deleteHotelImage(id);

      setImages((prev) => prev.filter((image) => image.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

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
