"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowClockwiseIcon,
  HouseIcon,
  WarningOctagonIcon,
  ChatCircleTextIcon,
} from "@phosphor-icons/react";
import { siteConfig } from "@/lib/site-config";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-labelledby="error-heading"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink-950 px-4 pb-20 pt-28 text-center sm:px-6"
    >
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -left-40 -top-24 h-[38rem] w-[38rem] rounded-full bg-gradient-hero opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -bottom-32 -right-32 h-[34rem] w-[34rem] rounded-full bg-gradient-ai opacity-25 blur-3xl"
      />

      <div className="relative w-full max-w-xl">
        <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 py-1.5 pl-2 pr-3.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-ai">
            <WarningOctagonIcon size={14} weight="fill" aria-hidden="true" className="text-white" />
          </span>
          Something broke
        </span>

        <h1
          id="error-heading"
          className="mt-8 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
        >
          Something went <span className="text-gradient-ai">wrong</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-white/70">
          An unexpected error interrupted this page. It&apos;s usually temporary — try
          again, and if it keeps happening our team is one message away.
        </p>

        {error.digest && (
          <p className="mt-4 font-mono text-xs text-white/40">Reference: {error.digest}</p>
        )}

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
          >
            <ArrowClockwiseIcon size={20} weight="bold" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <HouseIcon size={20} weight="fill" aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/55">
          Still stuck?{" "}
          <Link
            href={siteConfig.salesUrl}
            className="inline-flex items-center gap-1 font-semibold text-brand-300 underline-offset-4 hover:underline"
          >
            <ChatCircleTextIcon size={15} weight="fill" aria-hidden="true" />
            Talk to our team
          </Link>
        </p>
      </div>
    </section>
  );
}
