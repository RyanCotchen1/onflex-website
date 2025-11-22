import { MapPin } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" data-testid="text-service-area-title">
          Currently Serving Pittsburgh, PA
        </h2>
        <p className="text-lg text-muted-foreground">
          We provide mobile recovery services throughout Pittsburgh and surrounding areas. 
          Contact us to confirm if we cover your location.
        </p>
      </div>
    </section>
  );
}
