"use client";
//commit
import { motion } from "framer-motion";
import {
  Crown,
  Hotel,
  MapPin,
  Sparkles,
  Car,
  Baby,
  Dumbbell,
  UtensilsCrossed,
  MessageCircle,
  Phone,
  Eye,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP = "https://wa.me/966507634181";
const PHONE = "tel:+966507634181";

// VIP Bus Images
const vipBusImages = [
  "/vip-buses/bus5.jpeg",
  "/vip-buses/bus6.jpeg",
  "/vip-buses/bus7.jpeg",
  "/vip-buses/bus4.jpeg",
];

// Voco Hotel Images
const vocoHotelImages = [
  "/voco/voco3.jpeg",
  "/voco/voco5.jpeg",

  "/voco/voco6.jpeg",
  "/voco/voco7.jpeg",
];

// Millennium Hotel Images
const millenniumHotelImages = [
  "/melenium/melenium3.jpeg",
  "/melenium/melenium4.jpeg",

  "/melenium/melenium6.jpeg",

  "/melenium/melenium9.jpeg",
];

const vipHotels = [
  {
    name: "فندق ڤوكو إنتركونتيننتال مكة",
    stars: "5 نجوم",
    rooms: "غرف VIP",
    location: "شارع إبراهيم الخليل — 5 دقائق بالباص من الحرم",
    image: "/voco/voco1.jpeg", // Main image for the hotel card
    gallery: vocoHotelImages, // All images for this hotel
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
    image: "/melenium/melenium8.jpeg", // Main image for the hotel card
    gallery: millenniumHotelImages, // All images for this hotel
    perks: [
      "نظافة واهتمام VIP",
      "مطاعم متنوعة على حساب العميل",
      "توصيل مجاني 24 ساعة للحرم والعودة",
    ],
  },
];

const vipAmenities = [
  { icon: Car, label: "توصيل مجاني 24 ساعة للحرم والعودة" },
  { icon: Baby, label: "حضانة أطفال" },
  { icon: Dumbbell, label: "نادي رياضي على حساب العميل" },
  { icon: UtensilsCrossed, label: "مطاعم وكافيهات متنوعة" },
];

export default function VIPBuses() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="vip" className="relative overflow-hidden bg-ivory py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            درجة رجال الأعمال
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            باصات VIP — رحلات عمرة فاخرة
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            تجربة عمرة راقية مع باصات VIP موديلات 2026 / 2027، رحلتين أسبوعيًا
            فقط (الإثنين والخميس) مع إقامة فندقية 5 نجوم في مكة المكرمة.
          </p>
        </div>

        {/* VIP Buses Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                <Crown size={20} />
              </span>
              <div>
                <h3 className="font-bold text-night">معرض باصات VIP</h3>
                <p className="text-xs text-ink/60">
                  أحدث موديلات 2026 / 2027 — درجة رجال الأعمال
                </p>
              </div>
            </div>
            <span className="text-xs text-ink/40">
              {vipBusImages.length} صور
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {vipBusImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-soft"
                onClick={() => setSelectedImage(src)}
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 right-3 rounded-full bg-night/60 p-2 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Eye size={14} className="text-white" />
                </div>
                {i === 0 && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold text-night">
                    الأحدث
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VIP Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-night p-8 sm:p-12"
        >
          {/* Background blur orbs */}
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

          <div className="relative">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs font-bold text-gold-light backdrop-blur-md">
              <Crown size={14} />
              باصات درجة رجال الأعمال VIP
            </div>

            {/* Title */}
            <h3 className="max-w-2xl text-2xl font-extrabold leading-relaxed text-white sm:text-3xl">
              نظام رحلتين أسبوعيًا — مكة فقط، 3 أيام
            </h3>
            <p className="mt-3 text-sm font-semibold text-gold-light">
              المغادرة: الإثنين والخميس فقط · يشمل إقامة فندق 5 نجوم
            </p>

            {/* Hotels Grid with Images */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {vipHotels.map((h, i) => (
                <motion.div
                  key={h.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="glass overflow-hidden rounded-[1.75rem]"
                >
                  {/* Hotel Main Image */}
                  <div
                    className="relative h-56 w-full cursor-pointer bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url('${h.image}')` }}
                    onClick={() => setSelectedImage(h.image)}
                  >
                    <div className="flex h-full items-start justify-between p-4">
                      <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold text-night">
                        {h.stars}
                      </span>
                      <span className="rounded-full bg-night/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                        اضغط للتكبير
                      </span>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="p-7">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                          <Hotel size={20} />
                        </span>
                        <div>
                          <p className="font-bold text-white">{h.name}</p>
                          <p className="text-xs text-gold-light">{h.stars}</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                        {h.rooms}
                      </span>
                    </div>
                    <p className="mb-4 flex items-center gap-2 text-xs text-white/60">
                      <MapPin size={13} />
                      {h.location}
                    </p>
                    <ul className="space-y-2">
                      {h.perks.map((perk) => (
                        <li
                          key={perk}
                          className="flex items-center gap-2 text-xs text-white/70"
                        >
                          <Sparkles size={12} className="text-gold" />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    {/* Hotel Gallery Thumbnails */}
                    <div className="mt-5">
                      <p className="mb-3 text-[10px] font-semibold text-white/40">
                        معرض الفندق
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {h.gallery.slice(0, 4).map((src, idx) => (
                          <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(src)}
                          >
                            <div
                              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                              style={{ backgroundImage: `url('${src}')` }}
                            />
                            <div className="absolute inset-0 bg-night/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {idx === 3 && h.gallery.length > 4 && (
                              <div className="absolute inset-0 flex items-center justify-center bg-night/60">
                                <span className="text-sm font-bold text-white">
                                  +{h.gallery.length - 4}
                                </span>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Amenities Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {vipAmenities.map((a) => (
                <div
                  key={a.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <a.icon size={18} className="mx-auto mb-2 text-gold-light" />
                  <p className="text-[11px] leading-5 text-white/70">
                    {a.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <p className="mt-6 text-xs leading-6 text-white/45">
              تتوفر أيضًا فنادق 3 و4 نجوم حسب رغبة العميل. الأسعار تختلف باختلاف
              عدد المعتمرين، تاريخ السفر، وعدد الأيام المطلوبة — تواصلوا معنا
              لعرض سعر دقيق.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-7 py-3.5 text-sm font-bold text-night shadow-gold transition-transform hover:scale-105"
              >
                <MessageCircle size={17} />
                احجز رحلتك الآن — واتساب
              </a>
              <a
                href={PHONE}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <Phone size={16} />
                0507634181
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-gold/20 bg-beige px-8 py-7 sm:flex-row"
        >
          <p className="text-center text-sm font-semibold text-night sm:text-right">
            احجز رحلتك الآن وكوّن جزءًا من رحلة روحانية مريحة وفاخرة
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={17} />
            رابط الحجز عبر واتساب
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal for Image Preview */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="معرض الصور"
              className="h-auto max-h-[85vh] w-full object-contain"
            />
            <button
              className="absolute left-4 top-4 rounded-full bg-night/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-night/80"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
