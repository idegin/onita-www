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
