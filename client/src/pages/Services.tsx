import { useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import { services } from "@/data/services";

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore OnFlex's mobile recovery services: 1:1 assisted stretching, mobility work, percussive therapy, and event recovery. Professional service at your location."
      );
    }
  }, []);

  return (
    <main>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-page-title">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Professional mobile recovery services designed for athletes and everyday performers who are committed to their craft.
          </p>
        </div>
      </section>

      <section className="py-16 space-y-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>

      <FAQ />
    </main>
  );
}
