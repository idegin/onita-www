import type { Metadata } from "next";
import {
  LockKeyIcon,
  EnvelopeSimpleIcon,
  KeyIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Team portal",
  description: "Internal access for authorized Onita team members.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: undefined },
};

export default function PortalPage() {
  return (
    <div className="fixed inset-0 z-[60] flex min-h-[100svh] items-center justify-center overflow-y-auto bg-ink-950 px-4 py-10 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-gradient-hero opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-ai opacity-20 blur-3xl"
      />

      <main
        id="main"
        aria-labelledby="portal-heading"
        className="relative w-full max-w-md rounded-card-lg border border-white/10 bg-white/[0.04] p-8 shadow-hover backdrop-blur-xl sm:p-10"
      >
        <div className="flex items-center justify-between">
          <BrandLogo tone="light" />
          <span className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
            <LockKeyIcon size={12} weight="fill" aria-hidden="true" />
            Internal
          </span>
        </div>

        <h1
          id="portal-heading"
          className="mt-8 font-display text-2xl font-bold tracking-tight text-white"
        >
          Team portal
        </h1>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Sign in with your Onita team account. Access is restricted to authorized
          staff.
        </p>

        <form className="mt-8 space-y-4" action={siteConfig.appUrl} method="get">
          <div>
            <label
              htmlFor="portal-email"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55"
            >
              Work email
            </label>
            <div className="relative">
              <EnvelopeSimpleIcon
                size={18}
                weight="bold"
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                id="portal-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                placeholder="you@onitaapp.com"
                className="w-full rounded-input border border-white/15 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="portal-password"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55"
            >
              Password
            </label>
            <div className="relative">
              <KeyIcon
                size={18}
                weight="bold"
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                id="portal-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••••••"
                className="w-full rounded-input border border-white/15 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover"
          >
            <ShieldCheckIcon size={19} weight="fill" aria-hidden="true" />
            Sign in
          </button>
        </form>


        <p className="mt-8 flex items-start gap-2 text-xs leading-5 text-white/45">
          <LockKeyIcon size={14} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0" />
          This is a private area for {siteConfig.legalName} staff. Unauthorized access is
          prohibited and monitored.
        </p>
      </main>
    </div>
  );
}
