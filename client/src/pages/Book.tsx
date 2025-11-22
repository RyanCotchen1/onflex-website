import { useEffect } from "react";
import BookingForm from "@/components/BookingForm";

export default function Book() {
  useEffect(() => {
    document.title = "Book a Session - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Book your mobile recovery session with OnFlex. Professional 1:1 assisted stretching and mobility work in Pittsburgh, PA."
      );
    }
  }, []);

  return (
    <main className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-page-title">
          Book Your Session
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Take the first step toward better recovery. Fill out the form below and we'll confirm your session within 24 hours.
        </p>
      </div>
      <BookingForm />
    </main>
  );
}
