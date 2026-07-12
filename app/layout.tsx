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
  title: "المجيدي لخدمات المعتمرين والزوار",
  description: "رحلات عمرة من الرياض إلى مكة والمدينة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body
        className="
    font-cairo
    antialiased
    "
      >
        {children}
      </body>
    </html>
  );
}
