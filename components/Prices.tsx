"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Users,
  CalendarDays,
  Clock,
  Wallet,
  Info,
  MessageCircle,
  Bus,
  MapPin,
  AlertCircle,
} from "lucide-react";

const WHATSAPP = "https://wa.me/966507634181";

export default function PricingSection() {
  return (
    <section className="bg-ivory py-16">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            التسعير
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            أسعار الرحلات
          </h2>
          <p className="mt-3 text-lg font-medium text-ink/70">
            تعرف على العوامل المؤثرة في التسعير
          </p>
        </motion.div>

        {/* بطاقات العوامل المؤثرة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* عامل 1: نوع الباقة */}
          <div className="group rounded-2xl bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-white shadow-lg shadow-gold/30 transition-all group-hover:scale-110">
              <Crown size={24} />
            </div>
            <h4 className="text-base font-bold text-night">نوع الباقة</h4>
            <p className="mt-1 text-sm text-ink/60">اقتصادية - VIP</p>
            <p className="mt-2 text-xs text-ink/40">تؤثر على مستوى الخدمات</p>
          </div>

          {/* عامل 2: عدد الأفراد */}
          <div className="group rounded-2xl bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all group-hover:scale-110">
              <Users size={24} />
            </div>
            <h4 className="text-base font-bold text-night">عدد الأفراد</h4>
            <p className="mt-1 text-sm text-ink/60">فردي - عائلي</p>
            <p className="mt-2 text-xs text-ink/40">يؤثر على عدد الغرف</p>
          </div>

          {/* عامل 3: تاريخ السفر */}
          <div className="group rounded-2xl bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all group-hover:scale-110">
              <CalendarDays size={24} />
            </div>
            <h4 className="text-base font-bold text-night">تاريخ السفر</h4>
            <p className="mt-1 text-sm text-ink/60">موسم - غير موسم</p>
            <p className="mt-2 text-xs text-ink/40">يؤثر على أسعار الفنادق</p>
          </div>

          {/* عامل 4: عدد الأيام */}
          <div className="group rounded-2xl bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-all group-hover:scale-110">
              <Clock size={24} />
            </div>
            <h4 className="text-base font-bold text-night">عدد الأيام</h4>
            <p className="mt-1 text-sm text-ink/60">٣ - عدد أيام حسب الطلب</p>
            <p className="mt-2 text-xs text-ink/40">
              يؤثر على التكلفة الإجمالية
            </p>
          </div>
        </motion.div>

        {/* ملاحظة مهمة + زر التواصل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 rounded-2xl bg-white p-6 shadow-soft md:p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* الجهة اليمنى - النص */}
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-2 text-gold-dark">
                <Info size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-night">ملاحظة مهمة:</p>
                <p className="text-sm text-ink/70 leading-relaxed">
                  أسعار الرحلات تختلف حسب <strong>نوع الباقة</strong> و{" "}
                  <strong>عدد الأفراد</strong> و <strong>تاريخ السفر</strong> و{" "}
                  <strong>عدد الأيام المطلوبة</strong>.
                  <br className="hidden sm:block" />
                  للحصول على عرض سعر دقيق، يرجى التواصل معنا.
                </p>
              </div>
            </div>

            {/* الجهة اليسرى - الزر */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-6 py-3 text-sm font-bold text-night shadow-lg shadow-gold/30 transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              تواصل الآن لمعرفة الأسعار
            </a>
          </div>
        </motion.div>

        {/* ======================================== */}
        {/* ✅ تنبيه رحلة المدينة المنورة وزيارة المزارات */}
        {/* ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 shadow-soft md:p-8"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            {/* الجهة اليمنى - النص */}
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2.5 text-blue-600">
                <Bus size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  <p className="text-sm font-bold text-night">
                    رحلة المدينة المنورة وزيارة المزارات
                  </p>
                </div>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  في حال كانت الرحلة تشمل <strong>المدينة المنورة</strong>، يتم
                  إضافة <strong className="text-blue-600">١٠ ريال</strong> للفرد
                  تدفع لسائق الباص لزيارة المزارات الدينية والتاريخية في
                  المدينة.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-200/70 px-3 py-1 text-xs font-semibold text-blue-700">
                    🕌 مسجد قباء
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-200/70 px-3 py-1 text-xs font-semibold text-blue-700">
                    ⛰️ جبل أحد
                  </span>
                </div>
              </div>
            </div>

            {/* الجهة اليسرى - سعر التذكرة */}
            <div className="shrink-0 rounded-2xl bg-blue-600 px-6 py-3 text-center text-white shadow-lg shadow-blue-200">
              <p className="text-xs font-bold opacity-80">رسوم إضافية</p>
              <p className="text-2xl font-extrabold">١٠ ريال</p>
              <p className="text-xs opacity-80">للشخص الواحد</p>
            </div>
          </div>

          {/* تنبيه إضافي */}
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-blue-100/70 p-3">
            <AlertCircle size={16} className="mt-0.5 shrink-0 text-blue-600" />
            <p className="text-xs text-blue-700">
              <strong>ملاحظة:</strong> هذه الرسوم تدفع مباشرة لسائق الباص في يوم
              الرحلة، وليست جزء من تكلفة الباقة الأساسية.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
