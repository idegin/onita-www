"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
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
    <html lang="en" className="h-full">
      <body className="min-h-full bg-ink-950 text-white antialiased">
        <title>Something went wrong | Onita AI</title>
        <main
          id="main"
          className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 -top-24 h-[38rem] w-[38rem] rounded-full bg-gradient-hero opacity-30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 h-[34rem] w-[34rem] rounded-full bg-gradient-ai opacity-25 blur-3xl"
          />

          <div className="relative w-full max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Something went <span className="text-gradient-ai">wrong</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-white/70">
              We hit an unexpected error while loading Onita. Please try again — it&apos;s
              usually temporary.
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
                Try again
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Back to home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
