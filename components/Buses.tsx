"use client";
//new
//new
import { useState, useRef, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // عدد الصور المرئية حسب حجم الشاشة
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = container.querySelectorAll(".carousel-item");
      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;
    containerRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest slide
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth =
        container.querySelector(".carousel-item")?.clientWidth || 0;
      const gap = 12;
      const newIndex = Math.round(scrollPosition / (itemWidth + gap));
      if (newIndex !== currentIndex) {
        setCurrentIndex(Math.min(newIndex, images.length - 1));
      }
    }
  };

  // التحقق من وجود صور في البداية أو النهاية
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= images.length - 1;

  return (
    <div className="relative">
      {/* مؤشر التمرير للهواتف */}
      <div className="block md:hidden text-center text-[10px] text-ink/30 mb-2">
        ← اسحب للتمرير →
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="carousel-item group relative h-56 sm:h-64 md:h-72 w-[85vw] sm:w-[45vw] md:w-[30vw] shrink-0 snap-center overflow-hidden rounded-2xl md:rounded-[1.75rem] shadow-soft"
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
            {index === currentIndex && (
              <span className="absolute bottom-3 right-3 md:bottom-4 md:right-5 rounded-full bg-gold/90 px-2.5 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold text-white backdrop-blur-md">
                {badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Visible always */}
      <button
        onClick={prevSlide}
        disabled={isAtStart}
        className={`absolute left-1 md:left-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 md:p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          isAtStart
            ? "bg-night/30 cursor-not-allowed opacity-50"
            : "bg-night/70 hover:bg-night/90"
        }`}
        aria-label="Previous"
      >
        <ChevronLeft size={18} className="md:w-5 md:h-5" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAtEnd}
        className={`absolute right-1 md:right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 md:p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          isAtEnd
            ? "bg-night/30 cursor-not-allowed opacity-50"
            : "bg-night/70 hover:bg-night/90"
        }`}
        aria-label="Next"
      >
        <ChevronRight size={18} className="md:w-5 md:h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="mt-3 md:mt-4 flex justify-center gap-1.5 md:gap-2 flex-wrap px-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 md:w-8 bg-gold"
                : "w-1.5 md:w-2 bg-gold/30 hover:bg-gold/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* عداد الصور */}
      <div className="mt-2 text-center text-[10px] text-ink/30">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Buses() {
  return (
    <section
      id="buses"
      className="relative overflow-hidden bg-ivory py-16 md:py-28"
    >
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            أسطولنا ورحلاتنا
          </p>
          <h2 className="mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-night">
            باصات سياحية حديثة من الرياض
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base leading-8 text-ink/60">
            باصات سياحية حديثة موديلات 2025 / 2026 / 2027، وباصات VIP
          </p>
        </div>

        {/* ======================================== */}
        {/* ECONOMY SECTION */}
        {/* ======================================== */}
        <div className="mt-12 md:mt-20">
          <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <div className="rounded-xl md:rounded-2xl bg-blue-100 p-2 md:p-3 text-blue-600">
              <Bus size={22} className="md:w-7 md:h-7" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-night">
                باص اقتصادي - 49 مقعد
              </h3>
              <p className="text-xs md:text-sm text-ink/60">
                4 صفوف • مريح • سعر مناسب
              </p>
            </div>
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
            className="mt-6 md:mt-8 rounded-2xl md:rounded-[2rem] border border-blue-100 bg-white/80 p-4 md:p-8 shadow-soft backdrop-blur-sm"
          >
            <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-blue-50 p-1.5 md:p-2.5 text-blue-600">
                  <CalendarDays size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    رحلات يومية
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    تنطلق يومياً من الرياض
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-blue-50 p-1.5 md:p-2.5 text-blue-600">
                  <MapPin size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    مكة والمدينة
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    ذهاب إلى مكة والمدينة
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-blue-50 p-1.5 md:p-2.5 text-blue-600">
                  <Hotel size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    سكن شامل
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    فندق 3 نجوم
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-blue-50 p-1.5 md:p-2.5 text-blue-600">
                  <Star size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    سعر مناسب
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    باقة العمرة الاقتصادية
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 flex flex-col items-center justify-between gap-3 md:gap-4 border-t border-blue-100 pt-4 md:pt-6 sm:flex-row">
              <p className="text-xs md:text-sm text-ink/60 text-center sm:text-right">
                ✨ باصات سياحية حديثة • موديلات 2025-2027
              </p>
              <div className="flex gap-2 md:gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-blue-600 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-white shadow-lg shadow-blue-200 transition-transform hover:scale-105"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  تفاصيل أكثر والحجز
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ======================================== */}
        {/* VIP SECTION - Same as Economy with VIP styling */}
        {/* ======================================== */}
        <div className="mt-16 md:mt-28">
          <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <div className="rounded-xl md:rounded-2xl bg-gradient-to-br from-gold to-gold-dark p-2 md:p-3 text-white shadow-lg shadow-gold/30">
              <Crown size={22} className="md:w-7 md:h-7" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-night">
                باصات VIP - درجة رجال الأعمال
              </h3>
              <p className="text-xs md:text-sm text-ink/60">
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
            className="mt-6 md:mt-8 rounded-2xl md:rounded-[2rem] border border-gold/20 bg-gradient-to-br from-white to-amber-50/50 p-4 md:p-8 shadow-soft"
          >
            <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-gold/10 p-1.5 md:p-2.5 text-gold-dark">
                  <CalendarDays size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    رحلتان أسبوعياً
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    الإثنين والخميس
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-gold/10 p-1.5 md:p-2.5 text-gold-dark">
                  <MapPin size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    مكة المكرمة
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    ذهاب إلى مكة فقط
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-gold/10 p-1.5 md:p-2.5 text-gold-dark">
                  <Hotel size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    سكن فاخر
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    فندق 4 أو 5 نجوم
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="rounded-lg md:rounded-xl bg-gold/10 p-1.5 md:p-2.5 text-gold-dark">
                  <Sparkles size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-night">
                    أعلى خدمة
                  </p>
                  <p className="text-[10px] md:text-xs text-ink/55">
                    باقة العمرة VIP
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 flex flex-col items-center justify-between gap-3 md:gap-4 border-t border-gold/10 pt-4 md:pt-6 sm:flex-row">
              <p className="text-xs md:text-sm text-ink/60 text-center sm:text-right">
                ✨ باصات VIP • موديلات 2025-2027 • خدمة 5 نجوم
              </p>
              <div className="flex gap-2 md:gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-night shadow-lg shadow-gold/30 transition-transform hover:scale-105"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
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
