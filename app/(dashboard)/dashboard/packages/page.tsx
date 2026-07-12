import Link from "next/link";
import { Plus } from "lucide-react";

import { getPackages } from "@/app/actions/packages";
import PackageTable from "@/components/packages/package-table";

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <div className="space-y-8" dir="rtl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">الباقات</h1>

          <p className="text-gray-500 mt-2">إدارة باقات العمرة والزيارة</p>
        </div>

        <Link
          href="/dashboard/packages/new"
          className="
     flex
     items-center
     gap-2
     bg-black
     text-white
     px-5
     py-3
     rounded-lg
     "
        >
          <Plus size={20} />
          إضافة باقة
        </Link>
      </div>

      <PackageTable packages={packages} />
    </div>
  );
}
