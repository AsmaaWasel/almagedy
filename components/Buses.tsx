"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const buses = [
  "/ecomomicBuses/bus4.jpeg",
  "/ecomomicBuses/bus1.jpg",
  "/ecomomicBuses/bus2.jpeg",
  "/ecomomicBuses/bus3.jpeg",
];

const qasrRizq = [
  "/hotels/rezk/rezk4.jpeg",
  "/hotels/rezk/rezk6.jpeg",
  "/hotels/rezk/rezk1.jpeg",
  "/hotels/rezk/rezk2.jpeg",
  "/hotels/rezk/rezk3.jpeg",
  "/hotels/rezk/rezk5.jpeg",
  "/hotels/rezk/rezk7.jpeg",
];

const manasik = [
  "/hotels/manasic4.jpeg",
  "/hotels/manasic2.jpeg",
  "/hotels/manasic5.jpeg",
  "/hotels/manasic6.jpeg",
  "/hotels/manasic9.jpeg",
  "/hotels/manasic7.jpeg",
  "/hotels/manasic1.jpeg",
  "/hotels/manasic3.jpeg",
  "/hotels/manasic8.jpeg",
];

// فندق جديد - أضف صورك هنا
const royal = [
  "/hotels/park-royal/gate.jpeg",
  "/hotels/park-royal/room1.jpeg",
  "/hotels/park-royal/room2.jpeg",
  "/hotels/park-royal/room3.jpeg",
  "/hotels/park-royal/room4.jpeg",
  "/hotels/park-royal/room5.jpeg",
  "/hotels/park-royal/bathroom.jpeg",
];

// مكون الأسهم مع التمرير - يعرض 3 صور فقط على الشاشات الكبيرة ثم يمرر واحدة واحدة
const Slider = ({
  images,
  title,
  hotelName,
}: {
  images: string[];
  title: string;
  hotelName?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // نحسب عرض عنصر واحد فعليًا (بما فيه المسافة) عشان التمرير يكون دقيق
      // على أي حجم شاشة، بدل رقم ثابت
      const firstItem =
        scrollRef.current.querySelector<HTMLDivElement>("[data-slider-item]");
      const gap = 24; // gap-6 = 1.5rem = 24px
      const itemWidth = firstItem ? firstItem.offsetWidth + gap : 350;

      const newScrollPosition =
        direction === "left"
          ? scrollRef.current.scrollLeft - itemWidth
          : scrollRef.current.scrollLeft + itemWidth;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-16">
      {hotelName && (
        <h4 className="mb-8 text-center text-2xl font-bold text-emerald-700">
          {hotelName}
        </h4>
      )}

      <div className="relative group">
        {/* سهم اليمين */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-white md:-right-6 md:p-3"
          aria-label="السهم الأيمن"
        >
          <ChevronRight className="h-6 w-6 text-gray-700 md:h-8 md:w-8" />
        </button>

        {/* سهم اليسار */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-white md:-left-6 md:p-3"
          aria-label="السهم الأيسر"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700 md:h-8 md:w-8" />
        </button>

        {/* معرض الصور: عنصر واحد تقريبًا على الموبايل، عنصرين على التابلت، و3 بالظبط على الديسكتوب */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              data-slider-item
              className="shrink-0 basis-[85%] overflow-hidden rounded-3xl shadow-xl sm:basis-[45%] md:basis-[calc((100%-3rem)/3)]"
            >
              <Image
                src={img}
                alt={`${title} ${index + 1}`}
                width={500}
                height={350}
                className="h-[260px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function EconomicPackageSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-5xl">
            الباقة الاقتصادية
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            حملات يومية من الرياض تشمل النقل بباص سياحي حديث والسكن بفندق 3 نجوم
            أو حسب الطلب.
            <br />
            سعر باقة مناسب واقتصادي لتوفير تجربة عمرة مريحة بأفضل قيمة.
          </p>
        </div>

        {/* ================= الباصات ================= */}

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
            باصات سياحية
          </h3>

          {/* الصورة الرئيسية */}
          <div className="mt-10 flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={buses[0]}
                alt="باص سياحي"
                width={1000}
                height={600}
                className="h-[280px] w-full max-w-5xl object-cover md:h-[500px]"
                priority
              />
            </div>
          </div>

          {/* معرض الباصات بأسهم */}
          <Slider images={buses} title="Bus" />
        </div>

        {/* ================= الفنادق ================= */}

        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
            السكن بفنادق 3 نجوم
          </h3>

          {/* قصر رزق */}
          <Slider images={qasrRizq} title="قصر رزق" hotelName="فندق قصر رزق" />

          {/* مناسك البيت */}
          <Slider
            images={manasik}
            title="مناسك البيت"
            hotelName="فندق مناسك البيت"
          />

          <Slider
            images={royal}
            title="فندق رويال بارك"
            hotelName="فندق رويال بارك"
          />
        </div>
      </div>
    </section>
  );
}
