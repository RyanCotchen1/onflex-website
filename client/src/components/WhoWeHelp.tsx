import { Card, CardContent } from "@/components/ui/card";
import runnerImage from "@assets/generated_images/runner_lifestyle_image.png";
import lifterImage from "@assets/generated_images/lifter_lifestyle_image.png";
import workerImage from "@assets/generated_images/healthcare_worker_lifestyle_image.png";

const audiences = [
  {
    id: 1,
    title: "Runners & Endurance Athletes",
    description: "From marathoners to weekend warriors, we help you stay loose, recover faster, and prevent overuse injuries.",
    image: runnerImage,
  },
  {
    id: 2,
    title: "Lifters & Field Athletes",
    description: "Maintain mobility and range of motion while building strength. Perfect for powerlifters, CrossFitters, and team sport athletes.",
    image: lifterImage,
  },
  {
    id: 3,
    title: "Nurses & Shift Workers",
    description: "Long shifts take a toll. We bring recovery to you, helping everyday athletes stay in the game.",
    image: workerImage,
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" data-testid="text-section-title">
          Who We Help
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <Card key={audience.id} className="overflow-hidden border-card-border hover-elevate transition-all" data-testid={`card-audience-${audience.id}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={audience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
