import type { Icon } from "@phosphor-icons/react";
import {
  TrendUpIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  FileTextIcon,
  EnvelopeSimpleIcon,
  CalendarCheckIcon,
  UserCheckIcon,
  CheckCircleIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Kind = "trigger" | "agent" | "human" | "done";

type WorkflowNode = {
  id: string;
  x: number;
  y: number;
  title: string;
  sub: string;
  Icon: Icon;
  kind: Kind;
};

const nodes: WorkflowNode[] = [
  { id: "trigger", x: 10, y: 50, title: "New lead", sub: "Trigger", Icon: TrendUpIcon, kind: "trigger" },
  { id: "sales", x: 28, y: 22, title: "Qualifier Agent", sub: "Scores the lead", Icon: FunnelIcon, kind: "agent" },
  { id: "crm", x: 28, y: 78, title: "Research Agent", sub: "Enriches the contact", Icon: MagnifyingGlassIcon, kind: "agent" },
  { id: "proposal", x: 47, y: 50, title: "Proposal Agent", sub: "Builds the pitch", Icon: FileTextIcon, kind: "agent" },
  { id: "email", x: 66, y: 22, title: "Outreach Agent", sub: "Sends the intro", Icon: EnvelopeSimpleIcon, kind: "agent" },
  { id: "calendar", x: 66, y: 78, title: "Meeting Agent", sub: "Books the call", Icon: CalendarCheckIcon, kind: "agent" },
  { id: "manager", x: 80, y: 50, title: "You", sub: "Approves & sends", Icon: UserCheckIcon, kind: "human" },
  { id: "done", x: 93, y: 50, title: "Won", sub: "", Icon: CheckCircleIcon, kind: "done" },
];

const edges: [string, string][] = [
  ["trigger", "sales"],
  ["trigger", "crm"],
  ["sales", "proposal"],
  ["crm", "proposal"],
  ["proposal", "email"],
  ["proposal", "calendar"],
  ["email", "manager"],
  ["calendar", "manager"],
  ["manager", "done"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

function edgePath(a: WorkflowNode, b: WorkflowNode) {
  const dx = (b.x - a.x) * 0.5;
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
}

const iconTone: Record<Kind, string> = {
  trigger: "bg-gradient-ai text-white",
  agent: "bg-brand-50 text-brand-600",
  human: "bg-accent-500 text-white",
  done: "bg-success-500 text-white",
};

const cardTone: Record<Kind, string> = {
  trigger: "border-brand-200 bg-surface shadow-soft",
  agent: "border-border bg-surface shadow-soft",
  human: "border-accent-200 bg-accent-50 shadow-soft",
  done: "border-success-200 bg-success-50 shadow-soft",
};

function NodeCard({ node, compact = false }: { node: WorkflowNode; compact?: boolean }) {
  const done = node.kind === "done";
  return (
    <div
      className={`flex items-center gap-2.5 rounded-2xl border p-2.5 ${cardTone[node.kind]} ${
        compact || done ? "" : "lg:w-[176px]"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${iconTone[node.kind]} ${
          done ? "ring-4 ring-success-500/15" : ""
        }`}
      >
        <node.Icon size={done ? 19 : 17} weight="fill" aria-hidden="true" />
      </span>
      <span className="min-w-0 pr-1">
        <span
          className={`block truncate font-display text-[0.8rem] font-bold leading-tight ${
            done ? "text-success-700" : "text-ink-800"
          }`}
        >
          {node.title}
        </span>
        {node.sub && (
          <span className="mt-0.5 block truncate text-[0.7rem] leading-tight text-muted-foreground">
            {node.sub}
          </span>
        )}
      </span>
    </div>
  );
}

export function Collaboration() {
  return (
    <Section id="collaboration" tone="light" labelledBy="collaboration-heading">
      <SectionHeading
        id="collaboration-heading"
        eyebrow="Agent collaboration"
        title="AI employees that work together."
        description="Agents pick up a new lead, hand it off to the next specialist, and loop in you to approve — running the whole pipeline end to end, just like your best team."
      />

      <div className="mt-12 overflow-hidden rounded-card-lg border border-border bg-surface-muted shadow-soft">
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-danger-500/70" />
            <span className="h-3 w-3 rounded-full bg-warning-500/70" />
            <span className="h-3 w-3 rounded-full bg-success-500/70" />
          </span>
          <span className="ml-2 font-display text-sm font-semibold text-ink-800">
            Lead-to-deal workflow
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
            </span>
            Live
          </span>
        </div>

        <div
          className="relative"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-gray-300) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="relative hidden h-[26rem] w-full lg:block xl:h-[30rem]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="edge-flow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#765af3" />
                  <stop offset="100%" stopColor="#ce3e98" />
                </linearGradient>
              </defs>
              {edges.map(([from, to]) => {
                const d = edgePath(byId[from], byId[to]);
                return (
                  <g key={`${from}-${to}`}>
                    <path
                      d={d}
                      fill="none"
                      stroke="var(--color-gray-300)"
                      strokeWidth={2}
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#edge-flow)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeDasharray="1 11"
                      vectorEffect="non-scaling-stroke"
                      className="animate-dash"
                    />
                  </g>
                );
              })}
            </svg>

            {nodes.map((node, i) => (
              <div
                key={node.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="animate-node-in" style={{ animationDelay: `${i * 90}ms` }}>
                  <NodeCard node={node} />
                </div>
              </div>
            ))}
          </div>

          <ol className="flex flex-col gap-0 p-5 lg:hidden">
            {nodes.map((node, i) => (
              <li key={node.id}>
                <NodeCard node={node} compact />
                {i < nodes.length - 1 && (
                  <div className="flex justify-center py-1.5" aria-hidden="true">
                    <CaretRightIcon size={16} weight="bold" className="rotate-90 text-gray-300" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
