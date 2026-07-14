"use client";

import { createBus } from "@/app/actions/buses";
import BusForm from "@/components/dashboard/buses/bus-form";

import { useRouter } from "next/navigation";

export default function NewBusPage() {
  const router = useRouter();

  async function handleCreate(data: FormData) {
    await createBus(data);

    router.push("/dashboard/buses");

    router.refresh();
  }

  return (
    <div className="p-6">
      <BusForm onSubmit={handleCreate} />
    </div>
  );
}
