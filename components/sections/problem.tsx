import { ArrowDownIcon, XIcon, CheckIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const fragmentedTools = [
  { name: "Google Workspace", price: "$18" },
  { name: "Slack", price: "$15" },
  { name: "ClickUp", price: "$12" },
  { name: "Notion", price: "$16" },
  { name: "Typeform", price: "$25" },
  { name: "HubSpot CRM", price: "$45" },
  { name: "Zapier", price: "$30" },
  { name: "Knowledge Base", price: "$20" },
  { name: "AI tools", price: "$40" },
];

export function Problem() {
  return (
    <Section id="problem" tone="muted" labelledBy="problem-heading">
      <SectionHeading
        id="problem-heading"
        eyebrow="The problem"
        title="Growing companies shouldn't need ten different tools."
        description="Every new hire means another subscription, another login, another silo. Your stack gets expensive, disconnected, and impossible to keep in sync."
      />

      <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.3fr_auto_1fr]">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Fragmented tool stack">
          {fragmentedTools.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-surface px-3.5 py-3 opacity-90"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <XIcon size={14} weight="bold" className="shrink-0 text-danger-500" />
                {tool.name}
              </span>
              <span className="text-xs font-semibold text-gray-600">{tool.price}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 text-center lg:px-2">
          <span className="rounded-pill bg-danger-50 px-3 py-1 text-sm font-bold text-danger-700">
            $221+/mo per seat
          </span>
          <ArrowDownIcon
            size={28}
            weight="bold"
            className="text-brand-500 lg:-rotate-90"
            aria-hidden="true"
          />
        </div>

        <div className="rounded-card-lg bg-gradient-hero p-8 text-white shadow-glow">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
            <LightningIcon size={22} weight="fill" className="text-white" />
          </span>
          <p className="mt-5 font-display text-xl font-bold leading-snug">
            One platform. One workspace. One AI workforce.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/80">
            {["Everything connected by default", "AI employees built in", "One predictable bill"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon size={16} weight="bold" className="text-brand-300" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Section>
  );
}
