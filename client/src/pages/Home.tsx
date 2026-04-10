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
    document.title = "OnFlex - Recovery For Everyday Athletes";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Built for athletes and high-output individuals who want to stay durable, move well, and keep showing up."
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
