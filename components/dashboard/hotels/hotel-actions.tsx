"use client";

import { useRouter } from "next/navigation";
import { deleteHotel } from "@/app/actions/hotels";

type Props = {
  id: number;
};

export default function HotelActions({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = confirm("هل تريد حذف الفندق؟");

    if (!confirmDelete) return;

    await deleteHotel(id);

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      حذف
    </button>
  );
}