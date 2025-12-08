import { Link } from "wouter";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OF</span>
              </div>
              <span className="text-lg font-bold">OnFlex</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Recovery for the Everyday Athlete.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Pittsburgh, PA</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" data-testid="link-footer-home">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/services" data-testid="link-footer-services">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="/pricing" data-testid="link-footer-pricing">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Pricing
                </span>
              </Link>
              <Link href="/book" data-testid="link-footer-book">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Book a Session
                </span>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Ryan@onflex.fit"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                <span>Ryan@onflex.fit</span>
              </a>
              <a
                href="https://www.instagram.com/onflex.fit/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-4 w-4" />
                <span>onflex.fit</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © OnFlex {currentYear}. Recovery for the Everyday Athlete.
          </p>
        </div>
      </div>
    </footer>
  );
}
