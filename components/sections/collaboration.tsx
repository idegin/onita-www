import {
  TrendUpIcon,
  AddressBookIcon,
  FileTextIcon,
  EnvelopeSimpleIcon,
  CalendarCheckIcon,
  UserCheckIcon,
  CheckCircleIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const flow = [
  { agent: "Sales Agent", action: "Captures a new lead", Icon: TrendUpIcon },
  { agent: "CRM Agent", action: "Enriches the contact", Icon: AddressBookIcon },
  { agent: "Proposal Agent", action: "Drafts a tailored quote", Icon: FileTextIcon },
  { agent: "Email Agent", action: "Sends it to the client", Icon: EnvelopeSimpleIcon },
  { agent: "Calendar Agent", action: "Books the follow-up", Icon: CalendarCheckIcon },
  { agent: "Manager", action: "Approves in one tap", Icon: UserCheckIcon, human: true },
];

export function Collaboration() {
  return (
    <Section id="collaboration" tone="light" labelledBy="collaboration-heading">
      <SectionHeading
        id="collaboration-heading"
        eyebrow="Agent collaboration"
        title="AI employees that work together."
        description="Agents hand off tasks to each other and loop in a human for approval — running entire workflows end to end, just like a real team."
      />

      <ol className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-center">
        {flow.map((step, i) => (
          <li key={step.agent} className="flex items-center gap-3 lg:flex-col lg:gap-3">
            <div
              className={`flex flex-1 items-center gap-3 rounded-card border p-4 lg:w-40 lg:flex-col lg:text-center ${
                step.human
                  ? "border-accent-200 bg-accent-50"
                  : "border-border bg-surface shadow-soft"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white ${
                  step.human ? "bg-accent-500" : "bg-brand-500"
                }`}
              >
                <step.Icon size={22} weight="fill" />
              </span>
              <span className="lg:mt-1">
                <span className="block font-display text-sm font-bold text-ink-800">{step.agent}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{step.action}</span>
              </span>
            </div>
            <CaretRightIcon
              size={20}
              weight="bold"
              aria-hidden="true"
              className="mx-auto shrink-0 rotate-90 text-gray-300 lg:rotate-0"
            />
          </li>
        ))}

        <li className="flex items-center justify-center">
          <div className="flex flex-1 items-center gap-3 rounded-card bg-gradient-hero p-4 text-white shadow-glow lg:w-40 lg:flex-col lg:text-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <CheckCircleIcon size={24} weight="fill" className="text-success-500" />
            </span>
            <span className="font-display text-sm font-bold lg:mt-1">Done</span>
          </div>
        </li>
      </ol>
    </Section>
  );
}
