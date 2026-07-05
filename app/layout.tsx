import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almagedy-521g.vercel.app"),

  title:
    "المجيدي لخدمات المعتمرين والزوار بالرياض - رحلات يومية بباصات سياحية حديثة",

  description:
    "المجيدي لخدمات المعتمرين والزوار، حملة عمرة من الرياض إلى مكة المكرمة والمدينة المنورة. رحلات يومية من الرياض بباصات سياحية حديثة موديلات 2025/2026/2027، وباقات تشمل النقل والفندق، مناسبة للعزاب والعوائل. احجز الآن عبر واتساب: 0507634181.",

  keywords: [
    "عمرة من الرياض",
    "حملات عمرة الرياض",
    "رحلات عمرة يومية",
    "المجيدي",
    "مكة المكرمة",
    "المدينة المنورة",
    "باصات سياحية",
    "باصات VIP",
    "فنادق مكة",
    "فنادق المدينة",
    "حملات عمرة للعائلات",
    "حملات عمرة للعزاب",
  ],

  openGraph: {
    title:
      "المجيدي لخدمات المعتمرين والزوار بالرياض - رحلات يومية بباصات سياحية حديثة",

    description:
      "المجيدي لخدمات المعتمرين والزوار، حملة عمرة من الرياض إلى مكة المكرمة والمدينة المنورة. رحلات يومية من الرياض بباصات سياحية حديثة موديلات 2025/2026/2027، وباقات تشمل النقل والفندق، مناسبة للعزاب والعوائل. احجز الآن عبر واتساب: 0507634181.",

    url: "https://almagedy-seven.vercel.app/",
    siteName: "المجيدي لخدمات المعتمرين والزوار",
    locale: "ar_SA",
    type: "website",

    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "المجيدي لخدمات المعتمرين والزوار بالرياض",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "المجيدي لخدمات المعتمرين والزوار بالرياض - رحلات يومية بباصات سياحية حديثة",

    description:
      "المجيدي لخدمات المعتمرين والزوار، حملة عمرة من الرياض إلى مكة والمدينة برحلات يومية وباصات حديثة.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased bg-ivory text-ink overflow-x-hidden">
        <Navbar />

        <main>{children}</main>

        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
