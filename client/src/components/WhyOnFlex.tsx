import { Shield, Clock, Award, Users } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Mobile Convenience",
    description: "No driving to appointments. We bring professional recovery services directly to your home, gym, or workplace.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Evidence-Based Techniques",
    description: "Our methods are rooted in sports science and proven recovery protocols used by elite athletes.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Consistent Results",
    description: "Regular recovery sessions lead to measurable improvements in flexibility, mobility, and overall performance.",
    icon: Award,
  },
  {
    id: 4,
    title: "For Serious Performers",
    description: "Built for people committed to their craft - whether that's running, lifting, or simply performing at your best every day.",
    icon: Users,
  },
];

export default function WhyOnFlex() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" data-testid="text-section-title">
          Why OnFlex
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="flex gap-4" data-testid={`item-benefit-${benefit.id}`}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
