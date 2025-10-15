# Dar al Asalah Tourism LLC - Travel Agency Website

## Overview

This is a modern travel agency website built for Dar al Asalah Tourism LLC, a Sharjah-based company specializing in Umrah packages, visa services, and comprehensive travel solutions. The application is built using React with TypeScript, featuring a component-based architecture with shadcn/ui components for a consistent, elegant user interface.

The website serves as the primary digital presence for the travel agency, showcasing their services including Umrah pilgrimage packages, UAE and international visa processing, flight bookings, hotel reservations, and travel insurance. It provides detailed information about packages, pricing, and facilitates direct customer communication through WhatsApp integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion (imported but not yet fully implemented)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

**Design System:**
The application uses a carefully crafted design system based on the company's brand colors extracted from their logo:
- Primary brand colors: `#0192D8` (sky blue) and `#203D77` (navy blue)
- Custom color palette defined in CSS variables using HSL format
- Typography system using Inter (body), Montserrat (headings), and Oswald (display) fonts
- Consistent spacing and component variants through Tailwind configuration

**Component Structure:**
- Atomic design pattern with reusable UI components in `/src/components/ui/`
- Business logic components in `/src/components/` (Navbar, Footer, ServiceCard, PackageCard, TestimonialCard, WhatsAppButton)
- Page-level components in `/src/pages/` for each major route
- Shared utilities and hooks in `/src/lib/` and `/src/hooks/`

**Responsive Design:**
- Mobile-first approach with Tailwind responsive utilities
- Custom mobile detection hook (`useIsMobile`)
- Adaptive navigation (hamburger menu on mobile, full navbar on desktop)
- Horizontal card scrolling on mobile for better space utilization

### Routing Architecture

**Client-Side Routing:**
- Single Page Application (SPA) using React Router
- Main routes:
  - `/` - Homepage (hero, services overview, packages, testimonials)
  - `/umrah` - Umrah services and packages
  - `/visa` - Visa services (UAE and international)
  - `/travel` - Travel services (flights, hotels, packages)
  - `/about` - Company information and team
  - `/contact` - Contact form and information
  - `*` - 404 Not Found page
- Automatic scroll-to-top on route changes
- Navbar active state based on current route

### Component Design Patterns

**Reusable Card Components:**
- `ServiceCard`: Displays service offerings with image, icon, description, and CTA
- `PackageCard`: Shows package details with pricing, features list, and WhatsApp integration
- `TestimonialCard`: Customer reviews with star ratings
- All cards support hover effects and consistent styling

**Form Handling:**
- Contact form with validation (not yet fully implemented)
- Toast notifications for user feedback
- Form state management prepared for backend integration

**Navigation Patterns:**
- Auto-hiding navbar on scroll for better UX
- Dropdown menu for services in desktop view
- Collapsible mobile menu with smooth transitions
- Sticky header with backdrop blur effect when scrolled

### State Management

**Client State:**
- React hooks (useState, useEffect) for local component state
- Custom hooks for mobile detection and toast notifications
- TanStack Query configured for future API integrations

**No Backend/Database Currently:**
- All content is static and hardcoded in components
- No server-side rendering or API calls implemented
- Ready for backend integration with prepared query client setup

### Accessibility & SEO

**Accessibility Features:**
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support through Radix UI components
- Focus management and visual indicators

**SEO Optimization:**
- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter card meta tags
- Structured metadata in index.html
- Robots.txt configured for search engine crawling

## External Dependencies

### UI Component Library
- **shadcn/ui**: Collection of accessible, customizable components built on Radix UI
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, navigation, etc.)
- Provides 30+ pre-built components with consistent API

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework for styling
- **class-variance-authority**: For component variant management
- **clsx & tailwind-merge**: For conditional className composition
- **Framer Motion**: Animation library (imported but awaiting implementation)

### Form & Validation
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: TypeScript-first schema validation (prepared for use)

### Utilities
- **Lucide React**: Icon library for consistent iconography
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel/slider functionality
- **next-themes**: Theme management system (dark mode support prepared)

### Development Tools
- **TypeScript**: Type safety and enhanced developer experience
- **ESLint**: Code quality and consistency
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **Vite**: Fast build tool and development server

### Communication Integration
- **WhatsApp API**: Direct customer communication via WhatsApp button
- Phone number: +971525257136
- Pre-filled messages for package inquiries

### Pending Implementations
1. **Framer Motion animations**: Library imported but animations not yet applied throughout the site
2. **Backend integration**: TanStack Query configured but no API endpoints connected
3. **Form submission**: Contact form UI ready but submission logic pending
4. **Image optimization**: Placeholder images need to be replaced with actual service photos
5. **Testimonials**: Currently showing placeholder data, needs real customer reviews integration
6. **Font weight standardization**: Inconsistent font weights across pages need normalization
7. **Mobile card layout**: Horizontal scrolling for cards on mobile needs implementation
8. **Color consistency**: Remove any remaining cooperative blue colors, enforce brand colors (#0192D8, #203D77)