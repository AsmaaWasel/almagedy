"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bus,
  ShieldCheck,
  Zap,
  Bath,
  CalendarDays,
  MapPin,
  Crown,
  Hotel,
  Baby,
  Dumbbell,
  UtensilsCrossed,
  Car,
  Sparkles,
  MessageCircle,
  Phone,
  ArrowLeft,
  Star,
  Wifi,
  Coffee,
  Monitor,
  Armchair,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WHATSAPP = "https://wa.me/966507634181";
const PHONE = "tel:+966507634181";

/* ---------- Economy Bus Images ---------- */
const economyGallery = [
  "/buses/bus1.jpeg",
  "/buses/bus2.jpeg",
  "/buses/bus3.jpeg",
  "/buses/bus4.jpeg",
  "/buses/bus5.jpeg",
  "/buses/bus6.jpeg",
  "/buses/bus7.jpeg",
  "/buses/bus8.jpeg",
  "/buses/bus9.jpeg",
  "/buses/bus10.jpeg",
  "/buses/bus11.jpeg",
  "/buses/bus12.jpeg",
];

/* ---------- VIP Bus Images ---------- */
const vipGallery = [
  "/vip-buses/bus1.jpeg",
  "/vip-buses/bus2.jpeg",
  "/vip-buses/bus3.jpeg",
  "/vip-buses/bus4.jpeg",
  "/vip-buses/bus5.jpeg",
  "/vip-buses/bus6.jpeg",
  "/vip-buses/bus7.jpeg",
  "/vip-buses/bus8.jpeg",
];

// Component for image carousel with arrows
function ImageCarousel({
  images,
  title,
  badge,
}: {
  images: string[];
  title: string;
  badge: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible images (3 at a time)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(index);
    }
    return visible;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 overflow-hidden">
        {getVisibleImages().map((imgIndex, i) => (
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="group relative h-64 w-full flex-1 shrink-0 overflow-hidden rounded-[1.75rem] shadow-soft md:h-72"
          >
            <div
              className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
              style={{ backgroundImage: `url('${images[imgIndex]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
            {i === 0 && (
              <span className="absolute bottom-4 right-5 rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2 text-white backdrop-blur-md transition-all duration-300 hover:bg-night/90 hover:scale-110 ${
          isHovered ? "opacity-100" : "opacity-0 md:opacity-0"
        }`}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2 text-white backdrop-blur-md transition-all duration-300 hover:bg-night/90 hover:scale-110 ${
          isHovered ? "opacity-100" : "opacity-0 md:opacity-0"
        }`}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gold"
                : "w-2 bg-gold/30 hover:bg-gold/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Buses() {
  return (
    <section id="buses" className="relative overflow-hidden bg-ivory py-28">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            أسطولنا ورحلاتنا
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            باصات سياحية حديثة من الرياض
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            باصات سياحية حديثة موديلات 2025 / 2026 / 2027، وباصات VIP
          </p>
        </div>

        {/* ======================================== */}
        {/* ECONOMY SECTION */}
        {/* ======================================== */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <Bus size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-night">
                باص اقتصادي - 49 مقعد
              </h3>
              <p className="text-sm text-ink/60">4 صفوف • مريح • سعر مناسب</p>
            </div>
          </div>

          <div className="mb-10 overflow-hidden rounded-[2rem] shadow-soft">
            <video
              controls
              playsInline
              className="h-[260px] w-full object-cover md:h-[500px]"
              poster="/buses/poster.jpg"
            >
              <source src="/vip-buses/video-vip-buses.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Economy Gallery with Carousel */}
          <ImageCarousel
            images={economyGallery}
            title="باص اقتصادي"
            badge="اقتصادي • 49 مقعد"
          />

          {/* Economy Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 rounded-[2rem] border border-blue-100 bg-white/80 p-8 shadow-soft backdrop-blur-sm"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">رحلات يومية</p>
                  <p className="text-xs text-ink/55">تنطلق يومياً من الرياض</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">مكة والمدينة</p>
                  <p className="text-xs text-ink/55">ذهاب إلى مكة والمدينة</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <Hotel size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">سكن شامل</p>
                  <p className="text-xs text-ink/55">فندق 3 نجوم</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <Star size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">سعر مناسب</p>
                  <p className="text-xs text-ink/55">باقة العمرة الاقتصادية</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-blue-100 pt-6 sm:flex-row">
              <p className="text-sm text-ink/60">
                ✨ باصات سياحية حديثة • موديلات 2025-2027
              </p>
              <div className="flex gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-transform hover:scale-105"
                >
                  <MessageCircle size={16} />
                  تفاصيل أكثر والحجز
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ======================================== */}
        {/* VIP SECTION - Same as Economy with VIP styling */}
        {/* ======================================== */}
        <div className="mt-28">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-gold to-gold-dark p-3 text-white shadow-lg shadow-gold/30">
              <Crown size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-night">
                باصات VIP - درجة رجال الأعمال
              </h3>
              <p className="text-sm text-ink/60">
                أعلى مستوى من الخدمة والراحة
              </p>
            </div>
          </div>

          {/* VIP Gallery with Carousel - Same as Economy */}
          <ImageCarousel
            images={vipGallery}
            title="باص VIP"
            badge="VIP • درجة رجال أعمال"
          />

          {/* VIP Features Card - Same as Economy with VIP styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 rounded-[2rem] border border-gold/20 bg-gradient-to-br from-white to-amber-50/50 p-8 shadow-soft"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/10 p-2.5 text-gold-dark">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">
                    رحلتان أسبوعياً
                  </p>
                  <p className="text-xs text-ink/55">الإثنين والخميس</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/10 p-2.5 text-gold-dark">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">مكة المكرمة</p>
                  <p className="text-xs text-ink/55">ذهاب إلى مكة فقط</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/10 p-2.5 text-gold-dark">
                  <Hotel size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">سكن فاخر</p>
                  <p className="text-xs text-ink/55">فندق 4 أو 5 نجوم</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/10 p-2.5 text-gold-dark">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-night">أعلى خدمة</p>
                  <p className="text-xs text-ink/55">باقة العمرة VIP</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-6 sm:flex-row">
              <p className="text-sm text-ink/60">
                ✨ باصات VIP • موديلات 2025-2027 • خدمة 5 نجوم
              </p>
              <div className="flex gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-6 py-3 text-sm font-bold text-night shadow-lg shadow-gold/30 transition-transform hover:scale-105"
                >
                  <MessageCircle size={16} />
                  تفاصيل أكثر والحجز
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
