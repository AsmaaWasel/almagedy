"use client";

import { useState } from "react";
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
   البيانات الثابتة
============================================================================ */

// أنواع الباصات
type BusClass = "economic" | "vip";

// أيقونات المواصفات
const SPEC_ICONS = {
  ac: { icon: Snowflake, label: "تكييف مركزي" },
  wifi: { icon: Wifi, label: "واي فاي مجاني" },
  screens: { icon: Tv, label: "شاشات ترفيه" },
  charging: { icon: BatteryCharging, label: "منافذ شحن" },
  seats: { icon: Armchair, label: "مقاعد مريحة" },
  luggage: { icon: Luggage, label: "مساحة أمتعة" },
} as const;

type SpecKey = keyof typeof SPEC_ICONS;

// واجهة الباص
interface Bus {
  id: string;
  name: string;
  class: BusClass;
  images: string[];
  capacity: number;
  rating: number;
  description: string;
  specs: SpecKey[];
}

// رقم واتساب (مع كود الدولة بدون +)
const WHATSAPP_NUMBER = "966507634181";
// رابط واتساب المباشر
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// البيانات الثابتة للباصات
const BUSES: Bus[] = [
  {
    id: "bus-1",
    name: "باصات المجيدي",
    class: "economic",
    images: ["/buses/bus1.jpeg", "/buses/bus2.jpeg"],
    capacity: 32,
    rating: 4.9,
    description:
      "باصات سياحية حديثة موديلات 2025 / 2026 / 2027 توفر أعلى مستويات الراحة والأمان للمعتمرين والزوار.",
    specs: [],
  },
  {
    id: "bus-2",
    name: "باصات المجيدي",
    class: "economic",
    images: ["/buses/bus3.jpeg", "/buses/bus4.jpeg"],
    capacity: 32,
    rating: 4.9,
    description:
      "أحدث الباصات المزودة بجميع وسائل وأنظمة السلامة لضمان رحلة آمنة ومريحة طوال الطريق.",
    specs: [],
  },
  {
    id: "bus-3",
    name: "باصات المجيدي",
    class: "economic",
    images: ["/buses/bus5.jpeg"],
    capacity: 32,
    rating: 4.9,
    description:
      "جميع المقاعد مزودة بشواحن USB لتتمكن من شحن أجهزتك طوال الرحلة بكل سهولة.",
    specs: [],
  },
  {
    id: "bus-4",
    name: "باصات المجيدي",
    class: "economic",
    images: ["/buses/bus6.jpeg"],
    capacity: 32,
    rating: 4.9,
    description: "مزود بدورة مياه داخلية لراحة الركاب أثناء الرحلات الطويلة.",
    specs: [],
  },
  {
    id: "bus-4",
    name: "VIP المجيدي",
    class: "vip",
    images: [
      "/vip-buses/bus2.jpeg",
      "/vip-buses/bus3.jpeg",
      "/vip-buses/bus4.jpeg",
      "/vip-buses/bus5.jpeg",
    ],
    capacity: 32,
    rating: 4.9,
    description:
      "باصات VIP فاخرة مجهزة بمقاعد واسعة ومريحة، تكييف مركزي، شاشات ترفيه،   لتوفير تجربة سفر راقية وآمنة للمعتمرين والزوار.",
    specs: ["ac", "wifi", "screens", "charging", "seats", "luggage"],
  },
  {
    id: "bus-5",
    name: "VIP المجيدي",
    class: "vip",
    images: ["/vip-buses/bus6.jpeg", "/vip-buses/bus7.jpeg"],
    capacity: 32,
    rating: 4.9,
    description:
      "رحلة استثنائية مع باصات VIP الحديثة، المزودة بأحدث وسائل الراحة والخدمات، مع مقاعد فاخرة ومساحات واسعة لتمنحك أقصى درجات الاسترخاء طوال الرحلة.",
    specs: ["ac", "wifi", "screens", "charging", "seats", "luggage"],
  },
];

/* ============================================================================
   المكونات
============================================================================ */

// عرض صور الباص مع إمكانية التنقل
function BusImages({
  images,
  name,
  onOpen,
}: {
  images: string[];
  name: string;
  onOpen: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative h-64 w-full cursor-pointer overflow-hidden sm:h-72"
      onClick={onOpen}
    >
      <img
        src={images[currentIndex]}
        alt={`${name} - صورة ${currentIndex + 1}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* تدرج شفاف */}
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />

      {/* أزرار التنقل */}
      {hasMultiple && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-1.5 text-white/90 backdrop-blur-sm transition-colors hover:bg-gold hover:text-night sm:p-2"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-1.5 text-white/90 backdrop-blur-sm transition-colors hover:bg-gold hover:text-night sm:p-2"
          >
            <ChevronRight size={18} />
          </button>

          {/* نقاط المؤشر */}
          <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-4 bg-gold" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* عداد الصور */}
          <div className="absolute right-3 top-3 rounded-full bg-night/70 px-2.5 py-1 text-xs text-white/90 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <ImageIcon size={12} />
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}

      {!hasMultiple && (
        <div className="absolute right-3 top-3 rounded-full bg-night/70 px-2.5 py-1 text-xs text-white/90 backdrop-blur-sm">
          <span className="flex items-center gap-1">
            <ImageIcon size={12} />1 / 1
          </span>
        </div>
      )}
    </div>
  );
}

// بطاقة الباص
function BusCard({
  bus,
  index,
  onOpen,
}: {
  bus: Bus;
  index: number;
  onOpen: (bus: Bus) => void;
}) {
  // إنشاء رابط واتساب مع رسالة مخصصة للباص
  const getWhatsAppLink = () => {
    const message = `السلام عليكم، أرغب في الحجز لباص ${bus.name} (${bus.class === "vip" ? "VIP" : "اقتصادي"})`;
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-xl transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10"
    >
      <BusImages
        images={bus.images}
        name={bus.name}
        onOpen={() => onOpen(bus)}
      />

      {/* علامة الفئة */}
      <span
        className={`absolute left-4 top-4 rounded-lg px-3 py-1.5 text-xs font-bold shadow-lg ${
          bus.class === "vip"
            ? "bg-gradient-to-r from-amber-400 to-amber-600 text-night"
            : "border border-white/20 bg-white/10 text-white backdrop-blur-md"
        }`}
      >
        {bus.class === "vip" ? "⭐ VIP" : "💺 اقتصادية"}
      </span>

      {/* التقييم */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-night/70 px-3 py-1.5 backdrop-blur-sm">
        <Star size={14} className="fill-amber-400 text-amber-400" />
        <span className="text-sm font-bold text-white">{bus.rating}</span>
      </div>

      {/* عدد الركاب */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-night/70 px-3 py-1.5 backdrop-blur-sm text-white/90">
        <Users size={14} className="text-amber-400" />
        <span className="text-sm font-semibold">{bus.capacity} راكب</span>
      </div>

      {/* المحتوى */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white">{bus.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70 line-clamp-2">
          {bus.description}
        </p>

        {/* المواصفات */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {bus.specs.slice(0, 4).map((key) => {
            const spec = SPEC_ICONS[key];
            const Icon = spec.icon;
            return (
              <span
                key={key}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/70"
              >
                <Icon size={12} className="text-amber-400" />
                {spec.label}
              </span>
            );
          })}
          {bus.specs.length > 4 && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50">
              +{bus.specs.length - 4}
            </span>
          )}
        </div>

        {/* الأزرار */}
        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
          <button
            onClick={() => onOpen(bus)}
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            التفاصيل
          </button>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-2 text-center text-xs font-bold text-night shadow-lg transition-transform hover:scale-105"
          >
            احجز الآن
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// نافذة العرض التفصيلية
function GalleryModal({
  bus,
  onClose,
}: {
  bus: Bus | null;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!bus) return null;

  const hasMultiple = bus.images.length > 1;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % bus.images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + bus.images.length) % bus.images.length,
    );

  // إنشاء رابط واتساب مع رسالة مخصصة للباص
  const getWhatsAppLink = () => {
    const message = `السلام عليكم، أرغب في الحجز لباص ${bus.name} (${bus.class === "vip" ? "VIP" : "اقتصادي"})`;
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-night shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 z-10 rounded-full bg-night/80 p-2 text-white/90 backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-night"
        >
          <X size={20} />
        </button>

        <div className="grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.3fr,1fr]">
          {/* قسم الصور */}
          <div className="relative h-72 bg-black/60 lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={bus.images[currentIndex]}
                alt={`${bus.name} - ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-night/80 lg:via-transparent" />

            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-night/80 p-2 text-white backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-night"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-night/80 p-2 text-white backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-night"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {bus.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-amber-400"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-night/80 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                  {currentIndex + 1} / {bus.images.length}
                </div>
              </>
            )}
          </div>

          {/* المعلومات */}
          <div className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <span
                className={`rounded-lg px-3 py-1 text-xs font-bold ${
                  bus.class === "vip"
                    ? "bg-gradient-to-r from-amber-400 to-amber-600 text-night"
                    : "border border-white/20 text-white/80"
                }`}
              >
                {bus.class === "vip" ? "VIP" : "اقتصادية"}
              </span>
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-white">
                  {bus.rating}
                </span>
              </div>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white">{bus.name}</h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-white/60">
              <Users size={16} className="text-amber-400" />
              <span>{bus.capacity} راكب</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {bus.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {bus.specs.map((key) => {
                const spec = SPEC_ICONS[key];
                const Icon = spec.icon;
                return (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    <Icon size={14} className="text-amber-400" />
                    {spec.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-auto pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:scale-105"
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
  const [activeTab, setActiveTab] = useState<BusClass>("vip");
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  const filteredBuses = BUSES.filter((bus) => bus.class === activeTab);

  const tabs = [
    {
      key: "vip" as const,
      label: "باصات VIP",
      icon: "⭐",
      count: BUSES.filter((b) => b.class === "vip").length,
    },
    {
      key: "economic" as const,
      label: "باصات اقتصادية",
      icon: "💺",
      count: BUSES.filter((b) => b.class === "economic").length,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-night via-night/95 to-night pb-16">
      {/* الهيدر */}
      <section className="relative overflow-hidden border-b border-white/5 pb-12 pt-14 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(251,191,36,0.05),transparent_50%)]" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-amber-400"
          >
            <ArrowRight size={16} />
            العودة للرئيسية
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-amber-400 backdrop-blur-sm">
              <BusIcon size={14} />
              أسطول باصات مرخص ومؤمن بالكامل
            </div>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              اختر باصك{" "}
              <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
                لرحلة العمرة
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              فئتان تناسب كل ميزانية: باصات اقتصادية مريحة للمجموعات الكبيرة،
              وباصات VIP فاخرة لمن يبحث عن أعلى درجات الراحة والخصوصية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* التبويبات */}
      <div className="container relative z-20 -mt-5 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="relative rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:px-6"
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-1.5 ${
                  activeTab === tab.key ? "text-night" : "text-white/60"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                <span className="opacity-60">({tab.count})</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* شبكة الباصات */}
      <div className="container mt-10">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredBuses.map((bus, index) => (
              <BusCard
                key={bus.id}
                bus={bus}
                index={index}
                onOpen={setSelectedBus}
              />
            ))}
          </div>
        </AnimatePresence>

        {filteredBuses.length === 0 && (
          <div className="mt-20 text-center text-white/40">
            <p>لا توجد باصات في هذه الفئة حالياً</p>
          </div>
        )}
      </div>

      {/* المودال */}
      <AnimatePresence>
        {selectedBus && (
          <GalleryModal
            bus={selectedBus}
            onClose={() => setSelectedBus(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
