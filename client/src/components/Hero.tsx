import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOK_URL } from "@/lib/links";
import heroImage from "@assets/generated_images/hero_recovery_session_action.png";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
          Mobile Recovery for Everyday Athletes
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          OnFlex brings 1:1 assisted stretching, mobility, and recovery directly to you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 font-semibold" asChild>
            <a
              href={CALENDLY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-hero-book"
            >
              Book a Session
            </a>
          </Button>
          <Link href="/services" data-testid="link-hero-services">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 font-semibold backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
