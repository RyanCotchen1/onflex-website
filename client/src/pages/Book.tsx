import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOK_URL } from "@/lib/links";

export default function Book() {
  useEffect(() => {
    document.title = "Book a Session - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Book your mobile recovery session with OnFlex via Calendly for professional 1:1 assisted stretching and mobility work in Pittsburgh, PA."
      );
    }

    window.location.href = CALENDLY_BOOK_URL;
  }, []);

  return (
    <main className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-page-title">
          Redirecting to Booking...
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          If you're not redirected automatically, use the button below to schedule your session on Calendly.
        </p>
        <Button size="lg" className="font-semibold px-8" asChild data-testid="link-calendly-book">
          <a href={CALENDLY_BOOK_URL} target="_blank" rel="noopener noreferrer">
            Go to Booking
          </a>
        </Button>
      </div>
    </main>
  );
}
