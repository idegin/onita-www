import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  CaretRightIcon,
  CheckIcon,
  XIcon,
  RobotIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  SparkleIcon,
  PlusIcon,
  QuotesIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { GlassMockup } from "@/components/ui/glass-mockup";
import { solutions, getSolution } from "@/lib/solutions";
import { accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import {
  jsonLd,
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

const shots = [
  "/screenshots/half-1.png",
  "/screenshots/half-2.png",
  "/screenshots/half-3.png",
  "/screenshots/half-4.png",
  "/screenshots/half-5.png",
  "/screenshots/half-6.png",
];

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  const path = `/solutions/${solution.slug}`;
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${path}`,
      title: `${solution.metaTitle} | ${siteConfig.name}`,
      description: solution.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.metaTitle} | ${siteConfig.name}`,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const a = accentClasses[solution.accent];
  const idx = solutions.findIndex((s) => s.slug === slug);
  const shot = shots[idx % shots.length];
  const related = solution.related
    .map((s) => getSolution(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: solution.name,
            slug: solution.slug,
            description: solution.metaDescription,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqPageSchema(solution.faqs))}
      />

      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-28">
        <div
          aria-hidden="true"
          className={`animate-pulse-glow pointer-events-none absolute -left-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br ${a.gradient} opacity-25 blur-3xl`}
        />
        <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li>
                  <Link href="/solutions" className="transition-colors hover:text-white">
                    Solutions
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li className="font-medium text-white/90" aria-current="page">
                  {solution.name}
                </li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 py-1.5 pl-2 pr-3.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${a.gradient}`}>
                <solution.Icon size={14} weight="fill" aria-hidden="true" className="text-white" />
              </span>
              {solution.group}
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {solution.headline}{" "}
              <span className="text-gradient-ai">{solution.headlineEmphasis}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">{solution.subhead}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.demoUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
              >
                <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
                Book a demo
              </Link>
              <Link
                href={siteConfig.salesUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
                Talk to sales
              </Link>
            </div>
          </div>

          <aside
            aria-label={`AI agents powering ${solution.name}`}
            className="rounded-card-lg border border-white/10 bg-white/[0.04] p-6 shadow-hover backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/55">
                Your {solution.name} team
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-500/15 px-2.5 py-1 text-xs font-semibold text-success-500">
                <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
                Active
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {solution.agents.map((agent) => (
                <li
                  key={agent}
                  className="flex items-center gap-3.5 rounded-card border border-white/10 bg-white/[0.03] px-4 py-3.5"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${a.gradient} text-white`}>
                    <RobotIcon size={20} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-white">{agent}</span>
                  <SparkleIcon size={16} weight="fill" aria-hidden="true" className="ml-auto text-accent-300" />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-white/50">
              Designed, built, and run by Onita — around how your business works.
            </p>
          </aside>
        </div>
      </section>

      <Section tone="light" labelledBy="solution-definition-heading" containerClassName="max-w-3xl text-center">
        <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>Definition</span>
        <h2
          id="solution-definition-heading"
          className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl"
        >
          What is Onita for {solution.name}?
        </h2>
        <p className="mt-6 text-xl leading-9 text-foreground">{solution.summary}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {solution.agents.map((agent) => (
            <li
              key={agent}
              className={`inline-flex items-center gap-2 rounded-pill border border-border ${a.softBg} px-3.5 py-1.5 text-sm font-medium text-ink-800`}
            >
              <RobotIcon size={14} weight="fill" aria-hidden="true" className={a.text} />
              {agent}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="solution-compare-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>The shift</span>
          <h2
            id="solution-compare-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl"
          >
            From {solution.name.toLowerCase()} that drags to {solution.name.toLowerCase()} that runs itself
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-card-lg border border-border bg-surface p-7">
            <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-gray-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <XIcon size={16} weight="bold" aria-hidden="true" />
              </span>
              The old way
            </h3>
            <ul className="mt-5 space-y-4">
              {solution.comparison.map((row) => (
                <li key={row.old} className="flex items-start gap-3 text-[15px] leading-6 text-gray-600">
                  <XIcon size={18} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-danger-500/70" />
                  {row.old}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-card-lg border ${a.border} bg-surface p-7 shadow-soft ring-1 ${a.ring}`}>
            <h3 className={`flex items-center gap-2.5 font-display text-lg font-bold ${a.text}`}>
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${a.bg} text-white`}>
                <CheckIcon size={16} weight="bold" aria-hidden="true" />
              </span>
              The Onita way
            </h3>
            <ul className="mt-5 space-y-4">
              {solution.comparison.map((row) => (
                <li key={row.onita} className="flex items-start gap-3 text-[15px] leading-6 text-ink-800">
                  <CheckIcon size={18} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-success-600" />
                  {row.onita}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="solution-pillars-heading">
        <div className="max-w-2xl">
          <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>How Onita solves it</span>
          <h2
            id="solution-pillars-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl"
          >
            Three ways your {solution.name.toLowerCase()} changes
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {solution.pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className={`relative rounded-card-lg border border-border bg-surface p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover`}
            >
              <span aria-hidden="true" className={`absolute left-0 top-8 h-12 w-1 rounded-r ${a.bg}`} />
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}>
                  <pillar.Icon size={26} weight="fill" aria-hidden="true" />
                </span>
                <span className="font-display text-4xl font-extrabold text-gray-500" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink-800">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{pillar.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="gradient" labelledBy="solution-workflow-heading">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/85">
              <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-300" />
              AI workflow
            </span>
            <h2
              id="solution-workflow-heading"
              className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {solution.workflow.title}
            </h2>

            <ol className="mt-9 space-y-0">
              {solution.workflow.steps.map((step, i) => {
                const last = i === solution.workflow.steps.length - 1;
                return (
                  <li key={`${step.agent}-${i}`} className="flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-sm font-bold text-white ring-1 ring-white/20">
                        {i + 1}
                      </span>
                      {!last && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-white/20" />}
                    </div>
                    <div className="pb-1 pt-1">
                      <span className="inline-flex rounded-pill bg-white/10 px-2.5 py-0.5 font-display text-xs font-semibold text-accent-200">
                        {step.agent}
                      </span>
                      <p className="mt-1.5 text-[15px] leading-6 text-white/80">{step.action}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <GlassMockup
            src={shot}
            alt={`Onita running the ${solution.name} workflow with AI agents`}
            sizes="(max-width: 1024px) 100vw, 46vw"
            chip={
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <RobotIcon size={18} weight="fill" aria-hidden="true" className="text-accent-300" />
                {solution.agents.length} agents at work
              </span>
            }
            className="lg:rotate-1"
          />
        </div>
      </Section>

      <Section tone="light" labelledBy="solution-features-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>What you get</span>
          <h2
            id="solution-features-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl"
          >
            Built to carry the work, not just track it
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-border">
          {solution.features.map((feature, i) => (
            <article
              key={feature.title}
              className={`flex flex-col gap-5 py-8 sm:items-center sm:gap-8 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <span
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-card ${a.softBg} ${a.text}`}
              >
                <feature.Icon size={30} weight="fill" aria-hidden="true" />
              </span>
              <div className={i % 2 === 0 ? "sm:text-left" : "sm:text-right"}>
                <h3 className="font-display text-xl font-bold text-ink-800">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark" ariaLabel={`Results teams see with Onita for ${solution.name}`}>
        <div className="grid gap-8 sm:grid-cols-3">
          {solution.metrics.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left">
              <p className="font-display text-5xl font-extrabold text-gradient-ai lg:text-6xl">{metric.value}</p>
              <p className="mt-2 text-base text-white/65">{metric.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" ariaLabel={`Customer story for ${solution.name}`} containerClassName="max-w-3xl">
        <QuotesIcon size={48} weight="fill" aria-hidden="true" className={`${a.text}`} />
        <blockquote className="mt-6">
          <p className="font-display text-2xl font-semibold leading-relaxed text-ink-800 sm:text-3xl sm:leading-relaxed">
            {solution.story.quote}
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${a.bg} font-display text-lg font-bold text-white`} aria-hidden="true">
              {solution.story.name.charAt(0)}
            </span>
            <span>
              <span className="block font-display text-base font-semibold text-ink-800">{solution.story.name}</span>
              <span className="block text-sm text-muted-foreground">{solution.story.role}</span>
            </span>
          </footer>
        </blockquote>
      </Section>

      <Section tone="light" labelledBy="solution-related-heading">
        <h2 id="solution-related-heading" className="font-display text-2xl font-bold text-ink-800 sm:text-3xl">
          Explore related solutions
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          {related.map((r) => {
            const ra = accentClasses[r.accent];
            return (
              <li key={r.slug}>
                <Link
                  href={`/solutions/${r.slug}`}
                  className="group flex h-full flex-col rounded-card-lg border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
                >
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${ra.softBg} ${ra.text}`}>
                    <r.Icon size={22} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="mt-4 font-display text-lg font-bold text-ink-800">{r.name}</span>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                    Explore
                    <ArrowRightIcon
                      size={15}
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

      <Section tone="muted" labelledBy="solution-faq-heading" containerClassName="max-w-3xl">
        <h2 id="solution-faq-heading" className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
          {solution.name}, answered
        </h2>
        <div className="mt-10 space-y-3">
          {solution.faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-card border border-border bg-surface px-6 py-1 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-ink-800">
                {item.q}
                <PlusIcon
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className={`shrink-0 ${a.text} transition-transform duration-200 group-open:rotate-45`}
                />
              </summary>
              <p className="pb-5 text-[15px] leading-7 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="light" ariaLabel={`Get started with Onita for ${solution.name}`}>
        <div className="relative overflow-hidden rounded-card-lg bg-ink-950 px-6 py-14 shadow-hover sm:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${a.gradient} opacity-40 blur-3xl`}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Put an AI {solution.name.toLowerCase()} team to work
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                Book a demo and we&apos;ll design, build, and run the agents for {solution.name.toLowerCase()} around
                how your business already operates.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={siteConfig.demoUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
              >
                <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
                Book a demo
              </Link>
              <Link
                href={siteConfig.salesUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
