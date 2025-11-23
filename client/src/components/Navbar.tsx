import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/Firefly_Gemini Flash_1763913389232.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <span className="flex items-center hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2 cursor-pointer">
              <img 
                src={logoImage} 
                alt="OnFlex Logo" 
                className="h-12 w-auto"
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant={location === link.href ? "secondary" : "ghost"}
                className="font-semibold"
                asChild
              >
                <Link href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              </Button>
            ))}
            <Button className="ml-4 font-semibold" asChild>
              <Link href="/book" data-testid="link-book">
                Book a Session
              </Link>
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu-toggle">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start font-semibold"
                    asChild
                  >
                    <Link href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
                <Button className="w-full font-semibold" asChild>
                  <Link href="/book" data-testid="link-mobile-book">
                    Book a Session
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
