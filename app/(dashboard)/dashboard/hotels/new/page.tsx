"use client";

import HotelForm from "@/components/dashboard/hotels/hotel-form";
import { createHotel } from "@/app/actions/hotels";
import { useRouter } from "next/navigation";

export default function NewHotelPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      hotelType: formData.get("hotelType") as string,
      packageType: formData.get("packageType") as string,
    };

    await createHotel(data);

    router.push("/dashboard/hotels");
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">إضافة فندق جديد</h1>

        <p className="mt-2 text-gray-500">أضف بيانات الفندق والصور الخاصة به</p>
      </div>

      <HotelForm onSubmit={handleSubmit} />
    </div>
  );
}
