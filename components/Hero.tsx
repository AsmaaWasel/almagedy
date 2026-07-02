"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  PlayCircle,
  ChevronDown,
  ShieldCheck,
  Star,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);
  return (
    <span>
      {val.toLocaleString("ar")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const y = useParallax();

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-night py-28 lg:h-[100vh] lg:min-h-[760px] lg:py-0"
    >
      {/* Cinematic background */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${y * 0.15}px) scale(1.1)` }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 20%, rgba(98,178,227,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(200,164,77,0.12), transparent 55%), linear-gradient(180deg, #0B1C2C 0%, #070F18 100%), url('https://images.unsplash.com/photo-1565019011521-254f162e8a32?q=80&w=2000&auto=format&fit=crop')",
            backgroundBlendMode: "overlay, overlay, normal, luminosity",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/30" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Decorative arch silhouette */}
      <div className="pointer-events-none absolute -left-20 bottom-0 hidden h-[75%] w-[420px] opacity-[0.07] lg:block">
        <svg viewBox="0 0 300 420" fill="none" className="h-full w-full">
          <path
            d="M0,420 L0,140 C0,62 67,0 150,0 C233,0 300,62 300,140 L300,420"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:gap-12 lg:pt-16">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-gold-light backdrop-blur-md">
            <Star size={14} className="fill-gold text-gold" />
            رحلات عمرة فاخرة من الرياض إلى رحاب الحرمين
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.25] text-white sm:text-5xl lg:text-[3.4rem]">
            عِشْ رحلة <span className="text-gradient-gold">العمرة</span> بفخامةٍ
            <br className="hidden sm:block" /> تليق بمقامِ بيت الله الحرام
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            نرافقكم خطوة بخطوة في رحلة روحانية استثنائية، فنادق متنوعة 3 نجوم ,4
            نجوم , 5 نجوم حسب الطلب من العملاء والميزانية .
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-8 py-4 text-sm font-bold text-night shadow-gold transition-transform duration-300 hover:scale-105"
            >
              احجز رحلتك الآن
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
            <a
              href="#Programs"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
            >
              <PlayCircle size={18} />
              تصفّح البرامج
            </a>
          </div>

          {/* Animated stats */}
          {/* Social Media Links */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="mb-5 text-sm font-semibold text-white/70">
              تابعنا على منصات التواصل
            </p>

            <div className="flex flex-wrap gap-3">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@0507634181wadeeb?_t=8qABVbbicK8&_r=1"
                target="_blank"
                rel="noreferrer"
                className="
      group
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/15
      bg-white/5
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      backdrop-blur-md
      transition-all
      hover:border-gold/50
      hover:bg-gold
      hover:text-night
      "
              >
                <Music2
                  size={17}
                  className="text-gold group-hover:text-night"
                />
                TikTok
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lmjydyllnqlldwly?igsh=MXV5aXpvZTc5Y3kzdw=="
                target="_blank"
                rel="noreferrer"
                className="
      group
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/15
      bg-white/5
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      backdrop-blur-md
      transition-all
      hover:border-gold/50
      hover:bg-gold
      hover:text-night
      "
              >
                <Instagram
                  size={17}
                  className="text-gold group-hover:text-night"
                />
                Instagram
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/198CHFrY2R/"
                target="_blank"
                rel="noreferrer"
                className="
      group
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/15
      bg-white/5
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      backdrop-blur-md
      transition-all
      hover:border-gold/50
      hover:bg-gold
      hover:text-night
      "
              >
                <Facebook
                  size={17}
                  className="text-gold group-hover:text-night"
                />
                Facebook
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center lg:order-2 lg:block"
        >
          <div className="absolute -top-10 left-6 hidden h-24 w-24 rounded-full bg-sky/30 blur-3xl lg:block" />
          <div className="absolute -bottom-10 right-10 hidden h-32 w-32 rounded-full bg-gold/20 blur-3xl lg:block" />

          {/* Rotating Kaaba Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px]"
          >
            {/* Outer rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gold/30"
            />

            {/* Inner rotating ring (opposite direction, slightly smaller) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-gold/20"
            />

            {/* Orbiting star/dot on the outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-gold" />
            </motion.div>

            {/* Glow behind the image */}
            <div className="absolute h-[170px] w-[170px] rounded-full bg-gold/10 blur-3xl sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px] lg:h-[280px] lg:w-[280px]" />

            {/* Static Kaaba image with gentle float */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative h-[170px] w-[170px] overflow-hidden rounded-full border-4 border-gold/40 shadow-glass sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px] lg:h-[280px] lg:w-[280px]"
            >
              <img
                src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop"
                alt="الكعبة المشرفة"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </motion.div>

            {/* Small badge under the image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="glass absolute -bottom-3 flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 shadow-glass sm:-bottom-4 sm:gap-2 sm:px-5 sm:py-2.5"
            >
              <ShieldCheck size={14} className="shrink-0 text-gold sm:size-4" />
              <span className="text-[10px] font-semibold text-white sm:text-xs">
                رحلات موثوقة ومرخّصة
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] tracking-widest">مرّر للأسفل</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
