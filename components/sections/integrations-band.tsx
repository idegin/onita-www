import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { IntegrationsHub } from "@/components/sections/integrations-hub";
import { integrations } from "@/lib/brands";

export function IntegrationsBand() {
  return (
    <Section id="integrations" tone="muted" labelledBy="integrations-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="integrations-heading"
            align="left"
            eyebrow="Integrations"
            title="Connects to the tools your team already uses."
            description="Connect supported email, file, calendar, meeting, messaging and payment tools so information stays closer to the work it belongs to. Available connections depend on your setup."
          />

          <ul className="sr-only">
            {integrations.map((i) => (
              <li key={i.name}>{i.name}</li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 rounded-button border border-border bg-surface px-5 py-3 font-display text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
            >
              See all integrations
              <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="lg:order-last">
          <IntegrationsHub />
        </div>
      </div>
    </Section>
  );
}
