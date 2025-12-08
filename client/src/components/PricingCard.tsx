import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import { CALENDLY_BOOK_URL } from "@/lib/links";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <Card 
      className={`relative border-card-border ${tier.popular ? "scale-105 shadow-lg" : ""}`}
      data-testid={`card-pricing-${tier.id}`}
    >
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
      )}
      <CardHeader className="space-y-0 pb-2">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="mb-6">
          <span className="text-5xl font-bold">{tier.price}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          className="w-full font-semibold"
          variant={tier.popular ? "default" : "outline"}
          asChild
          data-testid={`button-book-${tier.id}`}
        >
          <a href={CALENDLY_BOOK_URL} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
