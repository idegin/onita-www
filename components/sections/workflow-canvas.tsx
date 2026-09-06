"use client";

import { useEffect, useRef, useState } from "react";
import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  RobotIcon,
  TableIcon,
  HandTapIcon,
  CheckCircleIcon,
  LightningIcon,
  PlusIcon,
  ArrowsOutIcon,
} from "@phosphor-icons/react/dist/ssr";

type Tone = "trigger" | "agent" | "connector" | "human" | "done";

type NodeDef = {
  id: string;
  kind: string;
  app?: string;
  title: string;
  desc: string;
  Icon: Icon;
  tone: Tone;
  wide: [number, number];
};

const NODES: NodeDef[] = [
  {
    id: "trigger",
    kind: "Trigger",
    app: "Gmail",
    title: "New reply lands",
    desc: "A lead answers your email",
    Icon: EnvelopeSimpleIcon,
    tone: "trigger",
    wide: [0.11, 0.5],
  },
  {
    id: "agent",
    kind: "AI teammate",
    title: "Drafts a reply",
    desc: "Summarizes, files, responds",
    Icon: RobotIcon,
    tone: "agent",
    wide: [0.335, 0.5],
  },
  {
    id: "human",
    kind: "Human approval",
    title: "Approve reply",
    desc: "One tap — edit first if you like",
    Icon: HandTapIcon,
    tone: "human",
    wide: [0.575, 0.27],
  },
  {
    id: "crm",
    kind: "Connector",
    app: "CRM",
    title: "Update the CRM",
    desc: "Contact & deal stage synced",
    Icon: TableIcon,
    tone: "connector",
    wide: [0.575, 0.73],
  },
  {
    id: "done",
    kind: "Done",
    title: "Sent & logged",
    desc: "Nothing slips through",
    Icon: CheckCircleIcon,
    tone: "done",
    wide: [0.875, 0.5],
  },
];

const WIDE_EDGES: [string, string][] = [
  ["trigger", "agent"],
  ["agent", "human"],
  ["agent", "crm"],
  ["human", "done"],
  ["crm", "done"],
];

const NARROW_ORDER = ["trigger", "agent", "human", "crm", "done"];

const TONE: Record<Tone, { card: string; icon: string; label: string; port: string }> = {
  trigger: {
    card: "border-border bg-surface",
    icon: "bg-ink-800 text-white",
    label: "text-muted-foreground",
    port: "bg-gray-300",
  },
  connector: {
    card: "border-border bg-surface",
    icon: "border border-border bg-surface-muted text-gray-700",
    label: "text-muted-foreground",
    port: "bg-gray-300",
  },
  agent: {
    card: "border-brand-200 bg-white ring-1 ring-brand-500/10",
    icon: "bg-gradient-ai text-white",
    label: "text-brand-600",
    port: "bg-brand-400",
  },
  human: {
    card: "border-brand-300 bg-brand-50 ring-1 ring-brand-500/20",
    icon: "bg-brand-500 text-white",
    label: "text-brand-600",
    port: "bg-brand-500",
  },
  done: {
    card: "border-success-500/30 bg-success-50",
    icon: "bg-success-500 text-white",
    label: "text-success-700",
    port: "bg-success-500",
  },
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

type Placed = { cx: number; cy: number };
type EdgeGeom = { id: string; d: string; brand: boolean };
type Layout = {
  variant: "wide" | "narrow";
  W: number;
  H: number;
  nodeW: number;
  nodeH: number;
  pos: Record<string, Placed>;
  edges: EdgeGeom[];
};

function computeLayout(W: number): Layout {
  const variant: Layout["variant"] = W >= 800 ? "wide" : "narrow";

  if (variant === "wide") {
    const H = clamp(W * 0.44, 384, 496);
    const nodeW = clamp(W * 0.16, 160, 200);
    const nodeH = 86;
    const pos: Record<string, Placed> = {};
    for (const n of NODES) pos[n.id] = { cx: n.wide[0] * W, cy: n.wide[1] * H };

    const edges: EdgeGeom[] = WIDE_EDGES.map(([a, b]) => {
      const A = pos[a];
      const B = pos[b];
      const x1 = A.cx + nodeW / 2;
      const y1 = A.cy;
      const x2 = B.cx - nodeW / 2;
      const y2 = B.cy;
      const dx = Math.max(38, (x2 - x1) * 0.45);
      const d = `M ${x1} ${y1} C ${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`;
      const brand = a === "human" || b === "human";
      return { id: `${a}-${b}`, d, brand };
    });

    return { variant, W, H, nodeW, nodeH, pos, edges };
  }

  const nodeW = Math.min(W - 36, 328);
  const nodeH = 78;
  const topPad = 40;
  const rowGap = 112;
  const H = topPad * 2 + (NARROW_ORDER.length - 1) * rowGap + nodeH;
  const pos: Record<string, Placed> = {};
  NARROW_ORDER.forEach((id, i) => {
    pos[id] = { cx: W / 2, cy: topPad + nodeH / 2 + i * rowGap };
  });

  const edges: EdgeGeom[] = [];
  for (let i = 0; i < NARROW_ORDER.length - 1; i++) {
    const a = NARROW_ORDER[i];
    const b = NARROW_ORDER[i + 1];
    const A = pos[a];
    const B = pos[b];
    const x1 = A.cx;
    const y1 = A.cy + nodeH / 2;
    const x2 = B.cx;
    const y2 = B.cy - nodeH / 2;
    const dy = Math.max(24, (y2 - y1) * 0.4);
    const d = `M ${x1} ${y1} C ${x1} ${y1 + dy} ${x2} ${y2 - dy} ${x2} ${y2}`;
    edges.push({ id: `${a}-${b}`, d, brand: a === "human" || b === "human" });
  }

  return { variant, W, H, nodeW, nodeH, pos, edges };
}

export function WorkflowCanvas() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const measure = () => setLayout(computeLayout(el.clientWidth));
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const H = layout?.H ?? 440;

  return (
    <figure className="mt-14" aria-label="Example Onita workflow: a new email reply triggers an AI teammate to draft a response, you approve it, the CRM updates, and the reply is sent and logged.">
      <div className="overflow-hidden rounded-card-lg border border-border bg-surface shadow-hover">
        <div className="flex items-center gap-3 border-b border-border bg-surface-muted/70 px-5 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-danger-500/70" />
            <span className="h-3 w-3 rounded-full bg-warning-500/70" />
            <span className="h-3 w-3 rounded-full bg-success-500/70" />
          </div>
          <span className="ml-1 hidden items-center gap-2 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
            <LightningIcon size={13} weight="fill" className="text-brand-500" aria-hidden="true" />
            reply-to-crm.flow
          </span>
          <div className="ml-auto flex items-center gap-2" aria-hidden="true">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-success-500/30 bg-success-50 px-2.5 py-1 text-[0.7rem] font-semibold text-success-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-success-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
              </span>
              Live
            </span>
            <span className="hidden h-8 w-8 items-center justify-center rounded-button border border-border bg-surface text-gray-600 sm:inline-flex">
              <PlusIcon size={15} weight="bold" aria-hidden="true" />
            </span>
            <span className="hidden h-8 w-8 items-center justify-center rounded-button border border-border bg-surface text-gray-600 sm:inline-flex">
              <ArrowsOutIcon size={15} weight="bold" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div
          ref={frameRef}
          className="onita-grid relative w-full"
          style={{ height: H }}
          aria-hidden="true"
        >
          {layout && (
            <>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox={`0 0 ${layout.W} ${layout.H}`}
                preserveAspectRatio="xMidYMid meet"
                fill="none"
              >
                <defs>
                  <linearGradient id="wf-flow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#765af3" />
                    <stop offset="100%" stopColor="#ce3e98" />
                  </linearGradient>
                </defs>
                {layout.edges.map((e, i) => (
                  <g key={e.id}>
                    <path
                      d={e.d}
                      stroke="var(--color-gray-300)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: inView ? 0 : 1,
                        transition: `stroke-dashoffset 0.9s ${EASE} ${0.25 + i * 0.12}s`,
                      }}
                    />
                    {inView && (
                      <path
                        d={e.d}
                        stroke={e.brand ? "url(#wf-flow)" : "var(--color-brand-400)"}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        pathLength={1}
                        className="animate-flow"
                        style={{ strokeDasharray: "0.16 0.84", opacity: 0.9 }}
                      />
                    )}
                  </g>
                ))}
              </svg>

              {inView &&
                layout.edges.map((e, i) => (
                  <span
                    key={`p-${e.id}`}
                    className="animate-travel pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white shadow-glow ring-2 ring-brand-500"
                    style={{
                      offsetPath: `path('${e.d}')`,
                      animationDelay: `${0.6 + i * 0.5}s`,
                    }}
                  />
                ))}

              {NODES.map((n, i) => {
                const p = layout.pos[n.id];
                const t = TONE[n.tone];
                const wide = layout.variant === "wide";
                return (
                  <div
                    key={n.id}
                    className="absolute"
                    style={{
                      left: p.cx,
                      top: p.cy,
                      width: layout.nodeW,
                      transform: "translate(-50%, -50%)",
                      opacity: inView ? 1 : 0,
                      transitionProperty: "opacity, transform",
                      transitionDuration: "0.6s",
                      transitionTimingFunction: EASE,
                      transitionDelay: `${0.15 + i * 0.11}s`,
                      ...(inView ? {} : { transform: "translate(-50%, calc(-50% + 10px))" }),
                    }}
                  >
                    <article
                      className={`relative flex items-center gap-3 rounded-2xl border p-3.5 shadow-soft ${t.card}`}
                    >
                      {n.tone === "human" && (
                        <span className="absolute -top-3 right-3 inline-flex items-center gap-1 rounded-pill bg-brand-500 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white shadow-soft">
                          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-white" />
                          Waiting for you
                        </span>
                      )}
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.icon}`}
                      >
                        <n.Icon size={20} weight="fill" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <span className={`flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-wider ${t.label}`}>
                          {n.kind}
                          {n.app && (
                            <span className="rounded bg-surface-muted px-1 py-px text-[0.58rem] font-semibold text-gray-600">
                              {n.app}
                            </span>
                          )}
                        </span>
                        <h3 className="mt-0.5 truncate font-display text-[0.82rem] font-bold leading-tight text-ink-800">
                          {n.title}
                        </h3>
                        <p className="mt-0.5 truncate text-[0.68rem] leading-4 text-muted-foreground">
                          {n.desc}
                        </p>
                      </div>

                      {wide ? (
                        <>
                          {n.id !== "trigger" && (
                            <span className={`absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-surface ${t.port}`} />
                          )}
                          {n.id !== "done" && (
                            <span className={`absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-surface ${t.port}`} />
                          )}
                        </>
                      ) : (
                        <>
                          {n.id !== "trigger" && (
                            <span className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-surface ${t.port}`} />
                          )}
                          {n.id !== "done" && (
                            <span className={`absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-surface ${t.port}`} />
                          )}
                        </>
                      )}
                    </article>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      <ol className="sr-only">
        <li>Trigger: a new email reply lands in your inbox from a lead.</li>
        <li>AI teammate: reads the email, summarizes it, files the contact, and drafts a reply.</li>
        <li>Human approval: you approve the drafted reply in one tap, editing first if you like.</li>
        <li>Connector: the CRM is updated with the contact and deal stage.</li>
        <li>Done: the reply is sent and the whole exchange is logged.</li>
      </ol>

      <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-800" aria-hidden="true" />
          Trigger
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-ai" aria-hidden="true" />
          AI teammate
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-border bg-surface-muted" aria-hidden="true" />
          Your tools
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" aria-hidden="true" />
          Human approval
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-success-500" aria-hidden="true" />
          Done
        </li>
      </ul>
    </figure>
  );
}
