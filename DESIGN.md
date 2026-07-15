# DESIGN.md

## Onita Marketing Website Design System

### Version 1.0

---

# Overview

This document defines the complete visual language, interaction model, motion system, and UI standards for the Onita marketing website. It is intended for both UI/UX designers and frontend engineers to ensure a consistent, modern, high-converting SaaS experience.

The overall experience should communicate that Onita is not simply another productivity application—it is an **AI Workforce Platform** built for ambitious organizations. Every design decision should reinforce intelligence, speed, trust, collaboration, and scale.

---

# Brand Personality

The interface should feel like a blend of:

* Airtable's simplicity
* Linear's precision
* Vercel's elegance
* Arc Browser's fluidity
* Stripe's polish
* Apple's whitespace
* Notion's readability

The result should be:

* Professional
* Futuristic
* Premium
* Minimal
* Friendly
* Intelligent
* Confident
* Human-centered

Avoid looking "techy" just for the sake of it. The design should feel approachable for SMEs while remaining enterprise-ready.

---

# Design Philosophy

## Core Principle

> Complex technology should feel effortless.

The UI should communicate:

"I don't need to understand AI to benefit from it."

Every page should feel clean, spacious, and easy to scan.

---

# Visual Identity

## Brand Keywords

* AI Workforce
* Intelligence
* Automation
* Growth
* Collaboration
* Reliability
* Speed
* Confidence
* Enterprise
* Scalability

---

# Color System

## Primary Brand

```
Primary Purple
#765AF3
```

Used for

* Primary buttons
* Links
* Active navigation
* Highlights
* Icons
* Gradients
* Focus states

---

## Primary Dark

```
#250E5D
```

Used for

* Hero backgrounds
* Footer
* Dark cards
* Navigation
* Headings on light backgrounds
* Enterprise sections

---

## Accent Gold

```
#CE3E98
```

Used sparingly

* AI highlights
* Notification badges
* Decorative gradients
* Hover accents
* Charts
* Statistics

Never use this as a body text color.

---

## Supporting Purple

```
#9B8BFF
```

Generated tint for hover states and gradients.

---

## Neutral Colors

### Gray 950

```
#0B0B12
```

Primary text

---

### Gray 900

```
#16161F
```

Dark surfaces

---

### Gray 800

```
#252535
```

Borders in dark mode

---

### Gray 700

```
#404050
```

Icons

---

### Gray 600

```
#666677
```

Secondary text

---

### Gray 500

```
#8E8E9A
```

Muted text

---

### Gray 400

```
#B4B4C2
```

Placeholders

---

### Gray 300

```
#D7D7E3
```

Dividers

---

### Gray 200

```
#ECECF4
```

Card borders

---

### Gray 100

```
#F6F6FA
```

Background sections

---

### Gray 50

```
#FBFBFD
```

Main background

---

# Semantic Colors

Success

```
#21C16B
```

Warning

```
#F6B100
```

Danger

```
#F44336
```

Information

```
#3B82F6
```

---

# Gradients

## Hero Gradient

```
#250E5D

↓

#765AF3
```

---

## AI Gradient

```
#765AF3

↓

#CE3E98
```

---

## Glow Gradient

```
rgba(118,90,243,0.35)

↓

transparent
```

Used behind floating illustrations.

---

# Typography

## Font Family

### Primary

**Plus Jakarta Sans**

Used for

* Headings
* Buttons
* Navigation
* Hero
* Cards

---

### Secondary

**Inter**

Used for

* Paragraphs
* Tables
* Forms
* Labels
* Documentation

---

### Monospace

**JetBrains Mono**

Only for

* API snippets
* Code examples

---

# Typography Scale

Hero

72px

Bold

---

Display

60px

Bold

---

Heading 1

48px

Bold

---

Heading 2

40px

Bold

---

Heading 3

32px

Semibold

---

Heading 4

24px

Semibold

---

Heading 5

20px

Semibold

---

Heading 6

18px

Medium

---

Body Large

18px

Regular

---

Body

16px

Regular

---

Small

14px

Regular

---

Caption

12px

Medium

---

# Border Radius

Buttons

```
14px
```

Cards

```
24px
```

Large cards

```
32px
```

Badges

```
999px
```

Input fields

```
16px
```

Images

```
28px
```

Dashboard previews

```
32px
```

---

# Shadows

Use soft layered shadows.

Never harsh.

Example

```
0 10px 40px rgba(0,0,0,.08)
```

Hover

```
0 20px 70px rgba(0,0,0,.12)
```

---

# Spacing System

Use an 8-point grid.

Spacing scale

```
4

8

12

16

24

32

40

48

56

64

80

96

120

160
```

Sections

120–160px vertical

Cards

32px padding

Hero

Minimum 900px height

---

# Layout

Maximum width

```
1440px
```

Content width

```
1280px
```

Reading width

```
720px
```

---

# Grid

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

---

# Design Style

Large whitespace

Floating UI

Glassmorphism accents (very subtle)

Premium gradients

Soft depth

Minimal borders

Rounded interfaces

Micro animations

Rich illustrations

Live dashboard previews

No clutter

---

# Imagery

Avoid generic stock photography.

Preferred assets include:

* 3D abstract shapes
* AI network visualizations
* Product mockups
* Real dashboard renders
* Workflow diagrams
* Team collaboration scenes
* Minimal workplace imagery
* Device mockups
* Animated product interfaces

---

# Illustration Style

Use custom vector illustrations.

Inspired by:

* Stripe
* Airtable
* Figma
* Linear

Include:

* AI agents
* Connected workflows
* Floating databases
* Knowledge graphs
* Automation pipelines
* Smart dashboards

---

# Product Screenshots

Never place raw screenshots directly.

Instead:

* Device mockups
* Floating windows
* Layered UI
* Glass overlays
* Depth
* Shadows
* Perspective

---

# Motion Design

Motion should feel intelligent.

Never distracting.

---

## Scroll Animations

Fade Up

Slide Left

Slide Right

Scale

Blur In

Rotate

Parallax

Reveal Masks

Card stacking

Timeline reveal

Section pinning

Progress indicator

---

## Hero Animation

Background particles

Floating AI nodes

Workflow connections

Animated gradients

Orbiting cards

Cursor interaction

Mouse parallax

---

## Product Preview

Auto-playing dashboard

Live updates

Task completion

Charts updating

Agents collaborating

Notifications

Calendar movement

Documents updating

---

## AI Animation

Agent

↓

Reads knowledge

↓

Uses connector

↓

Collaborates

↓

Produces result

This animation becomes the centerpiece of the homepage.

---

# Micro Interactions

Button hover

Soft elevation

Gradient shift

Icon movement

Ripple

Card lift

Animated borders

Progress indicators

Hover glow

Magnetic buttons

Animated underline

---

# Interactive Components

Interactive comparison tables

ROI calculator

Agent builder demo

Workflow simulator

Feature explorer

Pricing calculator

Industry selector

Live dashboard preview

Interactive timeline

---

# Video

Homepage should contain multiple silent looping videos.

Recommended:

Hero

20–30 seconds

Product overview

Agent collaboration

Workflow automation

Dashboard interaction

CRM workflow

Project management

Calendar planning

Document collaboration

Videos should autoplay, muted, and loop seamlessly.

---

# GIFs

Small GIFs should demonstrate:

Creating an agent

Dragging tasks

Building workflows

Connecting Google

Generating reports

Automating approvals

Assigning tasks

Using AI

---

# Infographics

Create custom illustrations for:

Why companies outgrow multiple tools

AI Workforce architecture

Agent collaboration

Workflow automation

Knowledge sources

Connectors

Permission hierarchy

Business growth

ROI

Platform ecosystem

---

# Iconography

Use **Phosphor Icons** (React Icons) as the primary icon set.

Reasons:

* Modern visual style
* Multiple weights
* Excellent consistency
* Rounded appearance
* Large icon library
* Ideal for SaaS interfaces

Use the Regular weight by default, with Bold for emphasis in feature highlights.

---

# Buttons

Primary

Purple

Filled

Large

---

Secondary

White

Border

---

Ghost

Transparent

---

Link

Underline on hover

---

# Forms

Large inputs

Rounded

Soft borders

Floating labels

Inline validation

Accessible error states

---

# Cards

Large

Rounded

Image on top

Shadow

Hover elevation

Animated borders

---

# Backgrounds

Alternate between

White

Very light gray

Dark purple

Gradient

Never repeat the same background more than twice consecutively.

---

# Section Pattern

Every page should follow a rhythm:

1. Statement
2. Explanation
3. Visual
4. Benefits
5. Social Proof
6. CTA

This predictable cadence improves readability and conversion.

---

# Accessibility

* WCAG 2.2 AA compliant
* Minimum 4.5:1 text contrast
* Full keyboard navigation
* Clear focus indicators
* Semantic HTML landmarks
* ARIA labels where appropriate
* Descriptive alt text for a
ll imagery
* Reduced-motion preference support
* Touch targets of at least 44×44 pixels

---

# Responsive Strategy

Design mobile-first while optimizing for large desktop experiences.

Breakpoints:

* Mobile: 360–767px
* Tablet: 768–1023px
* Laptop: 1024–1439px
* Desktop: 1440–1919px
* Ultra-wide: 1920px+

Navigation should collapse into a full-screen overlay on smaller devices, with simplified animations and optimized media.

---

# Overall Experience

When someone lands on the Onita website, they should immediately feel that they are looking at a next-generation business platform rather than a traditional SaaS application. The interface should communicate intelligence, confidence, and simplicity through generous spacing, premium typography, purposeful motion, rich interactive product demonstrations, and a cohesive visual language.

Every visual element should reinforce a single idea:

> **Onita helps small teams work with the speed, coordination, and output of an enterprise-scale workforce powered by AI.**

---

# Implementation Reference — Color Ramps (50–950)

> Source of truth: `app/globals.css` (`@theme`). These agency-grade ramps extend the base brand
> values above into full 50→950 scales for real UI needs (hovers, borders, washes, dark surfaces).
> Consume them as Tailwind utilities (`bg-brand-500`, `text-ink-800`, `border-gray-200`) — never
> hard-code hex. **Naming note:** the accent (`#CE3E98`) is a magenta; DESIGN.md's label "Accent
> Gold" is historical. It maps to the `accent-*` scale and stays sparing (never body text).

## Brand — Violet (primary, `brand-*`, 500 = `#765AF3`)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#f4f2fe` | `#e9e4fd` | `#d4c9fb` | `#b7a4f8` | `#9a7df5` | `#765af3` | `#6446e3` | `#5235c9` | `#412a9e` | `#33217a` | `#211351` |

## Ink — Deep Indigo (hero/footer/enterprise, `ink-*`, 800 = `#250E5D`)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#f2f0fa` | `#e3def3` | `#c6bde7` | `#a293d6` | `#7b67c1` | `#5b45a4` | `#453283` | `#35276a` | `#250e5d` | `#1b0a45` | `#11052c` |

## Accent — Magenta (`accent-*`, 500 = `#CE3E98`, use sparingly)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#faeef6` | `#f5dcec` | `#ecb6d8` | `#e38fc3` | `#da6bae` | `#ce3e98` | `#b12d83` | `#92226b` | `#731c56` | `#591744` | `#3d102e` |

## Neutral — Cool Gray (`gray-*`)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `#fbfbfd` | `#f6f6fa` | `#ececf4` | `#d7d7e3` | `#b4b4c2` | `#8e8e9a` | `#666677` | `#404050` | `#252535` | `#16161f` | `#0b0b12` |

## Semantic (`success-* warning-* danger-* info-*`, steps 50 / 500 / 600 / 700)

| Token | 50 | 500 | 600 | 700 |
|-------|-----|-----|-----|-----|
| success | `#e7f9f0` | `#21c16b` | `#17a259` | `#127e46` |
| warning | `#fef6e3` | `#f6b100` | `#d09300` | `#a06f00` |
| danger  | `#fdeceb` | `#f44336` | `#d32f22` | `#a5221a` |
| info    | `#eaf2fe` | `#3b82f6` | `#2b6bd8` | `#1f52ab` |

## Theme-Aware Surfaces (auto light/dark via `.dark` on `<html>`)

Use these for structural UI so dark mode works with no extra classes:
`background`, `surface`, `surface-muted`, `foreground`, `muted-foreground`, `border`, `input`,
`ring`, `primary` / `primary-foreground`, `accent` / `accent-foreground`.

Contrast is verified: white on `brand-500` = 4.63:1 (passes AA normal text); `gray-600` on white =
5.6:1 (secondary text); `gray-500` is placeholder/decorative only.

## Tokens beyond color

- **Radii:** `rounded-button` 14 · `rounded-input` 16 · `rounded-card` 24 · `rounded-card-lg` 32 ·
  `rounded-image` 28 · `rounded-pill`.
- **Shadows:** `shadow-soft` · `shadow-hover` · `shadow-glow`.
- **Gradients:** `bg-gradient-hero` (`#250E5D → #765AF3`) · `bg-gradient-ai` (`#765AF3 → #CE3E98`) ·
  `bg-glow` · `text-gradient-ai`.
- **Containers:** `max-w-site` 1440 · `max-w-content` 1280 · `max-w-prose` 720.
