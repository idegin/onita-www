import type { Metadata } from "next";
import Link from "next/link";
import {
  HouseIcon,
  CalendarCheckIcon,
  SquaresFourIcon,
  StackIcon,
  ChatCircleTextIcon,
  ArrowRightIcon,
  CompassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for isn't here. Explore Onita's AI productivity products and use cases, or book a demo.",
  robots: { index: false, follow: true },
};

const destinations = [
  {
    label: "Explore products",
    desc: "AI Task Manager, Docs, Calendar, Notetaker, and more.",
    href: "/products",
    Icon: SquaresFourIcon,
  },
  {
    label: "Browse use cases",
    desc: "How Onita works for your business and team.",
    href: "/use-cases",
    Icon: StackIcon,
  },
  {
    label: "Talk to sales",
    desc: "Tell us what you need and we'll help.",
    href: siteConfig.salesUrl,
    Icon: ChatCircleTextIcon,
  },
];

export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink-950 px-4 pb-20 pt-28 text-center sm:px-6"
    >
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -left-40 -top-24 h-[38rem] w-[38rem] rounded-full bg-gradient-ai opacity-25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -bottom-32 -right-32 h-[34rem] w-[34rem] rounded-full bg-gradient-hero opacity-30 blur-3xl"
      />

      <div className="relative w-full max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 py-1.5 pl-2 pr-3.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-ai">
            <CompassIcon size={14} weight="fill" aria-hidden="true" className="text-white" />
          </span>
          Error 404
        </span>

        <p
          aria-hidden="true"
          className="mt-8 font-display text-[6rem] font-extrabold leading-none tracking-tight text-gradient-ai sm:text-[9rem]"
        >
          404
        </p>

        <h1
          id="notfound-heading"
          className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        >
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-white/70">
          The page may have moved or never existed. Onita&apos;s AI is still hard at
          work — let&apos;s get you back to it.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
          >
            <HouseIcon size={20} weight="fill" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href={siteConfig.demoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
            Book a demo
          </Link>
        </div>

        <nav aria-label="Popular destinations" className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/45">
            Popular destinations
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {destinations.map(({ label, desc, href, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-card border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-ai text-white">
                    <Icon size={22} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="mt-4 font-display text-base font-bold text-white">
                    {label}
                  </span>
                  <span className="mt-1 text-sm leading-6 text-white/60">{desc}</span>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-300">
                    Go
                    <ArrowRightIcon
                      size={15}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
