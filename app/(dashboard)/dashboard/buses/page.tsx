import Link from "next/link";
import { Plus } from "lucide-react";

import { getBuses } from "@/app/actions/buses";
import BusesTable from "@/components/dashboard/buses/buses-table";


export default async function BusesPage() {

  const buses = await getBuses();


  return (

    <div 
      className="space-y-8"
      dir="rtl"
    >


      {/* Header */}

      <div className="flex items-center justify-between">


        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            الحافلات
          </h1>


          <p className="mt-2 text-gray-500">
            إدارة الحافلات وأنواعها وصورها
          </p>


        </div>




        <Link

          href="/dashboard/buses/new"

          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-black
          px-5
          py-3
          text-white
          hover:bg-gray-800
          transition
          "

        >

          <Plus size={20}/>

          إضافة حافلة


        </Link>



      </div>





      {/* Table */}

      <div
        className="
        bg-white
        rounded-xl
        shadow-sm
        overflow-hidden
        "
      >

        <BusesTable 
          buses={buses}
        />


      </div>



    </div>

  );
}