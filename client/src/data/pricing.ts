export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "single",
    name: "Single Session",
    price: "$120",
    description: "Perfect for trying out our services",
    features: [
      "60-minute session",
      "Mobile service to your location",
      "Professional recovery specialist",
      "All equipment provided",
      "Personalized session plan"
    ]
  },
  {
    id: "four-pack",
    name: "4-Session Package",
    price: "$440",
    description: "Best for consistent recovery",
    features: [
      "4 × 60-minute sessions",
      "Save $40 vs single sessions",
      "Priority scheduling",
      "Mobile service included",
      "Progress tracking",
      "Valid for 8 weeks"
    ],
    popular: true
  },
  {
    id: "eight-pack",
    name: "8-Session Package",
    price: "$840",
    description: "Committed to peak performance",
    features: [
      "8 × 60-minute sessions",
      "Save $120 vs single sessions",
      "VIP priority booking",
      "Custom recovery program",
      "Monthly progress reviews",
      "Valid for 16 weeks"
    ]
  }
];

export const eventPricing = {
  halfDay: {
    price: "$600",
    duration: "4 hours",
    description: "Perfect for smaller events"
  },
  fullDay: {
    price: "$1,000",
    duration: "8 hours",
    description: "Complete event coverage"
  }
};
