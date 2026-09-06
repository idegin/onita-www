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
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Tone = "brand" | "accent";

type Option = {
  Icon: Icon;
  badge: string;
  BadgeIcon: Icon;
  name: string;
  tagline: string;
  desc: string;
  points: string[];
  cta: { label: string; href: string; Icon: Icon };
  tone: Tone;
};

const options: Option[] = [
  {
    Icon: CloudIcon,
    badge: "Fastest to launch",
    BadgeIcon: ShieldCheckIcon,
    name: "Run it online with us",
    tagline: "Onita Cloud",
    desc: "Use Onita online. We set up and run your AI productivity platform on our secure cloud — nothing to install and no infrastructure to manage. Your team just logs in and works.",
    points: [
      "Up and running fast — no servers or setup on your side",
      "Fully hosted, monitored, and updated by our team",
      "Enterprise-grade encryption and security built in",
      "Scales instantly as your team and workload grow",
    ],
    cta: { label: "Book a demo", href: siteConfig.demoUrl, Icon: ArrowRightIcon },
    tone: "brand",
  },
  {
    Icon: LockKeyIcon,
    badge: "You own your data",
    BadgeIcon: LockKeyIcon,
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
    tone: "accent",
  },
];

const toneClass: Record<Tone, { panel: string; ctaText: string }> = {
  brand: { panel: "bg-brand-600", ctaText: "text-brand-700" },
  accent: { panel: "bg-accent-600", ctaText: "text-accent-700" },
};

export function GetOnita() {
  return (
    <section id="get-onita" className="relative flex min-h-screen flex-col bg-surface" aria-labelledby="get-onita-heading">
      <div className="mx-auto max-w-content px-4 pt-20 pb-12 sm:px-6 lg:px-10 lg:pt-24">
        <SectionHeading
          id="get-onita-heading"
          eyebrow="Getting Onita"
          title="Two ways to run Onita."
          description="However you choose to run it, our team sets up and manages the whole thing for you. Pick the setup that fits how your business handles its data."
        />
      </div>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        {options.map((opt) => {
          const c = toneClass[opt.tone];
          return (
            <article
              key={opt.tagline}
              className={`relative flex flex-col justify-center overflow-hidden px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24 ${c.panel}`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-black/10 blur-3xl"
              />

              <div className="relative mx-auto w-full max-w-md">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                    <opt.Icon size={28} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                    <opt.BadgeIcon size={13} weight="fill" aria-hidden="true" />
                    {opt.badge}
                  </span>
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-white/75">
                  {opt.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{opt.name}</h3>
                <p className="mt-3 text-base leading-7 text-white/85">{opt.desc}</p>

                <ul className="mt-7 flex flex-col gap-3 border-t border-white/20 pt-7">
                  {opt.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-white">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <CheckIcon size={12} weight="bold" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Link
                    href={opt.cta.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 font-display text-base font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover ${c.ctaText}`}
                  >
                    {opt.cta.label}
                    <opt.cta.Icon size={18} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto max-w-prose px-4 py-12 text-center sm:px-6">
        <p className="text-sm leading-6 text-muted-foreground">
          Not sure which fits?{" "}
          <Link href={siteConfig.demoUrl} className="font-semibold text-brand-600 underline-offset-4 hover:underline">
            Book a demo
          </Link>{" "}
          and we&apos;ll recommend the right setup for how your business handles data, security, and growth.
        </p>
      </div>
    </section>
  );
}
