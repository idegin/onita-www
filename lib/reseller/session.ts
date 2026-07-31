import { cookies } from "next/headers";
import { callCentral } from "./central";
import { RESELLER_COOKIE } from "./config";
import type { Reseller } from "./types";

export async function getSessionToken(): Promise<string | undefined> {
  const store = await cookies();
  return store.get(RESELLER_COOKIE)?.value;
}

export async function getReseller(): Promise<Reseller | null> {
  const token = await getSessionToken();
  if (!token) return null;
  const res = await callCentral<Reseller>("/reseller/me", { token });
  return res.ok ? res.data : null;
}
