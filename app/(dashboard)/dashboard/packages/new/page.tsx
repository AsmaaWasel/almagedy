import PackageForm from "@/components/packages/package-form";

export default function NewPackagePage() {
  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">إضافة باقة جديدة</h1>

        <p className="mt-2 text-gray-500">
          إضافة اسم الباقة وشرح التفاصيل الخاصة بها
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
        <PackageForm />
      </div>
    </div>
  );
}
