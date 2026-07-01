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
    desc: "راحة كاملة دون توقف أثناء الطريق",
  },
];

const fleetGallery = [
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

/* ---------- Trip programs ---------- */
const tripPrograms = [
  { days: "برنامج 3 أيام", route: "مكة والمدينة" },
  { days: "برنامج 3 أيام", route: "مكة فقط" },
  { days: "برنامج 4 أيام", route: "مكة والمدينة / أو مكة فقط" },
  { days: "برنامج 5 أيام", route: "مكة والمدينة / أو مكة فقط" },
];

/* ---------- VIP hotel options ---------- */
const vipHotels = [
  {
    name: "فندق ڤوكو إنتركونتيننتال مكة",
    stars: "5 نجوم",
    rooms: "غرف VIP",
    location: "شارع إبراهيم الخليل — 5 دقائق بالباص من الحرم",
    perks: [
      "استقبال VIP",
      "حضانة أطفال",
      "نادي رياضي على حساب العميل",
      "مطاعم متنوعة وكافيهات",
      "توصيل مجاني 24 ساعة للحرم والعودة",
    ],
  },
  {
    name: "فندق ميلينيوم مكة",
    stars: "5 نجوم — تصنيف وزارة السياحة",
    rooms: "غرف ثلاثية ورباعية",
    location: "شارع إبراهيم الخليل",
    perks: [
      "نظافة واهتمام VIP",
      "مطاعم متنوعة على حساب العميل",
      "توصيل مجاني 24 ساعة للحرم والعودة",
    ],
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

        {/* Fleet image gallery — asymmetrical layered composition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {fleetGallery.map((src, i) => (
            <div
              key={src}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem] shadow-soft",
                i === 0
                  ? "col-span-2 row-span-2 h-72 lg:h-[22rem]"
                  : "h-44 lg:h-[10.4rem]",
              )}
            >
              <div
                className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
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

        {/* Trip programs */}
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
            {tripPrograms.map((p, i) => (
              <motion.div
                key={p.days + p.route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-3xl border border-night/5 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky/15 text-sky-dark">
                  <MapPin size={18} />
                </span>

                <p className="font-bold text-night">{p.days}</p>

                <p className="mt-1 text-sm leading-6 text-ink/60">{p.route}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
