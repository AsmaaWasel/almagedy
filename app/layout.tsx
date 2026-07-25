import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>

      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18342569343"
      />

      <Script id="gtag-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18342569343');
        `}
      </Script>
    </html>
  );
}
