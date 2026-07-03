"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Snowflake,
  Wifi,
  Tv,
  BatteryCharging,
  Armchair,
  Luggage,
  Bus as BusIcon,
  Image as ImageIcon,
} from "lucide-react";

/* ============================================================================
   DATA MODEL
============================================================================ */

export type BusClass = "economic" | "vip";

const SPEC_ICONS = {
  ac: { icon: Snowflake, label: "تكييف مركزي" },
  wifi: { icon: Wifi, label: "واي فاي مجاني" },
  screens: { icon: Tv, label: "شاشات ترفيه فردية" },
  charging: { icon: BatteryCharging, label: "منافذ شحن USB" },
  seats: { icon: Armchair, label: "مقاعد جلد مريحة" },
  luggage: { icon: Luggage, label: "مساحة أمتعة واسعة" },
} as const;

type SpecKey = keyof typeof SPEC_ICONS;

export interface Bus {
  id: string;
  name: string;
  class: BusClass;
  images: string[]; // مصفوفة صور - يمكن أن تحتوي على صورة واحدة أو أكثر
  capacity: number;
  rating: number;
  description: string;
  specs: SpecKey[];
}

// TODO: استبدال هذا بالبيانات القادمة من الداشبورد
const BUSES: Bus[] = [
  {
    id: "vip-1",
    name: "المجيدي VIP",
    class: "vip",
    images: [
      "/buses/bus1.jpeg",
      "/buses/bus2.jpeg",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 32,
    rating: 4.9,
    description:
      "مقاعد جلدية فاخرة قابلة للتمديد، تكييف مركزي، واي فاي مجاني، وشاشات ترفيه فردية. مثالية للعائلات والمجموعات الصغيرة.",
    specs: ["ac", "wifi", "screens", "charging", "seats", "luggage"],
  },
  {
    id: "vip-2",
    name: "سكانيا الملكية",
    class: "vip",
    images: [
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 28,
    rating: 4.8,
    description:
      "تصميم داخلي فاخر بإضاءة LED هادئة، نظام صوت مخصص، ومحطات شحن عند كل مقعد. راحة وخصوصية طوال الرحلة.",
    specs: ["ac", "wifi", "screens", "charging", "seats"],
  },
  {
    id: "vip-3",
    name: "فولفو النخبة",
    class: "vip",
    images: [
      "https://images.unsplash.com/photo-1495954380655-01fb7c1e9a86?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 24,
    rating: 5.0,
    description:
      "أعلى فئة في الأسطول، مقاعد بمساند رأس كهربائية، ستائر خصوصية كاملة، ومساحة أرجل واسعة للرحلات الطويلة.",
    specs: ["ac", "wifi", "screens", "charging", "seats", "luggage"],
  },
  {
    id: "eco-1",
    name: "الاقتصادية الذهبية",
    class: "economic",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 45,
    rating: 4.5,
    description:
      "خيار عملي واقتصادي بمقاعد مريحة، تكييف قوي، ومساحة أمتعة كافية. مناسب للمجموعات الكبيرة.",
    specs: ["ac", "seats", "luggage"],
  },
  {
    id: "eco-2",
    name: "الاقتصادية البلاتينية",
    class: "economic",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 40,
    rating: 4.6,
    description:
      "نسخة محسّنة من الفئة الاقتصادية، مقاعد أوسع، منافذ شحن أساسية، وتوازن مثالي بين السعر والراحة.",
    specs: ["ac", "charging", "seats", "luggage"],
  },
  {
    id: "eco-3",
    name: "الاقتصادية الفضية",
    class: "economic",
    images: [
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495954380655-01fb7c1e9a86?q=80&w=800&auto=format&fit=crop",
    ],
    capacity: 50,
    rating: 4.3,
    description:
      "أكبر سعة في الأسطول، خيار مثالي للمجموعات والجمعيات الكبيرة مع الحفاظ على معايير التكييف والسلامة.",
    specs: ["ac", "seats"],
  },
];

/* ============================================================================
   المكونات
============================================================================ */

// عرض الصور في البطاقة - يدعم صورة واحدة أو أكثر
function BusImages({
  images,
  name,
  onOpen,
}: {
  images: string[];
  name: string;
  onOpen: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // التنقل بين الصور
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative h-64 w-full cursor-pointer overflow-hidden sm:h-72"
      onClick={onOpen}
    >
      {/* الصورة الرئيسية */}
      <img
        src={images[currentImageIndex]}
        alt={`${name} - صورة ${currentImageIndex + 1}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* تدرج شفاف في الأسفل */}
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />

      {/* أزرار التنقل بين الصور (تظهر فقط عند وجود أكثر من صورة) */}
      {hasMultiple && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-night/60 p-1.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-gold hover:text-night sm:p-2"
            aria-label="الصورة السابقة"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-night/60 p-1.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-gold hover:text-night sm:p-2"
            aria-label="الصورة التالية"
          >
            <ChevronRight size={18} />
          </button>

          {/* مؤشر عدد الصور */}
          <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-4 bg-gold"
                    : "w-1.5 bg-white/40"
                }`}
                aria-label={`انتقال إلى الصورة ${index + 1}`}
              />
            ))}
          </div>

          {/* عداد الصور */}
          <div className="absolute right-3 top-3 rounded-full bg-night/60 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <ImageIcon size={12} />
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}

      {/* إذا كانت صورة واحدة فقط، نعرض أيقونة بسيطة */}
      {!hasMultiple && (
        <div className="absolute right-3 top-3 rounded-full bg-night/60 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm">
          <span className="flex items-center gap-1">
            <ImageIcon size={12} />1 / 1
          </span>
        </div>
      )}
    </div>
  );
}

export function BusCard({
  bus,
  index,
  onOpen,
}: {
  bus: Bus;
  index: number;
  onOpen: (bus: Bus) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-lg transition-all duration-300 hover:border-gold/30 hover:shadow-gold/20"
    >
      {/* صور البطاقة */}
      <BusImages
        images={bus.images}
        name={bus.name}
        onOpen={() => onOpen(bus)}
      />

      {/* علامة الفئة */}
      <span
        className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold ${
          bus.class === "vip"
            ? "bg-gradient-to-l from-gold to-gold-dark text-night"
            : "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
        }`}
      >
        {bus.class === "vip" ? "VIP" : "اقتصادية"}
      </span>

      {/* التقييم */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-night/60 px-3 py-1.5 backdrop-blur-sm">
        <Star size={14} className="fill-gold text-gold" />
        <span className="text-sm font-bold text-white">
          {bus.rating.toLocaleString("ar")}
        </span>
      </div>

      {/* عدد الركاب */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-night/60 px-3 py-1.5 backdrop-blur-sm text-white/80">
        <Users size={14} className="text-gold" />
        <span className="text-sm font-semibold">
          {bus.capacity.toLocaleString("ar")} راكب
        </span>
      </div>

      {/* المحتوى */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{bus.name}</h3>

        <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-2">
          {bus.description}
        </p>

        {/* المواصفات */}
        <div className="mt-4 flex flex-wrap gap-2">
          {bus.specs.slice(0, 4).map((key) => {
            const spec = SPEC_ICONS[key];
            const Icon = spec.icon;
            return (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/70"
              >
                <Icon size={13} className="text-gold" />
                {spec.label}
              </span>
            );
          })}
          {bus.specs.length > 4 && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/50">
              +{bus.specs.length - 4}
            </span>
          )}
        </div>

        {/* أزرار */}
        <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
          <button
            onClick={() => onOpen(bus)}
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            عرض التفاصيل
          </button>
          <a
            href="#contact"
            className="flex-1 rounded-full bg-gradient-to-l from-gold to-gold-dark px-4 py-2.5 text-center text-xs font-bold text-night shadow-gold transition-transform hover:scale-105"
          >
            احجز الآن
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryModal({
  bus,
  onClose,
}: {
  bus: Bus | null;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // إعادة تعيين المؤشر عند تغيير الباص
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [bus]);

  if (!bus) return null;

  const hasMultiple = bus.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bus.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + bus.images.length) % bus.images.length,
    );
  };

  // التحكم عبر لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bus]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute left-4 top-4 z-10 rounded-full bg-night/70 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-gold hover:text-night"
        >
          <X size={20} />
        </button>

        <div className="grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.2fr,1fr]">
          {/* قسم الصور */}
          <div className="relative h-80 bg-black/40 lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={bus.images[currentImageIndex]}
                alt={`${bus.name} - صورة ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-night/60 lg:via-transparent" />

            {/* أزرار التنقل في المودال */}
            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-night"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-night"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight size={24} />
                </button>

                {/* مؤشر الصور في المودال */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {bus.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-gold"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`انتقال إلى الصورة ${index + 1}`}
                    />
                  ))}
                </div>

                {/* عداد الصور في المودال */}
                <div className="absolute right-4 top-4 rounded-full bg-night/60 px-3 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                  {currentImageIndex + 1} / {bus.images.length}
                </div>
              </>
            )}
          </div>

          {/* المعلومات */}
          <div className="flex flex-col p-6 lg:p-8">
            <div className="mb-2 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  bus.class === "vip"
                    ? "bg-gradient-to-l from-gold to-gold-dark text-night"
                    : "border border-white/20 text-white/80"
                }`}
              >
                {bus.class === "vip" ? "VIP" : "اقتصادية"}
              </span>
              <div className="flex items-center gap-1 text-gold-light">
                <Star size={16} className="fill-gold text-gold" />
                <span className="text-sm font-bold">
                  {bus.rating.toLocaleString("ar")}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">{bus.name}</h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
              <Users size={16} className="text-gold" />
              <span>{bus.capacity.toLocaleString("ar")} راكب</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {bus.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {bus.specs.map((key) => {
                const spec = SPEC_ICONS[key];
                const Icon = spec.icon;
                return (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70"
                  >
                    <Icon size={14} className="text-gold" />
                    {spec.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-6 py-3.5 text-sm font-bold text-night shadow-gold transition-transform hover:scale-[1.02]"
              >
                احجز هذا الباص الآن
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================================
   الصفحة الرئيسية
============================================================================ */

export default function BusesPage() {
  const [active, setActive] = useState<BusClass>("vip");
  const [selected, setSelected] = useState<Bus | null>(null);

  const filtered = useMemo(
    () => BUSES.filter((b) => b.class === active),
    [active],
  );

  const tabs = [
    {
      key: "vip" as const,
      label: "باصات VIP",
      count: BUSES.filter((b) => b.class === "vip").length,
      icon: "🌟",
    },
    {
      key: "economic" as const,
      label: "باصات اقتصادية",
      count: BUSES.filter((b) => b.class === "economic").length,
      icon: "💺",
    },
  ];

  return (
    <main className="min-h-screen bg-night pb-20">
      {/* رأس الصفحة */}
      <section className="relative overflow-hidden border-b border-white/10 pb-12 pt-14 sm:pt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(98,178,227,0.10), transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(200,164,77,0.08), transparent 50%), linear-gradient(180deg, #0B1C2C 0%, #070F18 100%)",
          }}
        />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-gold-light"
          >
            <ArrowRight size={16} />
            العودة للرئيسية
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-gold-light backdrop-blur-sm">
              <BusIcon size={14} className="text-gold" />
              أسطول باصات مرخّص ومؤمَّن بالكامل
            </div>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.3] text-white sm:text-4xl lg:text-5xl">
              اختر باصك <span className="text-gradient-gold">لرحلة العمرة</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              فئتان تناسب كل ميزانية: باصات اقتصادية مريحة للمجموعات الكبيرة،
              وباصات VIP فاخرة لمن يبحث عن أعلى درجات الراحة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* شريط التبويبات */}
      <div className="container relative z-20 -mt-6 flex justify-center">
        <div className="glass inline-flex items-center gap-1 rounded-full border border-white/10 p-1.5 shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="relative rounded-full px-5 py-2.5 text-sm font-bold sm:px-6"
            >
              {active === tab.key && (
                <motion.span
                  layoutId="buses-tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-l from-gold to-gold-dark"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-1.5 ${
                  active === tab.key ? "text-night" : "text-white/70"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                <span className="opacity-60">
                  ({tab.count.toLocaleString("ar")})
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* شبكة الباصات */}
      <div className="container mt-10">
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((bus, i) => (
                <BusCard
                  key={bus.id}
                  bus={bus}
                  index={i}
                  onOpen={setSelected}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-white/50">لا توجد باصات في هذه الفئة حاليًا.</p>
          </div>
        )}
      </div>

      {/* مودال العرض */}
      <AnimatePresence>
        {selected && (
          <GalleryModal bus={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
