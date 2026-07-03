"use client";

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
];

/* ---------- VIP Bus Images ---------- */
const vipGallery = [
  "/vip-buses/bus1.jpeg",
  "/vip-buses/bus2.jpeg",
  "/vip-buses/bus3.jpeg",
];

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

          {/* Economy Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {economyGallery.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-[1.75rem] shadow-soft"
              >
                <div
                  className="h-64 w-full scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-115 md:h-72"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
                {i === 0 && (
                  <span className="absolute bottom-4 right-5 rounded-full bg-blue-600/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    اقتصادي • 49 مقعد
                  </span>
                )}
              </div>
            ))}
          </motion.div>

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
        {/* VIP SECTION */}
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

          {/* VIP Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {vipGallery.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-[1.75rem] shadow-soft"
              >
                <div
                  className="h-64 w-full scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-115 md:h-72"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                {i === 0 && (
                  <span className="absolute bottom-4 right-5 rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Crown size={12} className="inline mr-1" />
                    VIP • درجة رجال أعمال
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* VIP Features Card */}
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
