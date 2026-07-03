"use client";

import { motion } from "framer-motion";
import { Hotel, Crown, MessageCircle } from "lucide-react";

/* ---------- صور فنادق 3 نجوم ---------- */
const threeStarImages = [
  "/hotels/rezk/rezk1.jpeg",
  "/hotels/rezk/rezk5.jpeg",
  "/hotels/rezk/rezk6.jpeg",
];

/* ---------- صور فنادق 5 نجوم ---------- */
const fiveStarImages = [
  "/melenium/melenium1.jpeg",
  "/melenium/melenium2.jpeg",
  "/melenium/melenium3.jpeg",
  "/voco/voco2.jpeg",
  "/voco/voco3.jpeg",
  "/voco/voco5.jpeg",
  "/voco/voco6.jpeg",
  "/voco/voco7.jpeg",
  "/voco/voco8.jpeg",
];

const WHATSAPP = "https://wa.me/966507634181";

export default function HotelsGallery() {
  return (
    <section className="bg-ivory py-16">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            السكن
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            فنادق 3 و 5 نجوم
          </h2>
          {/* ✅ الوصف الجديد */}
          <p className="mt-3 text-lg font-medium text-ink/70">
            اختر ما يناسبك حسب الميزانية
          </p>
        </div>

        {/* ======================================== */}
        {/* قسم صور فنادق 3 نجوم - باقة اقتصادية */}
        {/* ======================================== */}
        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Hotel size={24} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-night">
                  فنادق 3 نجوم
                </h3>
                {/* ✅ إضافة باقة اقتصادية */}
                <p className="text-sm font-semibold text-blue-600">
                  🏷️ باقة اقتصادية
                </p>
              </div>
            </div>
            {/* ✅ زر تفاصيل أكثر */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:scale-105 hover:bg-blue-700"
            >
              <MessageCircle size={18} />
              تفاصيل أكثر عن الفنادق والحجز
            </a>
          </div>

          {/* شبكة الصور - 3 نجوم */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {threeStarImages.map((src, index) => (
              <motion.div
                key={`3star-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={src}
                  alt={`فندق 3 نجوم ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* شارة توضيحية بسيطة */}
                <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  ⭐⭐⭐ 3 نجوم
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================== */}
        {/* قسم صور فنادق 5 نجوم - باقة VIP */}
        {/* ======================================== */}
        <div className="mt-20">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 text-white shadow-lg shadow-gold/30">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-night">
                  فنادق 5 نجوم
                </h3>
                {/* ✅ إضافة باقة VIP */}
                <p className="text-sm font-semibold text-gold-dark">
                  👑 باقة VIP
                </p>
              </div>
            </div>
            {/* ✅ زر تفاصيل أكثر */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-5 py-2.5 text-sm font-bold text-night shadow-lg shadow-gold/30 transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              تفاصيل أكثر عن الفنادق والحجز
            </a>
          </div>

          {/* شبكة الصور - 5 نجوم */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fiveStarImages.map((src, index) => (
              <motion.div
                key={`5star-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={src}
                  alt={`فندق 5 نجوم ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* شارة توضيحية بسيطة */}
                <div className="absolute bottom-3 left-3 rounded-full bg-gold/80 px-3 py-1 text-xs font-bold text-night backdrop-blur-sm">
                  👑⭐⭐⭐⭐⭐ 5 نجوم
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
