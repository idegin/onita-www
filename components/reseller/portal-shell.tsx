"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignOutIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/brand-logo";
import { portalFetch } from "./lib";
import type { Reseller } from "@/lib/reseller/types";

export function PortalShell({
  reseller,
  children,
}: {
  reseller: Reseller;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const signOut = async () => {
    setSigningOut(true);
    try {
      await portalFetch("/auth/logout", { method: "POST" });
    } catch {}
    router.replace("/reseller/login");
    router.refresh();
  };

  const roleLabel =
    reseller.role === "reseller" ? "Reseller" : reseller.role === "admin" ? "Admin" : "Super admin";

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-gradient-hero opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-ai opacity-[0.12] blur-3xl"
      />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <BrandLogo tone="light" />
            <span className="hidden rounded-pill border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 sm:inline">
              Partner portal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <div className="text-sm font-semibold leading-tight">{reseller.name || reseller.email}</div>
              <div className="text-[11px] text-white/50">{roleLabel}</div>
            </div>
            <button
              onClick={signOut}
              disabled={signingOut}
              className="inline-flex items-center gap-1.5 rounded-button border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/[0.08] disabled:opacity-60"
            >
              {signingOut ? (
                <SpinnerGapIcon size={15} weight="bold" className="animate-spin" aria-hidden="true" />
              ) : (
                <SignOutIcon size={15} weight="bold" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <div id="portal-main" className="relative mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        {children}
      </div>
    </div>
  );
}
