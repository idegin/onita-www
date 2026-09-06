"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { hubIntegrations } from "@/lib/brands";
import { siteConfig } from "@/lib/site-config";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const INNER = hubIntegrations.slice(0, 8);
const OUTER = hubIntegrations.slice(8);

type Placed = {
  name: string;
  logo: string;
  x: number;
  y: number;
  tile: number;
  ring: number;
  path: string;
};

type Layout = {
  size: number;
  badge: number;
  innerR: number;
  outerR: number;
  nodes: Placed[];
};

function computeLayout(size: number): Layout {
  const c = size / 2;
  const badge = clamp(size * 0.17, 76, 116);
  const innerR = size * 0.245;
  const outerR = size * 0.435;
  const innerTile = clamp(size * 0.115, 44, 62);
  const outerTile = clamp(size * 0.108, 40, 56);

  const place = (
    items: typeof hubIntegrations,
    r: number,
    tile: number,
    ring: number,
    startDeg: number,
  ): Placed[] =>
    items.map((it, i) => {
      const a = ((startDeg + (i * 360) / items.length) * Math.PI) / 180;
      const x = c + r * Math.cos(a);
      const y = c + r * Math.sin(a);
      return { name: it.name, logo: it.logo, x, y, tile, ring, path: `M ${c} ${c} L ${x} ${y}` };
    });

  const nodes = [
    ...place(INNER, innerR, innerTile, 0, -90),
    ...place(OUTER, outerR, outerTile, 1, -90 + 180 / OUTER.length),
  ];

  return { size, badge, innerR, outerR, nodes };
}

export function IntegrationsHub() {
  const ref = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.2 },
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const size = layout?.size ?? 0;
  const c = size / 2;

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[600px]"
      aria-hidden="true"
    >
      {layout && (
        <>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
          >
            <circle
              cx={c}
              cy={c}
              r={layout.innerR}
              stroke="var(--color-gray-300)"
              strokeWidth={1}
              strokeDasharray="2 7"
              opacity={0.6}
            />
            <circle
              cx={c}
              cy={c}
              r={layout.outerR}
              stroke="var(--color-gray-300)"
              strokeWidth={1}
              strokeDasharray="2 7"
              opacity={0.5}
            />
            {layout.nodes.map((n, i) => (
              <line
                key={n.name}
                x1={c}
                y1={c}
                x2={n.x}
                y2={n.y}
                stroke="var(--color-brand-300)"
                strokeWidth={1.25}
                strokeLinecap="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: inView ? 0 : 1,
                  opacity: inView ? 0.55 : 0,
                  transition: `stroke-dashoffset 0.8s ${EASE} ${0.2 + (i % 8) * 0.05}s, opacity 0.6s ease ${0.2 + (i % 8) * 0.05}s`,
                }}
              />
            ))}
          </svg>

          {inView &&
            layout.nodes.map((n, i) => (
              <span
                key={`pkt-${n.name}`}
                className="animate-travel pointer-events-none absolute left-0 top-0 z-10 h-2 w-2 rounded-full bg-brand-500 shadow-glow ring-2 ring-brand-500/30"
                style={{ offsetPath: `path('${n.path}')`, animationDelay: `-${((i * 0.41) % 2.6).toFixed(2)}s` }}
              />
            ))}

          {layout.nodes.map((n, i) => (
            <div
              key={`node-${n.name}`}
              className="group absolute z-20"
              style={{
                left: n.x,
                top: n.y,
                width: n.tile,
                height: n.tile,
                transform: "translate(-50%, -50%)",
                opacity: inView ? 1 : 0,
                scale: inView ? "1" : "0.6",
                transition: `opacity 0.5s ${EASE} ${0.15 + i * 0.035}s, scale 0.5s ${EASE} ${0.15 + i * 0.035}s`,
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-white shadow-soft transition-transform duration-300 hover:scale-110">
                <Image
                  src={n.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-[58%] w-[58%] object-contain"
                />
              </div>
              <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[0.65rem] font-semibold text-white opacity-0 shadow-hover transition-opacity duration-200 group-hover:opacity-100">
                {n.name}
              </span>
            </div>
          ))}

          <div
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ width: layout.badge, height: layout.badge }}
          >
            <span
              aria-hidden="true"
              className="animate-pulse-glow absolute inset-0 rounded-full bg-glow"
              style={{ transform: "scale(2.4)" }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-ai opacity-90 shadow-glow"
            />
            <span
              aria-hidden="true"
              className="absolute inset-[3px] rounded-full bg-surface"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <Image
                src={siteConfig.assets.logo}
                alt=""
                width={48}
                height={48}
                className="rounded-xl"
                style={{ width: layout.badge * 0.4, height: layout.badge * 0.4 }}
              />
              <span className="font-display text-xs font-extrabold leading-none text-ink-800 sm:text-sm">
                Onita AI
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
