import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "دُرّة الحرمين | حملات عمرة فاخرة من الرياض",
  description:
    "نظّم رحلتك إلى بيت الله الحرام بتجربة عمرة استثنائية تجمع بين الفخامة والروحانية. باقات مخصصة، فنادق خمس نجوم، وإشراف كامل من الرياض.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
