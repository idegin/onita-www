import Link from "next/link";
import {
  HeartbeatIcon,
  GraduationCapIcon,
  HammerIcon,
  StorefrontIcon,
  BriefcaseIcon,
  BankIcon,
  HandHeartIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = [
  { name: "Healthcare", href: "/industries/healthcare", Icon: HeartbeatIcon },
  { name: "Education", href: "/industries/education", Icon: GraduationCapIcon },
  { name: "Construction", href: "/industries/construction", Icon: HammerIcon },
  { name: "Retail", href: "/industries/retail", Icon: StorefrontIcon },
  { name: "Agencies", href: "/industries/agencies", Icon: BriefcaseIcon },
  { name: "Government", href: "/industries/government", Icon: BankIcon },
  { name: "Nonprofits", href: "/industries/nonprofits", Icon: HandHeartIcon },
];

export function Industries() {
  return (
    <Section id="industries" tone="muted" labelledBy="industries-heading">
      <SectionHeading
        id="industries-heading"
        eyebrow="Industries"
        title="Tuned to the way your industry works."
        description="From compliance to field teams, Onita adapts to the realities of your sector."
      />

      <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map(({ name, href, Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className="group flex h-full flex-col justify-between rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ai text-white">
                <Icon size={24} weight="fill" />
              </span>
              <span className="mt-8 flex items-center justify-between">
                <span className="font-display text-base font-bold text-ink-800">{name}</span>
                <ArrowRightIcon
                  size={16}
                  weight="bold"
                  className="text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-500"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
