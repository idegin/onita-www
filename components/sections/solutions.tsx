import Link from "next/link";
import {
  KanbanIcon,
  AddressBookIcon,
  UsersThreeIcon,
  ListChecksIcon,
  MegaphoneIcon,
  TrendUpIcon,
  GearSixIcon,
  HeartIcon,
  MonitorIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const solutions = [
  { name: "Project Management", href: "/solutions/project-management", Icon: KanbanIcon },
  { name: "CRM", href: "/solutions/crm", Icon: AddressBookIcon },
  { name: "HR", href: "/solutions/hr", Icon: UsersThreeIcon },
  { name: "Task Management", href: "/solutions/task-tracking", Icon: ListChecksIcon },
  { name: "Marketing", href: "/solutions/marketing", Icon: MegaphoneIcon },
  { name: "Sales", href: "/solutions/sales", Icon: TrendUpIcon },
  { name: "Operations", href: "/solutions/operations", Icon: GearSixIcon },
  { name: "Customer Success", href: "/solutions/customer-success", Icon: HeartIcon },
  { name: "IT", href: "/solutions/it", Icon: MonitorIcon },
];

export function Solutions() {
  return (
    <Section id="solutions" tone="light" labelledBy="solutions-heading">
      <SectionHeading
        id="solutions-heading"
        eyebrow="Solutions"
        title="Built for every team you already have."
        description="Whatever your team does, Onita gives them a purpose-built workspace and AI employees to match."
      />

      <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map(({ name, href, Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className="group flex items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-brand-200 hover:bg-brand-50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon size={22} weight="fill" />
              </span>
              <span className="font-display text-base font-semibold text-ink-800">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
