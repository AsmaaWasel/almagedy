"use client";

import { motion } from "framer-motion";
import { Gem, Hotel, Plane, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Hotel,
    title: "إقامة فندقية فاخرة",
    desc: "فنادق خمس نجوم بإطلالة مباشرة على الحرمين الشريفين.",
  },
  {
    icon: Plane,
    title: "تنقّلات خاصة",
    desc: "نقل VIP من المطار وحتى الفنادق بأسطول حديث ومريح.",
  },
  {
    icon: HeartHandshake,
    title: "إشراف ديني متكامل",
    desc: "مرشدون شرعيون يرافقونكم في كل مناسك العمرة.",
  },
  {
    icon: Gem,
    title: "خدمة بروتوكول",
    desc: "إنهاء إجراءات كاملة دون انتظار في الطوابير.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ivory py-28"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        {/* Layered arch image composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[520px] w-full max-w-[460px]"
        >
          {/* Decorative ring */}
          <div className="absolute -top-10 -right-10 h-40 w-40 animate-spin-slow rounded-full border border-gold/25" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-sky/20 blur-2xl" />

          {/* Primary arch image */}
          <div className="group absolute right-0 top-0 h-[420px] w-[300px] overflow-hidden rounded-[2rem] arch-frame shadow-soft">
            <div
              className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-115"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(11,28,44,0.35), transparent 50%), url('https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1200&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Secondary overlapping arch image */}
          <div className="group absolute bottom-0 left-0 h-[300px] w-[214px] overflow-hidden rounded-[1.5rem] arch-frame-sm border-4 border-ivory shadow-soft">
            <div
              className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-115"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(11,28,44,0.3), transparent 50%), url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1000&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Floating gold badge */}
          <div className="glass absolute -left-6 top-12 flex w-44 items-center gap-3 rounded-2xl bg-night/70 p-4 shadow-glass">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <Gem size={18} />
            </span>
            <p className="text-[11px] font-semibold leading-5 text-white">
              تجربة عمرة مصمّمة حسب رغبتكم بالكامل
            </p>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            تجربتنا
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            ضيافة سعودية أصيلة، بمعايير الفخامة العالمية
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-ink/65">
            منذ تأسيسنا في الرياض، حملنا على عاتقنا أن نجعل من رحلة العمرة محطة
            راحة لنقدّم لضيوف الرحمن تجربة لا تُنسى من أول خطوة وحتى العودة.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-3xl border border-night/5 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-beige text-gold-dark">
                  <f.icon size={20} />
                </span>
                <p className="font-bold text-night">{f.title}</p>
                <p className="mt-1 text-xs leading-6 text-ink/55">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
