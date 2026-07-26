import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body>
        {children}
        <Toaster position="top-center" richColors closeButton duration={2500} />
      </body>

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
