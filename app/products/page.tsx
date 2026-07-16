import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CaretRightIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { products, accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Products — One Workspace, Every Tool Your Firm Runs On",
  description:
    "Dashboards, documents, spreadsheets, slides, forms, calendars, timelines, automations, and AI agents — one connected workspace, powered by a shared AI workforce.",
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/products`,
    title: "Onita Products — One Workspace, Every Tool Your Firm Runs On",
    description:
      "Dashboards, documents, spreadsheets, slides, forms, calendars, timelines, automations, and AI agents — one connected workspace.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Onita ${p.name}`,
    url: `${siteConfig.url}/products/${p.slug}`,
  })),
};

export default function ProductsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ])
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(itemListSchema)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 30% 20%, #000 30%, transparent 100%)",
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
                Products
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            The Onita platform
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            One workspace, <span className="text-gradient-ai">every tool</span> your business runs on
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Replace a stack of disconnected apps with products that share the same data — and the same
            AI workforce. Explore what your team gets from day one.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <Section tone="light" ariaLabel="All Onita products">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const a = accentClasses[p.accent];
            return (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex h-full flex-col rounded-card-lg border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                  >
                    <p.Icon size={24} weight="fill" aria-hidden="true" />
                  </span>
                  <span className={`mt-5 text-xs font-semibold uppercase tracking-wider ${a.text}`}>
                    {p.category}
                  </span>
                  <h2 className="mt-1 font-display text-xl font-bold text-ink-800">{p.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.subhead}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                    Explore {p.name}
                    <ArrowRightIcon
                      size={16}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* CTA */}
      <Section tone="muted" ariaLabel="Get started with Onita">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            See the whole platform on your real work
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Book a demo and we&apos;ll design, build, and run your AI workforce across every product —
            set up for you, around how your business operates.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover"
            >
              <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
              Book a demo
            </Link>
            <Link
              href={siteConfig.salesUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-border bg-surface px-6 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
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
