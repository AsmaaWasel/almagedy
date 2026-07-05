import Hero from "@/components/Hero";

import Buses from "@/components/Buses";

import WhatsAppFloat from "@/components/WhatsAppFloat";

import Hotels from "@/components/Hotels";
import PackagesSection from "@/components/packages";
import PricingSection from "@/components/Prices";
import PackagesComparison from "@/components/PackagesComparison";
import HowToBook from "@/components/HowToBook";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PackagesSection />

      <Buses />
      <Hotels />
      <PricingSection />
      <PackagesComparison />
      <HowToBook />
      <BookingSection />
      <FAQ />

      <WhatsAppFloat />
    </main>
  );
}
