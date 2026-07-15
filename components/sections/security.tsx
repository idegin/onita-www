import Link from "next/link";
import {
  ShieldCheckIcon,
  LockKeyIcon,
  UsersThreeIcon,
  ScrollIcon,
  CloudArrowUpIcon,
  KeyIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const features = [
  { title: "SOC 2 Type II", desc: "Independently audited security controls.", Icon: ShieldCheckIcon },
  { title: "End-to-end encryption", desc: "Data encrypted in transit and at rest.", Icon: LockKeyIcon },
  { title: "Role-based access", desc: "Granular permissions for people and agents.", Icon: UsersThreeIcon },
  { title: "Audit logs", desc: "Every action tracked and exportable.", Icon: ScrollIcon },
  { title: "Automated backups", desc: "Point-in-time recovery you can rely on.", Icon: CloudArrowUpIcon },
  { title: "SSO & SCIM", desc: "Enterprise identity, provisioning included.", Icon: KeyIcon },
];

export function Security() {
  return (
    <Section id="security" tone="dark" labelledBy="security-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading
            id="security-heading"
            invert
            align="left"
            eyebrow="Enterprise security"
            title="Enterprise-grade from day one."
            description="Give AI employees real work without giving up control. Onita is built to the standards your security team expects."
          />
          <Link
            href={siteConfig.salesUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to sales
            <ArrowRightIcon size={18} weight="bold" />
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map(({ title, desc, Icon }) => (
            <li className="rounded-card border border-white/10 bg-white/[0.04] p-6" key={title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
                <Icon size={22} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-white/60">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
