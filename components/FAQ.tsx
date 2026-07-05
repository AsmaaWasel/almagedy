"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CalendarDays,
  Hotel,
  Users,
  MessageCircle,
  Bus,
  Crown,
  Sparkles,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: React.ElementType;
};

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "هل الرحلات متاحة يومياً من الرياض؟",
      answer:
        "نعم، تتوفر رحلات العمرة بشكل شبه يومي مع باقاتنا الاقتصادية. أما باقات VIP فتنطلق مرتين أسبوعياً (الإثنين والخميس). ننصح بالحجز المبكر لتأكيد المقعد في التاريخ المناسب لك.",
      icon: CalendarDays,
    },
    {
      id: 2,
      question: "ماذا تشمل باقات العمرة؟",
      answer:
        "تشمل باقاتنا النقل عبر باصات سياحية حديثة موديلات 2025-2027، والإقامة في فنادق 3 نجوم (اقتصادي) أو 4-5 نجوم (VIP). الباقات تشمل أيضاً خدمات الدعم والمساعدة طوال الرحلة. أما باقة 'باص فقط' فتشمل النقل بدون سكن.",
      icon: Hotel,
    },
    {
      id: 3,
      question: "هل توجد رحلات للعائلات؟",
      answer:
        "نعم، نوفر خيارات سكن مناسبة للعائلات بغرف خاصة. يمكنكم اختيار نوع السكن 'عائلة' أثناء الحجز للحصول على غرفة مستقلة. كما أن باصاتنا مريحة ومناسبة لجميع أفراد العائلة.",
      icon: Users,
    },
    {
      id: 4,
      question: "كيف أحجز مقعدي؟",
      answer:
        "الحجز سهل وسريع: اختر باقتك المناسبة، حدد تفاصيل رحلتك (نوع السكن، عدد المعتمرين، التاريخ)، أدخل بياناتك، ثم أرسل طلبك عبر واتساب. سيقوم فريقنا بتأكيد التوفر والسعر مباشرة — بدون دفع مسبق إلكتروني.",
      icon: MessageCircle,
    },
    {
      id: 5,
      question: "هل يمكنني حجز مقاعد باص فقط بدون فندق؟",
      answer:
        "نعم، نوفر باقة 'حجز مقاعد باص فقط' التي تتيح لك المرونة الكاملة. يمكنك اختيار الذهاب والعودة أو اتجاه واحد فقط، دون الحاجة للإقامة في فندق. هذه الباقة مثالية لمن يفضل تنظيم سكنه بنفسه.",
      icon: Bus,
    },
    {
      id: 6,
      question: "ما الفرق بين الباقة الاقتصادية و VIP؟",
      answer:
        "الباقة الاقتصادية: باص 49 مقعداً، فندق 3 نجوم، رحلات شبه يومية. باقة VIP: باص فاخر 3 صفوف فقط، فندق 4 أو 5 نجوم، رحلتان أسبوعياً (اثنين وخميس)، وخدمات إضافية مميزة. اختر ما يناسب ميزانيتك واحتياجاتك.",
      icon: Crown,
    },
    {
      id: 7,
      question: "هل يوجد دفع إلكتروني مسبق عند الحجز؟",
      answer:
        "لا، نؤمن بتجربة حجز مريحة. يتم التأكيد عبر واتساب أولاً، وسيخبرك فريقنا بالتوفر والسعر. يتم الدفع بعد التأكيد والتنسيق المباشر، مما يمنحك راحة البال والأمان في التعامل.",
      icon: ShieldCheck,
    },
    {
      id: 8,
      question: "كم مدة الرحلة وما هي نقطة التجمع؟",
      answer:
        "يمكنك اختيار مدة الرحلة حسب رغبتك (من 1 إلى 30 يوماً). نقطة التجمع يتم تحديدها وتأكيدها مع فريقنا بعد الحجز، وسيتم إرسال جميع التفاصيل عبر واتساب قبل موعد الانطلاق.",
      icon: MapPin,
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden bg-ivory py-28">
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
            اسألنا عن كل شيء
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            أسئلة <span className="text-gold-dark">شائعة</span>
          </h2>
          <p className="mt-4 leading-8 text-ink/60">
            كل ما تحتاج معرفته عن رحلات العمرة، الباقات، الحجز والمزيد
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className={`rounded-2xl border-2 bg-white/80 transition-all duration-300 backdrop-blur-sm ${
                    isOpen
                      ? "border-gold shadow-lg shadow-gold/10"
                      : "border-ink/10 hover:border-ink/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center gap-4 p-5 text-right"
                  >
                    {/* Icon */}
                    <div
                      className={`shrink-0 rounded-xl p-2.5 transition-all duration-300 ${
                        isOpen
                          ? "bg-gold text-white"
                          : "bg-ink/5 text-gold-dark group-hover:bg-gold/10"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Question */}
                    <span className="flex-1 text-base font-bold text-night transition-colors duration-300 group-hover:text-gold-dark">
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 rounded-full p-1 transition-colors ${
                        isOpen
                          ? "bg-gold/10 text-gold"
                          : "text-ink/30 group-hover:text-gold"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ink/5 px-5 pb-5 pt-3">
                          <p className="leading-relaxed text-ink/70">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-full bg-gold/10 px-8 py-4">
            <p className="text-sm text-ink/60">
              لم تجد إجابتك؟{" "}
              <a
                href="https://wa.me/966507634181"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-gold-dark hover:underline"
              >
                <MessageCircle size={16} />
                تواصل معنا عبر واتساب
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
