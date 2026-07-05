"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
} from "lucide-react";

// صور الفنادق
const hotelImages = [
  "/hotels/rezk/rezk1.jpeg",
  "/hotels/rezk/rezk2.jpeg",
  "/hotels/rezk/rezk3.jpeg",
  "/hotels/rezk/rezk4.jpeg",
  "/hotels/rezk/rezk5.jpeg",
  "/hotels/rezk/rezk6.jpeg",
  "/hotels/rezk/rezk7.jpeg",
];

// صور الباصات
const busImages = [
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

// مكون عرض الصور مع كاروسيل
function ImageGallery({ images, title }: { images: string[]; title: string }) {
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
              <span className="rounded-full bg-gold/90 px-2.5 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold text-white backdrop-blur-md">
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

export default function EconomyPackagePage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("economy");
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

  const handleSubmit = () => {
    const message = `السلام عليكم، أرغب في حجز رحلة عمرة - الباقة الاقتصادية:

📋 تفاصيل الحجز:
• الباقة: الاقتصادية
• نوع السكن: ${accommodation === "family" ? "عائلة (غرفة خاصة)" : `عزاب (${roomType === "private" ? "غرفة خاصة" : "غرفة مشتركة"})`}
• عدد المعتمرين: ${passengers}
• مدة الرحلة: ${tripDuration} أيام
• التاريخ المفضل: ${date || "لم يحدد"}
• الوجهة: ${date ? "مكة المكرمة" : "مكة والمدينة"}

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
      <section className="relative overflow-hidden bg-night py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/makkah-bg.jpg')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/80 to-night/60" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold text-gold-light mb-4">
              متاحة يومياً
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              رحلات عمرة من الرياض
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gold mt-2">
              الباقة الاقتصادية
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl">
              سعر مناسب وراحة كاملة: باص حديث موديل 2027، فندق 3 نجوم، ومدد مرنة
              تبدأ من 3 أيام — إلى مكة المكرمة فقط أو مكة والمدينة المنورة.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
              >
                احجز مقعدك الآن
                <ChevronLeft size={18} />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                تبحث عن الفخامة؟ باقة VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-ink/50 mb-6">
            <span>الرئيسية</span>
            <span>‹</span>
            <span className="text-gold-dark font-semibold">
              رحلات عمرة من الرياض — الباقة الاقتصادية
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-8">
            ملخص الباقة الاقتصادية
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-soft border border-ink/5">
              <div className="rounded-xl bg-blue-50 p-3 w-fit text-blue-600 mb-3">
                <Bus size={24} />
              </div>
              <h3 className="font-bold text-night">الباص</h3>
              <p className="text-sm text-ink/60 mt-1">
                4 صفوف — 49 مقعداً، موديل 2027 حديث ومريح
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-ink/5">
              <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600 mb-3">
                <Hotel size={24} />
              </div>
              <h3 className="font-bold text-night">الفندق</h3>
              <p className="text-sm text-ink/60 mt-1">
                3 نجوم — غرف نظيفة قريبة من الحرم
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-ink/5">
              <div className="rounded-xl bg-emerald-50 p-3 w-fit text-emerald-600 mb-3">
                <CalendarDays size={24} />
              </div>
              <h3 className="font-bold text-night">الانطلاق</h3>
              <p className="text-sm text-ink/60 mt-1">يومياً من الرياض</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft border border-ink/5">
              <div className="rounded-xl bg-purple-50 p-3 w-fit text-purple-600 mb-3">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-night">المدة</h3>
              <p className="text-sm text-ink/60 mt-1">
                3 أو 5 أيام أو أكثر — شاملة الذهاب والعودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-8 text-center">
            الوجهات — مساران تختار بينهما
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Route 1 */}
            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/30 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-night">
                  الرياض ⇄ مكة المكرمة
                </h3>
              </div>
              <p className="text-ink/70 leading-relaxed">
                المسار الأساسي للباقة الاقتصادية: انطلاق من الرياض إلى مكة
                المكرمة لأداء العمرة، ثم العودة إلى الرياض. متاح يومياً تقريباً
                وبمدد مرنة.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 rounded-xl px-4 py-2">
                <CheckCircle2 size={16} />
                <span>سكن فندق 3 نجوم في مكة</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink/50">
                <span className="line-through">بدون أي رسوم إضافية</span>
              </div>
            </div>

            {/* Route 2 */}
            <div className="rounded-2xl border-2 border-gold/20 bg-gold/5 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-gold/20 p-2 text-gold-dark">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-night">
                  الرياض ⇄ مكة والمدينة
                </h3>
              </div>
              <p className="text-ink/70 leading-relaxed">
                أدِّ العمرة في مكة المكرمة ثم زر المدينة المنورة والمسجد النبوي
                الشريف في رحلة واحدة متكاملة قبل العودة إلى الرياض.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 rounded-xl px-4 py-2">
                <Star size={16} />
                <span>زيارة المسجد النبوي الشريف</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink/50">
                <span>
                  رسوم رمزية 10 ريال للمقعد تُدفع لسائق الباص قبل الانطلاق
                  للمدينة (خارج تكلفة الباقة)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-8 text-center">
            السكن — خيارات سكن للجميع
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-soft border border-ink/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-night">
                    للعائلات — غرفة خاصة
                  </h3>
                </div>
              </div>
              <p className="text-ink/70 leading-relaxed">
                غرفة خاصة بالعائلة بالكامل بسعة 4 أسرّة (وتصل إلى 5 أسرّة في بعض
                الفنادق). خصوصية تامة وراحة لجميع أفراد العائلة، مع إمكانية حجز
                أكثر من غرفة للعائلات الكبيرة.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 rounded-xl px-4 py-2">
                <CheckCircle2 size={16} />
                <span>خصوصية تامة للعائلة</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-soft border border-ink/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-amber-50 p-2 text-amber-600">
                  <Bed size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-night">
                    للعزاب — سرير في غرفة مشتركة أو غرفة خاصة حسب الطلب
                  </h3>
                </div>
              </div>
              <p className="text-ink/70 leading-relaxed">
                نوفر خيارًا اقتصاديًا للأفراد بسرير مريح في غرفة مشتركة مع
                معتمرين آخرين، حيث تتسع الغرف لـ 4 أسرّة، وفي بعض الفنادق لـ 5
                أسرّة، مع الالتزام الكامل بالنظافة والراحة. كما تتوفر غرف خاصة
                حسب الطلب لمن يفضل مزيدًا من الخصوصية.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 rounded-xl px-4 py-2">
                <Star size={16} />
                <span>خيار اقتصادي مثالي</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-night mb-6">
                الباقة تشمل
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>النقل بالباص ذهاباً وعودة من الرياض</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>السكن الفندقي 3 نجوم طوال مدة الرحلة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>باص حديث موديل 2027 مريح ومكيف</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span>تنظيم كامل للرحلة ومتابعة من الفريق</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-night mb-6">
                الباقة لا تشمل
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span>الوجبات — تتوفر مطاعم قريبة من الفنادق</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span>واي فاي داخل الباص</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-500 shrink-0 mt-0.5"
                  />
                  <span>رسوم وجهة المدينة: 10 ريال للمقعد تُدفع للسائق</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Gallery */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — فنادق الباقة الاقتصادية
          </h2>
          <p className="text-center text-ink/60 mb-8">
            فنادق 3 نجوم قريبة من الحرم — نظافة وراحة ومستوى يليق برحلتك
          </p>
          <ImageGallery images={hotelImages} title="فنادق الباقة الاقتصادية" />

          <div className="text-center mt-6">
            <a
              href="https://wa.me/966507634181"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Bus Gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            معرض الصور — باصات الباقة الاقتصادية
          </h2>
          <p className="text-center text-ink/60 mb-8">
            باصات حديثة موديل 2027 بسعة 49 مقعداً — مريحة ومكيفة لرحلة عمرة
            ممتازة
          </p>
          <ImageGallery images={busImages} title="باصات الباقة الاقتصادية" />

          <div className="text-center mt-6">
            <a
              href="https://wa.me/966507634181"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-night">
              احجز في أقل من دقيقة
            </h2>
            <p className="text-ink/60 mt-2">
              احجز مقعدك بخطوات بسيطة. اختر باقتك وحدد تفاصيل رحلتك، وسيتم تجهيز
              رسالة واتساب كاملة بكل التفاصيل
            </p>
          </div>

          {/* Booking Form - Simplified for economy page */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-6 md:p-8">
            <div className="space-y-6">
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
                          ? "border-gold bg-gold/10"
                          : "border-ink/10"
                      }`}
                    >
                      <Building2 size={20} className="mx-auto text-gold" />
                      <span className="text-xs font-semibold">عائلة</span>
                    </button>
                    <button
                      onClick={() => setAccommodation("single")}
                      className={`rounded-xl border-2 p-3 text-center transition-all ${
                        accommodation === "single"
                          ? "border-gold bg-gold/10"
                          : "border-ink/10"
                      }`}
                    >
                      <Bed size={20} className="mx-auto text-gold" />
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
                            ? "border-gold bg-gold/10"
                            : "border-ink/10"
                        }`}
                      >
                        <span className="text-xs font-semibold">غرفة خاصة</span>
                      </button>
                      <button
                        onClick={() => setRoomType("shared")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          roomType === "shared"
                            ? "border-gold bg-gold/10"
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

                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    عدد المعتمرين
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-2">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="p-1"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{passengers}</span>
                    <button
                      onClick={() =>
                        setPassengers(Math.min(10, passengers + 1))
                      }
                      className="p-1"
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
                      className="p-1"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{tripDuration}</span>
                    <button
                      onClick={() =>
                        setTripDuration(Math.min(30, tripDuration + 1))
                      }
                      className="p-1"
                    >
                      +
                    </button>
                  </div>
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-gold"
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-gold"
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-gold"
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
                  className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-gold"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-gradient-to-l from-green-500 to-green-600 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} className="inline ml-2" />
                أرسل الطلب وتواصل واتساب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-gold to-gold-dark">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4">
            جاهز لعمرة اقتصادية مريحة؟
          </h2>
          <p className="text-night/80 mb-6">
            أرسل لنا تاريخك المفضل وعدد الأفراد وسنؤكد لك التوفر والسعر فوراً.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/966507634181"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              احجز عبر واتساب
            </a>
            <a
              href="tel:+966507634181"
              className="inline-flex items-center gap-2 rounded-full border-2 border-night/20 px-6 py-3 text-sm font-bold text-night transition-colors hover:bg-white/20"
            >
              <Phone size={18} />
              0507634181
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
