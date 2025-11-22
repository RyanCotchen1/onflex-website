# OnFlex Design Guidelines

## Design Approach

**Reference-Based Approach**: Draw inspiration from performance-oriented fitness brands (Nike, Peloton) combined with professional service providers (Stripe, Linear). The design should feel athletic and energetic while maintaining credibility as a professional service.

**Core Design Principles**:
1. **Bold Performance Aesthetic**: Strong, confident typography and high-energy visuals that convey athletic excellence
2. **Professional Accessibility**: Approachable for "everyday athletes" while maintaining service credibility
3. **Action-Oriented**: Every section drives toward booking - clear CTAs throughout
4. **Mobile-Centric Recovery**: Design emphasizes convenience and mobility as core value props

---

## Typography System

**Font Family**: Inter (via Google Fonts CDN)

**Hierarchy**:
- Hero Headlines: font-bold text-5xl md:text-6xl lg:text-7xl (48px → 60px → 72px)
- Section Headers: font-bold text-4xl md:text-5xl (36px → 48px)
- Subsection Titles: font-semibold text-2xl md:text-3xl (24px → 30px)
- Body Large: font-normal text-lg md:text-xl (18px → 20px) - for hero subheads
- Body Regular: font-normal text-base (16px) - primary reading text
- Body Small: font-normal text-sm (14px) - captions, form labels
- Micro Text: font-normal text-xs (12px) - disclaimers, footer links

**Letter Spacing**: Use tracking-tight for headlines, tracking-normal for body text

---

## Layout & Spacing System

**Tailwind Spacing Units**: Standardize on 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Component padding: p-4, p-8, p-12
- Section vertical spacing: py-16 md:py-20 lg:py-24
- Element margins: mb-4, mb-8, mb-12
- Grid gaps: gap-8, gap-12

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-8
- Content sections: max-w-6xl mx-auto
- Form containers: max-w-2xl mx-auto
- Text content (About page): max-w-4xl mx-auto

**Grid Patterns**:
- Services grid: grid-cols-1 md:grid-cols-2 gap-8
- Testimonials: grid-cols-1 md:grid-cols-3 gap-8
- Who We Help: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
- Pricing cards: grid-cols-1 md:grid-cols-3 gap-8

---

## Component Library

### Navigation
- Sticky header with backdrop blur effect
- Logo (120px width) on left, navigation links center/right
- Prominent "Book a Session" button with accent color background
- Mobile: Hamburger menu with slide-out drawer
- Height: h-20, shadow on scroll

### Hero Section (Homepage)
**Full-bleed athletic hero image**: High-energy action shot of stretching/recovery session in progress
- Height: min-h-[600px] md:min-h-[700px] with gradient overlay (dark at bottom for text readability)
- Image placement: Background with object-cover
- Content overlay: Centered with z-10, white text
- CTA buttons: Two side-by-side (Primary "Book a Session", Secondary "View Services")
- Buttons have backdrop-blur-md bg-white/10 treatment for glass-morphism effect

### Feature Sections
**"How It Works" (3-step process)**:
- Horizontal cards on desktop, stacked on mobile
- Large numbers (text-6xl) in accent color
- Icons from Heroicons (CheckCircle, TruckIcon, BoltIcon)
- Card style: Subtle border, generous padding (p-8), rounded-2xl

**"Who We Help" (3 audience cards)**:
- Image-led cards with athletic photography for each segment
- Images: 400x300px aspect ratio, object-cover, rounded-t-2xl
- Card content below image: p-6 with title, description, "Learn More" link

**"Why OnFlex" (Benefits grid)**:
- 2x2 grid on desktop (grid-cols-1 md:grid-cols-2 gap-12)
- Icon + headline + description format
- Icons: Shield, Clock, Award, Users from Heroicons
- Clean, spacious layout with mb-4 between elements

### Service Cards (/services page)
- Full-width cards with left-aligned content
- Service image placeholder: 500x400px, rounded-xl
- Two-column layout on desktop: image left (40%), content right (60%)
- Include: Title, description, "Recommended for" badges, duration options
- "Book This Service" button prominent at bottom-right
- Border treatment with hover lift effect (translate-y-1 transition)

### Testimonials
- Three-column cards with customer photo circles (96px diameter)
- Quote in italic text-lg
- Name and role in smaller text below
- Subtle background with border, rounded-lg, p-8

### Pricing Tables
- Card-based design with three tiers side-by-side
- Middle card elevated with scale-105 and shadow-2xl (recommended/popular plan)
- Each card: Title, price (text-5xl font-bold), feature list with checkmarks, CTA button
- Mobile: Stack vertically with equal visual weight

### Forms (Booking & Contact)
- Clean, spacious form design with mb-6 between fields
- Labels: font-semibold text-sm mb-2
- Inputs: border-2 rounded-lg p-4 with focus:border-accent transition
- Dropdowns and date pickers: Consistent styling with inputs
- Textarea: min-h-[120px] for notes/messages
- Submit button: Full-width on mobile, max-w-xs on desktop, accent color
- Validation: Inline error messages in red below fields
- Checkbox for medical disclaimer with adjacent label text

### Footer
- Dark background section with py-16
- Three-column layout: Logo + tagline | Quick Links | Contact/Social
- Mobile: Stack vertically
- Bottom copyright bar with subtle border-top

---

## Page-Specific Layouts

### Homepage
1. Hero with full-bleed image
2. How It Works (3-step cards)
3. Who We Help (3 audience segments with images)
4. Why OnFlex (4 benefit points)
5. Testimonials (3 cards)
6. Service Area callout (centered with location icon)
7. Final CTA banner with "Ready to recover?" + Book button

### Services Page
- Brief intro section (centered, max-w-3xl)
- 4 service sections, alternating image left/right layout
- Each service is its own full-width section with generous py-20 spacing
- End with FAQ accordion (6-8 questions)

### Pricing Page
- Hero-style header explaining pricing philosophy
- Three-tier pricing cards
- Additional info section about mobile service fees
- Trust indicators (satisfaction guarantee, flexible scheduling)
- CTA section

### About Page
- Mission statement section (centered, large text)
- Philosophy section with 2-column layout (text + supporting image)
- Founder section: Large circular photo (300px) with bio alongside
- Values/approach section (3-4 pillars in grid)

### Book Page
- Single-column form centered (max-w-2xl)
- Progress indication if multi-step (optional enhancement)
- Service summary sidebar on desktop showing selected service details
- Clear medical disclaimer section before submit

---

## Images

**Large Hero Image**: Homepage hero requires high-quality action shot of recovery session (stretching/mobility work in progress). Image should show professional setup, athletic client, energetic vibe. 1920x1080px minimum.

**Service Images**: Each of 4 services needs supporting imagery - stretching session, mobility work, percussive therapy device, event tent setup. 500x400px each.

**Who We Help Images**: Three lifestyle images representing runners, lifters, and workers. 400x300px each.

**Testimonial Photos**: Three circular headshots. 96x96px.

**About Page**: Founder headshot (300x300px) and 1-2 supporting lifestyle/action images for philosophy section.

All images should feel authentic, professional, and athletic - avoid overly-polished stock photography. Real sessions and real people preferred.

---

## Interaction Patterns

**Buttons**: Rounded-lg with px-8 py-4, font-semibold. No custom hover states needed - use standard transitions.

**Cards**: Subtle hover lift with transition-transform duration-300, shadow increase.

**Forms**: Focus states with border color change, smooth transitions on all interactive elements.

**Navigation**: Smooth scroll behavior, sticky header with shadow on scroll.

**Animations**: Minimal - use sparingly for CTA emphasis only. Avoid scroll-triggered animations.