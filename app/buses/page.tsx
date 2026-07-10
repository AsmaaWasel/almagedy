"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bus,
  MapPin,
  Clock,
  CalendarDays,
  Users,
  User,
  ArrowLeft,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wifi,
  UtensilsCrossed,
  Home,
  UsersRound,
  ArrowRightLeft,
  ArrowRight,
  ArrowLeft as ArrowLeftIcon,
  Sparkles,
  Crown,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react";

// صور الباص الاقتصادي
const economyBusImages = [
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

// صور الباص VIP
const vipBusImages = [
  "/vip-buses/bus1.jpeg",
  "/vip-buses/bus2.jpeg",
  "/vip-buses/bus3.jpeg",
  "/vip-buses/bus4.jpeg",
  "/vip-buses/bus5.jpeg",
  "/vip-buses/bus6.jpeg",
  "/vip-buses/bus7.jpeg",
  "/vip-buses/bus8.jpeg",
];

// مكون عرض الصور مع كاروسيل
function ImageGallery({
  images,
  title,
  badgeColor = "gold",
}: {
  images: string[];
  title: string;
  badgeColor?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    scrollToIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    scrollToIndex((currentIndex - 1 + images.length) % images.length);
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = container.querySelectorAll(".gallery-item");
      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= images.length - 1;

  return (
    <div className="relative">
      <div className="block md:hidden text-center text-[10px] text-ink/30 mb-2">
        ← اسحب للتمرير →
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="gallery-item group relative h-56 sm:h-64 md:h-72 w-[85vw] sm:w-[45vw] md:w-[30vw] shrink-0 snap-center overflow-hidden rounded-2xl md:rounded-[1.75rem] shadow-soft"
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-5">
              <span
                className={`rounded-full ${badgeColor === "gold" ? "bg-gold/90" : "bg-amber-500/90"} px-2.5 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold text-white backdrop-blur-md`}
              >
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        disabled={isAtStart}
        className={`absolute left-1 md:left-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 md:p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          isAtStart
            ? "bg-night/30 cursor-not-allowed opacity-50"
            : "bg-night/70 hover:bg-night/90"
        }`}
        aria-label="السابق"
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
        aria-label="التالي"
      >
        <ChevronRight size={18} className="md:w-5 md:h-5" />
      </button>

      <div className="mt-3 md:mt-4 flex justify-center gap-1.5 md:gap-2 flex-wrap px-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 md:w-8 bg-gold"
                : "w-1.5 md:w-2 bg-gold/30 hover:bg-gold/50"
            }`}
            aria-label={`الصورة ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-2 text-center text-[10px] text-ink/30">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function BusOnlyPage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("bus-only");
  const [tripType, setTripType] = useState<
    "round" | "to-makkah" | "from-makkah"
  >("round");
  const [passengers, setPassengers] = useState(2);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const tripOptions = [
    {
      id: "round" as const,
      title: "ذهاب وعودة",
      icon: ArrowRightLeft,
      description:
        "الخيار الأكثر طلباً: مقعد من الرياض إلى مكة المكرمة والعودة في الموعد الذي يناسبك.",
    },
    {
      id: "to-makkah" as const,
      title: "الرياض → مكة",
      icon: ArrowRight,
      description:
        "اتجاه واحد فقط من الرياض إلى مكة المكرمة — مناسب لمن سيطيل الإقامة أو يكمل لوجهة أخرى.",
    },
    {
      id: "from-makkah" as const,
      title: "مكة → الرياض",
      icon: ArrowLeftIcon,
      description:
        "عودة فقط من مكة المكرمة إلى الرياض — انضم لرحلة العودة في المواعيد المتاحة.",
    },
  ];

  const handleSubmit = () => {
    const tripTypeText =
      tripOptions.find((t) => t.id === tripType)?.title || "";

    const message = `السلام عليكم، أرغب في حجز مقعد باص فقط:

📋 تفاصيل الحجز:
• الباقة: حجز مقاعد باص فقط (بدون سكن)
• نوع الرحلة: ${tripTypeText}
• عدد المقاعد: ${passengers}
• التاريخ المفضل: ${date || "لم يحدد"}

👤 بيانات العميل:
• الاسم: ${name || "لم يحدد"}
• الجوال: ${phone || "لم يحدد"}
• ملاحظات: ${notes || "لا يوجد"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966507634181?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/makkah-bg.jpg')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/80 to-emerald-800/60" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-500/30 px-4 py-1.5 text-xs font-semibold text-emerald-200 mb-4">
              دون سكن — مرونة كاملة
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              باصات العمرة من الرياض إلى مكة
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mt-2">
              مقعدك متى ما شئت
            </h2>
            <p className="mt-4 text-emerald-100/80 text-base md:text-lg max-w-xl">
              لديك سكن في مكة أو تزور أهلك؟ احجز مقعد الباص فقط — ذهاب وعودة أو
              اتجاه واحد، من الرياض إلى مكة أو من مكة إلى الرياض.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-emerald-950 transition-transform hover:scale-105"
              >
                احجز مقعدك الآن
                <ChevronLeft size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 md:py-6 bg-white/80 border-b border-ink/5">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-ink/50">
            <Link href="/" className="hover:text-gold-dark">
              الرئيسية
            </Link>
            <span>‹</span>
            <span className="text-emerald-600 font-semibold">
              باصات العمرة من الرياض إلى مكة
            </span>
          </div>
        </div>
      </section>

      {/* Trip Options */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-8 text-center">
            خيارات حجز مقاعد الباص
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {tripOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = tripType === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setTripType(option.id)}
                  className={`rounded-2xl p-6 text-right transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-100"
                      : "border-2 border-ink/10 bg-white hover:border-emerald-200"
                  }`}
                >
                  <div
                    className={`rounded-xl p-3 w-fit mb-4 ${
                      isSelected
                        ? "bg-emerald-500 text-white"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-night">
                    {option.title}
                  </h3>
                  <p className="text-sm text-ink/60 mt-2 leading-relaxed">
                    {option.description}
                  </p>
                  {isSelected && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600">
                      <CheckCircle2 size={14} />
                      <span>محدد</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            أسطولنا — باصات حديثة موديل 2027
          </h2>
          <p className="text-center text-ink/60 mb-10 max-w-2xl mx-auto">
            جميع باصاتنا حديثة وراقية ومريحة، بصيانة دورية وسائقين محترفين على
            طريق الرياض — مكة.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Economy Bus */}
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                  <Bus size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-night">
                    الباص الاقتصادي
                  </h3>
                  <p className="text-sm text-ink/60">راحة ممتازة بسعر مناسب</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-emerald-500" />
                  <span>
                    <strong>49 مقعداً</strong> — 4 صفوف مقاعد مريحة
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CalendarDays size={16} className="text-emerald-500" />
                  <span>موديل 2027 حديث ومكيف</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Clock size={16} className="text-emerald-500" />
                  <span>رحلات شبه يومية</span>
                </li>
              </ul>
            </div>

            {/* VIP Bus */}
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
                  <Crown size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-night">
                    باص VIP الفاخر
                  </h3>
                  <p className="text-sm text-ink/60">مساحة أوسع وتجربة أرقى</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-amber-500" />
                  <span>
                    <strong>30 مقعداً</strong> — 3 صفوف فاخرة بمساحة أكبر
                    للقدمين
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <UsersRound size={16} className="text-amber-500" />
                  <span>عدد ركاب محدود لهدوء أكثر</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CalendarDays size={16} className="text-amber-500" />
                  <span>انطلاق كل اثنين وخميس</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-amber-50/50 p-4 border border-amber-200">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-ink/70">
                <strong>ملاحظة:</strong> الباصات لا توفر خدمة واي فاي ولا
                تُقدَّم وجبات خلال الرحلة — ننصح بتجهيز احتياجاتك قبل الانطلاق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            يناسبك إذا كنت — حجز الباص فقط، لمن؟
          </h2>
          <p className="text-center text-ink/60 mb-10">
            خيار مثالي لمن يبحث عن المرونة الكاملة في رحلة العمرة
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "لديك سكن خاص أو أقارب في مكة المكرمة",
              "تفضل اختيار فندقك بنفسك",
              "تحتاج اتجاهاً واحداً فقط ضمن خطة سفر أوسع",
              "تبحث عن أوفر طريقة منظمة للوصول إلى الحرم",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-soft border border-ink/5"
              >
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-night/80">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-ink/60">
              تبحث عن رحلة متكاملة بالسكن؟ اطلع على{" "}
              <Link
                href="/economy"
                className="text-emerald-600 font-semibold hover:underline"
              >
                الباقة الاقتصادية
              </Link>
              {" أو "}
              <Link
                href="/vip"
                className="text-amber-600 font-semibold hover:underline"
              >
                باقة VIP
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Economy Bus Gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — الباص الاقتصادي (49 مقعداً)
          </h2>
          <p className="text-center text-ink/60 mb-8 max-w-2xl mx-auto">
            باصات حديثة موديل 2027 بـ4 صفوف — رحلات شبه يومية بسعر مناسب
          </p>
          <ImageGallery
            images={economyBusImages}
            title="الباص الاقتصادي — 49 مقعداً"
            badgeColor="gold"
          />

          <div className="text-center mt-6">
            <a
              href="https://wa.me/966507634181"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-emerald-200"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* VIP Bus Gallery */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — باص VIP الفاخر (30 مقعداً)
          </h2>
          <p className="text-center text-ink/60 mb-8 max-w-2xl mx-auto">
            3 صفوف فاخرة فقط — مساحة أوسع وخصوصية أكثر كل اثنين وخميس
          </p>
          <ImageGallery
            images={vipBusImages}
            title="باص VIP الفاخر — 30 مقعداً"
            badgeColor="amber"
          />

          <div className="text-center mt-6">
            <a
              href="https://wa.me/966507634181"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-amber-200"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <div className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700 mb-3">
              <Clock size={14} className="inline ml-1" />
              احجز في أقل من دقيقة
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-night">
              احجز مقعدك بخطوات بسيطة
            </h2>
            <p className="text-ink/60 mt-2 max-w-2xl mx-auto">
              اختر نوع رحلتك وحدد التفاصيل، وسيتم تجهيز رسالة واتساب كاملة —
              أرسلها وسيؤكد لك فريقنا التوفر والسعر مباشرة.
            </p>
          </div>

          {/* Features Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-emerald-50/50 p-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>بدون دفع إلكتروني مسبق — التأكيد عبر واتساب</span>
            </div>
            <div className="hidden h-6 w-px bg-ink/10 md:block" />
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Clock size={18} className="text-emerald-500" />
              <span>رد سريع على مدار اليوم</span>
            </div>
            <div className="hidden h-6 w-px bg-ink/10 md:block" />
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Users size={18} className="text-emerald-500" />
              <span>مقاعد للأفراد والعائلات والمجموعات</span>
            </div>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <button
                  onClick={() => setStep(s)}
                  className={`flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-emerald-500 text-white shadow-emerald-200 shadow-lg"
                      : "bg-white/50 text-ink/30 border border-ink/10"
                  }`}
                >
                  {s}
                </button>
                {s < 4 && (
                  <div
                    className={`h-0.5 w-6 md:w-12 transition-all duration-300 ${
                      step > s ? "bg-emerald-400" : "bg-ink/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 text-[10px] md:text-xs text-ink/50 mb-8">
            <span>نوع الباقة</span>
            <span>تفاصيل الرحلة</span>
            <span>بياناتك</span>
            <span>التأكيد</span>
          </div>

          {/* Booking Form */}
          <div className="max-w-3xl mx-auto bg-ivory rounded-2xl shadow-soft p-6 md:p-8 border border-emerald-100">
            <div className="space-y-6">
              {/* Package Selection */}
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-4 text-center shadow-lg shadow-emerald-100">
                  <Bus size={24} className="mx-auto text-emerald-500" />
                  <p className="text-xs font-bold mt-1 text-emerald-700">
                    باص فقط
                  </p>
                  <p className="text-[10px] text-emerald-500/70">بدون سكن</p>
                </div>
              </div>

              {/* Trip Type Display */}
              <div className="rounded-xl bg-emerald-50/50 p-4 border border-emerald-200">
                <p className="text-sm text-ink/60">نوع الرحلة المختار</p>
                <p className="font-bold text-night">
                  {tripOptions.find((t) => t.id === tripType)?.title}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    عدد المقاعد
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-2 bg-white">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="p-2 hover:bg-ink/5 rounded-lg text-lg"
                    >
                      −
                    </button>
                    <span className="text-xl font-bold">{passengers}</span>
                    <button
                      onClick={() =>
                        setPassengers(Math.min(10, passengers + 1))
                      }
                      className="p-2 hover:bg-ink/5 rounded-lg text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    التاريخ المفضل
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-night mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: عبدالله محمد"
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-night mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-night mb-2">
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="أي تفاصيل إضافية..."
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 bg-white"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-gradient-to-l from-emerald-500 to-emerald-600 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} className="inline ml-2" />
                أرسل الطلب وتواصل واتساب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-emerald-500 to-emerald-600">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <Bus size={48} className="mx-auto text-white/80 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              مقعدك في الباص جاهز
            </h2>
            <p className="text-emerald-50/90 mb-6">
              أرسل لنا الاتجاه والتاريخ وعدد المقاعد وسنؤكد لك الحجز مباشرة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/966507634181"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-700 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                احجز عبر واتساب
              </a>
              <a
                href="tel:+966507634181"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                0507634181
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
