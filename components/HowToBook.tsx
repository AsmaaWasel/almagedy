"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageCircle,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HowToBook() {
  const steps = [
    {
      number: 1,
      title: "اختر باقتك",
      description:
        "حدد الباقة الاقتصادية أو VIP أو مقاعد الباص فقط، واختر التاريخ ونوع السكن المناسب.",
      icon: CalendarDays,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      number: 2,
      title: "أرسل طلبك واتساب",
      description:
        "املأ نموذج الحجز وسيتم تجهيز رسالة واتساب كاملة بتفاصيلك — أرسلها بضغطة واحدة.",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      number: 3,
      title: "أكّد وانطلق",
      description: "يرد عليك فريقنا بالتوفر والسعر وتفاصيل نقطة التجمع .",
      icon: Rocket,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <section
      id="how-to-book"
      className="relative overflow-hidden bg-ivory py-28"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            رحلتك تبدأ من هنا
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            كيف تحجز؟ <br className="sm:hidden" />
            <span className="text-gold-dark">ثلاث خطوات</span> تفصلك عن الحرم
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            احجز رحلة عمرتك بسهولة وسرعة في ثلاث خطوات بسيطة
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold/30 via-gold/20 to-transparent md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col items-center gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-[2rem] bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-xl font-extrabold text-white shadow-lg`}
                    >
                      {step.number}
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 rounded-2xl ${step.bgColor} p-3 ${step.textColor}`}
                      >
                        <step.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-extrabold text-night">
                          {step.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-ink/70">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-gold/20" />
                    <div className="absolute -top-1 -left-1 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-gold/20" />
                  </motion.div>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="relative hidden md:flex md:w-0 md:items-center md:justify-center">
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full ${step.bgColor} shadow-lg`}
                  >
                    <step.icon
                      size={32}
                      className={`${step.textColor} stroke-[1.5]`}
                    />
                  </div>
                </div>

                {/* Empty spacer for desktop layout */}
                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block rounded-full bg-gold/10 px-8 py-4">
              <p className="text-sm text-ink/60">
                ✨ جاهز لبدء رحلتك؟{" "}
                <a
                  href="https://wa.me/966507634181"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-gold-dark hover:underline"
                >
                  تواصل معنا الآن
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
