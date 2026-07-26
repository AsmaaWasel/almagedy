"use client";

import { deleteBus } from "@/app/actions/buses";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
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

export default function BusActions({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    const loading = toast.loading("جاري حذف الباص...");

    try {
      await deleteBus(id);

      toast.dismiss(loading);

      toast.success("تم حذف الباص بنجاح");

      router.refresh();
    } catch {
      toast.dismiss(loading);

      toast.error("حدث خطأ أثناء حذف الباص");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="rounded-lg p-2 text-red-600 hover:bg-red-50">
        <Trash2 size={18} />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white text-right" dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>حذف الباص</AlertDialogTitle>

          <AlertDialogDescription>
            هل أنت متأكد من حذف هذا الباص؟ لا يمكن التراجع عن هذا الإجراء.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
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
