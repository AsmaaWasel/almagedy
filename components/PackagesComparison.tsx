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
    economy: "فندق 3 نجوم أو حسب الرغبة يمكن اختيار 5 نجوم",
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
    <section className="bg-[#faf9f6] py-12 md:py-20" id="comparison">
      <div className="mx-auto max-w-7xl px-3 md:px-5">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14 text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-gold-dark">
            مقارنة الباقات
          </span>

          <h2 className="mt-3 md:mt-5 text-xl md:text-3xl lg:text-5xl font-extrabold text-night">
            اختر الباقة المناسبة لك
          </h2>

          <p className="mx-auto mt-2 md:mt-4 max-w-2xl text-xs md:text-base text-night/70 px-2 md:px-4">
            مقارنة سريعة بين الباقة الاقتصادية وباقة VIP لمساعدتك في اختيار
            البرنامج الأنسب.
          </p>
        </motion.div>

        {/* الجدول - بحجم مصغر للهواتف */}
        <div className="overflow-x-auto rounded-xl md:rounded-3xl border border-gold/20 bg-white shadow-xl">
          <table className="w-full border-collapse text-xs md:text-base">
            <thead>
              <tr className="bg-gradient-to-l from-gold to-gold-dark text-night">
                <th className="p-2 md:p-6 text-right text-xs md:text-lg font-bold">
                  المقارنة
                </th>
                <th className="p-2 md:p-6 text-center text-xs md:text-lg font-bold">
                  الاقتصادية
                </th>
                <th className="p-2 md:p-6 text-center text-xs md:text-lg font-bold">
                  VIP
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.title}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-[#fcfbf8]"}`}
                >
                  <td className="border-b border-gold/10 p-1.5 md:p-6">
                    <div className="flex items-center gap-1.5 md:gap-3 font-semibold text-night">
                      <div className="shrink-0 rounded-lg md:rounded-xl bg-gold/15 p-1 md:p-2">
                        <row.icon
                          size={14}
                          className="md:w-5 md:h-5 text-gold-dark"
                        />
                      </div>
                      <span className="text-[11px] md:text-base">
                        {row.title}
                      </span>
                    </div>
                  </td>
                  <td className="border-b border-gold/10 p-1.5 md:p-6 text-center text-[10px] md:text-base text-night/80 leading-tight md:leading-normal">
                    {row.economy}
                  </td>
                  <td className="border-b border-gold/10 p-1.5 md:p-6 text-center text-[10px] md:text-base font-medium text-night leading-tight md:leading-normal">
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
          className="mt-6 md:mt-12 rounded-xl md:rounded-3xl border border-gold/20 bg-gradient-to-l from-[#fffdf7] to-[#fff8e8] p-3 md:p-8 shadow-lg"
        >
          <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2">
            <div className="flex items-start gap-1.5 md:gap-3">
              <CheckCircle2 className="mt-0.5 md:mt-1 text-green-600 w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
              <p className="text-[10px] md:text-base text-night/80 leading-tight md:leading-normal">
                مدة الرحلة تشمل <b>يوم الذهاب ويوم العودة.</b>
              </p>
            </div>

            <div className="flex items-start gap-1.5 md:gap-3">
              <CheckCircle2 className="mt-0.5 md:mt-1 text-green-600 w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
              <p className="text-[10px] md:text-base text-night/80 leading-tight md:leading-normal">
                جميع الباصات <b>لا توفر خدمة Wi-Fi.</b>
              </p>
            </div>

            <div className="flex items-start gap-1.5 md:gap-3">
              <CheckCircle2 className="mt-0.5 md:mt-1 text-green-600 w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
              <p className="text-[10px] md:text-base text-night/80 leading-tight md:leading-normal">
                الباقات <b>لا تشمل الوجبات.</b>
              </p>
            </div>

            <div className="flex items-start gap-1.5 md:gap-3">
              <CheckCircle2 className="mt-0.5 md:mt-1 text-green-600 w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
              <p className="text-[10px] md:text-base text-night/80 leading-tight md:leading-normal">
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
