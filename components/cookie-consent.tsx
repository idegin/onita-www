"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { CookieIcon } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

type Decision = "granted" | "denied";

const COOKIE_NAME = "onita_cookie_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

function readDecision(): Decision | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=(granted|denied)`)
  );
  return match ? (match[1] as Decision) : null;
}

function writeDecision(value: Decision) {
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax`;
}

export function CookieConsent() {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const openedByUser = useRef(false);

  useEffect(() => {
    const stored = readDecision();
    setDecision(stored);
    if (!stored) setOpen(true);

    const onManage = () => {
      openedByUser.current = true;
      setOpen(true);
    };
    window.addEventListener("onita:manage-cookies", onManage);
    return () => window.removeEventListener("onita:manage-cookies", onManage);
  }, []);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    const id = requestAnimationFrame(() => setEntered(true));
    if (openedByUser.current) headingRef.current?.focus();
    return () => cancelAnimationFrame(id);
  }, [open]);

  const choose = useCallback((value: Decision) => {
    writeDecision(value);
    setDecision(value);
    setOpen(false);
    openedByUser.current = false;
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape" && decision) setOpen(false);
    },
    [decision]
  );

  return (
    <>
      {decision === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${siteConfig.analytics.gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {open && (
        <section
          aria-label="Cookie consent"
          onKeyDown={onKeyDown}
          className={[
            "fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md",
            "rounded-card border border-border bg-surface/95 p-5 shadow-hover backdrop-blur",
            "transition-all duration-300 ease-out",
            "motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="flex items-start gap-3.5">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"
            >
              <CookieIcon size={22} weight="fill" />
            </span>
            <div className="min-w-0">
              <p
                ref={headingRef}
                tabIndex={-1}
                className="font-display text-sm font-semibold text-foreground outline-none"
              >
                We value your privacy
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                We use essential cookies to run this site and analytics cookies to understand how
                it is used. You can accept or reject analytics. See our{" "}
                <Link
                  href="/legal/cookies"
                  className="font-medium text-brand-600 underline-offset-4 hover:underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-button border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-button bg-brand-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Accept all
            </button>
          </div>
        </section>
      )}
    </>
  );
}
