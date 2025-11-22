import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact OnFlex for questions about mobile recovery services in Pittsburgh, PA. We're here to help with your recovery needs."
      );
    }
  }, []);

  return (
    <main className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-page-title">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have questions? We're here to help. Reach out and we'll get back to you within 24 hours.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
