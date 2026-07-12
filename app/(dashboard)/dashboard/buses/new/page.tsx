import BusForm from "@/components/dashboard/buses/bus-form";

export default function NewBusPage() {
  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">إضافة حافلة جديدة</h1>

        <p className="mt-2 text-gray-500">
          إضافة بيانات الحافلة والصور الخاصة بها
        </p>
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
        <BusForm />
      </div>
    </div>
  );
}
