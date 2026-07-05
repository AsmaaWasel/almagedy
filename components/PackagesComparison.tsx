"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Hotel,
  MapPin,
  Clock3,
  BedDouble,
  Info,
  CheckCircle2,
} from "lucide-react";

const rows = [
  {
    icon: Bus,
    title: "الباص",
    economy: "باص سياحي اقتصادي - 4 صفوف - 49 مقعد",
    vip: "باص VIP بمقاعد أكثر راحة - 3 صفوف - 30 مقعد",
  },
  {
    icon: Hotel,
    title: "الفندق",
    economy: "فندق 3 نجوم",
    vip: "فندق 5 نجوم",
  },
  {
    icon: MapPin,
    title: "الوجهة",
    vip: "مكة المكرمة",
    economy: "مكة المكرمة والمدينة المنورة",
  },
  {
    icon: Clock3,
    title: "المدة",
    economy: "3 / 4 / 5 أيام + تمديد حسب الطلب",
    vip: "3 أيام",
  },
  {
    icon: BedDouble,
    title: "السكن",
    economy: "غرف خاصة أو مشتركة",
    vip: "غرف خاصة أو مشتركة",
  },
];

export default function PackagesComparison() {
  return (
    <section className="bg-[#faf9f6] py-20" id="comparison">
      <div className="mx-auto max-w-7xl px-5">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-dark">
            مقارنة الباقات
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-night md:text-5xl">
            اختر الباقة المناسبة لك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-night/70">
            مقارنة سريعة بين الباقة الاقتصادية وباقة VIP لمساعدتك في اختيار
            البرنامج الأنسب.
          </p>
        </motion.div>

        {/* الجدول */}
        <div className="overflow-x-auto rounded-3xl border border-gold/20 bg-white shadow-xl">
          <table className="min-w-[850px] w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-l from-gold to-gold-dark text-night">
                <th className="p-6 text-right text-lg font-bold">المقارنة</th>

                <th className="p-6 text-center text-lg font-bold">
                  الباقة الاقتصادية
                </th>

                <th className="p-6 text-center text-lg font-bold">باقة VIP</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.title}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-[#fcfbf8]"}`}
                >
                  <td className="border-b border-gold/10 p-6">
                    <div className="flex items-center gap-3 font-semibold text-night">
                      <div className="rounded-xl bg-gold/15 p-2">
                        <row.icon size={20} className="text-gold-dark" />
                      </div>

                      {row.title}
                    </div>
                  </td>

                  <td className="border-b border-gold/10 p-6 text-center text-night/80">
                    {row.economy}
                  </td>

                  <td className="border-b border-gold/10 p-6 text-center font-medium text-night">
                    {row.vip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* الملاحظات */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-gold/20 bg-gradient-to-l from-[#fffdf7] to-[#fff8e8] p-8 shadow-lg"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-green-600" />
              <p className="text-night/80">
                مدة الرحلة تشمل <b>يوم الذهاب ويوم العودة.</b>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-green-600" />
              <p className="text-night/80">
                جميع الباصات <b>لا توفر خدمة Wi-Fi.</b>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-green-600" />
              <p className="text-night/80">
                الباقات <b>لا تشمل الوجبات.</b>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-green-600" />
              <p className="text-night/80">
                يمكن إضافة <b>وجهة المدينة المنورة</b> في الباقة الاقتصادية
                مقابل <b>10 ريالات للمقعد</b>، ويتم السداد لسائق الباص قبل
                الانطلاق.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
