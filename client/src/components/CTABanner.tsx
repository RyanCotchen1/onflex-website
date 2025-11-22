import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-primary-foreground" data-testid="text-cta-title">
          Ready to Recover?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          Join the committed athletes who prioritize recovery as part of their performance routine.
        </p>
        <Link href="/book" data-testid="link-cta-book">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
            Book Your First Session
          </Button>
        </Link>
      </div>
    </section>
  );
}
