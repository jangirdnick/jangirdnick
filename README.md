# Jangir D Nick | Developer Portfolio

> **Production URL:** [https://nickdev.space](https://nickdev.space)

A modern, high-performance developer portfolio built to showcase my work as a Full-Stack & Cloud Engineer. It features custom animations, smooth scrolling, and page transitions, delivering a premium user experience while maintaining excellent SEO and performance metrics.

## Overview

This repository contains the source code for my personal portfolio. It is designed not just as a resume, but as a technical demonstration of modern web development practices. It utilizes Next.js App Router, React 19, and Tailwind CSS v4, integrated with Motion (formerly Framer Motion) for fluid interactions.

## Implemented Features

- **Fluid Page Transitions:** Utilizes a custom `FrozenRouter` and `AnimatePresence` to create seamless transitions between route changes.
- **Smooth Scrolling:** Implemented using Lenis for an enhanced, buttery-smooth scrolling experience across all devices.
- **Custom Page Loader:** A branded loading screen (`PageLoader.tsx`) that manages the initial entry animation before revealing the content.
- **Modular Architecture:** Strict separation between shared UI components (`/components`) and page-specific logic (`/modules`).
- **SEO & Accessibility Optimized:** Comprehensive Next.js Metadata implementation, dynamic `sitemap.ts`, `robots.ts`, and injected JSON-LD schema markup for rich search results.
- **Centralized Data Management:** All static content (projects, experiences, social links, certificates) is managed via TypeScript interfaces in the `/data` directory.
- **Responsive Design:** fully responsive layout adapting to mobile, tablet, and desktop environments.

## Tech Stack

**Core**

- **Framework:** Next.js 16.3 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript

**Styling & Animation**

- **Styling:** Tailwind CSS v4
- **Animation:** Motion v13 (Framer Motion)
- **Scroll Hijacking:** Lenis

**Tooling**

- **Package Manager:** pnpm
- **Linting & Formatting:** ESLint 9, Prettier, Husky, Lint-Staged
- **Type Checking:** TypeScript Compiler (`tsc`)

## Project Architecture

The codebase follows a modular and scalable structure:

```text
├── app/                  # Next.js App Router pages and global layouts
│   ├── (home)/           # Home page route group
│   ├── about/            # About page route
│   ├── contact/          # Contact page route
│   ├── work/             # Work/Projects page route
│   └── layout.tsx        # Global layout containing SEO and Lenis setup
├── components/           # Reusable, global UI components
│   ├── loader/           # Initial page load animations
│   ├── nav/              # Navigation bar and menus
│   ├── transition/       # FrozenRouter and PageTransition logic
│   └── footer/           # Global footer component
├── modules/              # Page-specific complex UI logic and sections
│   ├── about/            # About page sections (e.g., AboutInfo)
│   ├── home/             # Home page sections (e.g., Hero, Services)
│   └── work/             # Work page sections
├── data/                 # Centralized static data arrays
│   ├── ProjectData.ts    # Portfolio projects list
│   ├── experiences.ts    # Work experience history
│   └── certificates.ts   # Certifications data
└── types/                # Global TypeScript interfaces
```

## Key Technical Implementation

### Component Architecture

To prevent the `/components` folder from becoming bloated, the project strictly separates **global components** from **page-specific modules**. Shared elements like Buttons, Loaders, and Navigations live in `/components`, while unique sections (like `AboutInfo.tsx`) are encapsulated within `/modules`.

### Animation & Page Transitions

Page transitions are handled via a custom `<PageTransition />` component paired with a `<FrozenRouter />`. This setup captures the exiting route's state and freezes it in the DOM while Motion animates the page out, allowing for complex, app-like routing animations without breaking the Next.js App Router tree.

### SEO & Metadata

The `app/layout.tsx` defines a robust, global `Metadata` object including Open Graph tags, Twitter cards, and canonical URLs. It also injects a custom `<JsonLd />` component to provide search engines with structured `Person` and `WebSite` schema data.

## Getting Started

To run this project locally, ensure you have Node.js (v24+) installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jangirdnick/jangirdnick.git
   cd jangirdnick
   ```

2. **Install dependencies:**
   This project relies on `pnpm`.

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## License

This project is proprietary. All rights reserved by Jangir D Nick.
