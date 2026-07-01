"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night py-28">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-light">
            تواصل معنا
          </p>

          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-white sm:text-4xl">
            دعونا نصمّم رحلتكم الروحانية المثالية
          </h2>

          <p className="mt-5 max-w-md leading-8 text-white/60">
            فريقنا جاهز للرد على استفساراتكم وتصميم باقة مخصّصة تناسب عدد
            المعتمرين وموعد الرحلة وميزانيتكم.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://wa.me/966507634181"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-l
              from-gold
              to-gold-dark
              px-7
              py-3.5
              text-sm
              font-bold
              text-night
              shadow-gold
              transition-transform
              hover:scale-105
              "
            >
              <MessageCircle size={17} />
              واتساب مباشر
            </a>

            <a
              href="tel:+966507634181"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/5
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-white/10
              "
            >
              <Phone size={17} />
              ٩٦٦٥٠٧٦٣٤١٨١+
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
          glass
          rounded-[2rem]
          p-8
          shadow-glass
          "
        >
          <div className="grid gap-5">
            {/* NAME */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-white/70">
                الاسم الكامل
              </label>

              <input
                type="text"
                placeholder="اكتب اسمك"
                className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/5
                px-5
                py-3.5
                text-sm
                text-white
                placeholder:text-white/35
                outline-none
                transition-colors
                focus:border-gold/50
                "
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-white/70">
                رقم الجوال
              </label>

              <input
                type="tel"
                placeholder="05xxxxxxxx"
                className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/5
                px-5
                py-3.5
                text-sm
                text-white
                placeholder:text-white/35
                outline-none
                transition-colors
                focus:border-gold/50
                "
              />
            </div>

            {/* PROGRAM SELECT */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-white/70">
                اختر البرنامج
              </label>

              <select
                defaultValue=""
                className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/5
                px-5
                py-3.5
                text-sm
                text-white

                outline-none

                transition-colors

                focus:border-gold/50

                [&>option]:bg-night
                "
              >
                <option value="" disabled>
                  اختر نوع الرحلة
                </option>

                <option value="3-days-makkah-madinah">
                  برنامج 3 أيام مكة والمدينة
                </option>

                <option value="3-days-makkah">برنامج 3 أيام مكة فقط</option>

                <option value="4-days-makkah-madinah">
                  برنامج 4 أيام مكة والمدينة
                </option>

                <option value="4-days-makkah">برنامج 4 أيام مكة فقط</option>

                <option value="5-days-makkah-madinah">
                  برنامج 5 أيام مكة والمدينة
                </option>

                <option value="5-days-makkah">برنامج 5 أيام مكة فقط</option>

                <option value="vip">برنامج VIP</option>
              </select>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="
              mt-2

              inline-flex
              items-center
              justify-center

              gap-2

              rounded-full

              bg-gradient-to-l
              from-gold
              to-gold-dark

              px-6

              py-4

              text-sm

              font-bold

              text-night

              shadow-gold

              transition-transform

              hover:scale-[1.02]
              "
            >
              إرسال الطلب
              <Send size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
