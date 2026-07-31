import { ONITA_API_URL, RESELLER_SERVICE_SECRET } from "./config";

export interface CentralResult<T> {
  ok: boolean;
  status: number;
  data: T | null;
}

export async function callCentral<T = unknown>(
  path: string,
  opts: { method?: "GET" | "POST"; token?: string; body?: unknown } = {},
): Promise<CentralResult<T>> {
  const url = `${ONITA_API_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (RESELLER_SERVICE_SECRET) headers["x-reseller-key"] = RESELLER_SERVICE_SECRET;
  if (opts.token) headers.Authorization = `Bearer ${opts.token}`;

  try {
    const res = await fetch(url, {
      method: opts.method ?? "GET",
      headers,
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
      cache: "no-store",
    });
    let data: T | null = null;
    try {
      data = (await res.json()) as T;
    } catch {
      data = null;
    }
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 502, data: null };
  }
}
