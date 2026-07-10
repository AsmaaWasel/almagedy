"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  Send,
  Mail,
  Clock,
  ShieldCheck,
  Users,
  Star,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
  Facebook,
  Instagram,
  Music2,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleWhatsApp = () => {
    const message = `السلام عليكم، 
    
الاسم: ${name || "لم يحدد"}

الاستفسار: ${inquiry || "لم يحدد"}

أرجو الرد على استفساري جزاكم الله خيراً.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966507634181?text=${encodedMessage}`, "_blank");
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "الطريقة الأسرع للاستفسار والحجز",
      value: "0507634181",
      link: "https://wa.me/966507634181",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: Phone,
      title: "اتصال مباشر",
      description: "تحدث مع فريقنا مباشرة",
      value: "0507634181",
      link: "tel:+966507634181",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "الموقع",
      description: "الرياض، المملكة العربية السعودية",
      value: "رحلاتنا تنطلق من الرياض إلى مكة المكرمة والمدينة المنورة",
      link: null,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  const socialLinks = [
    {
      icon: Music2,
      name: "TikTok",
      link: "https://www.tiktok.com/@0507634181wadeeb?_t=8qABVbbicK8&_r=1",
      color: "hover:bg-black/10",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/lmjydyllnqlldwly?igsh=MXV5aXpvZTc5Y3kzdw==",
      color: "hover:bg-pink-50",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/share/198CHFrY2R/",
      color: "hover:bg-blue-50",
    },
  ];

  const quickReplies = [
    "أرغب بمعرفة سعر الباقة الاقتصادية لعائلة من 4 أفراد",
    "هل تتوفر رحلات VIP يوم الخميس القادم؟",
    "أرغب بحجز مقعد باص فقط من الرياض إلى مكة",
    "ما هي مدة الرحلة للباقة الاقتصادية؟",
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/makkah-bg.jpg')" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/80 to-emerald-800/60" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full bg-emerald-500/30 px-4 py-1.5 text-xs font-semibold text-emerald-200 mb-4">
              <Heart size={14} className="inline ml-1" />
              نسعد بخدمتك
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              تواصل معنا
            </h1>
            <p className="text-emerald-100/80 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              سواء كان لديك استفسار أو ترغب بتأكيد حجزك — واتساب واتصال مباشر،
              بدون تعقيد وبدون انتظار.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 md:py-6 bg-white/80 border-b border-ink/5">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-ink/50">
            <Link href="/" className="hover:text-gold-dark">
              الرئيسية
            </Link>
            <span>‹</span>
            <span className="text-emerald-600 font-semibold">اتصل بنا</span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl ${method.bgColor} p-6 md:p-8 border border-${method.textColor}/20 text-center`}
                >
                  <div
                    className={`rounded-full bg-gradient-to-r ${method.color} p-3 w-fit mx-auto mb-4 text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-night">
                    {method.title}
                  </h3>
                  <p className="text-sm text-ink/60 mt-1">
                    {method.description}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      target={
                        method.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.link.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className={`mt-4 inline-block rounded-full bg-gradient-to-r ${method.color} px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-night">
                        {method.value}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold text-night mb-4 text-center">
            تابعنا على منصات التواصل
          </h2>
          <p className="text-center text-ink/60 mb-8">
            ابقَ على اطلاع بآخر عروضنا ورحلاتنا عبر متابعة حساباتنا
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group flex items-center gap-3 rounded-full border-2 border-ink/10 px-6 py-3 transition-all duration-300 ${social.color} hover:border-gold/30 hover:shadow-lg`}
                >
                  <Icon
                    size={20}
                    className="text-ink/60 group-hover:text-gold-dark transition-colors"
                  />
                  <span className="font-semibold text-night/70 group-hover:text-night transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-night">
                استفسار سريع
              </h2>
              <p className="text-ink/60 mt-2">
                اكتب استفسارك وسيتم تجهيزه في رسالة واتساب — أرسلها بضغطة واحدة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-soft border border-ink/5">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="اسمك الكريم"
                    className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-night mb-2">
                    استفسارك
                  </label>
                  <textarea
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    rows={4}
                    placeholder="مثال: أرغب بمعرفة سعر الباقة الاقتصادية لعائلة من 4 أفراد نهاية الأسبوع القادم..."
                    className="w-full rounded-xl border-2 border-ink/10 px-4 py-3 outline-none focus:border-emerald-400 transition-all resize-none"
                  />
                </div>

                {/* Quick Reply Suggestions */}
                <div>
                  <p className="text-xs text-ink/50 mb-2">
                    أو اختر استفساراً سريعاً:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => setInquiry(reply)}
                        className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full rounded-full bg-gradient-to-l from-emerald-500 to-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  إرسال عبر واتساب
                </button>

                <p className="text-center text-xs text-ink/40">
                  تُفتح محادثة واتساب برسالتك جاهزة — لن يتم إرسال أي شيء قبل
                  موافقتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Clock, label: "رد سريع", value: "خلال دقائق" },
              { icon: ShieldCheck, label: "خدمة موثوقة", value: "رحلات مرخصة" },
              { icon: Users, label: "عملاء سعداء", value: "+500" },
              { icon: Star, label: "تقييم ممتاز", value: "4.9/5" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-ivory/50 border border-ink/5"
                >
                  <Icon size={24} className="mx-auto text-emerald-500 mb-2" />
                  <p className="text-2xl font-extrabold text-night">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink/50">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-emerald-500 to-emerald-600">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              رحلتك تبدأ برسالة واحدة
            </h2>
            <p className="text-emerald-50/90 mb-6">
              احجز الآن أو استفسر — فريق المجيدي لخدمات المعتمرين والزوار في
              خدمتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/966507634181"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-700 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                احجز عبر واتساب
              </a>
              <a
                href="tel:+966507634181"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                0507634181
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
