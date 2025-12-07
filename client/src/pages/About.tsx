import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Trophy, Users } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Everyone's an Athlete",
    description: "Whether you're training for a marathon or working 12-hour shifts, your body deserves professional recovery.",
    icon: Users,
  },
  {
    id: 2,
    title: "Recovery is Non-Negotiable",
    description: "High performance requires consistent recovery. It's not optional - it's essential.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Evidence-Based Approach",
    description: "We use proven techniques rooted in sports science, not trends or gimmicks.",
    icon: Target,
  },
  {
    id: 4,
    title: "Built for Commitment",
    description: "We serve people who are serious about their craft and understand that recovery is part of the work.",
    icon: Heart,
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us - OnFlex Mobile Recovery";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about OnFlex's mission to bring professional mobile recovery to everyday athletes in Pittsburgh. Recovery for the Everyday Athlete."
      );
    }
  }, []);

  return (
    <main>
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight" data-testid="text-page-title">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We help committed people recover like athletes, reduce burnout, and stay in the game - whether that's the literal playing field or the daily grind of life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Philosophy</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  OnFlex was born from a simple observation: recovery services are either inconvenient or inaccessible for most people who need them most.
                </p>
                <p>
                  Runners training for marathons. Nurses working 12-hour shifts. Lifters pushing their limits. Desk workers battling chronic tension. These are everyday athletes - people committed to performing at their best.
                </p>
                <p>
                  But traditional recovery services require driving across town, finding parking, and adding another appointment to an already packed schedule. We eliminate that friction by bringing professional recovery directly to you.
                </p>
                <p className="font-semibold text-foreground">
                  Because if you're committed enough to show up every day, you deserve recovery that meets you where you are.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden">
              <img 
                src="/attached_assets/generated_images/assisted_stretching_service_image.png"
                alt="OnFlex recovery session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.id} className="border-card-border" data-testid={`card-value-${value.id}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Meet the Founder</h2>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-muted mb-6 overflow-hidden">
              <img 
                src="/attached_assets/generated_images/testimonial_headshot_man.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Ryan Cotchen</h3>
            <p className="text-muted-foreground mb-6">Founder & Lead Recovery Specialist</p>
            <div className="text-lg text-muted-foreground max-w-2xl space-y-4">
              <p>
                After years of competing as a distance runner and working with athletes in traditional clinic settings, I realized the biggest barrier to consistent recovery wasn't knowledge or technique - it was access and convenience.
              </p>
              <p>
                OnFlex brings professional recovery services directly to people who are committed to their performance, whether they're chasing PRs or simply trying to feel their best at work and life.
              </p>
              <p className="font-semibold text-foreground">
                Recovery for the Everyday Athlete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
