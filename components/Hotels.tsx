"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, MessageCircle, BedDouble } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type StarTier = 3 | 4;

interface Hotel {
  id: string;
  name: string;
  city: "مكة المكرمة" | "المدينة المنورة";
  stars: StarTier;
  distance: string;
  priceFrom: number;
  image: string;
  tag?: string;
}

const hotels: Hotel[] = [
  {
    id: "h1",
    name: " فندق 4 نجوم",
    city: "مكة المكرمة",
    stars: 4,
    distance: "قريب من الحرم",
    priceFrom: 12800,
    image: "/images/hotels/anjum.jpg",
    tag: "الأعلى طلبًا",
  },
  {
    id: "h2",
    name: " فندق 4 نجوم",
    city: "مكة المكرمة",
    stars: 4,
    distance: "قريب من الحرم ",
    priceFrom: 10900,
    image: "/images/hotels/marwa-royal.jpg",
  },
  {
    id: "h3",
    name: "قصر رزق",
    city: "مكة المكرمة",
    stars: 3,
    distance: "قريب من الحرم",
    priceFrom: 6200,
    image: "/hotels/rezk/rezk6.jpeg",
  },
];

const tiers: { value: StarTier; label: string }[] = [
  { value: 4, label: "٤ نجوم" },
  { value: 3, label: "٣ نجوم" },
];

function StarRow({ count }: { count: StarTier }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={cn(i < count ? "fill-gold text-gold" : "text-white/20")}
        />
      ))}
    </div>
  );
}

function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -12,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[1.75rem]
      bg-night
      shadow-soft
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-night
          via-night/30
          to-transparent
          "
        />

        <div
          className="
          glass
          absolute
          right-4
          top-4
          flex
          items-center
          gap-1.5
          rounded-full
          px-3
          py-1.5
          "
        >
          <StarRow count={hotel.stars} />
        </div>

        {hotel.tag && (
          <div
            className="
            absolute
            left-4
            top-4
            rounded-full
            bg-gradient-to-l
            from-gold
            to-gold-dark
            px-3
            py-1.5
            text-[11px]
            font-bold
            text-night
            shadow-gold
            "
          >
            {hotel.tag}
          </div>
        )}

        <div
          className="
          absolute
          inset-x-0
          bottom-0
          p-5
          "
        >
          <p
            className="
            text-[11px]
            font-semibold
            tracking-widest
            text-gold-light
            "
          >
            {hotel.city}
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">{hotel.name}</h3>
        </div>
      </div>

      {/* DETAILS */}
      <div className="space-y-4 p-5">
        <div
          className="
          flex
          items-start
          gap-2
          text-xs
          text-white/60
          "
        >
          <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />

          <span>{hotel.distance}</span>
        </div>

        <div
          className="
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-4
          "
        >
          <a
            href={`https://wa.me/966507634181?text=${encodeURIComponent(
              `أرغب بالاستفسار عن حجز فندق ${hotel.name} (${hotel.city})`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-white/10
            px-4
            py-2.5
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-gold
            hover:text-night
            "
          >
            <MessageCircle size={14} />
            استفسار
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hotels() {
  const [active, setActive] = useState<StarTier>(4);

  const filtered = hotels.filter((hotel) => hotel.stars === active);

  return (
    <section
      id="hotels"
      className="
      relative
      overflow-hidden
      bg-ivory
      py-24
      "
    >
      <div
        className="
      pointer-events-none
      absolute
      -left-24
      top-10
      h-72
      w-72
      rounded-full
      bg-gold/10
      blur-3xl
      "
      />

      <div className="container relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          mx-auto
          max-w-2xl
          text-center
          "
        >
          <div
            className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-gold/30
            bg-white
            px-4
            py-2
            text-xs
            font-semibold
            text-gold-dark
            "
          >
            <BedDouble size={14} />
            الإقامة الفندقية
          </div>

          <h2
            className="
            text-3xl
            font-extrabold
            text-night
            sm:text-4xl
            "
          >
            فنادق ٣ و٤ نجوم
            <span className="text-gradient-gold"> تناسب كل ميزانية</span>
          </h2>

          <p
            className="
          mt-4
          text-base
          leading-8
          text-ink/60
          "
          >
            اختر الإقامة المناسبة لك بالقرب من الحرمين الشريفين بأسعار تناسب
            مختلف الميزانيات.
          </p>
        </motion.div>

        {/* FILTER */}
        <div
          className="
          mt-10
          flex
          justify-center
          gap-3
          "
        >
          {tiers.map((tier) => (
            <button
              key={tier.value}
              onClick={() => setActive(tier.value)}
              className={cn(
                "rounded-full px-6 py-3 text-sm font-bold transition",
                active === tier.value
                  ? "bg-night text-white shadow-soft"
                  : "bg-white text-ink/60",
              )}
            >
              {tier.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="
          mt-12
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((hotel, i) => (
              <HotelCard key={hotel.id} hotel={hotel} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
