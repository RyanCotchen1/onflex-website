export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Is this physical therapy?",
    answer: "No, OnFlex provides recovery and mobility services, not physical therapy. We are not licensed physical therapists and do not diagnose or treat injuries. Our services are designed for recovery, performance enhancement, and general wellness. If you have an injury or medical condition, please consult with a healthcare professional first."
  },
  {
    id: "2",
    question: "What should I wear?",
    answer: "Wear comfortable athletic clothing that allows for movement - similar to what you'd wear to the gym. Shorts and a t-shirt work great. We recommend avoiding jeans or restrictive clothing. You'll remain fully clothed throughout the session."
  },
  {
    id: "3",
    question: "Do you bring all the equipment?",
    answer: "Yes! We bring everything needed for your session - professional stretching table, percussion therapy devices, and any other necessary equipment. All you need to provide is a space large enough for our setup (typically 8x10 feet)."
  },
  {
    id: "4",
    question: "Do you take insurance?",
    answer: "Currently, we do not bill insurance directly. However, we can provide you with a detailed receipt that you may be able to submit to your insurance or HSA/FSA for potential reimbursement. Check with your specific plan regarding coverage for assisted stretching and recovery services."
  },
  {
    id: "5",
    question: "How far do you travel?",
    answer: "We currently serve Pittsburgh, PA and surrounding areas within a 20-mile radius of the city center. Some locations outside this range may incur an additional travel fee. Contact us to confirm if your location is within our service area."
  },
  {
    id: "6",
    question: "How often should I book sessions?",
    answer: "It depends on your goals and activity level. Most clients see the best results with 1-2 sessions per week. Athletes in heavy training may benefit from 2-3 sessions weekly, while those focused on general maintenance might do well with bi-weekly sessions. We'll help you create a schedule that fits your needs and goals."
  },
  {
    id: "7",
    question: "Can I cancel or reschedule?",
    answer: "Yes, we understand schedules change. We ask for at least 24 hours notice for cancellations or rescheduling to avoid a cancellation fee. You can easily reschedule by contacting us directly."
  },
  {
    id: "8",
    question: "What's your service area?",
    answer: "We currently serve Pittsburgh, PA and surrounding communities including the North Hills, South Hills, East End, and nearby suburbs. If you're unsure whether we cover your area, just ask when booking - we're always looking to expand our service area!"
  }
];
