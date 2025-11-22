export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    quote: "OnFlex has been a game-changer for my training. The mobile service means I can recover right after my long runs without having to drive anywhere. My recovery time has improved significantly.",
    image: "testimonial_headshot_woman.png"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Competitive Powerlifter",
    quote: "As someone who lifts heavy 5 days a week, mobility work is crucial. Having a professional come to my gym and work with me has made all the difference. I'm moving better and lifting stronger.",
    image: "testimonial_headshot_man.png"
  },
  {
    id: "3",
    name: "Jessica Chen",
    role: "ICU Nurse",
    quote: "12-hour shifts destroy my body. OnFlex understands that everyday athletes like nurses need recovery just as much as runners do. The convenience of home visits after a long shift is invaluable.",
    image: "testimonial_headshot_woman.png"
  }
];
