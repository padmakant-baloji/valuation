# ASB Valuers & Engineers Website

A modern, professional website for ASB Valuers & Engineers - IBBI Registered Valuers based in Belagavi, Karnataka.

## Features

- 🎨 Modern, responsive design with Material-UI
- ⚡ Built with Next.js 14 (App Router)
- 📱 Fully responsive across all devices
- 🎯 High-converting landing page with clear CTAs
- 📋 Contact form for lead generation
- 🏢 Professional sections showcasing services and expertise

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with theme
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero section with CTAs
│   ├── TrustSection.tsx # Trust & credibility
│   ├── AboutSection.tsx # About us & team
│   ├── ServicesSection.tsx # Services showcase
│   ├── WhyChooseSection.tsx # Benefits
│   ├── PresenceSection.tsx  # Locations & clients
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── CTASection.tsx   # Call-to-action
│   ├── ContactSection.tsx # Contact form & info
│   ├── Footer.tsx       # Footer
│   └── ThemeRegistry.tsx # MUI theme provider
└── package.json
```

## Customization

- Update contact information in `ContactSection.tsx` and `Footer.tsx`
- Modify theme colors in `components/ThemeRegistry.tsx`
- Edit content in respective component files
- Add form submission handler in `ContactSection.tsx`

## License

Private - ASB Valuers & Engineers
