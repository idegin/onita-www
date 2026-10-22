# Onita AI — Website Audit

> Audit date: 2026-10-22
> Audited by: Claude (UX, Content & Technical Audit)
> Pages reviewed: 11 (homepage, products index, 12 product pages, use-cases index, 16+ use-case pages, integrations, book-demo, contact-sales, team, 404, error, llms.txt, sitemap, robots)
> Site URL: https://www.onitaapp.com

---

## Executive Summary

The technical and SEO foundation is excellent — clean Next.js App Router code, structured data on every page, a forward-thinking `llms.txt`, semantic HTML throughout, and one of the better-built marketing sites I've audited. The **product and use-case page templates are genuinely agency-grade**: definition → features → workforce angle → comparison → workflow → metrics → testimonial → FAQ → CTA is a conversion-optimised architecture that earns trust systematically.

However, **three issues drag the site below its potential**: (1) The entire site is positioned as Nigeria-only, directly contradicting the "never restrict to a single vertical" mandate in `CLAUDE.md` and killing SEO reach for the global keywords listed in `PLAN.md`. (2) A fully-built, 9-testimonial carousel and a stats section sit dormant in the codebase — never imported on the homepage. Social proof above the fold is zero. (3) The primary nav is missing "Talk to Sales" and "Pricing", the two items `PLAN.md` says must be there.

Fix the positioning first. Then add the dormant social proof. Everything else is refinement.

---

## Critical Issues (fix before launch)

### 🔴 CRITICAL 1 — Nigeria-only positioning contradicts CLAUDE.md

**Where:** `lib/site-config.ts`, `app/layout.tsx` (keywords), hero copy, `lib/structured-data.ts` (SoftwareApplication audience)

The global brand messaging in `CLAUDE.md` and `PLAN.md` says: *"Never restrict the positioning to a single industry or vertical. We are targeting individuals and teams of all sizes."* The live site does the opposite:

| Location | Current text | Problem |
|---|---|---|
| `siteConfig.tagline` | "AI business operations for growing Nigerian businesses" | Tagline excludes every non-Nigerian visitor |
| `siteConfig.description` | "...Built for growing Nigerian businesses." | Meta description and footer pitch |
| `siteConfig.metaDescription` | "Automate daily operations...Built for growing Nigerian businesses." | Google snippet, AI digest |
| `layout.tsx` keywords | "AI business operations platform Nigeria", "business automation for Nigerian SMEs" | Wrong keyword set for global traffic |
| `hero.tsx` hero subtext | "Onita AI helps growing Nigerian businesses..." | First paragraph a visitor reads |
| `softwareApplicationSchema.audience` | "Growing Nigerian service businesses with 5 to 50 employees" | Restricts schema audience in structured data |
| `llms.txt` | "AI business operations platform for growing Nigerian businesses" | AI engines will only cite Onita for Nigerian topics |

**Why it matters for SEO and AI 2026:** Google, Perplexity, and Claude will classify Onita as a Nigerian business tool and exclude it from global queries like "AI productivity platform for teams", "done-for-you AI workspace", and "AI teammates for growing businesses" — which are the primary keyword clusters in `PLAN.md`.

**Fix:** Reposition `site-config.ts` to reflect the global, all-sizes brand. Preserve the Nigeria/local-market identity as one *contextual* reason to choose Onita (the `NigerianFit` section can stay as a trust signal for Nigerian visitors) but don't make it the headline identity. Suggested replacements:

```ts
tagline: "The AI Productivity Platform for Growing Businesses",
slogan: "Less busywork. More business.",
description: "Onita AI helps growing teams automate daily operations, follow up with customers, coordinate work and stay on top of their business with AI teammates — set up and run for you.",
metaDescription: "Automate follow-ups, client operations and daily work with AI teammates. Built for growing teams of all sizes — we set it all up and run it for you.",
```

Layout keywords:
```ts
keywords: [
  "AI productivity platform",
  "AI teammates for business",
  "done-for-you AI workforce",
  "managed AI workspace",
  "sales follow-up automation",
  "client operations software",
  "AI work management platform",
  "business process automation",
]
```

---

### 🔴 CRITICAL 2 — Testimonials and Stats built but not on homepage

**Where:** `components/sections/testimonials.tsx` and `components/sections/stats.tsx` exist and are complete. Neither is imported in `app/page.tsx`.

The **Testimonials** component has 9 polished customer quotes with company logos (Chebez Group, iDegin, IGA Investment, Hawksworth, Tensillabs, and more), an auto-rotating carousel with pause-on-hover, prefers-reduced-motion support, and keyboard navigation. It is production-ready.

The **Stats** component shows: `30,000+` people & teams, `2x` more work done, `12` tools replaced, `40+` hours saved per week.

Currently the homepage has **zero social proof**. A first-time visitor has no signal that real businesses use this. Every competitor (ClickUp, Asana, Notion) leads with numbers or logos.

**Fix:** Import and add both components to `app/page.tsx`. Recommend placement:
- `Stats` after `HowOnitaWorks` (momentum → proof moment)
- `Testimonials` after `AiWorkforce` or before `FinalCta`

```tsx
// app/page.tsx — add these imports and section renders
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
```

---

### 🔴 CRITICAL 3 — "Talk to Sales" missing from primary nav; "Pricing" link absent

**Where:** `lib/navigation.ts`, `components/site-header.tsx`

`PLAN.md` Navigation section explicitly lists: `Logo · Products · Solutions · Industries · Enterprise · Resources · Pricing · Talk to Sales · Book a Demo`

Current primary nav only has: `Products · Use cases · Integrations` with `How it works + Book a demo` CTAs on the right. Missing:
- **"Talk to Sales"** as a text link in the header right area
- **"Pricing"** as a nav item (even linking to a "contact for pricing" page)

**Why it matters:** Enterprise and larger team visitors expect to see "Talk to Sales" in the nav. Without it, they bounce without self-selecting into the sales funnel. Currently the only way to reach `/contact-sales` is through footer or product page CTAs.

**Fix:** Add a "Talk to Sales" ghost link to the header right side, between "How it works" and "Book a demo".

```tsx
// site-header.tsx — in the desktop CTA group
<Link
  href={siteConfig.salesUrl}
  className={`rounded-button px-3.5 py-2 text-sm font-semibold transition-colors ${
    solid ? "text-gray-700 hover:text-ink-800" : "text-white/85 hover:text-white"
  }`}
>
  Talk to sales
</Link>
```

Also add it to the mobile menu's CTA block.

---

## Content & Copy Issues

### 🟡 IMPORTANT 4 — Hero H1 is the slogan, not a positioning statement

**Where:** `components/sections/hero.tsx:73`

Current H1: **"Less busywork. More business."**

This is the slogan (also `siteConfig.slogan`). Slogans are great supporting copy — they are bad H1s. An H1 needs to communicate *what* Onita is and *who* it's for within 2 seconds. The slogan tells you nothing about AI or the workforce concept.

The `PLAN.md` hero headline was: *"Your Team Just Got Bigger."* That line communicates the AI-workforce concept immediately.

💡 Suggested fix — use the positioning as H1, move the slogan to the eyebrow or subtext:
```
Eyebrow: Less busywork. More business.
H1: Your team just got bigger.
Sub: Onita gives growing businesses a set of AI teammates that handle the daily operations, follow-ups and admin — configured around how you work, run by our team for you.
```

---

### 🟡 IMPORTANT 5 — Brand claim "The #1 Rated" never appears on the site

**Where:** `CLAUDE.md`, `PLAN.md` specify tagline: "The #1 Rated Productivity Platform for the AI Era."

This is a strong credibility claim and it appears nowhere on the live site — not in the hero, not in metadata, not in any section heading. If the claim is substantiated it should be front and centre.

💡 Either add it as a trust badge/eyebrow in the hero section, or remove it from brand guidelines if it can't be supported. An unsupported "#1 Rated" claim used in ads or copy is a legal/credibility risk.

---

### 🟡 IMPORTANT 6 — "Works closer to the tools" — awkward phrasing

**Where:** `components/sections/integrations-band.tsx:17`

Current: *"Works closer to the tools your team already uses."*

"Works closer to" is awkward. The intent is "works with" or "plugs into".

⚠️ Fix: *"Plugs into the tools your team already uses."* or *"Connects to the tools your team already uses."*

---

### 🟡 IMPORTANT 7 — solutionsSchema has a duplicate URL

**Where:** `app/page.tsx:10-13`

```ts
const solutionsSchema = itemListSchema("What growing businesses use Onita for", [
  { name: "Sales follow-ups",    path: "/use-cases/follow-ups" },  // ← correct
  { name: "Client operations",  path: "/use-cases/operations" },
  { name: "Invoice collections", path: "/use-cases/follow-ups" }, // ← WRONG: same path as sales follow-ups
]);
```

Invoice collections and sales follow-ups are mapped to the same URL. This tells Google both items are the same page and pollutes the JSON-LD.

⚠️ Fix: Map invoice collections to its own URL. If a dedicated `/use-cases/invoice-collections` page doesn't exist yet, map to `/use-cases` or remove the entry until the page exists.

---

### 🟢 NICE TO HAVE 8 — Hero product tools list is commented out

**Where:** `components/sections/hero.tsx:102-122`

There's a full product-tools pill list (showing AI Agents, Calendar, etc. as chips) that is completely commented out. It added product-breadth visibility above the fold. If it was removed for visual reasons, fine — but if it's waiting on a design decision, make the call: delete it or restore it. Commented-out code in a production component is technical debt.

---

### 🟢 NICE TO HAVE 9 — Agent cards all show identical SparkleIcon

**Where:** `app/use-cases/[slug]/page.tsx:180-189`

In the "Powered by Onita AI" sidebar card on use-case detail pages, every agent uses `SparkleIcon` as its visual. The agents carousel on the homepage has varied icons and avatars — the sidebar should at minimum vary by colour accent to provide visual hierarchy, not all look identical.

---

### 🟢 NICE TO HAVE 10 — NigerianFit section creates positioning conflict

**Where:** `components/sections/home-operations.tsx:139-147`

The `NigerianFit` section ("Made for the way growing businesses actually work") lists reasons explicitly tied to Nigeria (local payment tools, Nigerian businesses in mind). If Onita is repositioning globally, this section should either:
- Become a generic "Why Onita" section (remove the geographic anchors)
- Or move to a dedicated Nigerian market landing page

Keeping it on the global homepage tells international visitors this product isn't for them.

---

## UX & Structure Issues

### 🟡 IMPORTANT 11 — No pricing page or pricing signal anywhere

**Where:** Navigation, footer, no page exists

The `PLAN.md` explicitly calls for a Pricing page. There is no `/pricing` route and no pricing signal anywhere on the site. For a SaaS tool — even a managed/demo-first one — the complete absence of pricing information is a conversion friction. Visitors want to know "is this even in my budget?" before booking a demo.

💡 Minimum fix: Add a "Pricing" nav item that links to a simple `/pricing` page saying "Pricing is tailored to each business's needs. Book a demo and we'll scope the right setup for you." with a CTA. Even "Contact for pricing" is better than silence.

---

### 🟡 IMPORTANT 12 — Testimonials carousel is "use client" — could delay rendering

**Where:** `components/sections/testimonials.tsx:1`

The testimonials component is a full client component (because of the auto-rotation timer). For a section this important, consider rendering the first testimonial server-side and hydrating the carousel client-side. As-is, the testimonials block won't render until JS loads and hydrates, potentially flashing in.

---

### 🟡 IMPORTANT 13 — Contact sales page has no phone/WhatsApp

**Where:** `app/contact-sales/page.tsx:29-42`

The contact channels are email (`sales@onitaapp.com`) and address (Lagos, Nigeria). For Nigerian businesses, WhatsApp is the primary business communication channel — more so than email. Not listing a WhatsApp or phone number on a "Talk to Sales" page for a Nigerian-market focused product is a conversion miss.

💡 Add: `{ label: "WhatsApp", value: "+234...", href: "https://wa.me/...", Icon: WhatsappLogoIcon }` to the `channels` array.

---

### 🟡 IMPORTANT 14 — Nav has no About, Blog, or Enterprise links

**Where:** `lib/navigation.ts:76-80`

The `PLAN.md` calls for: Products · Solutions · Industries · **Enterprise** · **Resources** · Pricing · Talk to Sales. The current nav has Products · Use cases · Integrations only.

Missing sections reduce SEO reach (enterprise, resources/blog keywords) and make the site feel under-built for companies doing due diligence.

Minimum additions:
- A footer "Company" link to an About page
- An "Enterprise" link (can be a use-case page or a simple contact page)

---

### 🟢 NICE TO HAVE 15 — Use-cases index grid is 2-column max

**Where:** `app/use-cases/page.tsx:119`

```tsx
<ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
```

The grid caps at 2 columns on large screens, making the page very long with lots of scroll. Given there are 16+ use cases, consider `lg:grid-cols-3` to improve density and above-fold discovery.

---

### 🟢 NICE TO HAVE 16 — "See how it works" hero CTA anchors within the page

**Where:** `components/sections/hero.tsx:93-99`

The secondary CTA "See how it works" points to `#how-it-works` — an anchor link within the same page. This is fine as a scroll trigger, but PLAN.md specifies the secondary hero CTA should be "Talk to Sales." The scroll link is less conversion-focused.

---

## Conversion Issues

### 🟡 IMPORTANT 17 — Zero social proof above the fold

The homepage in its current state presents: Hero → Business Problems → Business Outcomes → How It Works → Platform Overview → Integrations → AI Workforce → Industries → NigerianFit → FAQ → Final CTA.

There is no social proof anywhere before the FAQ. A visitor reads over 2,000 words of product copy without seeing a single company name, logo, testimonial, or number that proves real businesses use this. The `Stats` and `Testimonials` components are built and ready — they just aren't mounted.

**Impact on conversion:** For demo-first SaaS, trust is built before the CTA. Visitors who don't see proof before the CTA button scroll to it sceptically. Social proof at section 3 or 4 would significantly improve demo form completion rates.

---

### 🟡 IMPORTANT 18 — "AI models" section missing from homepage

**Where:** `PLAN.md` Section 10, `siteConfig.aiModels`

`siteConfig.aiModels` lists `["Claude", "GPT", "Gemini", "Llama"]`. The `PLAN.md` specifically calls for an "AI Models" section: *"Use the world's best AI models — Claude, GPT, Gemini, More."*

This section is missing from the homepage. In 2026, showing which AI models you support is a trust and transparency signal. The AI Workforce section mentions model names on each agent card but there's no dedicated "choose your AI engine" moment.

---

### 🟢 NICE TO HAVE 19 — No competitor comparison pages

**Where:** `PLAN.md` LLM section

`PLAN.md` explicitly calls for: *"Add comparison sections such as 'Onita vs ClickUp', 'Onita vs Notion', and 'Onita vs Asana'."*

In 2026, AI answer engines (Perplexity, ChatGPT, Claude) frequently pull from comparison articles when users ask "what's better than ClickUp?" Not having comparison content means Onita never appears in those answers.

---

### 🟢 NICE TO HAVE 20 — No ROI calculator

**Where:** `PLAN.md` Section 14

The plan calls for an interactive ROI calculator (employees, salary, hours saved, estimated savings). This is the single most powerful B2B conversion tool — it personalises value instantly. Not present in any form on the site.

---

## Technical Issues

### 🟡 IMPORTANT 21 — Products meta title is over 60 characters

**Where:** `app/products/page.tsx:15`

```
"Products — Every Tool Your Team Needs, in One Workspace | Onita AI"
```

66 characters — 6 over the recommended 60-char Google truncation point. Google will truncate and display "Products — Every Tool Your Team Needs, in One Works…"

⚠️ Fix: `"All Products — One Workspace | Onita AI"` (42 chars) or `"Onita Products — AI-Powered Tools for Your Team"` (49 chars)

---

### 🟡 IMPORTANT 22 — Hardcoded year in footer

**Where:** `components/site-footer.tsx:23`

```ts
const year = 2026;
```

This is hardcoded. In 12 months the footer will display the wrong year.

⚠️ Fix: `const year = new Date().getFullYear();`

---

### 🟡 IMPORTANT 23 — Hardcoded `/book-demo` in `HowOnitaWorks`

**Where:** `components/sections/home-operations.tsx:105`

```tsx
<Link href="/book-demo" className="...">
```

Every other CTA correctly uses `siteConfig.demoUrl`. This one is hardcoded. If the demo URL ever changes, this will break.

⚠️ Fix: Import and use `siteConfig.demoUrl`.

---

### 🟢 NICE TO HAVE 24 — No page-specific OG images on product/use-case pages

**Where:** `app/products/[slug]/page.tsx`, `app/use-cases/[slug]/page.tsx`

Product and use-case pages inherit the global OG image from layout. There's an `app/opengraph-image.tsx` file at the root but each product and use-case shares the same image when linked from social. Next.js supports per-route `opengraph-image.tsx` files or dynamic generation with `ImageResponse`. For marketing pages shared by sales reps, a product-specific OG card would significantly improve click-through from social.

---

### 🟢 NICE TO HAVE 25 — `error.tsx` uses `unstable_retry`

**Where:** `app/error.tsx:6`

The error boundary uses `unstable_retry` which is a Next.js unstable API. It may work, but it should be tracked against Next.js release notes. The standard prop is named `reset` in stable Next.js error boundaries. Verify this matches the actual Next.js 16.2 API in `node_modules/next/dist/docs/`.

---

### 🟢 NICE TO HAVE 26 — llms.txt is Nigeria-scoped

**Where:** `app/llms.txt/route.ts:25`

The `/llms.txt` description says: *"Onita AI is an AI business operations platform for growing Nigerian businesses."* As discussed in Critical Issue #1, this scope limits which queries AI assistants cite Onita for. Update to match the global positioning once site-config is fixed.

---

## SEO & AI (2026) Assessment

### What works excellently

| Item | Status |
|---|---|
| One `<h1>` per page | ✅ All pages |
| `<title>` + `<meta description>` + canonical | ✅ All pages |
| Open Graph + Twitter card meta | ✅ All pages |
| Breadcrumb JSON-LD | ✅ All interior pages |
| FAQPage JSON-LD | ✅ Homepage + every product + every use-case |
| Organization + WebSite + SoftwareApplication JSON-LD | ✅ Layout (all pages) |
| Product + Service + Person JSON-LD | ✅ Respective pages |
| `robots.ts` allows AI crawlers | ✅ GPTBot, ClaudeBot, Perplexity, Google-Extended, etc. |
| `llms.txt` route | ✅ Comprehensive link map |
| Sitemap with priorities and change frequency | ✅ All routes |
| Semantic HTML (`main`, `section`, `article`, `aside`, `nav`, `header`, `footer`) | ✅ Throughout |
| Skip-to-content link | ✅ Layout |
| Breadcrumb navigation on all interior pages | ✅ |
| Definition sections on product and use-case pages | ✅ Great for AI extraction |
| Comparison "old way vs Onita way" sections | ✅ Use-case pages |
| FAQs with natural-language questions | ✅ All product + use-case pages |
| `dynamicParams = false` for static generation | ✅ Product + use-case pages |
| `prefers-reduced-motion` respected | ✅ Marquee, testimonials |

### What needs work

| Item | Gap |
|---|---|
| Global keyword positioning | 🔴 Site targets Nigeria-only keywords |
| Competitor comparison pages | ❌ Not present (PLAN.md calls for them) |
| "What is AI Workforce?" definition page | ❌ Missing |
| `/about` page | ❌ Not present |
| `HowTo` schema for workflow steps | ❌ Use-case workflow steps not wrapped in HowTo schema |
| `speakable` schema | ❌ Not present (voice + AI assistant optimisation) |
| Per-page OG images | 🟡 All pages share global image |
| Blog / Resources section | ❌ Not present |

---

## Content Improvements by Page

### Homepage

| Location | Current | Suggested |
|---|---|---|
| H1 | "Less busywork. More business." | "Your team just got bigger." |
| Hero subtext | "...growing Nigerian businesses..." | "...growing businesses of all sizes..." |
| Missing section | — | Add `<Stats>` after HowOnitaWorks |
| Missing section | — | Add `<Testimonials>` before FinalCta |
| Integrations heading | "Works closer to the tools your team already uses." | "Connects to the tools your team already uses." |

### Products Index
- Meta title is 66 chars — trim to under 60.
- H1 "One workspace, every tool your business runs on" — strong, keep it.

### Contact Sales
- Only email + address. Add WhatsApp for Nigerian market.
- No phone number listed anywhere on the site.

### Integrations
- Good page overall. Consider adding a searchable grid as the list grows.

### Team
- Well structured. `personSchema` JSON-LD is correct.

### 404
- Excellent — branded, helpful, with 3 navigation options. No changes needed.

### Error
- Verify `unstable_retry` prop name is correct for Next.js 16.2.

---

## Priority Action Plan

| Priority | Action | Type | Where |
|---|---|---|---|
| 🔴 P1 | Reposition `site-config.ts` — remove Nigeria-only tagline, description, metaDescription | Content | `lib/site-config.ts` |
| 🔴 P1 | Update layout.tsx keywords to global AI productivity clusters | SEO | `app/layout.tsx` |
| 🔴 P1 | Update hero subtext to remove "Nigerian businesses" restriction | Copy | `components/sections/hero.tsx` |
| 🔴 P1 | Update softwareApplicationSchema audience to global | SEO | `lib/structured-data.ts` |
| 🔴 P1 | Import and mount `<Stats>` and `<Testimonials>` on homepage | Conversion | `app/page.tsx` |
| 🔴 P1 | Add "Talk to Sales" link to primary nav desktop and mobile | Navigation | `components/site-header.tsx` |
| 🔴 P1 | Fix solutionsSchema duplicate URL (invoice-collections) | Technical | `app/page.tsx` |
| 🟡 P2 | Change H1 from slogan to positioning statement | Copy | `components/sections/hero.tsx` |
| 🟡 P2 | Add or confirm "#1 Rated" claim with a source, or remove from brand guidelines | Brand | `CLAUDE.md`, `PLAN.md` |
| 🟡 P2 | Fix `const year = 2026` — make it dynamic | Technical | `components/site-footer.tsx:23` |
| 🟡 P2 | Replace hardcoded `/book-demo` with `siteConfig.demoUrl` | Technical | `components/sections/home-operations.tsx:105` |
| 🟡 P2 | Trim Products page meta title to under 60 chars | SEO | `app/products/page.tsx:15` |
| 🟡 P2 | Add WhatsApp/phone to Contact Sales channels | Conversion | `app/contact-sales/page.tsx` |
| 🟡 P2 | Create a `/pricing` page (even if "contact for pricing") | Navigation/UX | new page |
| 🟡 P2 | Fix "Works closer to" → "Connects to" integrations copy | Copy | `components/sections/integrations-band.tsx:17` |
| 🟡 P2 | Update `llms.txt` description to match global positioning | SEO/AI | `app/llms.txt/route.ts` |
| 🟡 P2 | Add AI Models section to homepage | Content | new section component |
| 🟡 P2 | Reconsider NigerianFit section for global positioning | UX/Brand | `components/sections/home-operations.tsx` |
| 🟢 P3 | Create competitor comparison pages (Onita vs ClickUp, Notion, Asana) | SEO/Content | new pages |
| 🟢 P3 | Add `HowTo` schema to use-case workflow steps | SEO | `app/use-cases/[slug]/page.tsx` |
| 🟢 P3 | Add per-route `opengraph-image` for product/use-case pages | SEO | `app/products/[slug]/`, `app/use-cases/[slug]/` |
| 🟢 P3 | Increase use-cases index grid to `lg:grid-cols-3` | UX | `app/use-cases/page.tsx:119` |
| 🟢 P3 | Delete commented-out product tools list in hero | Cleanup | `components/sections/hero.tsx:102-122` |
| 🟢 P3 | Create About page | Content | new page |
| 🟢 P3 | Create Blog/Resources section | SEO/Content | new section |
| 🟢 P3 | Add ROI calculator | Conversion | new component |
| 🟢 P3 | Add `speakable` schema | SEO/AI | `lib/structured-data.ts` |
| 🟢 P3 | Verify `unstable_retry` prop name vs. Next.js 16.2 stable API | Technical | `app/error.tsx` |

---

## What I genuinely like

**The product and use-case page architecture is excellent.** The definition → features → workforce angle → comparison → workflow → metrics → quote → related → FAQ → CTA pattern is conversion-optimised and content-rich. Every page earns trust in sequence and ends with a clear action. This template is ahead of most SaaS marketing sites.

**The AI optimization is forward-thinking.** `llms.txt`, explicit AI crawler allowlisting in `robots.ts`, FAQPage JSON-LD on every page, definition sections, comparison sections — this is built for how people actually discover products in 2026, not 2020. The `llms.txt` route in particular is something many established companies still don't have.

**The design system discipline is real.** No magic numbers, no inline hex, no inconsistent spacing. Everything traces back to tokens. This will pay off as the site scales.

**The SEO mechanics are complete.** Canonical, breadcrumb JSON-LD, one H1, descriptive meta on every page, sitemap with priorities, semantic HTML — none of this was half-done.

**The AI Workforce marquee section is distinctive.** Real agent cards with avatars, skills, docs, model logos, and a live-status indicator — it communicates the product concept better than a paragraph of copy ever could.

**The CTA discipline is perfect.** No "Start Free", no login links, no app.onitaapp.com leakage anywhere. Every CTA routes to Book a Demo or Talk to Sales. This is hard to maintain and was done correctly throughout.

---

*Generated by Claude (Sonnet 4.6) · Onita AI Website Audit · 2026-10-22*
