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
import { getPublicHotels } from "../actions/hotels";
import { getBuses } from "@/app/actions/buses";
import { getPublicPackages } from "../actions/packages";

export default async function Home() {
  const hotels = await getPublicHotels();
  const buses = await getBuses();
  const packages = await getPublicPackages();
  console.log(packages);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Buses buses={buses} />

      <Hotels hotels={hotels} />
      <PackagesSection />
      <PricingSection />
      <PackagesComparison />
      <HowToBook />
      <BookingSection />
      <FAQ />

      <WhatsAppFloat />
    </main>
  );
}
