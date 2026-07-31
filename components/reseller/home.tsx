"use client";

import { useEffect, useState } from "react";
import {
  BuildingsIcon,
  CoinsIcon,
  TrendUpIcon,
  ChartLineUpIcon,
  UsersThreeIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import type { Reseller, ResellerEarnings } from "@/lib/reseller/types";
import { fmtUsd, fmtUsdCompact, fmtMonth, portalFetch } from "./lib";
import { PartnersPanel } from "./partners";
import { PayoutsPanel } from "./payouts";

type Tab = "overview" | "payouts" | "partners";

const STATUS_TONE: Record<string, string> = {
  active: "bg-success-500/15 text-success-500 border-success-500/20",
  trial: "bg-info-500/15 text-info-500 border-info-500/20",
  grace: "bg-warning-500/15 text-warning-600 border-warning-500/20",
  suspended: "bg-danger-500/15 text-danger-500 border-danger-500/20",
};

export function ResellerHome({ reseller }: { reseller: Reseller }) {
  const isAdmin = reseller.role === "admin" || reseller.role === "superadmin";
  const [tab, setTab] = useState<Tab>("overview");
  const [data, setData] = useState<ResellerEarnings | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    portalFetch<ResellerEarnings>("/earnings")
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back{reseller.name ? `, ${reseller.name.split(" ")[0]}` : ""}
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Track the organizations you’ve referred and the commission you’ve earned.
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Portal sections"
          className="inline-flex self-start rounded-pill border border-white/10 bg-white/[0.03] p-1"
        >
          <TabButton active={tab === "overview"} onClick={() => setTab("overview")}>My earnings</TabButton>
          <TabButton active={tab === "payouts"} onClick={() => setTab("payouts")}>Payouts</TabButton>
          {isAdmin && <TabButton active={tab === "partners"} onClick={() => setTab("partners")}>Partners</TabButton>}
        </div>
      </div>

      {tab === "partners" && isAdmin ? (
        <PartnersPanel />
      ) : tab === "payouts" ? (
        <PayoutsPanel />
      ) : error ? (
        <ErrorCard />
      ) : !data ? (
        <LoadingState />
      ) : (
        <Overview data={data} />
      )}
    </div>
  );
}

function Overview({ data }: { data: ResellerEarnings }) {
  const activeOrgs = data.orgs.filter((o) => o.orgStatus === "active").length;
  const maxCommission = Math.max(1, ...data.series.map((s) => s.commissionUsdMinor));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <Stat icon={<BuildingsIcon size={20} weight="duotone" />} label="Organizations" value={String(data.orgs.length)} />
        <Stat icon={<UsersThreeIcon size={20} weight="duotone" />} label="Active accounts" value={String(activeOrgs)} />
        <Stat icon={<TrendUpIcon size={20} weight="duotone" />} label="Revenue referred" value={fmtUsdCompact(data.totalRevenueUsdMinor)} />
        <Stat icon={<CoinsIcon size={20} weight="duotone" />} label="Commission earned" value={fmtUsdCompact(data.totalCommissionUsdMinor)} accent />
      </div>

      {!data.fxAvailable && (
        <p className="flex items-start gap-2 rounded-card border border-warning-500/20 bg-warning-500/10 px-4 py-3 text-sm text-warning-600">
          <WarningIcon size={17} weight="fill" className="mt-0.5 shrink-0" aria-hidden="true" />
          A live FX rate isn’t available right now, so revenue billed in local currency isn’t
          included in these USD totals yet.
        </p>
      )}

      <section className="rounded-card-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <ChartLineUpIcon size={18} weight="bold" className="text-brand-300" aria-hidden="true" />
          <h2 className="font-display text-base font-semibold">Commission over time</h2>
        </div>
        {data.series.length === 0 ? (
          <p className="py-6 text-center text-sm text-white/50">
            No paid invoices yet — your commission will appear here as your referred accounts are billed.
          </p>
        ) : (
          <div className="space-y-2.5">
            {data.series.map((s) => (
              <div key={s.month} className="flex items-center gap-3">
                <div className="w-14 shrink-0 text-xs text-white/50">{fmtMonth(s.month)}</div>
                <div className="h-6 flex-1 overflow-hidden rounded-pill bg-white/5">
                  <div
                    className="h-full rounded-pill bg-gradient-ai transition-all duration-500"
                    style={{ width: `${Math.max(3, Math.round((s.commissionUsdMinor / maxCommission) * 100))}%` }}
                    title={`${fmtUsd(s.revenueUsdMinor)} revenue`}
                  />
                </div>
                <div className="w-20 shrink-0 text-right text-sm font-semibold tabular-nums">{fmtUsd(s.commissionUsdMinor)}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 font-display text-base font-semibold">Your organizations</h2>
        {data.orgs.length === 0 ? (
          <div className="rounded-card-lg border border-dashed border-white/15 bg-white/[0.02] py-14 text-center">
            <BuildingsIcon size={28} weight="duotone" className="mx-auto text-white/40" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium">No organizations yet</p>
            <p className="mx-auto mt-1 max-w-xs text-xs text-white/50">
              Once an organization you referred is set up, it’ll show here with your commission.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {data.orgs.map((o) => (
              <div key={o.orgId} className="rounded-card border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{o.orgName}</div>
                    <div className="mt-0.5 text-xs text-white/50">{o.commissionPercent}% commission</div>
                  </div>
                  <span className={`shrink-0 rounded-pill border px-2 py-0.5 text-[11px] font-semibold capitalize ${STATUS_TONE[o.orgStatus] ?? "border-white/15 bg-white/5 text-white/60"}`}>
                    {o.orgStatus}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Revenue</div>
                    <div className="text-sm font-medium tabular-nums text-white/80">{fmtUsd(o.revenueUsdMinor)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Commission</div>
                    <div className="text-base font-bold tabular-nums text-brand-300">{fmtUsd(o.commissionUsdMinor)}</div>
                  </div>
                </div>
                {o.capUsdMinor != null && (
                  <p className="mt-2 text-[11px] text-white/40">Capped at {fmtUsd(o.capUsdMinor)}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-card border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05]">
      <div className={`flex size-9 items-center justify-center rounded-xl ${accent ? "bg-gradient-ai text-white" : "bg-brand-500/15 text-brand-300"}`}>
        {icon}
      </div>
      <div className="mt-3 text-xl font-bold tabular-nums sm:text-2xl">{value}</div>
      <div className="mt-0.5 text-xs text-white/50">{label}</div>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-pill px-4 py-1.5 text-sm font-semibold transition-colors ${
        active ? "bg-brand-500 text-white" : "text-white/60 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function LoadingState() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-card border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
      <div className="h-64 animate-pulse rounded-card-lg border border-white/10 bg-white/[0.04]" />
    </div>
  );
}

function ErrorCard() {
  return (
    <div className="rounded-card-lg border border-danger-500/20 bg-danger-500/10 p-6 text-center">
      <WarningIcon size={26} weight="fill" className="mx-auto text-danger-500" aria-hidden="true" />
      <p className="mt-2 text-sm font-medium">We couldn’t load your earnings.</p>
      <p className="mt-1 text-xs text-white/50">Please refresh the page or try again shortly.</p>
    </div>
  );
}
