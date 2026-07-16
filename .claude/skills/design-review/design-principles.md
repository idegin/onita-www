# Onita Design Review Checklist

Adapted from the S-Tier SaaS checklist (Stripe / Airbnb / Linear) and reconciled with this
project's `DESIGN.md`, `PLAN.md`, and Definition of Done. Use as the reference for the
`design-review` skill.

## I. Core Philosophy
- [ ] **Effortless:** complex AI capability feels simple; "I don't need to understand AI to benefit."
- [ ] **Users first**, meticulous craft, speed, simplicity, consistency, opinionated defaults.
- [ ] **Positioning stays "AI Workforce Platform"** — never "AI chatbot / assistant / workspace".
- [ ] Every section moves the visitor toward the single conversion goal (Book a Demo).

## II. Design Tokens (from DESIGN.md — treat as source of truth)
- [ ] Colors: primary `#765AF3`, dark `#250E5D`, accent gold `#CE3E98` (sparing, never body text),
      supporting `#9B8BFF`, full gray scale `#0B0B12`→`#FBFBFD`.
- [ ] Semantic: success `#21C16B`, warning `#F6B100`, danger `#F44336`, info `#3B82F6`.
- [ ] Gradients: hero `#250E5D→#765AF3`, AI `#765AF3→#CE3E98`, glow `rgba(118,90,243,.35)→transparent`.
- [ ] Type: Plus Jakarta Sans (headings/UI), Inter (body), JetBrains Mono (code only).
- [ ] Type scale respected (Hero 72 / Display 60 / H1 48 … Body 16 / Caption 12).
- [ ] Radii: buttons 14, inputs 16, cards 24, large cards 32, badges 999, images 28.
- [ ] Spacing on the 8-point grid; sections 120–160px vertical; cards 32px padding.
- [ ] Shadows soft & layered (`0 10px 40px rgba(0,0,0,.08)`), never harsh.
- [ ] Max width 1440 / content 1280 / reading 720.

## III. Layout & Hierarchy
- [ ] 12-col desktop / 8-col tablet / 4-col mobile grid.
- [ ] Generous whitespace, clear visual hierarchy, consistent alignment.
- [ ] Section rhythm: statement → explanation → visual → benefits → social proof → CTA.
- [ ] Backgrounds alternate (white / light gray / dark purple / gradient); never repeat >2× in a row.
- [ ] Mobile-first; nav collapses to a full-screen overlay on small screens.

## IV. Interaction & Motion
- [ ] Purposeful micro-interactions (button hover/elevation, gradient shift, card lift, animated underline).
- [ ] Animations quick (150–300ms), eased, enhance not distract.
- [ ] Clear loading / empty / error states.
- [ ] All interactive elements keyboard-accessible with visible focus.
- [ ] `prefers-reduced-motion` honored.

## V. Accessibility (WCAG 2.2 AA)
- [ ] Text contrast ≥4.5:1; large text ≥3:1.
- [ ] Full keyboard nav, logical Tab order, visible focus indicators.
- [ ] Semantic landmarks (`header nav main section article aside footer`); ARIA only where needed.
- [ ] Descriptive alt text on all imagery; form labels associated.
- [ ] Touch targets ≥44×44px.

## VI. SEO & LLM-Friendliness (from PLAN.md)
- [ ] Exactly one `<h1>` per page matching search intent; logical H2/H3.
- [ ] Title 50–60 chars, meta description 150–160 chars, canonical URL.
- [ ] Open Graph + Twitter/X metadata.
- [ ] JSON-LD where applicable: Organization, Product, FAQ, Article, Breadcrumb, SoftwareApplication.
- [ ] Content crawlable without JS execution; internal links to products/solutions/industries/resources.
- [ ] Explicit definitions ("What is an AI Workforce?"), FAQ answering natural-language questions,
      comparison sections (Onita vs ClickUp / Notion / Asana).

## VII. Code Health
- [ ] Design tokens over magic numbers; component reuse over duplication.
- [ ] Semantic HTML everywhere; Tailwind utilities map to the token system.
- [ ] **No code comments** (project rule).
- [ ] Reference sites for interaction inspiration: v7labs, clickup, asana, airtable.

## VIII. Definition of Done gate
- [ ] Responsive with good contrast on mobile, tablet, desktop.
- [ ] Good Lighthouse score (Perf / A11y / Best-Practices / SEO).
- [ ] Sections and components accessible.
