"use client";

import { useEffect, useState } from "react";
import { BankIcon, CheckCircleIcon, SpinnerGapIcon, WarningIcon } from "@phosphor-icons/react";
import type { ResellerBank, ResellerPayoutSummary } from "@/lib/reseller/types";
import { fmtUsd, portalFetch } from "./lib";

const STATUS_TONE: Record<string, string> = {
  paid: "bg-success-500/15 text-success-500 border-success-500/20",
  pending: "bg-warning-500/15 text-warning-600 border-warning-500/20",
};

const dateFmt = (s: string | null) =>
  s ? new Date(s).toLocaleDateString("en-US", { dateStyle: "medium" }) : "—";

export function PayoutsPanel() {
  const [data, setData] = useState<ResellerPayoutSummary | null>(null);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    portalFetch<ResellerPayoutSummary>("/payouts")
      .then(setData)
      .catch(() => setError(true));
  }, [reload]);

  if (error) {
    return (
      <div className="rounded-card-lg border border-danger-500/20 bg-danger-500/10 p-6 text-center">
        <WarningIcon size={24} weight="fill" className="mx-auto text-danger-500" aria-hidden="true" />
        <p className="mt-2 text-sm font-medium">Couldn&apos;t load your payouts.</p>
      </div>
    );
  }
  if (!data) {
    return <div className="h-64 animate-pulse rounded-card-lg border border-white/10 bg-white/[0.04]" />;
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        <div className="rounded-card border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs text-white/50">Lifetime earned</div>
          <div className="mt-1 text-2xl font-bold tabular-nums">{fmtUsd(data.totalEarnedUsdMinor)}</div>
        </div>
        <div className="rounded-card border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs text-white/50">Paid out</div>
          <div className="mt-1 text-2xl font-bold tabular-nums text-white/80">{fmtUsd(data.totalPaidOutUsdMinor)}</div>
        </div>
        <div className="rounded-card border border-brand-400/30 bg-brand-500/10 p-4">
          <div className="text-xs text-brand-200">Payable balance</div>
          <div className="mt-1 text-2xl font-bold tabular-nums text-brand-200">{fmtUsd(data.payableUsdMinor)}</div>
        </div>
      </div>

      <BankDetailsForm bank={data.bank} onSaved={() => setReload((r) => r + 1)} />

      <section>
        <h2 className="mb-3 font-display text-base font-semibold">Payout history</h2>
        {data.payouts.length === 0 ? (
          <div className="rounded-card-lg border border-dashed border-white/15 bg-white/[0.02] py-12 text-center text-sm text-white/50">
            No payouts yet. Your commission is paid out to the bank details below.
          </div>
        ) : (
          <div className="space-y-2">
            {data.payouts.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 rounded-card border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold tabular-nums">{fmtUsd(p.amountUsdMinor)}</div>
                  <div className="truncate text-[11px] text-white/50">
                    {p.note || "Commission payout"} · {dateFmt(p.paidAt ?? p.createdAt)}
                  </div>
                </div>
                <span className={`shrink-0 rounded-pill border px-2 py-0.5 text-[11px] font-semibold capitalize ${STATUS_TONE[p.status] ?? "border-white/15 bg-white/5 text-white/60"}`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function BankDetailsForm({ bank, onSaved }: { bank: ResellerBank; onSaved: () => void }) {
  const [form, setForm] = useState<ResellerBank>({
    bankAccountName: bank.bankAccountName ?? "",
    bankAccountNumber: bank.bankAccountNumber ?? "",
    bankName: bank.bankName ?? "",
    bankCurrency: bank.bankCurrency ?? "USD",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const set = (k: keyof ResellerBank, v: string) => {
    setForm((s) => ({ ...s, [k]: v }));
    setSaved(false);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await portalFetch("/bank", { method: "PUT", body: JSON.stringify(form) });
      setSaved(true);
      onSaved();
    } catch {
      // surfaced by the disabled state resetting; keep it simple
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full rounded-input border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55";

  return (
    <section className="rounded-card-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <BankIcon size={18} weight="bold" className="text-brand-300" aria-hidden="true" />
        <h2 className="font-display text-base font-semibold">Payout bank details</h2>
      </div>
      <p className="mb-4 text-sm text-white/55">
        We pay your commission to this account. Keep it up to date — payouts are processed manually by
        the Onita team.
      </p>
      <form onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="bank-name">Account holder name</label>
          <input id="bank-name" className={inputCls} value={form.bankAccountName ?? ""} onChange={(e) => set("bankAccountName", e.target.value)} placeholder="As it appears on the account" />
        </div>
        <div>
          <label className={labelCls} htmlFor="bank-institution">Bank</label>
          <input id="bank-institution" className={inputCls} value={form.bankName ?? ""} onChange={(e) => set("bankName", e.target.value)} placeholder="Bank name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="bank-currency">Currency</label>
          <input id="bank-currency" className={inputCls} value={form.bankCurrency ?? ""} onChange={(e) => set("bankCurrency", e.target.value.toUpperCase())} placeholder="USD" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="bank-number">Account number / IBAN</label>
          <input id="bank-number" className={inputCls} value={form.bankAccountNumber ?? ""} onChange={(e) => set("bankAccountNumber", e.target.value)} placeholder="Account number" />
        </div>
        <div className="flex items-center gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-button bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 disabled:opacity-60"
          >
            {saving ? <SpinnerGapIcon size={16} weight="bold" className="animate-spin" aria-hidden="true" /> : null}
            Save bank details
          </button>
          {saved && (
            <span className="inline-flex items-center gap-1.5 text-xs text-success-500">
              <CheckCircleIcon size={15} weight="fill" aria-hidden="true" /> Saved
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
