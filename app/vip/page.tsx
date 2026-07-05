"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bus,
  Hotel,
  MapPin,
  Clock,
  CalendarDays,
  Users,
  User,
  Crown,
  Star,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Building2,
  Bed,
  ShieldCheck,
  Sparkles,
  Wifi,
  UtensilsCrossed,
  Award,
  Armchair,
  Clock8,
  UsersRound,
  Calendar,
  Heart,
  Info,
} from "lucide-react";

// صور الفنادق VIP
const vipHotelImages = [
  "/melenium/melenium1.jpeg",
  "/melenium/melenium2.jpeg",
  "/melenium/melenium3.jpeg",
  "/melenium/melenium4.jpeg",
  "/melenium/melenium5.jpeg",
  "/melenium/melenium6.jpeg",
  "/melenium/melenium7.jpeg",
  "/melenium/melenium8.jpeg",
  "/melenium/melenium9.jpeg",
  "/voco/voco1.jpeg",
  "/voco/voco2.jpeg",
  "/voco/voco3.jpeg",
  "/voco/voco4.jpeg",
  "/voco/voco5.jpeg",
  "/voco/voco6.jpeg",
  "/voco/voco7.jpeg",
  "/voco/voco8.jpeg",
];

// صور الباصات VIP
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

      {/* Navigation Arrows */}
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

      {/* Dots */}
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
                ? "w-6 md:w-8 bg-amber-400"
                : "w-1.5 md:w-2 bg-amber-200/50 hover:bg-amber-300/70"
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

export default function VipPackagePage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("vip");
  const [accommodation, setAccommodation] = useState<"family" | "single">(
    "family",
  );
  const [roomType, setRoomType] = useState<"private" | "shared">("private");
  const [passengers, setPassengers] = useState(2);
  const [tripDuration, setTripDuration] = useState(3);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const vipFeatures = [
    {
      icon: Armchair,
      title: "مساحة شخصية أوسع",
      description:
        "ثلاثة صفوف فقط في الباص تعني مقاعد أعرض ومساحة أكبر للقدمين — وصول إلى مكة بكامل نشاطك.",
    },
    {
      icon: Hotel,
      title: "فنادق من الطراز الأول",
      description:
        "سكن في فنادق 4 و5 نجوم بخدمة راقية وموقع قريب، لتكون رحلتك عبادة وراحة معاً.",
    },
    {
      icon: UsersRound,
      title: "عدد ركاب محدود",
      description:
        "30 معتمراً فقط في كل رحلة — هدوء أكثر وتنظيم أسرع في الانطلاق والوصول.",
    },
    {
      icon: Calendar,
      title: "مواعيد ثابتة",
      description: "انطلاق منتظم كل اثنين وخميس يسهل عليك ترتيب إجازتك مسبقاً.",
    },
    {
      icon: Clock8,
      title: "مدة مثالية",
      description:
        "ثلاثة أيام مدروسة شاملة يومي الذهاب والعودة — عمرة كاملة دون إرهاق أو تعطيل طويل عن العمل.",
    },
    {
      icon: Heart,
      title: "عناية خاصة",
      description:
        "فريقنا يرافق رحلات VIP باهتمام مضاعف من لحظة الحجز حتى عودتك إلى الرياض.",
    },
  ];

  const handleSubmit = () => {
    const message = `السلام عليكم، أرغب في حجز رحلة عمرة - باقة VIP:

📋 تفاصيل الحجز:
• الباقة: VIP (فاخرة)
• نوع السكن: ${accommodation === "family" ? "عائلة (غرفة خاصة)" : `عزاب (${roomType === "private" ? "غرفة خاصة" : "غرفة مشتركة"})`}
• عدد المعتمرين: ${passengers}
• مدة الرحلة: ${tripDuration} أيام
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
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/makkah-bg.jpg')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/80 to-amber-800/60" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-amber-500/30 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-4">
              <CalendarDays size={14} className="inline ml-1" />
              كل اثنين وخميس أسبوعياً
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              رحلات عمرة VIP من الرياض
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mt-2">
              فخامة في كل تفصيلة
            </h2>
            <p className="mt-4 text-amber-100/80 text-base md:text-lg max-w-xl">
              باص فاخر بثلاثة صفوف و30 مقعداً فقط، وفندق 4 أو 5 نجوم بجوار الحرم
              — ثلاثة أيام مكرسة بالكامل لعبادتك وراحتك.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-amber-950 transition-transform hover:scale-105"
              >
                احجز مقعد VIP
                <ChevronLeft size={18} />
              </a>
              <Link
                href="/economy"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 px-6 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-400/10 transition-colors"
              >
                الباقة الاقتصادية
              </Link>
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
            <span className="text-amber-600 font-semibold">
              رحلات عمرة VIP من الرياض
            </span>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-8 text-center">
            ملخص باقة VIP
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-soft border border-amber-100">
              <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600 mb-3">
                <Bus size={24} />
              </div>
              <h3 className="font-bold text-night">الباص</h3>
              <p className="text-sm text-ink/60 mt-1">
                3 صفوف فاخرة — 30 مقعداً فقط
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-amber-100">
              <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600 mb-3">
                <Hotel size={24} />
              </div>
              <h3 className="font-bold text-night">الفندق</h3>
              <p className="text-sm text-ink/60 mt-1">
                4 أو 5 نجوم — على مقربة من الحرم
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-amber-100">
              <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600 mb-3">
                <CalendarDays size={24} />
              </div>
              <h3 className="font-bold text-night">الانطلاق</h3>
              <p className="text-sm text-ink/60 mt-1">
                كل اثنين وخميس أسبوعياً
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-amber-100">
              <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600 mb-3">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-night">المدة</h3>
              <p className="text-sm text-ink/60 mt-1">
                3 أيام في مكة — شاملة الذهاب والعودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            تجربة VIP — لماذا يختارها معتمرونا؟
          </h2>
          <p className="text-center text-ink/60 mb-10 max-w-2xl mx-auto">
            مميزات حصرية تجعل رحلة العمرة مع باقة VIP استثنائية بكل المقاييس
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vipFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-soft hover:shadow-lg transition-shadow"
                >
                  <div className="rounded-xl bg-amber-100 p-3 w-fit text-amber-700 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-night mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-soft border border-amber-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl font-extrabold text-night">
                  الباقة تشمل
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>النقل بباص VIP فاخر ذهاباً وعودة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>السكن في فندق 4 أو 5 نجوم</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>غرف خاصة للعائلات ومشتركة للعزاب</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>تنظيم ومتابعة كاملة طوال الرحلة</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-soft border border-amber-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-rose-100 p-2 text-rose-600">
                  <XCircle size={24} />
                </div>
                <h2 className="text-2xl font-extrabold text-night">
                  الباقة لا تشمل
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span>الوجبات — خيارات مطاعم راقية حول الفندق</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span>واي فاي داخل الباص</span>
                </li>
                <li className="flex items-start gap-3 bg-amber-50 rounded-xl p-3">
                  <Info size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-ink/70">
                    وجهة باقة VIP هي مكة المكرمة فقط. إن رغبت بزيارة المدينة
                    المنورة، اطلع على{" "}
                    <Link
                      href="/economy"
                      className="text-amber-600 font-semibold hover:underline"
                    >
                      الباقة الاقتصادية
                    </Link>{" "}
                    التي تتيح مسار مكة والمدينة.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — فنادق باقة VIP
          </h2>
          <p className="text-center text-ink/60 mb-8 max-w-2xl mx-auto">
            فنادق 4 و5 نجوم بجوار الحرم — مستوى راقٍ يناسب رحلة عمرة استثنائية
          </p>
          <ImageGallery
            images={vipHotelImages}
            title="فنادق باقة VIP"
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

      {/* Bus Gallery */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — باصات باقة VIP
          </h2>
          <p className="text-center text-ink/60 mb-8 max-w-2xl mx-auto">
            باصات فاخرة 3 صفوف بسعة 30 مقعداً فقط — خصوصية وراحة استثنائية
            لرحلتك
          </p>
          <ImageGallery
            images={vipBusImages}
            title="باصات باقة VIP"
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
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-700 mb-3">
              <Clock size={14} className="inline ml-1" />
              احجز في أقل من دقيقة
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-night">
              احجز مقعدك بخطوات بسيطة
            </h2>
            <p className="text-ink/60 mt-2 max-w-2xl mx-auto">
              اختر باقتك وحدد تفاصيل رحلتك، وسيتم تجهيز رسالة واتساب كاملة بكل
              التفاصيل — أرسلها وسيؤكد لك فريقنا التوفر والسعر مباشرة.
            </p>
          </div>

          {/* Features Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-amber-50/50 p-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <ShieldCheck size={18} className="text-amber-500" />
              <span>بدون دفع إلكتروني مسبق — التأكيد عبر واتساب</span>
            </div>
            <div className="hidden h-6 w-px bg-ink/10 md:block" />
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Clock size={18} className="text-amber-500" />
              <span>رد سريع على مدار اليوم</span>
            </div>
            <div className="hidden h-6 w-px bg-ink/10 md:block" />
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Users size={18} className="text-amber-500" />
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
                      ? "bg-amber-500 text-white shadow-amber-200 shadow-lg"
                      : "bg-white/50 text-ink/30 border border-ink/10"
                  }`}
                >
                  {s}
                </button>
                {s < 4 && (
                  <div
                    className={`h-0.5 w-6 md:w-12 transition-all duration-300 ${
                      step > s ? "bg-amber-400" : "bg-ink/10"
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

          {/* Booking Form - Simplified for VIP page */}
          <div className="max-w-3xl mx-auto bg-ivory rounded-2xl shadow-soft p-6 md:p-8 border border-amber-100">
            <div className="space-y-6">
              {/* Package Selection - Simplified */}
              <div className="grid gap-3 md:grid-cols-3">
                <div
                  className={`rounded-xl border-2 p-4 text-center ${selectedPackage === "economy" ? "border-blue-500 bg-blue-50" : "border-ink/10"}`}
                >
                  <Bus size={24} className="mx-auto text-blue-500" />
                  <p className="text-xs font-bold mt-1">اقتصادية</p>
                  <p className="text-[10px] text-ink/50">3 نجوم</p>
                </div>
                <div
                  className={`rounded-xl border-2 p-4 text-center ${selectedPackage === "vip" ? "border-amber-500 bg-amber-50 shadow-lg shadow-amber-100" : "border-ink/10"}`}
                >
                  <Crown size={24} className="mx-auto text-amber-500" />
                  <p className="text-xs font-bold mt-1 text-amber-700">VIP</p>
                  <p className="text-[10px] text-amber-500/70">4-5 نجوم</p>
                </div>
                <div
                  className={`rounded-xl border-2 p-4 text-center ${selectedPackage === "bus-only" ? "border-emerald-500 bg-emerald-50" : "border-ink/10"}`}
                >
                  <Users size={24} className="mx-auto text-emerald-500" />
                  <p className="text-xs font-bold mt-1">باص فقط</p>
                  <p className="text-[10px] text-ink/50">بدون سكن</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    نوع السكن
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setAccommodation("family")}
                      className={`rounded-xl border-2 p-3 text-center transition-all ${
                        accommodation === "family"
                          ? "border-amber-500 bg-amber-50"
                          : "border-ink/10"
                      }`}
                    >
                      <Building2 size={20} className="mx-auto text-amber-500" />
                      <span className="text-xs font-semibold">عائلة</span>
                    </button>
                    <button
                      onClick={() => setAccommodation("single")}
                      className={`rounded-xl border-2 p-3 text-center transition-all ${
                        accommodation === "single"
                          ? "border-amber-500 bg-amber-50"
                          : "border-ink/10"
                      }`}
                    >
                      <Bed size={20} className="mx-auto text-amber-500" />
                      <span className="text-xs font-semibold">عزاب</span>
                    </button>
                  </div>
                </div>

                {accommodation === "single" && (
                  <div>
                    <label className="block text-sm font-bold text-night mb-2">
                      نوع الغرفة
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setRoomType("private")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          roomType === "private"
                            ? "border-amber-500 bg-amber-50"
                            : "border-ink/10"
                        }`}
                      >
                        <span className="text-xs font-semibold">غرفة خاصة</span>
                      </button>
                      <button
                        onClick={() => setRoomType("shared")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          roomType === "shared"
                            ? "border-amber-500 bg-amber-50"
                            : "border-ink/10"
                        }`}
                      >
                        <span className="text-xs font-semibold">
                          غرفة مشتركة
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    عدد المعتمرين
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-2">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="p-2 hover:bg-ink/5 rounded-lg"
                    >
                      −
                    </button>
                    <span className="text-xl font-bold">{passengers}</span>
                    <button
                      onClick={() =>
                        setPassengers(Math.min(10, passengers + 1))
                      }
                      className="p-2 hover:bg-ink/5 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    مدة الرحلة (أيام)
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-2">
                    <button
                      onClick={() =>
                        setTripDuration(Math.max(1, tripDuration - 1))
                      }
                      className="p-2 hover:bg-ink/5 rounded-lg"
                    >
                      −
                    </button>
                    <span className="text-xl font-bold">{tripDuration}</span>
                    <button
                      onClick={() =>
                        setTripDuration(Math.min(30, tripDuration + 1))
                      }
                      className="p-2 hover:bg-ink/5 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-night mb-2">
                  التاريخ المفضل (اثنين أو خميس)
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-amber-400"
                />
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-amber-400"
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-amber-400"
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-amber-400"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-gradient-to-l from-amber-500 to-amber-600 py-3 text-sm font-bold text-white shadow-lg shadow-amber-200 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} className="inline ml-2" />
                أرسل الطلب وتواصل واتساب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-amber-500 to-amber-600">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <Crown size={48} className="mx-auto text-white/80 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              ارتقِ بتجربة عمرتك مع VIP
            </h2>
            <p className="text-amber-50/90 mb-6">
              مقاعد محدودة في كل رحلة — احجز مبكراً لضمان مقعدك يوم الاثنين أو
              الخميس القادم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/966507634181"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-700 shadow-lg transition-transform hover:scale-105"
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
