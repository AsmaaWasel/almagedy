"use client";

import { deleteHotel } from "@/app/actions/hotels";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HotelActions({ id }: { id: number }) {
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
      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
    >
      <Trash2 size={18} />
    </button>
  );
}
