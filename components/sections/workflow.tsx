import { Fragment } from "react";
import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  RobotIcon,
  TableIcon,
  HandTapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Node = {
  kind: string;
  title: string;
  desc: string;
  Icon: Icon;
  human?: boolean;
  done?: boolean;
};

const nodes: Node[] = [
  { kind: "Trigger", title: "New email arrives", desc: "A lead replies to your inbox", Icon: EnvelopeSimpleIcon },
  { kind: "AI teammate", title: "Reads & sorts it", desc: "Files the contact, drafts a reply", Icon: RobotIcon },
  { kind: "Your tools", title: "Updates your CRM", desc: "Straight into your spreadsheet", Icon: TableIcon },
  { kind: "You", title: "Approve the reply", desc: "One tap — edit first if you like", Icon: HandTapIcon, human: true },
  { kind: "Done", title: "Sent & logged", desc: "Nothing slips through", Icon: CheckCircleIcon, done: true },
];

export function Workflow() {
  return (
    <Section id="workflow" tone="light" labelledBy="workflow-heading">
      <SectionHeading
        id="workflow-heading"
        eyebrow="Orchestrate workflows"
        title="Orchestrate work from start to finish."
        description="Connect a trigger, your tools, your AI teammates, and your approvals into one flow that runs itself — with you in the loop wherever it counts."
      />

      <ol className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-2">
        {nodes.map((n, i) => (
          <Fragment key={n.title}>
            <li className="flex-1">
              <article
                className={`flex h-full items-center gap-4 rounded-card border p-5 shadow-soft lg:flex-col lg:items-start lg:gap-3 ${
                  n.human
                    ? "border-brand-300 bg-brand-50 ring-1 ring-brand-500/10"
                    : n.done
                      ? "border-success-500/30 bg-success-50"
                      : "border-border bg-surface"
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-soft ${
                    n.human ? "bg-brand-500" : n.done ? "bg-success-500" : "bg-gradient-ai"
                  }`}
                >
                  <n.Icon size={22} weight="fill" aria-hidden="true" />
                </span>
                <div>
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-wider ${
                      n.human ? "text-brand-600" : n.done ? "text-success-700" : "text-muted-foreground"
                    }`}
                  >
                    {n.kind}
                  </span>
                  <h3 className="mt-0.5 font-display text-sm font-bold text-ink-800">{n.title}</h3>
                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{n.desc}</p>
                </div>
              </article>
            </li>
            {i < nodes.length - 1 && (
              <li aria-hidden="true" className="flex shrink-0 justify-center text-brand-300">
                <ArrowRightIcon size={20} weight="bold" className="rotate-90 lg:rotate-0" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      <p className="mx-auto mt-10 max-w-prose text-center text-sm leading-6 text-muted-foreground">
        Every flow can include a human check exactly where you want one — so work moves fast and
        nothing important happens without you.
      </p>
    </Section>
  );
}
