"use client";

import { useEffect, useState } from "react";
import { BriefcaseIcon, BuildingsIcon, CoinsIcon, WarningIcon } from "@phosphor-icons/react";
import type { ResellerRow } from "@/lib/reseller/types";
import { fmtUsd, portalFetch } from "./lib";

export function PartnersPanel() {
  const [rows, setRows] = useState<ResellerRow[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    portalFetch<{ resellers: ResellerRow[] }>("/admin/resellers")
      .then((r) => setRows(r.resellers))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="rounded-card-lg border border-danger-500/20 bg-danger-500/10 p-6 text-center">
        <WarningIcon size={24} weight="fill" className="mx-auto text-danger-500" aria-hidden="true" />
        <p className="mt-2 text-sm font-medium">Couldn’t load partners.</p>
      </div>
    );
  }

  if (!rows) {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-card border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-card-lg border border-dashed border-white/15 bg-white/[0.02] py-14 text-center">
        <BriefcaseIcon size={28} weight="duotone" className="mx-auto text-white/40" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium">No partners yet</p>
        <p className="mx-auto mt-1 max-w-xs text-xs text-white/50">
          Partners are invited by the Onita team from the operations console.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-white/60">
        All partner accounts and their lifetime commission. New partners are invited by the Onita team.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => (
          <div
            key={r.id}
            className={`rounded-card border border-white/10 bg-white/[0.03] p-4 ${r.disabled ? "opacity-50" : ""}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate font-semibold">{r.name || r.email}</div>
                <div className="truncate text-xs text-white/50">{r.email}</div>
              </div>
              <span className="shrink-0 rounded-pill border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] font-semibold capitalize text-white/70">
                {r.role}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white/[0.04] px-3 py-2">
                <div className="flex items-center gap-1 text-[11px] text-white/45">
                  <BuildingsIcon size={13} weight="bold" aria-hidden="true" /> Orgs
                </div>
                <div className="font-semibold tabular-nums">{r.orgCount}</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] px-3 py-2">
                <div className="flex items-center gap-1 text-[11px] text-white/45">
                  <CoinsIcon size={13} weight="bold" aria-hidden="true" /> Lifetime
                </div>
                <div className="font-semibold tabular-nums text-brand-300">{fmtUsd(r.lifetimeCommissionUsdMinor)}</div>
              </div>
            </div>
            {r.disabled && <p className="mt-2 text-[11px] text-white/40">Disabled</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
