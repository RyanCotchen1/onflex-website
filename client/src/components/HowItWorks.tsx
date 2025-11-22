import { Calendar, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Book Your Session",
    description: "Choose your service and preferred time through our simple booking form.",
    icon: Calendar,
  },
  {
    number: 2,
    title: "We Come to You",
    description: "Our specialist arrives at your location with all professional equipment.",
    icon: Truck,
  },
  {
    number: 3,
    title: "Recover & Perform",
    description: "Leave feeling recovered, mobile, and ready to perform at your best.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" data-testid="text-section-title">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.number} className="border-card-border" data-testid={`card-step-${step.number}`}>
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-4">{step.number}</div>
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
