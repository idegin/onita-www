"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  SquaresFourIcon,
  TableIcon,
  FileTextIcon,
  ListChecksIcon,
  PresentationChartIcon,
  CalendarDotsIcon,
  ChartLineUpIcon,
  LightningIcon,
  RobotIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Product = {
  name: string;
  tab: string;
  desc: string;
  points: string[];
  href: string;
  Icon: Icon;
  shot: string;
  alt: string;
};

const products: Product[] = [
  {
    name: "Dashboard",
    tab: "Dashboard",
    desc: "One command center for every metric, task, and agent — see the whole business at a glance.",
    points: ["Live metrics across every team", "Agent activity in real time", "Custom widgets and views"],
    href: "/products/dashboard",
    Icon: SquaresFourIcon,
    shot: "/screenshots/half-1.png",
    alt: "Onita dashboard showing live metrics, tasks, and AI agent activity",
  },
  {
    name: "Spreadsheet",
    tab: "Spreadsheet",
    desc: "Powerful spreadsheets your whole team — and your AI workforce — can read, calculate, and update.",
    points: ["Formulas, filters, and pivots", "Live-linked to your data", "Readable and writable by agents"],
    href: "/products/spreadsheet",
    Icon: TableIcon,
    shot: "/screenshots/half-2.png",
    alt: "Onita spreadsheet with formulas, filters, and pivot views",
  },
  {
    name: "Documents",
    tab: "Documents",
    desc: "Living docs your agents draft, edit, and keep in sync with the data behind them.",
    points: ["AI-assisted drafting", "Live-linked to your data", "Comments and version history"],
    href: "/products/documents",
    Icon: FileTextIcon,
    shot: "/screenshots/half-3.png",
    alt: "Onita document editor with AI-assisted drafting",
  },
  {
    name: "Forms",
    tab: "Forms",
    desc: "Capture requests and route them straight into workflows your agents can act on.",
    points: ["No-code form builder", "Conditional logic", "Routes straight into workflows"],
    href: "/products/forms",
    Icon: ListChecksIcon,
    shot: "/screenshots/half-4.png",
    alt: "Onita form builder capturing and routing requests",
  },
  {
    name: "Slides",
    tab: "Slides",
    desc: "Client-ready decks your agents build and update from the data behind them.",
    points: ["AI-built presentations", "On-brand templates", "Auto-updated from live data"],
    href: "/products/slides",
    Icon: PresentationChartIcon,
    shot: "/screenshots/half-5.png",
    alt: "Onita slide deck editor with on-brand presentation templates",
  },
  {
    name: "Calendar",
    tab: "Calendar",
    desc: "Plans that update themselves as tasks shift, deadlines move, and agents reschedule.",
    points: ["Self-updating schedules", "Deadline and task sync", "Team and resource views"],
    href: "/products/calendar",
    Icon: CalendarDotsIcon,
    shot: "/screenshots/half-6.png",
    alt: "Onita calendar with self-updating schedules and events",
  },
  {
    name: "Timeline",
    tab: "Timeline",
    desc: "The whole plan in one view — dependencies, milestones, and progress at every stage.",
    points: ["Dependencies and milestones", "Critical path at a glance", "Progress tracking"],
    href: "/products/timeline",
    Icon: ChartLineUpIcon,
    shot: "/screenshots/half-1.png",
    alt: "Onita timeline view of milestones and dependencies",
  },
  {
    name: "Automations",
    tab: "Automations",
    desc: "Trigger, approve, done. Wire up repeatable work without writing a single line of code.",
    points: ["Trigger, approve, done", "No code required", "Human-in-the-loop steps"],
    href: "/products/automations",
    Icon: LightningIcon,
    shot: "/screenshots/half-2.png",
    alt: "Onita automation builder connecting triggers, approvals, and actions",
  },
  {
    name: "AI Agents",
    tab: "AI Agents",
    desc: "Build teammates that never sleep — each with memory, knowledge, tools, and permissions of their own.",
    points: ["Memory and knowledge", "Tools and permissions", "Collaborate across teams"],
    href: "/products/ai-agents",
    Icon: RobotIcon,
    shot: "/screenshots/half-3.png",
    alt: "Onita AI agent configuration with memory, knowledge, and tools",
  },
];

const INTERVAL = 5000;

export function Products() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const autoplay = !paused && !stopped && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % products.length), INTERVAL);
    return () => clearTimeout(id);
  }, [autoplay, active]);

  function select(index: number) {
    setStopped(true);
    setActive(index);
    tabRefs.current[index]?.focus();
    tabRefs.current[index]?.scrollIntoView({ inline: "center", block: "nearest" });
  }

  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select((index + 1) % products.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select((index - 1 + products.length) % products.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(products.length - 1);
    }
  }

  const current = products[active];

  return (
    <Section id="products" tone="muted" labelledBy="products-heading">
      <SectionHeading
        id="products-heading"
        eyebrow="Products"
        title="One workspace, every tool your team runs on."
        description="Replace a stack of disconnected apps with products that share the same data — and the same AI workforce."
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          role="tablist"
          aria-label="Onita products"
          className="mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, index) => {
            const isActive = index === active;
            return (
              <button
                key={product.name}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                type="button"
                id={`product-tab-${index}`}
                aria-selected={isActive}
                aria-controls="product-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-pill border px-3.5 py-2 font-display text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-transparent bg-brand-500 text-white shadow-soft"
                    : "border-border bg-surface text-foreground hover:border-brand-200 hover:text-brand-600"
                }`}
              >
                <product.Icon
                  size={16}
                  weight="fill"
                  aria-hidden="true"
                  className={isActive ? "text-white" : "text-brand-500"}
                />
                {product.tab}
              </button>
            );
          })}
        </div>

        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${active}`}
          className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="overflow-hidden rounded-card-lg border border-border bg-surface shadow-soft">
            <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-danger-500/70" />
                <span className="h-3 w-3 rounded-full bg-warning-500/70" />
                <span className="h-3 w-3 rounded-full bg-success-500/70" />
              </span>
              <span className="ml-2 inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-800">
                <current.Icon size={16} weight="fill" aria-hidden="true" className="text-brand-600" />
                {current.name}
              </span>
              <span className="ml-auto hidden items-center gap-1.5 rounded-pill bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600 sm:inline-flex">
                onitaai.com/{current.name.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>

            <div className="relative aspect-[1329/959] bg-surface-muted">
              {products.map((product, index) => (
                <Image
                  key={product.name}
                  src={product.shot}
                  alt={index === active ? product.alt : ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-700 ease-out ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
              <current.Icon size={24} weight="fill" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-ink-800 sm:text-3xl">
              {current.name}
            </h3>
            <p className="mt-3 max-w-prose text-base leading-7 text-muted-foreground">
              {current.desc}
            </p>
            <ul className="mt-6 space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckIcon size={14} weight="bold" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={current.href}
              className="mt-8 inline-flex items-center gap-1.5 rounded-button bg-brand-500 px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Explore {current.name}
              <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
