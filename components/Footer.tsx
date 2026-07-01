import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-night-deep py-14 text-white/60">
      <div className="container">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-lg font-bold text-white">
              {" "}
              المجيدي لخدمات المعتمرين والزوار
            </p>
            <p className="text-sm leading-7">
              مكتب متخصص في تنظيم حملات العمرة , مقرّها الرياض.
            </p>
          </div>
          {/* <div>
            <p className="mb-4 text-sm font-bold text-white">روابط سريعة</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#programs" className="hover:text-gold-light">
                  البرامج
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-light">
                  التجربة
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-light">
                  آراء عملائنا
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-light">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div> */}
          <div>
            <p className="mb-4 text-sm font-bold text-white">معلومات التواصل</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={15} /> الرياض، المملكة العربية السعودية
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} /> ٩٦٦٥٠٧٦٣٤١٨١+
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} /> info@email.com
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-8 text-center text-xs text-white/40">
          © ٢٠٢٦ المجيدي لخدمات المعتمرين والزوار لخدمات العمرة. جميع الحقوق
          محفوظة.
        </p>
      </div>
    </footer>
  );
}
