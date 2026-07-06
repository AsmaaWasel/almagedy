"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Home,
  ClipboardList,
  Bus,
  Crown,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/economic", label: "الباقة الاقتصادية", icon: ClipboardList },
  { href: "/vip", label: "باقة VIP", icon: Bus },
  { href: "/buses", label: "حجز الباصات", icon: Crown },
  { href: "/contact", label: "تواصل معنا", icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // امنع سكرول الصفحة خلف المنيو لما تكون مفتوحة على الموبايل
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
        scrolled ? "bg-ivory shadow-soft py-2 md:py-3" : "bg-blue py-3 md:py-4",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* الشعار - يمين الشاشة في RTL */}
        <a href="#home" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpeg"
            alt="المجيدي لخدمات المعتمرين والزوار"
            width={200}
            height={60}
            priority
            className="h-9 w-auto object-contain sm:h-10 md:h-12"
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span
              className={cn(
                "text-sm font-bold transition-colors duration-500 lg:text-lg",
                scrolled ? "text-night" : "text-white",
              )}
            >
              المجيدي لخدمات المعتمرين والزوار
            </span>
            <span
              className={cn(
                "text-[10px] tracking-widest transition-colors duration-500 lg:text-[11px]",
                scrolled ? "text-gold-dark" : "text-gold-light",
              )}
            >
              الرياض · خدمات العمرة
            </span>
          </span>
        </a>

        {/* نافيجيشن الديسكتوب */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:right-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                scrolled
                  ? "text-night/80 hover:text-night"
                  : "text-white/90 hover:text-white",
              )}
            >
              <l.icon size={16} className="shrink-0" />
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/966507634181"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-3.5 py-2 text-xs font-semibold text-night shadow-gold transition-transform duration-300 hover:scale-[1.04] sm:flex sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden md:inline">احجز عبر واتساب</span>
            <span className="md:hidden">احجز</span>
          </a>
          <button
            onClick={() => setOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl border-2 transition-all duration-300 sm:h-12 sm:w-12 lg:hidden",
              scrolled
                ? "border-gold/40 bg-gold/20 text-gold-dark hover:bg-gold/30"
                : "border-white/40 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30",
            )}
            aria-label="فتح القائمة"
          >
            <Menu
              size={22}
              className="transition-transform duration-300 hover:scale-110"
            />
          </button>
        </div>
      </div>

      {/* منيو الموبايل */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col gap-2 overflow-y-auto bg-ivory p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between border-b border-gold/20 pb-4">
                <span className="text-lg font-bold text-gold-dark sm:text-xl">
                  القائمة
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-night/10 text-night transition-colors hover:bg-night/20"
                  aria-label="إغلاق"
                >
                  <X size={20} />
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
                  className="flex items-center gap-3 rounded-2xl border-b border-gold/10 px-4 py-3.5 text-base font-medium text-night/80 transition-all last:border-0 hover:bg-gold/20 hover:text-gold-dark"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                    <l.icon size={18} />
                  </span>
                  {l.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/966507634181"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-5 py-3.5 text-sm font-semibold text-night shadow-gold transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                احجز عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
