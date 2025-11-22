export interface Service {
  id: string;
  title: string;
  description: string;
  recommendedFor: string[];
  durations: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "assisted-stretching",
    title: "1:1 Assisted Stretching",
    description: "Our flagship service combines active and passive stretching techniques to improve flexibility, reduce muscle tension, and enhance recovery. Each session is personalized to your specific needs and goals, targeting areas of tightness and mobility restrictions.",
    recommendedFor: ["Runners & Endurance Athletes", "Desk Workers", "Post-Workout Recovery"],
    durations: ["30 minutes", "60 minutes"],
    image: "assisted_stretching_service_image.png"
  },
  {
    id: "mobility-rom",
    title: "Mobility & Range of Motion",
    description: "Focused sessions designed to improve joint mobility and functional movement patterns. We use targeted techniques to restore and enhance your body's natural range of motion, helping you move better and perform at your peak.",
    recommendedFor: ["Lifters & Strength Athletes", "Field/Court Athletes", "Anyone with mobility restrictions"],
    durations: ["30 minutes", "60 minutes"],
    image: "mobility_session_service_image.png"
  },
  {
    id: "percussive-therapy",
    title: "Percussive Therapy Add-On",
    description: "High-frequency percussion therapy to release muscle tension, improve blood flow, and accelerate recovery. Perfect as a standalone session or combined with stretching for maximum benefit. We bring professional-grade equipment to your location.",
    recommendedFor: ["Athletes in heavy training", "Anyone with chronic muscle tension", "Pre/Post event recovery"],
    durations: ["15 minutes", "30 minutes"],
    image: "percussive_therapy_service_image.png"
  },
  {
    id: "event-recovery",
    title: "Event Recovery Tent",
    description: "Professional recovery services at your race, tournament, or athletic event. We set up a complete recovery station with all equipment, providing on-site assisted stretching and recovery for participants. Perfect for race directors and event organizers looking to enhance their athlete experience.",
    recommendedFor: ["Race Directors", "Tournament Organizers", "Corporate Fitness Events"],
    durations: ["Half-day (4 hours)", "Full-day (8 hours)"],
    image: "event_recovery_tent_image.png"
  }
];
