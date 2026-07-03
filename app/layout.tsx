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

  title: "المجيدي لخدمات المعتمرين والزوار",
  description:
    "رحلات عمرة من الرياض إلى مكة والمدينة، باصات VIP واقتصادية، فنادق مميزة، وحجز بأفضل الأسعار.",

  openGraph: {
    title: "المجيدي لخدمات المعتمرين والزوار",
    description:
      "رحلات عمرة من الرياض إلى مكة والمدينة، باصات VIP واقتصادية، فنادق مميزة، وحجز بأفضل الأسعار.",
    url: "https://almagedy-521g.vercel.app",
    siteName: "المجيدي",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "المجيدي لخدمات المعتمرين والزوار",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "المجيدي لخدمات المعتمرين والزوار",
    description: "رحلات عمرة من الرياض إلى مكة والمدينة بأفضل الخدمات.",
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
