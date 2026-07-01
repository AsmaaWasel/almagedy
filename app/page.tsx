import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Programs from "@/components/Programs";
import Buses from "@/components/Buses";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import VIPBuses from "@/components/Vip";
import Hotels from "@/components/Hotels";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      {/* <Programs /> */}

      <Buses />
      <Hotels />
      <VIPBuses />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
