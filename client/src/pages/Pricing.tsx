import { useEffect } from "react";
import { Link } from "wouter";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingTiers, eventPricing } from "@/data/pricing";
import { Check } from "lucide-react";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "OnFlex mobile recovery pricing: single sessions, 4-pack and 8-pack packages, and event day rates. Professional recovery services in Pittsburgh, PA."
      );
    }
  }, []);

  return (
    <main>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-page-title">
            Pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Invest in your recovery. Choose the package that fits your commitment level and goals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">
            Event Recovery Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Half-Day Event</h3>
                <div className="text-4xl font-bold text-primary mb-4">{eventPricing.halfDay.price}</div>
                <p className="text-muted-foreground mb-4">{eventPricing.halfDay.description}</p>
                <p className="text-sm font-semibold mb-4">Duration: {eventPricing.halfDay.duration}</p>
                <Link href="/contact" data-testid="link-contact-halfday">
                  <Button className="w-full font-semibold">Contact for Details</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Full-Day Event</h3>
                <div className="text-4xl font-bold text-primary mb-4">{eventPricing.fullDay.price}</div>
                <p className="text-muted-foreground mb-4">{eventPricing.fullDay.description}</p>
                <p className="text-sm font-semibold mb-4">Duration: {eventPricing.fullDay.duration}</p>
                <Link href="/contact" data-testid="link-contact-fullday">
                  <Button className="w-full font-semibold">Contact for Details</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="border-card-border bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Important Pricing Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All sessions include mobile service - we come to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Locations beyond 20 miles from Pittsburgh may incur additional travel fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Package sessions must be used within specified timeframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24-hour cancellation policy applies to all bookings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Book your first session and experience the OnFlex difference.
          </p>
          <Link href="/book" data-testid="link-book-cta">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
