import Image from "next/image";
import { ArrowDownIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const fragmentedTools = [
  { name: "Google Workspace", price: "₦29k", logo: "/logos/tools/google.svg" },
  { name: "Slack", price: "₦24k", logo: "/logos/tools/slack.svg" },
  { name: "ClickUp", price: "₦19k", logo: "/logos/tools/clickup.svg" },
  { name: "Notion", price: "₦26k", logo: "/logos/tools/notion.svg" },
  { name: "Typeform", price: "₦40k", logo: "/logos/tools/typeform.svg" },
  { name: "HubSpot CRM", price: "₦72k", logo: "/logos/tools/hubspot.svg" },
  { name: "Zapier", price: "₦48k", logo: "/logos/tools/zapier.svg" },
  { name: "Airtable", price: "₦32k", logo: "/logos/tools/airtable.svg" },
  { name: "AI tools", price: "₦64k", logo: "/logos/openai.svg" },
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
              className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-surface px-3.5 py-3"
            >
              <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-700">
                <Image
                  src={tool.logo}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0 opacity-70 grayscale"
                />
                <span className="truncate">{tool.name}</span>
              </span>
              <span className="shrink-0 text-xs font-semibold text-gray-500 line-through">
                {tool.price}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 text-center lg:px-2">
          <span className="rounded-pill bg-danger-50 px-3 py-1 text-sm font-bold text-danger-700">
            ₦354k+/mo per seat
          </span>
          <ArrowDownIcon
            size={28}
            weight="bold"
            className="text-brand-500 lg:-rotate-90"
            aria-hidden="true"
          />
        </div>

        <div className="rounded-card-lg bg-gradient-hero p-8 text-white shadow-glow">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 p-2">
            <Image
              src={siteConfig.assets.logo}
              alt=""
              width={32}
              height={32}
              className="h-full w-full rounded-lg"
            />
          </span>
          <p className="mt-5 font-display text-xl font-bold leading-snug">
            One platform. One workspace. One AI workforce.
          </p>
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-4xl font-extrabold tracking-tight">₦2,000</span>
            <span className="text-sm font-medium text-white/70">/mo per seat</span>
          </div>
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
