import type { Metadata } from "next";
import Link from "next/link";
import {
  CompassIcon,
  CloudCheckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CaretRightIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { DemoForm } from "@/components/forms/demo-form";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Book a Demo — See Your AI Workforce on Your Real Work",
  description:
    "Book a demo of Onita, the AI Workforce Platform for growing businesses and teams. We design, build, and run your AI agents for you — no setup required.",
  alternates: { canonical: "/book-demo" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/book-demo`,
    title: "Book a Demo of Onita — The AI Workforce Platform",
    description:
      "See Onita running on your real use cases. We design, build, and run your AI workforce for you.",
  },
};

const steps = [
  {
    title: "We learn how you work",
    desc: "On the call, tell us how your business delivers and what eats your team's time. We show Onita on your real use cases.",
    Icon: CompassIcon,
  },
  {
    title: "We design & build it",
    desc: "Our team maps your workflows and builds the AI agents, connections, and workspace around how you operate.",
    Icon: CloudCheckIcon,
  },
  {
    title: "Your team goes live",
    desc: "We onboard your people, host everything for you, and stay on to tune your workforce as you scale.",
    Icon: RocketLaunchIcon,
  },
];

const assurances = [
  "No setup work on your side — we build it for you",
  "Run on Onita Cloud, or a private instance where you own your data",
  "Typically live within a couple of weeks",
  "SOC 2 Type II, encryption, and human approval on sensitive actions",
];

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book a demo", path: "/book-demo" },
          ])
        )}
      />

      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 lg:pb-32">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-glow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 55% 60% at 25% 25%, #000 30%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto grid max-w-content items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-10">
          <div className="max-w-xl lg:pt-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-sm text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li className="font-medium text-white/90" aria-current="page">
                  Book a demo
                </li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
              <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
              Book a demo
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
              See your AI workforce on <span className="text-gradient-ai">your real work</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              This isn&apos;t a generic product tour. Tell us how your business works and we&apos;ll show
              Onita running on your use cases — then design, build, and run the whole thing for you.
            </p>

            <ol className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
                    <s.Icon size={22} weight="fill" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-bold text-white">
                      <span className="sr-only">{`Step ${i + 1}: `}</span>
                      {s.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-white/65">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-10 space-y-2.5 border-t border-white/10 pt-8">
              {assurances.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <ShieldCheckIcon
                    size={18}
                    weight="fill"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28">
            <DemoForm />
            <p className="mt-5 text-center text-sm text-white/60">
              Prefer to talk first?{" "}
              <Link href={siteConfig.salesUrl} className="font-semibold text-white underline-offset-4 hover:underline">
                Talk to sales
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
