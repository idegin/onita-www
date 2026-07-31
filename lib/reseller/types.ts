export interface Reseller {
  id: string;
  email: string;
  name: string | null;
  role: "reseller" | "admin" | "superadmin";
}

export interface OrgEarning {
  orgId: string;
  orgName: string;
  orgStatus: string;
  commissionPercent: number;
  capUsdMinor: number | null;
  revenueUsdMinor: number;
  commissionUsdMinor: number;
}

export interface EarningsSeriesPoint {
  month: string;
  revenueUsdMinor: number;
  commissionUsdMinor: number;
}

export interface ResellerEarnings {
  resellerId: string;
  fxAvailable: boolean;
  totalRevenueUsdMinor: number;
  totalCommissionUsdMinor: number;
  orgs: OrgEarning[];
  series: EarningsSeriesPoint[];
}

export interface ResellerBank {
  bankAccountName: string | null;
  bankAccountNumber: string | null;
  bankName: string | null;
  bankCurrency: string | null;
}

export interface PayoutRow {
  id: string;
  amountUsdMinor: number;
  status: string;
  note: string | null;
  paidAt: string | null;
  createdAt: string;
}

export interface ResellerPayoutSummary {
  totalEarnedUsdMinor: number;
  totalPaidOutUsdMinor: number;
  payableUsdMinor: number;
  bank: ResellerBank;
  payouts: PayoutRow[];
}

export interface ResellerRow {
  id: string;
  email: string;
  name: string | null;
  role: string;
  disabled: boolean;
  createdAt: string;
  orgCount: number;
  lifetimeCommissionUsdMinor: number;
}
