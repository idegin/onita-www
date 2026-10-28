import { ONITA_API_URL } from "@/lib/reseller/config";

export type TierId = "growth" | "scale";

export interface LivePlan {
  tier: TierId;
  seatPriceUsdCents: number;
  seatPriceNgn: number;
  monthlyCredits: number;
  storageGb: number;
  trialDays: number;
}

const TIERS: TierId[] = ["growth", "scale"];

function isPlan(p: unknown): p is LivePlan {
  if (!p || typeof p !== "object") return false;
  const o = p as Record<string, unknown>;
  return (
    TIERS.includes(o.tier as TierId) &&
    typeof o.seatPriceUsdCents === "number" &&
    typeof o.seatPriceNgn === "number" &&
    typeof o.monthlyCredits === "number" &&
    typeof o.storageGb === "number" &&
    typeof o.trialDays === "number"
  );
}

export async function getLivePlans(): Promise<Record<TierId, LivePlan> | null> {
  try {
    const res = await fetch(`${ONITA_API_URL}/pricing/plans`, {
      next: { revalidate: 600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { plans?: unknown[] };
    const plans = (data.plans ?? []).filter(isPlan);
    const byTier = Object.fromEntries(plans.map((p) => [p.tier, p])) as Partial<Record<TierId, LivePlan>>;
    return TIERS.every((t) => byTier[t]) ? (byTier as Record<TierId, LivePlan>) : null;
  } catch {
    return null;
  }
}

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;
export const formatUsd = (cents: number) => `$${(cents / 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
