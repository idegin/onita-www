import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  CalendarCheckIcon,
  CompassIcon,
  CloudCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  ChatCircleTextIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Step = {
  title: string;
  desc: string;
  Icon: Icon;
};

const steps: Step[] = [
  {
    title: "Book a demo call",
    desc: "Tell us how your team works and what you want to automate. We'll show you Onita running on your real use cases.",
    Icon: CalendarCheckIcon,
  },
  {
    title: "We design your workforce",
    desc: "Our team maps your workflows and designs the AI agents, skills, and connections built around how you actually operate.",
    Icon: CompassIcon,
  },
  {
    title: "We build & host it for you",
    desc: "We stand up your workspace, connect your tools and documents, and configure every agent — fully hosted and managed by us.",
    Icon: CloudCheckIcon,
  },
  {
    title: "Your team goes live",
    desc: "We onboard your people, hand over the keys, and stay on to support and tune your workforce as you scale.",
    Icon: RocketLaunchIcon,
  },
];

export function GetStarted() {
  return (
    <Section id="get-started" tone="muted" labelledBy="get-started-heading">
      <SectionHeading
        id="get-started-heading"
        eyebrow="How it works"
        title="We set up your AI workforce for you."
        description="No lengthy IT project and nothing to build yourself. Book a demo and our team designs, builds, and hosts your Onita workspace end to end."
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <article className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
                  <step.Icon size={24} weight="fill" aria-hidden="true" />
                </span>
                <span className="font-display text-3xl font-extrabold text-brand-100" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-800">
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.desc}</p>
            </article>

            {i < steps.length - 1 && (
              <CaretRightIcon
                size={22}
                weight="bold"
                aria-hidden="true"
                className="absolute -right-3.5 top-12 hidden text-gray-300 lg:block"
              />
            )}
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href={siteConfig.demoUrl}
          className="inline-flex items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 font-display text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover"
        >
          Book a demo
          <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
        </Link>
        <Link
          href={siteConfig.salesUrl}
          className="inline-flex items-center justify-center gap-2 rounded-button border border-border bg-surface px-6 py-3.5 font-display text-base font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
        >
          <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
          Talk to sales
        </Link>
      </div>
    </Section>
  );
}
