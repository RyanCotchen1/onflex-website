import ServiceCard from '../ServiceCard'

const mockService = {
  id: "assisted-stretching",
  title: "1:1 Assisted Stretching",
  description: "Our flagship service combines active and passive stretching techniques to improve flexibility, reduce muscle tension, and enhance recovery.",
  recommendedFor: ["Runners", "Desk Workers", "Post-Workout Recovery"],
  durations: ["30 minutes", "60 minutes"],
  image: "assisted_stretching_service_image.png"
};

export default function ServiceCardExample() {
  return <ServiceCard service={mockService} />
}
