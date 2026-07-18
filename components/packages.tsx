"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Crown,
  Ticket,
  Hotel,
  CalendarDays,
  Users,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Package {
  id?: number
  name?: string
  description?: string
  title?: string
  subtitle?: string
  icon?: any
  badge?: string
  features?: string[]
  button?: string
  featured?: boolean
}

const defaultPackages = [
  {
    title: "الباقة الاقتصادية",
    subtitle: "رحلات يومية من الرياض بسعر مناسب",
    icon: <Bus size={30} />,
    badge: "الأكثر حجزاً",
    features: [
      "النقل عبر باص سياحي حديث",
      "4 صفوف - 49 مقعدًا",
      "الإقامة في فندق 3 نجوم",
      "رحلة إلى مكة فقط أو مكة والمدينة",
      "3 أو 4 أو 5 أيام أو أكثر حسب الطلب",
      "غرف مشتركة للعزاب وغرف خاصة للعائلات",
    ],
    button: "تفاصيل أكثر عن الباقة والحجز",
  },
  {
    title: "باقة VIP",
    subtitle: "رحلتان أسبوعياً (الإثنين والخميس) بمستوى خدمة أعلى",
    icon: <Crown size={30} />,
    badge: "الأكثر رفاهية",
    featured: true,
    features: [
      "النقل عبر باص VIP حديث",
      "3 صفوف فقط - 30 مقعداً",
      "فنادق 4 أو 5 نجوم",
      "3 أيام في مكة المكرمة",
      "مناسبة للعزاب والعائلات",
    ],
    button: "تفاصيل باقة VIP والحجز",
  },
  {
    title: "حجز مقعد بالباص",
    subtitle: "مقاعد باصات العمرة من الرياض إلى مكة دون سكن",
    icon: <Ticket size={30} />,
    badge: "مرونة أكبر",
    features: [
      "ذهاب وعودة أو اتجاه واحد",
      "باصات حديثة ومكيفة",
      "مناسب لمن لديه سكن في مكة",
    ],
    button: "تفاصيل حجز المقعد",
  },
];

function PackagesSectionClient() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/public/packages');
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        }
      } catch (error) {
        console.error('Failed to fetch packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const displayPackages = packages.length > 0 ? packages : defaultPackages;

  return (
    <section id="offers" className="relative overflow-hidden bg-night py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            حملات العمرة
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white">
            الباقات التي نقدمها
          </h2>

          <p className="mt-4 text-lg text-white/70">
            اختر الباقة المناسبة لك واستمتع برحلة عمرة مريحة وآمنة مع أفضل
            الخدمات.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {displayPackages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
                item.featured
                  ? "scale-[1.03] border-gold bg-gradient-to-b from-gold/15 to-white/5 shadow-[0_0_40px_rgba(212,175,55,0.18)]"
                  : "border-white/10 bg-white/5 hover:border-gold/40"
              }`}
            >
              {/* Badge */}
              <div className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1 text-xs font-bold text-night">
                {item.badge}
              </div>

              <div className="p-8">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-night shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/70">{item.subtitle}</p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {item.features && item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-gold"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-10 border-t border-white/10 pt-6">
                  <a
                    href="https://wa.me/966507634181?text=السلام عليكم، أريد معرفة تفاصيل الباقات."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-dark px-6 py-4 font-bold text-night transition duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {item.button}
                    <ArrowLeft
                      size={18}
                      className="transition group-hover:-translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <Bus className="mx-auto mb-4 text-gold" size={32} />
            <h4 className="font-bold text-white">باصات حديثة</h4>
            <p className="mt-2 text-sm text-white/70">
              موديلات 2025 / 2026 / 2027 مجهزة بأعلى وسائل الراحة.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <Hotel className="mx-auto mb-4 text-gold" size={32} />
            <h4 className="font-bold text-white">فنادق متنوعة</h4>
            <p className="mt-2 text-sm text-white/70">
              إقامة في فنادق 3 و4 و5 نجوم حسب اختيار العميل.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <Users className="mx-auto mb-4 text-gold" size={32} />
            <h4 className="font-bold text-white">مناسبة للجميع</h4>
            <p className="mt-2 text-sm text-white/70">
              برامج مخصصة للعزاب والعائلات مع خيارات تناسب كل الميزانيات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PackagesSection() {
  return <PackagesSectionClient />;
}
