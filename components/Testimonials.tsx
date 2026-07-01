"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أ. خالد المطيري",
    role: "الرياض",
    text: "تنظيم رائع من أول لحظة حتى العودة، الفندق كان بإطلالة مباشرة على الحرم ولم نشعر بأي تعب في الإجراءات.",
  },
  {
    name: "أ. نورة العتيبي",
    role: "جدة",
    text: "المرشد الديني كان متعاونًا جدًا وشرح لنا المناسك بكل دقة. تجربة روحانية لن أنساها.",
  },
  {
    name: "أ. سعد القحطاني",
    role: "الدمام",
    text: "اخترنا باقة الماسة الملكية ولم نندم لحظة، كل تفصيلة كانت مدروسة بعناية فائقة.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            آراء عملائنا
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            ثقة آلاف المعتمرين منذ ١٨ عامًا
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative rounded-[2rem] border border-night/5 bg-white p-8 shadow-soft"
            >
              <Quote className="absolute left-7 top-7 text-beige" size={36} />
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-gold" />
                ))}
              </div>
              <p className="relative z-10 leading-8 text-ink/70">{t.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-night/5 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-beige text-sm font-bold text-gold-dark">
                  {t.name.split(" ").slice(-1)[0][0]}
                </span>
                <div>
                  <p className="text-sm font-bold text-night">{t.name}</p>
                  <p className="text-xs text-ink/45">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
