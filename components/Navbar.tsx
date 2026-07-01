"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#Programs", label: "البرامج" },
  { href: "#buses", label: "الباصات" },
  { href: "#vip", label: "حملة VIP" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-xl shadow-soft py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - right side in RTL */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="المجيدي لخدمات المعتمرين والزوار"
            width={220}
            height={70}
            priority
            className="h-14 w-auto object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-lg font-bold transition-colors duration-500",
                scrolled ? "text-night" : "text-white",
              )}
            >
              المجيدي لخدمات المعتمرين والزوار
            </span>
            <span
              className={cn(
                "text-[11px] tracking-widest transition-colors duration-500",
                scrolled ? "text-gold-dark" : "text-gold-light",
              )}
            >
              الرياض · خدمات العمرة
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:right-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                scrolled
                  ? "text-ink/80 hover:text-night"
                  : "text-white/90 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/966507634181"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-5 py-2.5 text-sm font-semibold text-night shadow-gold transition-transform duration-300 hover:scale-[1.04] sm:flex"
          >
            <MessageCircle size={16} />
            احجز عبر واتساب
          </a>
          <button
            onClick={() => setOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors duration-300 lg:hidden",
              scrolled
                ? "border-night/15 text-night"
                : "border-white/30 text-white",
            )}
            aria-label="فتح القائمة"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-night/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute inset-y-0 right-0 flex w-[78%] max-w-sm flex-col gap-2 bg-ivory p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-night/10 text-night"
                  aria-label="إغلاق"
                >
                  <X size={18} />
                </button>
              </div>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-beige hover:text-night"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/966500000000"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-5 py-3 text-sm font-semibold text-night shadow-gold"
              >
                <MessageCircle size={16} />
                احجز عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
