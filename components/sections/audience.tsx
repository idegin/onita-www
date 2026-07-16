import type { Icon } from "@phosphor-icons/react";
import {
  HandshakeIcon,
  ScalesIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  BuildingsIcon,
  RocketLaunchIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Audience = {
  name: string;
  outcome: string;
  desc: string;
  Icon: Icon;
};

const audiences: Audience[] = [
  {
    name: "Business development firms",
    outcome: "Turn more leads into signed deals",
    desc: "Agents qualify, research, pitch, and follow up on every lead so your pipeline never stalls.",
    Icon: HandshakeIcon,
  },
  {
    name: "Law firms",
    outcome: "Run matters without the busywork",
    desc: "Intake, conflict checks, research, and drafting handled end to end — with every action logged.",
    Icon: ScalesIcon,
  },
  {
    name: "Consulting firms",
    outcome: "Deliver more without more headcount",
    desc: "Automate research, decks, and reporting so your consultants stay focused on billable work.",
    Icon: BriefcaseIcon,
  },
  {
    name: "Agencies",
    outcome: "Ship client work faster",
    desc: "Briefs, content, approvals, and status updates move on their own, across every account.",
    Icon: MegaphoneIcon,
  },
  {
    name: "Professional services",
    outcome: "Standardize how work gets done",
    desc: "Turn your best playbooks into repeatable workflows your AI workforce follows every time.",
    Icon: BuildingsIcon,
  },
  {
    name: "Growing SMEs & startups",
    outcome: "Operate like an enterprise",
    desc: "Get the speed, coordination, and output of a big team without an enterprise payroll.",
    Icon: RocketLaunchIcon,
  },
];

export function Audience() {
  return (
    <Section id="who-its-for" tone="light" labelledBy="audience-heading">
      <SectionHeading
        id="audience-heading"
        eyebrow="Who it's for"
        title="Built for teams that run on billable work."
        description="Onita is made for service firms and lean teams that win by delivering more, faster — without hiring an army to do it."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience) => (
          <li key={audience.name}>
            <article className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-gradient-ai group-hover:text-white">
                  <audience.Icon size={24} weight="fill" aria-hidden="true" />
                </span>
                <ArrowUpRightIcon
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className="text-gray-300 transition-colors group-hover:text-brand-500"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-800">{audience.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-600">{audience.outcome}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{audience.desc}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
