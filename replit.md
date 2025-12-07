# OnFlex Mobile Recovery Service

## Overview

OnFlex is a mobile recovery service platform that brings professional 1:1 assisted stretching, mobility work, and percussive therapy directly to clients in Pittsburgh, PA. The application serves as both a marketing website and booking platform for "everyday athletes" - ranging from competitive runners and lifters to healthcare workers and shift employees who need professional recovery services.

The platform emphasizes a performance-oriented, athletic aesthetic while maintaining professional accessibility. The tagline "Recovery for the Everyday Athlete" reflects the target audience of serious performers who understand recovery as essential to their craft.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter (lightweight alternative to React Router), handling routes for Home, Services, Pricing, About, Book, and Contact pages.

**UI Component System**: Shadcn UI (New York style variant) built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling. Components follow a consistent design system with CSS variables for theming.

**Styling Approach**: Tailwind CSS with a custom configuration extending the default theme. Uses HSL color values with CSS variables for dynamic theming support. Design system emphasizes bold typography (Inter font family), athletic aesthetics, and mobile-first responsive layouts.

**State Management**: React Query (TanStack Query) for server state management with configured query client for API interactions. Local component state managed with React hooks.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form submissions (booking form, contact form).

**Design System**: Centralized in `design_guidelines.md` with standardized spacing (4, 8, 12, 16, 20, 24, 32 units), typography hierarchy, grid patterns, and component padding guidelines.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, supporting both development and production modes through separate entry points.

**Development Setup**: Vite middleware integration for hot module replacement and SSR template rendering during development. Custom error overlay and development tools for Replit environment.

**Production Setup**: Serves pre-built static assets from dist/public directory, with fallback to index.html for client-side routing.

**API Structure**: Routes registered through a centralized `registerRoutes` function in `server/routes.ts`. Currently uses prefix `/api` for application endpoints.

**Data Layer**: Storage interface pattern (`IStorage`) allowing swappable implementations. Currently implements in-memory storage (`MemStorage`) with methods for user CRUD operations. Designed to support database integration via Drizzle ORM.

**Session Handling**: Express middleware configured for JSON body parsing with raw body preservation for webhook verification scenarios.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`.

**Database Provider**: Configured for Neon Database serverless PostgreSQL (via `@neondatabase/serverless` package).

**Schema Structure**: 
- Users table with UUID primary keys, username (unique), and password fields
- Zod schema generation for type-safe validation using `drizzle-zod`
- Shared schema types exported for use across client and server

**Migration Strategy**: Drizzle Kit handles migrations with output to `/migrations` directory. Push-based workflow via `npm run db:push` script.

**Storage Abstraction**: Interface-based storage layer allows switching between in-memory (development) and database (production) implementations without changing application code.

### Design Patterns

**Monorepo Structure**: 
- `/client` - React frontend with pages, components, hooks, and utilities
- `/server` - Express backend with routes and storage layer  
- `/shared` - Shared TypeScript types and schemas accessible to both client and server
- `/attached_assets` - Static assets including generated images and project documentation

**Component Organization**: 
- Presentational components in `/client/src/components` with associated example components for development
- Page components in `/client/src/pages` handling routing and meta tags
- UI primitives in `/client/src/components/ui` (Shadcn components)
- Data constants in `/client/src/data` for services, pricing, testimonials, FAQs

**Type Safety**: End-to-end TypeScript with shared schemas between client and server. Zod schemas provide runtime validation matching TypeScript types.

**Path Aliases**: Configured in both tsconfig.json and vite.config.ts:
- `@/*` maps to client/src
- `@shared/*` maps to shared directory
- `@assets/*` maps to attached_assets

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Headless UI components (@radix-ui/react-*) for accessible, unstyled primitives
- **Shadcn UI**: Pre-configured component system built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **CMDK**: Command menu component for keyboard-driven interfaces
- **Embla Carousel**: Carousel/slider functionality

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Class Variance Authority (CVA)**: Type-safe component variant management
- **clsx & tailwind-merge**: Conditional className composition
- **Inter Font**: Loaded via Google Fonts CDN (defined in index.html)

### Forms & Validation
- **React Hook Form**: Performant form state management
- **Zod**: Schema validation library
- **@hookform/resolvers**: Zod resolver integration for React Hook Form

### Data Fetching & State
- **TanStack React Query**: Server state management with caching, background updates, and request deduplication
- **Date-fns**: Date manipulation and formatting utilities

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Neon serverless Postgres driver
- **Drizzle Kit**: Database migration and schema management tools
- **Drizzle Zod**: Automatic Zod schema generation from Drizzle schemas

### Routing
- **Wouter**: Lightweight client-side routing library (alternative to React Router)

### Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production server code
- **TSX**: TypeScript execution for development server
- **@replit/vite-plugin-***: Replit-specific development enhancements (cartographer, dev banner, error overlay)

### Backend Infrastructure
- **Express**: Web application framework
- **connect-pg-simple**: PostgreSQL session store for Express (indicates planned session management)

### Build Configuration
- **TypeScript**: Static type checking across the entire codebase
- **ESM**: Native ES modules throughout (type: "module" in package.json)
- Separate build processes for client (Vite) and server (esbuild)