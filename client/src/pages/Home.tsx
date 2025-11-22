import { useEffect } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyOnFlex from "@/components/WhyOnFlex";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  useEffect(() => {
    document.title = "OnFlex - Mobile Recovery for Everyday Athletes";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "OnFlex brings professional 1:1 assisted stretching, mobility work, and recovery directly to you in Pittsburgh, PA. Recovery for the committed, not the casual."
      );
    }
  }, []);

  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhoWeHelp />
      <WhyOnFlex />
      <Testimonials />
      <ServiceArea />
      <CTABanner />
    </main>
  );
}
