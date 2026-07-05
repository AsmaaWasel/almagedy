"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bus,
  Crown,
  Hotel,
  Users,
  User,
  Phone,
  Calendar,
  MessageCircle,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Clock,
  ShieldCheck,
  UsersRound,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

type PackageType = "economy" | "vip" | "bus-only";

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] =
    useState<PackageType>("economy");
  const [accommodation, setAccommodation] = useState<"family" | "single">(
    "family",
  );
  const [passengers, setPassengers] = useState(1);
  const [tripDuration, setTripDuration] = useState(3);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const packages = [
    {
      id: "economy" as PackageType,
      title: "الباقة الاقتصادية",
      icon: Bus,

      features: ["باص حديث 49 مقعداً", "فندق 3 نجوم", "انطلاق شبه يومي"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
    },
    {
      id: "vip" as PackageType,
      title: "باقة VIP",
      icon: Crown,

      features: ["باص فاخر 3 صفوف", "فندق 4 أو 5 نجوم", "الاثنين والخميس"],
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
    },
    {
      id: "bus-only" as PackageType,
      title: "حجز مقاعد باص فقط",
      icon: Users,

      features: ["ذهاب وعودة أو اتجاه واحد", "بدون فندق", "مرونة كاملة"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
    },
  ];

  const handleSubmit = () => {
    // Prepare WhatsApp message
    const message = `السلام عليكم، أرغب في حجز رحلة عمرة:

📋 تفاصيل الحجز:
• الباقة: ${packages.find((p) => p.id === selectedPackage)?.title}
• نوع السكن: ${accommodation === "family" ? "عائلة (غرفة خاصة)" : "عزاب (سرير في غرفة مشتركة)"}
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
    <section id="booking" className="relative overflow-hidden bg-ivory py-28">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            ابدأ رحلتك الآن
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            احجز في <span className="text-gold-dark">أقل من دقيقة</span>
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            احجز مقعدك بخطوات بسيطة. اختر باقتك وحدد تفاصيل رحلتك، وسيتم تجهيز
            رسالة واتساب كاملة بكل التفاصيل — أرسلها وسيؤكد لك فريقنا التوفر
            والسعر مباشرة.
          </p>
        </motion.div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-[2rem] bg-white/80 p-4 shadow-soft backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-sm text-ink/70">
            <ShieldCheck size={18} className="text-gold" />
            <span>بدون دفع إلكتروني مسبق — التأكيد عبر واتساب</span>
          </div>
          <div className="hidden h-6 w-px bg-ink/10 md:block" />
          <div className="flex items-center gap-2 text-sm text-ink/70">
            <Clock size={18} className="text-gold" />
            <span>رد سريع على مدار اليوم</span>
          </div>
          <div className="hidden h-6 w-px bg-ink/10 md:block" />
          <div className="flex items-center gap-2 text-sm text-ink/70">
            <UsersRound size={18} className="text-gold" />
            <span>مقاعد للأفراد والعائلات والمجموعات</span>
          </div>
        </motion.div>

        {/* Steps Progress */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <button
                  onClick={() => setStep(s)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-gold text-night shadow-gold"
                      : "bg-white/50 text-ink/30"
                  }`}
                >
                  {s}
                </button>
                {s < 4 && (
                  <div
                    className={`h-0.5 w-8 md:w-12 transition-all duration-300 ${
                      step > s ? "bg-gold" : "bg-ink/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center gap-4 text-xs text-ink/50 md:gap-12">
            <span>نوع الباقة</span>
            <span>تفاصيل الرحلة</span>
            <span>بياناتك</span>
            <span>التأكيد</span>
          </div>
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 rounded-[2rem] bg-white p-6 shadow-soft md:p-10"
        >
          {/* Step 1: Choose Package */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-extrabold text-night">
                اختر الباقة المناسبة لك
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {packages.map((pkg) => {
                  const Icon = pkg.icon;
                  const isSelected = selectedPackage === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`group relative rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                        isSelected
                          ? `${pkg.borderColor} bg-gradient-to-br ${pkg.bgColor} shadow-lg`
                          : "border-ink/10 bg-white/50 hover:border-ink/20"
                      }`}
                    >
                      <div
                        className={`mb-3 inline-block rounded-xl bg-gradient-to-r ${pkg.color} p-2.5 text-white shadow-lg`}
                      >
                        <Icon size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-night">
                        {pkg.title}
                      </h4>

                      <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {isSelected && (
                        <div className="absolute -right-1 -top-1">
                          <div className="rounded-full bg-gold p-1">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
                >
                  التالي
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Trip Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-extrabold text-night">
                تفاصيل الرحلة
              </h3>

              {/* VIP Info */}
              {selectedPackage === "vip" && (
                <div className="rounded-2xl bg-amber-50 p-4 border border-amber-200">
                  <p className="text-sm text-amber-800">
                    ✨ رحلات VIP تنطلق كل اثنين وخميس أسبوعياً — 3 أيام في مكة
                    المكرمة (شاملة يومي الذهاب والعودة) مع فندق 4 أو 5 نجوم.
                  </p>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {/* Accommodation */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    نوع السكن
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setAccommodation("family")}
                      className={`rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                        accommodation === "family"
                          ? "border-gold bg-gold/10"
                          : "border-ink/10 hover:border-ink/20"
                      }`}
                    >
                      <Users size={24} className="mx-auto text-gold" />
                      <p className="mt-1 text-sm font-semibold text-night">
                        عائلة
                      </p>
                      <p className="text-xs text-ink/50">غرفة خاصة</p>
                    </button>
                    <button
                      onClick={() => setAccommodation("single")}
                      className={`rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                        accommodation === "single"
                          ? "border-gold bg-gold/10"
                          : "border-ink/10 hover:border-ink/20"
                      }`}
                    >
                      <User size={24} className="mx-auto text-gold" />
                      <p className="mt-1 text-sm font-semibold text-night">
                        عزاب
                      </p>
                      <p className="text-xs text-ink/50">سرير في غرفة مشتركة</p>
                    </button>
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    عدد المعتمرين
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-3">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="rounded-full bg-ink/5 p-2 text-ink/50 hover:bg-ink/10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-2xl font-bold text-night">
                      {passengers}
                    </span>
                    <button
                      onClick={() =>
                        setPassengers(Math.min(10, passengers + 1))
                      }
                      className="rounded-full bg-ink/5 p-2 text-ink/50 hover:bg-ink/10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Trip Duration - NEW */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    مدة الرحلة (عدد الأيام)
                  </label>
                  <div className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-3">
                    <button
                      onClick={() =>
                        setTripDuration(Math.max(1, tripDuration - 1))
                      }
                      className="rounded-full bg-ink/5 p-2 text-ink/50 hover:bg-ink/10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-night">
                        {tripDuration}
                      </span>
                      <span className="text-xs text-ink/50">أيام</span>
                    </div>
                    <button
                      onClick={() =>
                        setTripDuration(Math.min(30, tripDuration + 1))
                      }
                      className="rounded-full bg-ink/5 p-2 text-ink/50 hover:bg-ink/10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    التاريخ المفضل (اثنين أو خميس)
                  </label>
                  <div className="relative">
                    <Calendar
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40"
                    />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 pr-12 outline-none transition-all focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink/60 transition-all hover:border-ink/20"
                >
                  <ChevronLeft size={18} />
                  السابق
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
                >
                  التالي
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Your Data */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-extrabold text-night">بياناتك</h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: عبدالله محمد"
                    className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none transition-all focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    رقم الجوال
                  </label>
                  <div className="relative">
                    <Phone
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05xxxxxxxx"
                      className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 pr-12 outline-none transition-all focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-night">
                    ملاحظات إضافية (اختياري)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="أي تفاصيل إضافية تود إضافتها..."
                    className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none transition-all focus:border-gold"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink/60 transition-all hover:border-ink/20"
                >
                  <ChevronLeft size={18} />
                  السابق
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-bold text-night transition-transform hover:scale-105"
                >
                  مراجعة الحجز
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-night">
                مراجعة الحجز
              </h3>

              <div className="mx-auto max-w-md rounded-2xl bg-ivory/50 p-6 text-right">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">الباقة:</span>
                    <span className="font-semibold text-night">
                      {packages.find((p) => p.id === selectedPackage)?.title}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">نوع السكن:</span>
                    <span className="font-semibold text-night">
                      {accommodation === "family"
                        ? "عائلة (غرفة خاصة)"
                        : "عزاب (سرير في غرفة مشتركة)"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">عدد المعتمرين:</span>
                    <span className="font-semibold text-night">
                      {passengers}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">مدة الرحلة:</span>
                    <span className="font-semibold text-night">
                      {tripDuration} أيام
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">التاريخ:</span>
                    <span className="font-semibold text-night">
                      {date || "لم يحدد"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink/10 pb-2">
                    <span className="text-ink/60">الاسم:</span>
                    <span className="font-semibold text-night">
                      {name || "لم يحدد"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink/60">الجوال:</span>
                    <span className="font-semibold text-night">
                      {phone || "لم يحدد"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-ink/60">
                سيتم تجهيز رسالة واتساب بكل التفاصيل — أرسلها وسيؤكد لك فريقنا
                التوفر والسعر مباشرة.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink/60 transition-all hover:border-ink/20"
                >
                  <ChevronLeft size={18} />
                  تعديل
                </button>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-green-500 to-green-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition-transform hover:scale-105"
                >
                  <MessageCircle size={18} />
                  أرسل الطلب وتواصل واتساب
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
