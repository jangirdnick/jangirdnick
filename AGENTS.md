<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Agent Context: jangirdnick Project

Welcome to the AI Agent context for the **jangirdnick** portfolio project! This file serves as the ground truth for agent sessions, helping coordinate context, architecture rules, and available AI skills.

## 🏗️ Architecture & Codebase State

- **Stack**: Next.js 16.3 (App Router), React 19, Tailwind CSS v4, Motion v13 (formerly Framer Motion), and Lenis for smooth scrolling.
- **Directory Structure**:
  - `/app` - Next.js routing (App Router). Contains pages for home `/(home)`, `/about`, `/work`, and `/contact`.
  - `/components` - Shared UI components, navigation (`/nav`), and footer (`/footer`).
  - `/modules` - Page-specific complex UI logic and sections (e.g., `home/`, `about/`, `work/`, `contact/`).
  - `/data` - Centralized static data arrays (`ProjectData.ts`, `NavLinks.ts`, `SocialLinks.ts`, `FormFields.ts`).
  - `/types` - Centralized TypeScript interfaces (`types/index.ts`).
- **Recent Updates**: Centralized data/types into `/data` and `/types`, restructured components into `/components` and `/modules`, fixed UI bugs (e.g. scroll drum on DesktopCard, Tailwind border colors), updated font optimization, normalized directory names to lowercase, and added dynamic footer copyright year.

## 🧠 Available Agent Skills

The following AI agent skills are installed in this environment. For the local project-specific skills, you **must read** their respective `SKILL.md` instructions when relevant tasks are requested:

### Local Project Skills (located in `.agents/skills/`)

1. [motion-framer](file:///Users/nick/Desktop/jangirdnick/.agents/skills/motion-framer/SKILL.md): Modern animation library for React and JavaScript (Motion / Framer Motion). Smooth animations, gestures, layout transitions, exit animations, and spring physics.
2. [next-cache-components-adoption](file:///Users/nick/Desktop/jangirdnick/.agents/skills/next-cache-components-adoption/SKILL.md): Turn on Cache Components in Next.js and resolve blocking routes.
3. [next-cache-components-optimizer](file:///Users/nick/Desktop/jangirdnick/.agents/skills/next-cache-components-optimizer/SKILL.md): Drive Next.js routes to instant navigation under Cache Components / PPR.
4. [nextjs-performance](file:///Users/nick/Desktop/jangirdnick/.agents/skills/nextjs-performance/SKILL.md): Next.js performance optimization covering Core Web Vitals, image/font optimization, caching strategies, streaming, and bundle optimization.
5. [remotion-best-practices](file:///Users/nick/Desktop/jangirdnick/.agents/skills/remotion-best-practices/SKILL.md): Router for all Remotion programmatic video skills.
6. [seo-aeo-best-practices](file:///Users/nick/Desktop/jangirdnick/.agents/skills/seo-aeo-best-practices/SKILL.md): SEO and AEO best practices for metadata, Open Graph, schema markup, and AI overview readiness.
7. [seo-audit](file:///Users/nick/Desktop/jangirdnick/.agents/skills/seo-audit/SKILL.md): Use for auditing, reviewing, or diagnosing SEO and technical issues on pages.
8. [seo-geo](file:///Users/nick/Desktop/jangirdnick/.agents/skills/seo-geo/SKILL.md): SEO & GEO (Generative Engine Optimization) analysis, generating schema markup, and search visibility improvements.
9. [seo-sitemap](file:///Users/nick/Desktop/jangirdnick/.agents/skills/seo-sitemap/SKILL.md): Generate and analyze XML sitemaps.
10. [transitions-polish](file:///Users/nick/Desktop/jangirdnick/.agents/skills/transitions-polish/SKILL.md): Polish and refine existing motion against motion-token scales (duration, distance, scale, blur, easing, stagger).
11. [vercel-react-best-practices](file:///Users/nick/Desktop/jangirdnick/.agents/skills/vercel-react-best-practices/SKILL.md): React and Next.js performance optimization guidelines from Vercel Engineering.

### Global IDE Skills

- **modern-web-guidance**: Search tool for modern web development best practices. **MANDATORY** for HTML/CSS and client-side JS tasks.

_(Note: Other unused but available global skills include `android-cli` and `chrome-extensions`.)_

## 📜 Agent Guidelines

- Always prioritize using the configured local skills (`modern-web-guidance`, `seo-*`, `nextjs-performance`, `motion-framer`, `vercel-react-best-practices`) when touching frontend design, animations, performance, or metadata.
- Keep components modular. Follow the separation between `/components` (global/shared) and `/modules` (page-specific).
- Maintain type safety using interfaces defined in `/types/index.ts`.
- When updating layouts or page logic, preserve `framer-motion` and `lenis` interactions.
