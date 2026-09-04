import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  CloudIcon,
  HardDrivesIcon,
  CalendarDotsIcon,
  FileTextIcon,
  VideoCameraIcon,
  WebcamIcon,
  ArrowRightIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Tool = { name: string; Icon: Icon };

const tools: Tool[] = [
  { name: "Gmail", Icon: EnvelopeSimpleIcon },
  { name: "Google Drive", Icon: CloudIcon },
  { name: "OneDrive", Icon: HardDrivesIcon },
  { name: "Google Calendar", Icon: CalendarDotsIcon },
  { name: "Google Docs", Icon: FileTextIcon },
  { name: "Google Meet", Icon: VideoCameraIcon },
  { name: "Zoom", Icon: WebcamIcon },
];

export function IntegrationsBand() {
  return (
    <Section id="integrations" tone="muted" labelledBy="integrations-heading">
      <SectionHeading
        id="integrations-heading"
        eyebrow="Integrations"
        title="Connect the tools you already use."
        description="Onita isn't here to replace your tools — it works with them. Plug in your accounts and let your AI teammates work right where your business already lives."
      />

      <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tools.map((t) => (
          <li
            key={t.name}
            className="flex items-center gap-3 rounded-card border border-border bg-surface px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-hover"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <t.Icon size={20} weight="fill" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-semibold text-ink-800">{t.name}</span>
          </li>
        ))}
        <li className="flex items-center gap-3 rounded-card border border-dashed border-brand-200 bg-brand-50/40 px-5 py-4">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
            <PlugsConnectedIcon size={20} weight="fill" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold text-brand-600">+ more</span>
        </li>
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/integrations"
          className="inline-flex items-center gap-1.5 rounded-button border border-border bg-surface px-5 py-3 font-display text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
        >
          See all integrations
          <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
