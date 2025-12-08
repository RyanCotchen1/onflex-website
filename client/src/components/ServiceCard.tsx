import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";
import { CALENDLY_BOOK_URL } from "@/lib/links";

interface ServiceCardProps {
  service: Service;
  imagePosition?: "left" | "right";
}

export default function ServiceCard({ service, imagePosition = "left" }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-card-border hover-elevate transition-all" data-testid={`card-service-${service.id}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${imagePosition === "right" ? "md:grid-flow-dense" : ""}`}>
        <div className={`aspect-[5/4] overflow-hidden ${imagePosition === "right" ? "md:col-start-2" : ""}`}>
          <img 
            src={`/attached_assets/generated_images/${service.image}`}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h3>
          <p className="text-muted-foreground mb-6">{service.description}</p>
          
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">Recommended for:</p>
            <div className="flex flex-wrap gap-2">
              {service.recommendedFor.map((item, index) => (
                <Badge key={index} variant="secondary">{item}</Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">Duration options:</p>
            <p className="text-muted-foreground">{service.durations.join(" • ")}</p>
          </div>
          
          <Button className="font-semibold" asChild data-testid={`button-book-${service.id}`}>
            <a href={CALENDLY_BOOK_URL} target="_blank" rel="noopener noreferrer">
              Book This Service
            </a>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
