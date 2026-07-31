"use client";

export function fmtUsd(minor: number): string {
  return `$${(minor / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function fmtUsdCompact(minor: number): string {
  const v = minor / 100;
  if (v >= 1000) return `$${(v / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 })}k`;
  return fmtUsd(minor);
}

export function fmtMonth(m: string): string {
  const [y, mo] = m.split("-");
  const d = new Date(Number(y), Number(mo) - 1, 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
}

export class PortalError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function portalFetch<T = unknown>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`/api/reseller${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    if (res.status === 429) {
      message = "Too many attempts. For security, please wait up to an hour before trying again.";
    }
    throw new PortalError(message, res.status);
  }
  return res.json() as Promise<T>;
}
