import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  ShieldCheckIcon,
  CurrencyNgnIcon,
  RocketLaunchIcon,
  HeadsetIcon,
  WrenchIcon,
  MapPinIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Reason = { Icon: Icon; title: string; body: string };

const reasons: Reason[] = [
  {
    Icon: ShieldCheckIcon,
    title: "Secure & private by default",
    body: "Your data stays yours. Everything is encrypted, access is tightly scoped, and we can run a private instance hosted just for your business — so customer and financial data never leaves your control.",
  },
  {
    Icon: CurrencyNgnIcon,
    title: "Priced around your budget",
    body: "No bloated per-seat pricing built for overseas budgets. Tell us what you can afford and we design a plan that fits — a full AI workforce for a fraction of the cost of new hires or a stack of foreign tools.",
  },
  {
    Icon: RocketLaunchIcon,
    title: "Set up and run for you",
    body: "No tech team required. We connect your tools, train your AI teammates on how you work, and keep everything running — so you see real results from the first week, not the first quarter.",
  },
  {
    Icon: HeadsetIcon,
    title: "Support that actually answers",
    body: "Real people who pick up, working in your timezone — not a ticket queue an ocean away. We work alongside your team like an extension of it, around the clock.",
  },
  {
    Icon: WrenchIcon,
    title: "Need a feature? We build it",
    body: "If Onita doesn't do something your business needs, we build it and ship it to you. Your feedback shapes the roadmap — you get software that bends to fit you, not the other way around.",
  },
  {
    Icon: MapPinIcon,
    title: "Built for the Nigerian market",
    body: "From Paystack and Flutterwave to WhatsApp-first customers, Onita fits how your market moves — wiring the world's best AI models into workflows made for doing business here.",
  },
];

export function WhyOnita() {
  return (
    <Section id="why-onita" tone="dark" labelledBy="why-onita-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-glow opacity-50"
      />
      <div className="relative">
        <SectionHeading
          invert
          id="why-onita-heading"
          eyebrow="Why Onita"
          title="Why growing businesses choose Onita."
          description="We built Onita for how business actually runs here — done for you, priced around your budget, and backed by a team that ships whatever you need."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="flex h-full flex-col rounded-card border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
                <r.Icon size={24} weight="fill" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-white/70">{r.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={siteConfig.demoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 font-display text-base font-semibold text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
          >
            <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
            See it on your own workflows
          </Link>
          <Link
            href={siteConfig.salesUrl}
            className="inline-flex items-center justify-center gap-2 rounded-button border border-white/20 bg-white/5 px-6 py-3.5 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
            Talk to sales
          </Link>
        </div>
      </div>
    </Section>
  );
}
