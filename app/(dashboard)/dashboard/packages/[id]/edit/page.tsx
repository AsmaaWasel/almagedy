import { notFound } from "next/navigation";

import { getPackageById } from "@/app/actions/packages";
import PackageForm from "@/components/packages/package-form";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPackagePage({ params }: Props) {
  const { id } = await params;

  const packageData = await getPackageById(Number(id));

  if (!packageData) {
    notFound();
  }

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">تعديل الباقة</h1>

        <p className="mt-2 text-gray-500">تعديل بيانات الباقة</p>
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
        <PackageForm packageData={packageData} />
      </div>
    </div>
  );
}
