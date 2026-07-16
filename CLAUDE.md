@DESIGN.md
@AGENTS.md
@PLAN.md

We are targeting Consulting and Law firms as well as agencies.

# Onita Marketing Website

The AI Workforce Platform marketing site. Core message: **"Your team just got bigger."**
Positioning is always **AI Workforce Platform** — never "AI chatbot / assistant / workspace".
Every page drives one conversion goal: **Start Free** (secondary: **Book a Demo**;
enterprise: **Talk to Sales**). Full architecture and copy direction live in `PLAN.md`;
the complete visual language lives in `DESIGN.md`.

# Tech Stack
- **Next.js 16.2** (App Router, `app/`), **React 19**, **TypeScript**, **Tailwind CSS v4**.
- Tailwind v4 configures the theme in CSS via `@theme` in `app/globals.css` (no `tailwind.config.js`).
  The full design system is already encoded there — see **Design Tokens** below.
- Fonts are wired in `app/layout.tsx` via `next/font/google` (variable fonts, `display: swap`):
  Plus Jakarta Sans → `--font-display` (headings/UI), Inter → `--font-sans` (body),
  JetBrains Mono → `--font-mono` (code only).
- Icons: **Phosphor Icons** (`@phosphor-icons/react`), Regular weight by default.
- **AGENTS.md is mandatory:** this Next.js has breaking changes vs. training data. Read the relevant
  guide in `node_modules/next/dist/docs/` before writing framework code, and heed deprecation notices.

# Design Tokens
`app/globals.css` is the single source of truth; all values trace back to `DESIGN.md`. Use the
generated Tailwind utilities — never raw hex or magic numbers.
- **Color ramps (50–950):** `brand-*` (violet, primary), `ink-*` (deep indigo, hero/footer — 800 =
  `#250E5D`), `accent-*` (magenta — sparing, never body text), `gray-*` (cool neutrals). Semantic:
  `success-* warning-* danger-* info-*` (50/500/600/700). Examples: `bg-brand-500`, `text-ink-800`,
  `border-gray-200`, `text-accent-600`.
- **Theme-aware surfaces (auto light/dark, toggled by `.dark` on `<html>`):** `bg-background`,
  `bg-surface`, `bg-surface-muted`, `text-foreground`, `text-muted-foreground`, `border-border`,
  `bg-primary`/`text-primary-foreground`, `ring-ring`. Prefer these for structural UI so dark mode
  works for free.
- **Radii:** `rounded-button` 14, `rounded-input` 16, `rounded-card` 24, `rounded-card-lg` 32,
  `rounded-image` 28, `rounded-pill`. **Shadows:** `shadow-soft`, `shadow-hover`, `shadow-glow`.
- **Gradients:** `bg-gradient-hero`, `bg-gradient-ai`, `bg-glow`, and `text-gradient-ai` (gradient text).
- **Containers:** `max-w-site` 1440, `max-w-content` 1280, `max-w-prose` 720. Spacing stays on the
  8-pt grid; sections use 120–160px vertical rhythm.

# Project Structure
- `app/` — App Router. `layout.tsx` wraps every page with `SiteHeader` + `SiteFooter`, sets metadata,
  and injects Organization / WebSite / SoftwareApplication JSON-LD. `manifest.ts` = PWA manifest.
- `components/` — shared UI. `site-header.tsx` (client: sticky, transparent-over-hero, mobile overlay),
  `site-footer.tsx`, `brand-logo.tsx`, and `components/sections/*` for page sections (e.g. `hero.tsx`).
  Build each section as its own component. Prefer server components; add `"use client"` only for
  interactivity. Use SSR icon imports (`@phosphor-icons/react/dist/ssr`) in server components.
- `lib/` — **single source of truth for data**. `site-config.ts` holds brand, URLs (`loginUrl`,
  `signupUrl` → `app.onitaai.com`), contact, address, socials, AI models. `navigation.ts` holds
  primary + footer nav. `structured-data.ts` builds JSON-LD. Never hard-code these in components.
- Assets: `public/brand/` (source logo), `public/icons/` (favicons), `public/og/` (social images).

# Rules
1. Do **not** add code comments.
2. Always use **semantic HTML** (`header nav main section article aside footer`) — it drives both
   accessibility and SEO/LLM-friendliness.
3. Do whatever it takes to make the site SEO and LLM friendly (see PLAN.md's SEO & LLM sections):
   one `<h1>` per page, logical H2/H3, title/meta/canonical/OG/Twitter tags, JSON-LD, crawlable
   content, internal links, explicit definitions, and FAQ sections.
4. Mobile-first and responsive across all breakpoints (360 / 768 / 1024 / 1440 / 1920).
5. Use the design tokens in `DESIGN.md` — no magic numbers, no ad-hoc colors/spacing.
6. Show samples of the products (dashboards, boards, docs, etc.) as image placeholders the user will
   populate. Use accessible, correctly-sized placeholders with descriptive `alt` text, presented in
   device/glass mockups per `DESIGN.md` (never raw screenshots), so real assets drop in without layout shift.
7. For interaction/motion inspiration, study: v7labs.com, clickup.com, asana.com, airtable.com.

# Skills
Installed in `.claude/skills/` (version-controlled with the repo):
- **`frontend-design`** — invoke when building any component, page, or interface. Enforces
  distinctive, production-grade design that avoids generic AI aesthetics.
- **`design-review`** — invoke after completing a UI feature, before finalizing front-end changes, or
  when asked to review/audit/QA. Drives a real browser via the chrome-devtools MCP for responsiveness,
  WCAG 2.2 AA, Lighthouse, and design-system compliance. Ships with `design-principles.md` (the review
  checklist mapped to our tokens).
- **`web-asset-generator`** — invoke to generate favicons, PWA app icons, and Open Graph / Twitter
  social images from a logo or text. Directly serves rule #3's OG/Twitter metadata requirement. Uses
  Python + Pillow (`pip install Pillow pilmoji "emoji<2.0.0"` if prompted). Favicon/OG assets already
  generated into `public/icons/` and `public/og/` from `public/brand/logo.png`.

# Quick Visual Check (run immediately after any front-end change)
1. Identify what changed (components/pages).
2. Start the dev server (`npm run dev`) and navigate to each affected page with
   `mcp__chrome-devtools__navigate_page`.
3. Verify compliance against `DESIGN.md` + `.claude/skills/design-review/design-principles.md`.
4. Confirm the change fulfills the request and its acceptance criteria.
5. Screenshot each changed view at desktop (1440px) and mobile (375px) with `take_screenshot`.
6. Check `mcp__chrome-devtools__list_console_messages` for errors/warnings.

For significant UI work or before merging, run the full **`design-review`** skill.

# Definition of Done
1. Responsive with good contrast on mobile, tablet, and desktop (verified in-browser, not by eye alone).
2. Good Lighthouse scores — Performance, Accessibility, Best-Practices, and SEO (run `lighthouse_audit`).
3. Sections and components are accessible: keyboard-navigable, visible focus, semantic landmarks,
   descriptive alt text, ≥4.5:1 contrast, ≥44×44px touch targets, `prefers-reduced-motion` respected.
4. SEO/LLM checklist met (headings, metadata, structured data, crawlable content).
5. No console errors; design tokens used throughout; no code comments.
