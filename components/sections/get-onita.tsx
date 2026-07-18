import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  CloudIcon,
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
  ChatCircleTextIcon,
  LockKeyIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Option = {
  Icon: Icon;
  badge: string;
  name: string;
  tagline: string;
  desc: string;
  points: string[];
  cta: { label: string; href: string; Icon: Icon };
  featured?: boolean;
};

const options: Option[] = [
  {
    Icon: CloudIcon,
    badge: "Fastest to launch",
    name: "Run it online with us",
    tagline: "Onita Cloud",
    desc: "Use Onita online. We design, build, and run your AI workforce on our secure cloud — nothing to install and no infrastructure to manage. Your team just logs in and works.",
    points: [
      "Up and running fast — no servers or setup on your side",
      "Fully hosted, monitored, and updated by our team",
      "Enterprise-grade encryption and security built in",
      "Scales instantly as your team and workload grow",
    ],
    cta: { label: "Book a demo", href: siteConfig.demoUrl, Icon: ArrowRightIcon },
    featured: true,
  },
  {
    Icon: LockKeyIcon,
    badge: "You own your data",
    name: "We host it just for you",
    tagline: "Onita Private",
    desc: "Need full control of your data? We deploy and run a dedicated, private instance of Onita for your business — in your own environment. You own and control all of your data, end to end.",
    points: [
      "A private instance isolated to your business alone",
      "Your data stays in your environment — you own and control it",
      "Meet strict security, compliance, and data-residency needs",
      "Still fully managed — we build, host, and maintain it for you",
    ],
    cta: { label: "Talk to sales", href: siteConfig.salesUrl, Icon: ChatCircleTextIcon },
  },
];

export function GetOnita() {
  return (
    <Section id="get-onita" tone="muted" labelledBy="get-onita-heading">
      <SectionHeading
        id="get-onita-heading"
        eyebrow="Getting Onita"
        title="Two ways to get your AI workforce."
        description="However you choose to run it, our team designs, builds, and manages the whole thing for you. Pick the setup that fits how your business handles its data."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {options.map((opt) => (
          <article
            key={opt.tagline}
            className={`relative flex h-full flex-col rounded-card-lg border bg-surface p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover sm:p-10 ${
              opt.featured ? "border-brand-200 ring-1 ring-brand-500/10" : "border-border hover:border-brand-200"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
                <opt.Icon size={28} weight="fill" aria-hidden="true" />
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold ${
                  opt.featured ? "bg-brand-50 text-brand-600" : "bg-surface-muted text-muted-foreground"
                }`}
              >
                {opt.featured ? (
                  <ShieldCheckIcon size={13} weight="fill" aria-hidden="true" />
                ) : (
                  <LockKeyIcon size={13} weight="fill" aria-hidden="true" />
                )}
                {opt.badge}
              </span>
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-brand-600">
              {opt.tagline}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink-800">{opt.name}</h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{opt.desc}</p>

            <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-7">
              {opt.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
                    <CheckIcon size={12} weight="bold" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <Link
                href={opt.cta.href}
                className={`inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 font-display text-base font-semibold transition-all hover:-translate-y-0.5 ${
                  opt.featured
                    ? "bg-brand-500 text-white shadow-soft hover:bg-brand-600 hover:shadow-hover"
                    : "border border-border bg-surface text-ink-800 hover:border-brand-200 hover:text-brand-600"
                }`}
              >
                {!opt.featured && <opt.cta.Icon size={20} weight="fill" aria-hidden="true" />}
                {opt.cta.label}
                {opt.featured && <opt.cta.Icon size={18} weight="bold" aria-hidden="true" />}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-prose text-center text-sm leading-6 text-muted-foreground">
        Not sure which fits?{" "}
        <Link href={siteConfig.demoUrl} className="font-semibold text-brand-600 underline-offset-4 hover:underline">
          Book a demo
        </Link>{" "}
        and we&apos;ll recommend the right setup for how your business handles data, security, and growth.
      </p>
    </Section>
  );
}
