import { NextResponse, type NextRequest } from "next/server";
import { callCentral } from "@/lib/reseller/central";
import {
  RESELLER_COOKIE,
  RESELLER_COOKIE_MAX_AGE,
} from "@/lib/reseller/config";
import { getSessionToken } from "@/lib/reseller/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ path: string[] }> };

async function forward(
  req: NextRequest,
  ctx: Ctx,
  method: "GET" | "POST",
): Promise<NextResponse> {
  const { path } = await ctx.params;
  const segments = path ?? [];
  if (segments.some((s) => !/^[a-zA-Z0-9_-]+$/.test(s))) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const sub = segments.join("/");
  const token = await getSessionToken();

  let body: unknown;
  if (method === "POST") {
    body = await req.json().catch(() => ({}));
  }

  const result = await callCentral(`/reseller/${sub}`, { method, token, body });

  if (method === "POST" && sub === "auth/verify-code" && result.ok && result.data) {
    const data = result.data as { token?: string; reseller?: unknown };
    const res = NextResponse.json({ reseller: data.reseller ?? null }, { status: 200 });
    if (data.token) {
      res.cookies.set(RESELLER_COOKIE, data.token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: RESELLER_COOKIE_MAX_AGE,
      });
    }
    return res;
  }

  if (method === "POST" && sub === "auth/logout") {
    const res = NextResponse.json({ ok: true }, { status: 200 });
    res.cookies.delete(RESELLER_COOKIE);
    return res;
  }

  return NextResponse.json(result.data ?? { error: "upstream_error" }, {
    status: result.status,
  });
}

export function GET(req: NextRequest, ctx: Ctx) {
  return forward(req, ctx, "GET");
}

export function POST(req: NextRequest, ctx: Ctx) {
  return forward(req, ctx, "POST");
}
