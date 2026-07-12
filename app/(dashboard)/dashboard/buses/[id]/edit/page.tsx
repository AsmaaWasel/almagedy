import { getBusById } from "@/app/actions/buses";
import BusForm from "@/components/dashboard/buses/bus-form";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBusPage({ params }: Props) {
  const { id } = await params;

  const bus = await getBusById(Number(id));

  if (!bus) {
    notFound();
  }

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">تعديل الحافلة</h1>

        <p className="mt-2 text-gray-500">تعديل بيانات الحافلة والصور</p>
      </div>

      {/* Form */}

      <div
        className="
        bg-white
        rounded-xl
        shadow-sm
        p-6
        "
      >
        <BusForm bus={bus} />
      </div>
    </div>
  );
}
