import type { Metadata } from "next";
import Link from "next/link";
import {
  CaretRightIcon,
  CheckIcon,
  CalendarCheckIcon,
  SparkleIcon,
  PlusIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UsersThreeIcon,
  BuildingsIcon,
  CpuIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema, faqPageSchema } from "@/lib/structured-data";
import { getLivePlans, formatNaira, formatUsd, type LivePlan, type TierId } from "@/lib/pricing";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Pricing — Onita AI Productivity Platform",
  description:
    "Onita pricing is tailored to your team size and the workflows we configure. Book a demo and we'll scope the right plan for your business.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/pricing`,
    title: "Pricing — Onita AI Productivity Platform",
    description:
      "Custom pricing built around your team. Book a demo and we'll scope the right plan for your business.",
  },
};

const planDefs = [
  {
    name: "Starter",
    Icon: RocketLaunchIcon,
    audience: "Individuals & small teams",
    description: "Everything a small team needs to automate daily operations and follow-ups.",
    tier: "starter" as TierId,
    cta: { label: "Start free trial", href: siteConfig.signUpUrl, primary: false },
    features: [
      "Up to 5 team members",
      "{storage} GB storage",
      "1 workspace",
      "Docs, Spreadsheet, Calendar, Notetaker & Forms",
      "AI agents, automations & workflows",
      "Managed onboarding & setup",
    ],
    accent: "brand",
  },
  {
    name: "Growth",
    Icon: UsersThreeIcon,
    audience: "Growing businesses",
    description: "More members, more storage, and powerful AI workflows for teams scaling up.",
    tier: "growth" as TierId,
    cta: { label: "Start free trial", href: `${siteConfig.signUpUrl}?tier=growth`, primary: true },
    features: [
      "Up to 20 team members",
      "{storage} GB storage",
      "Up to 3 workspaces",
      "AI Dashboards, Flows & Approvals",
      "Everything in Starter",
    ],
    accent: "info",
    featured: true,
  },
  {
    name: "Scale",
    Icon: BuildingsIcon,
    audience: "Established organisations",
    description: "Unlimited scale with white-label and your own subdomain.",
    tier: "scale" as TierId,
    cta: { label: "Book a demo", href: "/book-demo", primary: false },
    features: [
      "Unlimited team members",
      "{storage} GB storage",
      "Unlimited workspaces",
      "White-label (your branding)",
      "Custom subdomain",
      "Everything in Growth",
    ],
    accent: "accent",
  },
];

const FALLBACK_USD_CENTS: Record<TierId, number> = { starter: 700, growth: 1200, scale: 2000 };
const FALLBACK_CREDITS: Record<TierId, number> = { starter: 5000, growth: 20000, scale: 50000 };
const FALLBACK_STORAGE: Record<TierId, number> = { starter: 10, growth: 50, scale: 250 };

function priceLabel(tier: TierId, live: Record<TierId, LivePlan> | null): string {
  return live ? formatNaira(live[tier].seatPriceNgn) : formatUsd(FALLBACK_USD_CENTS[tier]);
}

function buildPlans(live: Record<TierId, LivePlan> | null) {
  return planDefs.map((def) => {
    const storage = live ? live[def.tier].storageGb : FALLBACK_STORAGE[def.tier];
    const credits = live ? live[def.tier].monthlyCredits : FALLBACK_CREDITS[def.tier];
    return {
      ...def,
      price: priceLabel(def.tier, live),
      priceNote: "per seat / month",
      credits: `${credits.toLocaleString("en-NG")} AI credits / month`,
      features: def.features.map((f) => f.replace("{storage}", String(storage))),
    };
  });
}

function buildFaqs(live: Record<TierId, LivePlan> | null) {
  const trialDays = live?.starter.trialDays ?? 14;
  const credits = (t: TierId) => (live ? live[t].monthlyCredits : FALLBACK_CREDITS[t]).toLocaleString("en-NG");
  const billing = live ? "All plans are billed in NGN via Paystack." : "Prices are in US dollars and are billed in Naira via Paystack at checkout.";
  return [
    {
      q: "How much does Onita cost?",
      a: `Plans start at ${priceLabel("starter", live)} per seat per month (Starter). Growth is ${priceLabel("growth", live)} per seat per month and Scale is ${priceLabel("scale", live)} per seat per month. ${billing} You can start a ${trialDays}-day free trial on Starter or Growth directly — no demo needed.`,
    },
    {
      q: "Is there a free trial?",
      a: `Yes. Starter and Growth plans include a ${trialDays}-day free trial. At signup you pay for one seat to open your workspace, and that payment is taken off your first invoice, so you are never charged twice. Billing for your team starts when the trial ends. Scale plans are scoped during a demo call.`,
    },
    {
      q: "What are AI credits?",
      a: `AI credits power all AI features — agents, notetaker, AI writer, AI dashboards, and more. Every plan includes a monthly allotment (${credits("starter")} for Starter, ${credits("growth")} for Growth, ${credits("scale")} for Scale). When you need more, you can top up directly from your workspace settings.`,
    },
  {
    q: "Do you offer monthly and annual billing?",
    a: "Yes. Monthly billing is the default. Annual billing comes with a discount — contact us or book a demo to switch to annual.",
  },
  {
    q: "What is included in the setup?",
    a: "Everything. Our team designs the workspace, connects your tools, configures the workflows, and onboards your people — at no extra cost. Setup is part of every plan.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. As your team grows or your workflows expand, we can move you to a higher plan, add more members, or connect more tools. Contact support or book a demo to upgrade.",
  },
  {
    q: "What is white-label on the Scale plan?",
    a: "On the Scale plan your workspace reflects your own brand — custom subdomain and your logo — instead of the Onita brand. It is managed and run for you by our team, just like every other plan.",
  },
  ];
}

const accentMap: Record<string, { bg: string; text: string; softBg: string; border: string; ring: string }> = {
  brand: {
    bg: "bg-brand-500",
    text: "text-brand-600",
    softBg: "bg-brand-50",
    border: "border-brand-200",
    ring: "ring-brand-200",
  },
  info: {
    bg: "bg-info-500",
    text: "text-info-600",
    softBg: "bg-info-50",
    border: "border-info-200",
    ring: "ring-info-200",
  },
  accent: {
    bg: "bg-accent-600",
    text: "text-accent-600",
    softBg: "bg-accent-50",
    border: "border-accent-200",
    ring: "ring-accent-200",
  },
};

export default async function PricingPage() {
  const live = await getLivePlans();
  const plans = buildPlans(live);
  const faqs = buildFaqs(live);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ])
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqPageSchema(faqs))} />

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
                Pricing
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            Pricing
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Simple pricing, built around your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Start a 14-day free trial on Starter or Growth — no commitment needed. Every plan includes AI credits, managed setup, and the full product suite. Scale is for organisations that need unlimited seats and their own branding.
          </p>
        </div>
      </section>

      <Section tone="light" ariaLabel="Onita pricing plans">
        <ul className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const a = accentMap[plan.accent];
            return (
              <li key={plan.name}>
                <article
                  className={`relative flex h-full flex-col rounded-card-lg border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover ${
                    plan.featured
                      ? `${a.border} ring-1 ${a.ring}`
                      : "border-border"
                  }`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                  >
                    <plan.Icon size={24} weight="fill" aria-hidden="true" />
                  </span>
                  {plan.featured && (
                    <span className={`mt-4 inline-flex w-fit items-center gap-1.5 rounded-pill ${a.softBg} px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${a.text}`}>
                      <SparkleIcon size={11} weight="fill" aria-hidden="true" />
                      Most popular
                    </span>
                  )}
                  <h2 className={`${plan.featured ? "mt-3" : "mt-6"} font-display text-2xl font-extrabold text-ink-800`}>
                    {plan.name}
                  </h2>
                  <p className={`mt-0.5 text-sm font-semibold ${a.text}`}>{plan.audience}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 rounded-card border border-border bg-surface-muted px-5 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl font-extrabold text-ink-800">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
                    </div>
                    <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${a.text}`}>
                      <CpuIcon size={13} weight="fill" aria-hidden="true" />
                      {plan.credits}
                    </div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.bg} text-white`}>
                          <CheckIcon size={11} weight="bold" aria-hidden="true" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.cta.href}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-button px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                      plan.cta.primary
                        ? "bg-info-500 text-white shadow-soft hover:bg-info-600 hover:shadow-hover"
                        : "border border-border bg-surface text-ink-800 hover:border-brand-200 hover:text-brand-600"
                    }`}
                  >
                    <CalendarCheckIcon size={17} weight="fill" aria-hidden="true" />
                    {plan.cta.label}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {live
            ? "Prices shown in NGN and updated monthly with the exchange rate. Billed securely via Paystack. Annual billing available on request."
            : "Prices shown in US dollars and billed in Naira via Paystack at checkout. Annual billing available on request."}
        </p>

        <div className="mt-6 flex items-start gap-4 rounded-card border border-brand-100 bg-brand-50 p-6">
          <ShieldCheckIcon size={22} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" />
          <p className="text-sm leading-6 text-ink-800">
            <strong className="font-semibold">All plans include managed setup.</strong> Our team designs your workspace, connects your tools, and configures your workflows — at no extra cost. You go live ready to work, not ready to build.
          </p>
        </div>
      </Section>

      <Section tone="muted" labelledBy="pricing-faq-heading" containerClassName="max-w-3xl">
        <SectionHeading
          id="pricing-faq-heading"
          eyebrow="FAQ"
          title="Pricing questions, answered."
          description="Clear answers about how Onita pricing works."
        />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-ink-800">
                {item.q}
                <PlusIcon
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className="shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-7 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="gradient" ariaLabel="Get started with Onita">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start your free trial in minutes.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Pick a plan, pay securely via Paystack, and your workspace is ready within minutes — with free AI credits included for your trial. Need a custom setup? Book a demo instead.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.signUpUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
            >
              Start free trial
            </Link>
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
              Book a demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
