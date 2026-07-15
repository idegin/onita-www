import Link from "next/link";
import {
  SquaresFourIcon,
  DatabaseIcon,
  FileTextIcon,
  ListChecksIcon,
  KanbanIcon,
  CalendarDotsIcon,
  ChartLineUpIcon,
  LightningIcon,
  RobotIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const products = [
  { name: "Dashboard", desc: "See everything at a glance.", href: "/products/dashboard", Icon: SquaresFourIcon },
  { name: "Database", desc: "Flexible data for any workflow.", href: "/products/database", Icon: DatabaseIcon },
  { name: "Documents", desc: "Docs your agents can write.", href: "/products/documents", Icon: FileTextIcon },
  { name: "Forms", desc: "Capture and route requests.", href: "/products/forms", Icon: ListChecksIcon },
  { name: "Kanban", desc: "Boards for every team.", href: "/products/kanban", Icon: KanbanIcon },
  { name: "Calendar", desc: "Plans that update themselves.", href: "/products/calendar", Icon: CalendarDotsIcon },
  { name: "Timeline", desc: "The whole plan, one view.", href: "/products/timeline", Icon: ChartLineUpIcon },
  { name: "Automations", desc: "Trigger, approve, done.", href: "/products/automations", Icon: LightningIcon },
  { name: "AI Agents", desc: "Employees that never sleep.", href: "/products/ai-agents", Icon: RobotIcon },
];

export function Products() {
  return (
    <Section id="products" tone="muted" labelledBy="products-heading">
      <SectionHeading
        id="products-heading"
        eyebrow="Products"
        title="One workspace, every tool your team runs on."
        description="Replace a stack of disconnected apps with products that share the same data — and the same AI workforce."
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ name, desc, href, Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon size={24} weight="fill" />
                </span>
                <ArrowUpRightIcon
                  size={18}
                  weight="bold"
                  className="text-gray-300 transition-colors group-hover:text-brand-500"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-800">{name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
