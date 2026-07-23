import type { Metadata } from "next";
import Script from "next/script";
import { Cairo } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18342569343"
          strategy="beforeInteractive"
        />

        <Script id="google-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18342569343');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
