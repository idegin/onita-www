type DemoRequest = {
  name: string;
  email: string;
  company: string;
  businessType: string;
  size?: string;
  goal?: string;
  website?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max = 2_000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: DemoRequest;
  try {
    const raw = (await request.json()) as Record<string, unknown>;
    body = {
      name: text(raw.name, 120),
      email: text(raw.email, 200).toLowerCase(),
      company: text(raw.company, 160),
      businessType: text(raw.businessType, 120),
      size: text(raw.size, 80),
      goal: text(raw.goal),
      website: text(raw.website, 200),
    };
  } catch {
    return Response.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (body.website) return Response.json({ ok: true });
  if (!body.name || !body.company || !body.businessType || !EMAIL.test(body.email)) {
    return Response.json({ message: "Please complete the required fields with a valid work email." }, { status: 400 });
  }

  const webhook = process.env.ONITA_DEMO_WEBHOOK_URL;
  if (!webhook) {
    console.error("Demo request could not be delivered: ONITA_DEMO_WEBHOOK_URL is not configured.");
    return Response.json({ message: "Demo requests are temporarily unavailable. Please email sales@onitaapp.com." }, { status: 503 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...body, source: "onita-www", submittedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null);

  if (!response?.ok) {
    return Response.json({ message: "We could not send your request. Please email sales@onitaapp.com." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
