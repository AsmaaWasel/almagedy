import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

import Buses from "@/components/Buses";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import VIPBuses from "@/components/Vip";
import Hotels from "@/components/Hotels";
import PackagesSection from "@/components/packages";
import PricingSection from "@/components/Prices";
import PackagesComparison from "@/components/PackagesComparison";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PackagesSection />

      <Buses />
      <Hotels />
      <PricingSection />
      <PackagesComparison />
      {/* <Hotels /> */}
      {/* <VIPBuses /> */}

      <CTA />

      <WhatsAppFloat />
    </main>
  );
}
