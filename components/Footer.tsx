"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Music2,
  Bus,
  Crown,
  Home,
  Info,
  MessageCircle,
  CalendarDays,
  ShieldCheck,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-night-deep border-t border-gold/10">
      {/* Decorative top line with gradient */}
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container relative pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gold/10 p-2">
                <Bus size={24} className="text-gold" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  المجيدي لخدمات المعتمرين والزوار{" "}
                  <span className="text-gold">للعمرة</span>
                </p>
                <p className="text-xs text-white/40">حملات عمرة من الرياض</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-white/60 max-w-sm">
              حملة عمرة من الرياض تنظم رحلات منتظمة إلى مكة المكرمة والمدينة
              المنورة بباصات حديثة موديل 2027، مع باقات تشمل النقل والسكن وتناسب
              الأفراد والعائلات.
            </p>
          </div>

          {/* Packages Column */}
          <div>
            <p className="mb-4 text-sm font-bold text-white">الباقات</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#buses"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <Bus size={14} className="text-gold/50" />
                  رحلات عمرة من الرياض — اقتصادية
                </a>
              </li>
              <li>
                <a
                  href="#buses"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <Crown size={14} className="text-gold/50" />
                  رحلات عمرة VIP من الرياض
                </a>
              </li>
              <li>
                <a
                  href="#buses"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <Bus size={14} className="text-gold/50" />
                  باصات العمرة من الرياض إلى مكة
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="mb-4 text-sm font-bold text-white">الموقع</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <Home size={14} className="text-gold/50" />
                  الرئيسية
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <MessageCircle size={14} className="text-gold/50" />
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="flex items-center gap-2 text-white/60 transition-all hover:text-gold hover:translate-x-1"
                >
                  <CalendarDays size={14} className="text-gold/50" />
                  احجز الآن
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="mb-4 text-sm font-bold text-white">تواصل معنا</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <div className="shrink-0 rounded-lg bg-gold/10 p-2">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/40">اتصال مباشر</p>
                  <a
                    href="tel:+966507634181"
                    className="hover:text-gold transition-colors"
                  >
                    0507634181
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <div className="shrink-0 rounded-lg bg-gold/10 p-2">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/40">الموقع</p>
                  <p className="text-sm">
                    البطحاء بجوار المتحف الوطني، الرياض، المملكة العربية
                    السعودية
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-center text-xs text-white/40 md:text-right">
            © 2026 المجيدي لخدمات المعتمرين والزوار — جميع الحقوق محفوظة
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@0507634181wadeeb?_t=8qABVbbicK8&_r=1"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/5 p-2 text-white/40 transition-all hover:bg-gold/20 hover:text-gold hover:scale-110"
              aria-label="TikTok"
            >
              <Music2 size={16} />
            </a>
            <a
              href="https://www.instagram.com/lmjydyllnqlldwly?igsh=MXV5aXpvZTc5Y3kzdw=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/5 p-2 text-white/40 transition-all hover:bg-gold/20 hover:text-gold hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/share/198CHFrY2R/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/5 p-2 text-white/40 transition-all hover:bg-gold/20 hover:text-gold hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>

            <span className="h-5 w-px bg-white/10" />

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="rounded-full bg-gold/10 p-2 text-gold transition-all hover:bg-gold/20 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-gold/50" />
            <span>حملات مرخصة</span>
          </div>
          <span className="h-3 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            <Bus size={12} className="text-gold/50" />
            <span>باصات موديل 2027</span>
          </div>
          <span className="h-3 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            <Phone size={12} className="text-gold/50" />
            <span>دعم على مدار الساعة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
