"use client";

import { useRouter } from "next/navigation";
import { deleteHotel } from "@/app/actions/hotels";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  id: number;
};

export default function HotelActions({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const loading = toast.loading("جاري حذف الفندق...");

    try {
      await deleteHotel(id);

      toast.dismiss(loading);
      toast.success("تم حذف الفندق بنجاح");

      router.refresh();
    } catch {
      toast.dismiss(loading);
      toast.error("حدث خطأ أثناء الحذف");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
          حذف
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>حذف الفندق</AlertDialogTitle>

          <AlertDialogDescription>
            هل أنت متأكد من حذف هذا الفندق؟ سيتم حذف الفندق وجميع صوره نهائيًا،
            ولا يمكن التراجع عن هذا الإجراء.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-row-reverse">
          <AlertDialogCancel>إلغاء</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            حذف
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
