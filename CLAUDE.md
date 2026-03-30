# CLAUDE.md - Gegal Utama Website

> **Documentation Version**: 1.0
> **Last Updated**: 2026-03-30
> **Project**: gegal_utama_website
> **Description**: Modern, mobile-first website for Gegal Utama Sdn Bhd (licensed money lender in Ipoh, Perak)
> **Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod, EmailJS, Lucide React

## Project Overview

A bilingual (BM/EN) website for a licensed money lending company. Mobile-first design with blue+orange brand colors, partnership-focused messaging, and a 5-field loan application form.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS
- **Icons**: Lucide React
- **Multi-language**: React Context + localStorage
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, TrustBar, Services, etc.)
│   ├── forms/              # Application form components
│   └── ui/                 # Reusable UI components (buttons, cards, etc.)
├── context/                # React Context (language provider)
├── lib/                    # Utilities, constants, helpers
│   ├── translations.ts     # BM/EN content
│   ├── emailjs.ts          # EmailJS configuration
│   └── constants.ts        # Shared constants
└── types/                  # TypeScript type definitions
```

## Brand & Design

- **Colors**: Blue (#1E88E5), Orange (#FF6F00), White backgrounds
- **Theme**: "Trust & Partnership" - position as financial partner, not just lender
- **Style**: Clean, bright, white-dominated, generous whitespace
- **Animations**: Subtle, professional (300-500ms), 60fps on mobile
- **Mobile-first**: Design for 320px+ first, scale up

## Key Features

1. **Bilingual**: BM (default) + EN toggle, saved in localStorage
2. **Application Form**: 5 fields (name, phone, employment, state, loan amount)
3. **EmailJS**: Form submissions to gegalutama@gmail.com
4. **WhatsApp Integration**: Pre-filled messages with form data
5. **Floating Social Buttons**: WhatsApp + Facebook (bottom-right, always visible)
6. **SEO**: Meta tags, Open Graph, JSON-LD structured data

## Development Commands

```bash
npm run dev          # Start dev server (turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Critical Rules

- Mobile-first: always design for phone (320px) first
- All text content must be bilingual (BM + EN)
- Use Tailwind CSS for styling, no external CSS frameworks
- Follow the color palette from the project brief
- Keep animations subtle and performant
- Form must send email via EmailJS AND offer WhatsApp option
- Floating WhatsApp/Facebook buttons must always be visible
- No horizontal scrolling at any viewport width
- Touch targets minimum 48x48px
- Page load < 3 seconds on mobile

## Environment Variables

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

## Reference

- Full project brief: `gegal-utama-project-brief.md`
- Company: Gegal Utama Sdn Bhd
- WhatsApp: 011-53164241
- Email: gegalutama@gmail.com
- Address: 162A, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak
