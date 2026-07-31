"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  EnvelopeSimpleIcon,
  KeyIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SpinnerGapIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site-config";
import { portalFetch, PortalError } from "./lib";

type Step = "email" | "code";

export function ResellerLoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const sendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || busy) return;
    setBusy(true);
    setError(null);
    try {
      await portalFetch("/auth/request-code", {
        method: "POST",
        body: JSON.stringify({ email: email.trim() }),
      });
      setStep("code");
      setNotice("If that email belongs to an active partner account, a login code is on its way.");
    } catch (err) {
      setError(err instanceof PortalError ? err.message : "Couldn't send a code. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || busy) return;
    setBusy(true);
    setError(null);
    try {
      await portalFetch("/auth/verify-code", {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), code: code.trim() }),
      });
      router.replace("/reseller");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof PortalError && err.status === 401
          ? "Invalid or expired code."
          : err instanceof PortalError
            ? err.message
            : "Something went wrong. Try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  const inputCls =
    "w-full rounded-input border border-white/15 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40";

  return (
    <section
      aria-labelledby="reseller-heading"
      className="relative w-full max-w-md rounded-card-lg border border-white/10 bg-white/[0.04] p-8 shadow-hover backdrop-blur-xl sm:p-10"
    >
      <div className="flex items-center justify-between">
        <BrandLogo tone="light" />
        <span className="inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
          <ShieldCheckIcon size={12} weight="fill" aria-hidden="true" />
          Partners
        </span>
      </div>

      <h1
        id="reseller-heading"
        className="mt-8 font-display text-2xl font-bold tracking-tight text-white"
      >
        Partner portal
      </h1>
      <p className="mt-2 text-sm leading-6 text-white/60">
        {step === "email"
          ? "Sign in with your partner email — we'll send you a one-time login code. No password needed."
          : `Enter the code we emailed to ${email}.`}
      </p>

      {notice && step === "code" && (
        <p className="mt-4 flex items-start gap-2 rounded-input border border-brand-400/20 bg-brand-500/10 px-3.5 py-2.5 text-xs leading-5 text-brand-100">
          <CheckCircleIcon size={15} weight="fill" className="mt-0.5 shrink-0 text-brand-300" aria-hidden="true" />
          {notice}
        </p>
      )}
      {error && (
        <p role="alert" className="mt-4 rounded-input border border-danger-500/30 bg-danger-500/10 px-3.5 py-2.5 text-xs leading-5 text-danger-500">
          {error}
        </p>
      )}

      {step === "email" ? (
        <form className="mt-6 space-y-4" onSubmit={sendCode}>
          <div>
            <label htmlFor="reseller-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55">
              Partner email
            </label>
            <div className="relative">
              <EnvelopeSimpleIcon size={18} weight="bold" aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                id="reseller-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@company.com"
                className={inputCls}
              />
            </div>
          </div>
          <SubmitButton busy={busy} label="Send login code" icon={<ArrowRightIcon size={19} weight="bold" aria-hidden="true" />} />
        </form>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={verify}>
          <div>
            <label htmlFor="reseller-code" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55">
              Login code
            </label>
            <div className="relative">
              <KeyIcon size={18} weight="bold" aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                id="reseller-code"
                name="code"
                autoComplete="one-time-code"
                required
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Paste the code"
                className={`${inputCls} font-mono tracking-wider`}
              />
            </div>
          </div>
          <SubmitButton busy={busy} label="Sign in" icon={<ShieldCheckIcon size={19} weight="fill" aria-hidden="true" />} />
          <button
            type="button"
            onClick={() => {
              setStep("email");
              setCode("");
              setError(null);
            }}
            className="w-full text-center text-xs text-white/55 transition-colors hover:text-white"
          >
            Use a different email
          </button>
        </form>
      )}

      <p className="mt-8 text-xs leading-5 text-white/40">
        A private area for {siteConfig.legalName} partners. Access is restricted to invited partner accounts.
      </p>
    </section>
  );
}

function SubmitButton({ busy, label, icon }: { busy: boolean; label: string; icon: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {busy ? <SpinnerGapIcon size={19} weight="bold" className="animate-spin" aria-hidden="true" /> : icon}
      {label}
    </button>
  );
}
