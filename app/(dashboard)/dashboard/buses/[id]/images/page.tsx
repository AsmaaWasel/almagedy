import { notFound } from "next/navigation";
import { getBusById } from "@/app/actions/buses";
import BusImagesManager from "@/components/dashboard/buses/bus-images-manager";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BusImagesPage({ params }: Props) {
  const { id } = await params;

  const bus = await getBusById(Number(id));

  if (!bus) {
    notFound();
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">إدارة صور الباص</h1>

        <p className="mt-1 text-gray-500">{bus.title}</p>
      </div>

      <BusImagesManager busId={bus.id} images={bus.images} />
    </div>
  );
}
