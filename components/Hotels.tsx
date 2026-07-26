"use client";

import { motion } from "framer-motion";
import { Hotel, Crown, MessageCircle, Star } from "lucide-react";

const WHATSAPP = "https://wa.me/966507634181";

type HotelType = {
  id: number;
  title: string;
  hotelType: string;
  packageType: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
};

export default function HotelsGallery({ hotels }: { hotels: HotelType[] }) {
  const threeStarHotels = hotels.filter(
    (hotel) => hotel.hotelType === "3_stars",
  );

  const fourStarHotels = hotels.filter(
    (hotel) => hotel.hotelType === "4_stars",
  );

  const fiveStarHotels = hotels.filter(
    (hotel) => hotel.hotelType === "5_stars",
  );

  function HotelSection({
    title,
    subtitle,
    hotels,
    icon,
    color,
  }: {
    title: string;
    subtitle: string;
    hotels: HotelType[];
    icon: React.ReactNode;
    color: string;
  }) {
    if (hotels.length === 0) return null;

    return (
      <div className="mt-16">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-3 ${color}`}>{icon}</div>

            <div>
              <h3 className="text-xl font-extrabold text-night">{title}</h3>

              <p className="text-sm font-semibold text-gray-600">{subtitle}</p>
            </div>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-night shadow-lg transition hover:scale-105"
          >
            <MessageCircle size={18} />
            تفاصيل أكثر عن الفنادق والحجز
          </a>
        </div>

        {/* Images */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.flatMap((hotel) =>
            hotel.images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={image.imageUrl}
                  alt={hotel.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
                  {hotel.title}
                </div>
              </motion.div>
            )),
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-ivory py-16">
      <div className="container mx-auto px-4">
        {/* Main Title */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            السكن
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-night sm:text-4xl">
            الفنادق
          </h2>

          <p className="mt-3 text-lg font-medium text-ink/70">
            اختر ما يناسبك حسب الميزانية
          </p>
        </div>

        {/* 3 Stars */}

        <HotelSection
          title="فنادق 3 نجوم"
          subtitle="🏷️ باقة اقتصادية"
          hotels={threeStarHotels}
          color="bg-blue-100 text-blue-600"
          icon={<Hotel size={24} />}
        />

        {/* 4 Stars */}

        <HotelSection
          title="فنادق 4 نجوم"
          subtitle="⭐ إقامة مميزة"
          hotels={fourStarHotels}
          color="bg-purple-100 text-purple-600"
          icon={<Star size={24} />}
        />

        {/* 5 Stars */}

        <HotelSection
          title="فنادق 5 نجوم"
          subtitle="👑 باقة VIP"
          hotels={fiveStarHotels}
          color="bg-yellow-100 text-yellow-600"
          icon={<Crown size={24} />}
        />
      </div>
    </section>
  );
}
