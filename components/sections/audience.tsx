"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  TrendUpIcon,
  LightningIcon,
  StackIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Persona = {
  title: string;
  desc: string;
  stat: string;
  Icon: Icon;
  shot: string;
  alt: string;
};

const personas: Persona[] = [
  {
    title: "Consulting firms",
    desc: "Research, financial models, and client-ready decks — your agents draft the first 80% so consultants spend their billable hours on judgment, not busywork.",
    stat: "3× the throughput",
    Icon: ChartBarIcon,
    shot: "/screenshots/half-1.png",
    alt: "Onita workspace with research, models, and client decks for a consulting firm",
  },
  {
    title: "Law firms",
    desc: "Contract review, matter intake, and legal research handled by agents that never miss a clause — with a human sign-off on every step that matters.",
    stat: "Hours of review in minutes",
    Icon: StackIcon,
    shot: "/screenshots/half-2.png",
    alt: "Onita reviewing contracts and matter intake for a law firm",
  },
  {
    title: "Creative & marketing agencies",
    desc: "Briefs, campaigns, content, and reporting run in parallel — so you take on more clients and bigger retainers without adding overhead.",
    stat: "More clients, same team",
    Icon: LightningIcon,
    shot: "/screenshots/half-3.png",
    alt: "Onita running campaigns, content, and reporting for an agency",
  },
  {
    title: "Partners billing for expertise",
    desc: "Hand the admin, follow-ups, and status reports to agents and get back the hours you actually bill for — every project tracked, nothing slipping through.",
    stat: "40+ hrs saved / week",
    Icon: TrendUpIcon,
    shot: "/screenshots/half-4.png",
    alt: "Onita handling admin and status reporting so partners reclaim billable hours",
  },
  {
    title: "Firms scaling without hiring",
    desc: "Add capacity the moment you win the work. Your AI workforce absorbs the overflow instead of a new headcount req — the speed and output of a firm many times your size.",
    stat: "Scale without payroll",
    Icon: RocketLaunchIcon,
    shot: "/screenshots/half-5.png",
    alt: "Onita giving a growing firm enterprise-scale output without new hires",
  },
];

const INTERVAL = 5500;

export function Audience() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const autoplay = !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % personas.length), INTERVAL);
    return () => clearTimeout(id);
  }, [autoplay, active]);

  function select(index: number) {
    setActive(index);
    tabRefs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select((index + 1) % personas.length);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select((index - 1 + personas.length) % personas.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(personas.length - 1);
    }
  }

  const current = personas[active];

  return (
    <Section id="who-its-for" tone="light" labelledBy="audience-heading">
      <SectionHeading
        id="audience-heading"
        align="left"
        eyebrow="Who it's for"
        title="Built for consulting firms, law firms, and agencies."
        description="Onita is made for professional-services teams that bill for expertise — automate the busywork, deliver faster for clients, and grow without growing the payroll."
      />

      <div
        className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="order-2 lg:order-1 lg:col-span-5">
          <ul
            role="tablist"
            aria-label="Who Onita is for"
            aria-orientation="vertical"
            className="flex flex-col gap-2"
          >
            {personas.map((persona, index) => {
              const isActive = index === active;
              return (
                <li key={persona.title}>
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    type="button"
                    id={`persona-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="persona-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    onKeyDown={(e) => onKeyDown(e, index)}
                    className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-card border p-4 text-left transition-all sm:p-5 ${
                      isActive
                        ? "border-brand-200 bg-surface shadow-soft"
                        : "border-transparent hover:border-border hover:bg-surface-muted"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        isActive
                          ? "bg-brand-600 text-white shadow-glow"
                          : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                      }`}
                    >
                      <persona.Icon size={22} weight="fill" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-base font-bold leading-snug sm:text-lg ${
                          isActive ? "text-ink-800" : "text-foreground"
                        }`}
                      >
                        {persona.title}
                      </span>
                      <span
                        className={`grid transition-all duration-500 ease-out ${
                          isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block text-sm leading-6 text-muted-foreground">
                            {persona.desc}
                          </span>
                        </span>
                      </span>
                    </span>

                    {isActive && autoplay && (
                      <span
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-border"
                        aria-hidden="true"
                      >
                        <span
                          key={active}
                          className="animate-progress block h-full w-full bg-gradient-ai"
                          style={{
                            animationDuration: `${INTERVAL}ms`,
                            animationPlayState: paused ? "paused" : "running",
                          }}
                        />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div
            id="persona-panel"
            role="tabpanel"
            aria-labelledby={`persona-tab-${active}`}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-card-lg bg-glow opacity-70 blur-2xl"
            />
            <div className="overflow-hidden rounded-card-lg border border-border bg-surface shadow-hover">
              <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-danger-500/70" />
                  <span className="h-3 w-3 rounded-full bg-warning-500/70" />
                  <span className="h-3 w-3 rounded-full bg-success-500/70" />
                </span>
                <span className="ml-2 inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-800">
                  <current.Icon size={16} weight="fill" aria-hidden="true" className="text-brand-600" />
                  Your AI workforce
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="relative aspect-[1329/959] bg-surface-muted">
                {personas.map((persona, index) => (
                  <Image
                    key={persona.title}
                    src={persona.shot}
                    alt={index === active ? persona.alt : ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className={`object-cover transition-opacity duration-700 ease-out ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              key={active}
              className="animate-fade-up absolute -bottom-5 left-5 inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2.5 shadow-hover sm:left-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-ai text-white">
                <SparkleIcon size={14} weight="fill" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-bold text-ink-800">{current.stat}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
