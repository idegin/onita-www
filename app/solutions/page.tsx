import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CaretRightIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  StackIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { solutions, solutionGroups } from "@/lib/solutions";
import { accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Solutions — AI Agents for Every Team in Your Business",
  description:
    "AI workforce solutions for project management, sales, marketing, operations, HR, finance, IT, and more. Onita designs, builds, and runs the agents each team needs.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/solutions`,
    title: "Onita Solutions — AI Agents for Every Team in Your Business",
    description:
      "AI workforce solutions for project management, sales, marketing, operations, HR, finance, IT, and more — designed, built, and run for you.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: solutions.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Onita for ${s.name}`,
    url: `${siteConfig.url}/solutions/${s.slug}`,
  })),
};

export default function SolutionsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ])
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(itemListSchema)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 70% 20%, #000 30%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-white/55">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
              <li className="font-medium text-white/90" aria-current="page">
                Solutions
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <StackIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            Solutions by team
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            An AI workforce for <span className="text-gradient-ai">every team</span> you run
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Whatever your team does — deliver projects, win customers, run operations, support people — Onita
            designs, builds, and runs the AI agents that carry the repetitive work, so you get more done
            without hiring more.
          </p>
        </div>
      </section>

      {/* Grouped solution lists */}
      {solutionGroups.map((group, gi) => (
        <Section
          key={group}
          tone={gi % 2 === 0 ? "light" : "muted"}
          labelledBy={`group-${gi}-heading`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id={`group-${gi}-heading`}
              className="font-display text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl"
            >
              {group}
            </h2>
            <span className="text-sm text-muted-foreground">
              {solutions.filter((s) => s.group === group).length} solutions
            </span>
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {solutions
              .filter((s) => s.group === group)
              .map((s) => {
                const a = accentClasses[s.accent];
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="group flex h-full items-start gap-5 rounded-card-lg border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover sm:p-7"
                    >
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                      >
                        <s.Icon size={28} weight="fill" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-ink-800">{s.name}</span>
                          <ArrowRightIcon
                            size={16}
                            weight="bold"
                            aria-hidden="true"
                            className="text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                          />
                        </span>
                        <span className="mt-1.5 block text-sm leading-6 text-muted-foreground">{s.subhead}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </Section>
      ))}

      {/* CTA */}
      <Section tone="gradient" ariaLabel="Get started with an Onita solution">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Book a demo and we&apos;ll map your team&apos;s biggest time sinks to the AI agents that clear
            them — then build and run the whole thing for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
            >
              <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
              Book a demo
            </Link>
            <Link
              href={siteConfig.salesUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
              Talk to sales
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
