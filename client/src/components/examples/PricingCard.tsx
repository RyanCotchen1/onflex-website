import PricingCard from '../PricingCard'

const mockTier = {
  id: "four-pack",
  name: "4-Session Package",
  price: "$440",
  description: "Best for consistent recovery",
  features: [
    "4 × 60-minute sessions",
    "Save $40 vs single sessions",
    "Priority scheduling",
    "Mobile service included"
  ],
  popular: true
};

export default function PricingCardExample() {
  return <PricingCard tier={mockTier} />
}
