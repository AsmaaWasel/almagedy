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
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WHATSAPP = "https://wa.me/966507634181";
const PHONE = "tel:+966507634181";

/* ---------- Fleet specs ---------- */
const busSpecs = [
  {
    icon: Bus,
    label: "موديلات 2025 / 2026 / 2027",
    desc: "أحدث إصدارات الباصات السياحية",
  },
  {
    icon: ShieldCheck,
    label: "أنظمة سلامة كاملة",
    desc: "باصات مزوّدة بجميع معايير الأمان الحديثة",
  },
  {
    icon: Zap,
    label: "شاحن عند كل مقعد",
    desc: "لا تنقطع عن التواصل طوال الرحلة",
  },
  {
    icon: Bath,
    label: "دورة مياه داخل الباص",
    desc: "",
  },
];

// تغيير إلى 3 صور فقط للباصات
const fleetGallery = [
  "/buses/bus1.jpeg",
  "/buses/bus2.jpeg",
  "/buses/bus3.jpeg",
];

/* ---------- Trip programs - تغيير إلى صور ---------- */
const programImages = [
  {
    image: "programs/program1.jpeg",
    title: "برنامج 3 أيام",
    subtitle: "مكة والمدينة",
    bg: "from-amber-500/20 to-orange-500/20",
  },
  {
    image: "programs/program2.jpeg",
    title: "برنامج 3 أيام",
    subtitle: "مكة فقط",
    bg: "from-emerald-500/20 to-teal-500/20",
  },
  {
    image: "programs/program3.jpeg",
    title: "برنامج 4 أيام",
    subtitle: "مكة والمدينة",
    bg: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: "programs/program4.jpeg",
    title: "برنامج 5 أيام",
    subtitle: "مكة والمدينة",
    bg: "from-blue-500/20 to-cyan-500/20",
  },
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
            باصات سياحية حديثة برفقة برامج رحلات يومية من الرياض
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            أسطول من أحدث الباصات السياحية موديلات ٢٠٢٥ / ٢٠٢٦ / ٢٠٢٧، مزوّدة
            بكل مقومات الراحة والسلامة، مع رحلات يومية منظّمة من الرياض إلى مكة
            والمدينة.
          </p>
        </div>

        {/* Specs grid */}
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {busSpecs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-3xl border border-night/5 bg-white p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-beige text-gold-dark">
                <s.icon size={22} />
              </span>
              <p className="text-sm font-bold text-night">{s.label}</p>
              <p className="mt-1 text-xs leading-5 text-ink/55">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Fleet image gallery — 3 صور فقط */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {fleetGallery.map((src, i) => (
            <div
              key={src}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem] shadow-soft",
                i === 0 ? "md:col-span-1" : "md:col-span-1",
              )}
            >
              <div
                className="h-64 w-full scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-115 md:h-72"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
              {i === 0 && (
                <span className="absolute bottom-4 right-5 rounded-full bg-night/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  موديلات 2025 — 2027
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Daily trips banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-night px-8 py-7 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <CalendarDays size={22} />
            </span>
            <div>
              <p className="font-bold text-white">رحلاتنا يومية من الرياض</p>
              <p className="text-sm text-white/55">
                باصات جديدة موديل 2026 / 2027 — مغادرة يومية مضمونة
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-6 py-3 text-sm font-bold text-night shadow-gold transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            استفسر عن أقرب رحلة
          </a>
        </motion.div>

        {/* Trip programs - 4 صور */}
        <div id="Programs" className="mt-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-night lg:text-3xl">
              برامج رحلاتنا المتنوعة
            </h3>

            <p className="mt-4 text-lg leading-8 text-ink/60">
              رحلات عمرة يومية
              <span className="mx-1 inline-flex items-center gap-1 font-semibold text-gold-dark">
                <span>من الرياض</span>
                <span>إلى</span>
                <span>مكة المكرمة والمدينة المنورة</span>
              </span>
              ، عبر باصات حديثة موديلات
              <span className="font-semibold text-gold-dark">
                {" "}
                2026 / 2027{" "}
              </span>
              مجهزة بأحدث وسائل الراحة.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programImages.map((p, i) => (
              <motion.div
                key={p.title + p.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-2"
              >
                {/* صورة البرنامج */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* محتوى البرنامج */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                      <CalendarDays size={12} />
                      {p.title}
                    </span>
                  </div>
                  <p className="text-lg font-bold leading-tight">
                    {p.subtitle}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                    <MapPin size={14} />
                    <span>رحلة عمرة</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
