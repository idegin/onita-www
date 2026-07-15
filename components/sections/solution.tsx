import {
  SquaresFourIcon,
  DatabaseIcon,
  FileTextIcon,
  KanbanIcon,
  RobotIcon,
  CalendarDotsIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const sidebarItems = [
  { Icon: SquaresFourIcon, label: "Dashboard", active: true },
  { Icon: RobotIcon, label: "AI Agents" },
  { Icon: DatabaseIcon, label: "Database" },
  { Icon: KanbanIcon, label: "Boards" },
  { Icon: FileTextIcon, label: "Documents" },
  { Icon: CalendarDotsIcon, label: "Calendar" },
];

const boardColumns = [
  { title: "To do", count: 6, tone: "bg-gray-300" },
  { title: "In progress", count: 4, tone: "bg-warning-500" },
  { title: "AI working", count: 3, tone: "bg-brand-500" },
  { title: "Done", count: 12, tone: "bg-success-500" },
];

export function Solution() {
  return (
    <Section id="solution" tone="light" labelledBy="solution-heading">
      <SectionHeading
        id="solution-heading"
        eyebrow="Meet Onita"
        title="Everything your team needs. Powered by AI employees."
        description="Databases, docs, boards, calendars, forms, and automations in one workspace — with AI employees working alongside your team on every one of them."
      />

      <div className="mt-14 overflow-hidden rounded-card-lg border border-border bg-surface shadow-hover">
        <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-gray-300" />
            <span className="h-3 w-3 rounded-full bg-gray-300" />
            <span className="h-3 w-3 rounded-full bg-gray-300" />
          </span>
          <span className="ml-3 hidden items-center gap-2 rounded-pill bg-surface px-3 py-1 text-xs text-muted-foreground sm:inline-flex">
            <MagnifyingGlassIcon size={12} weight="bold" />
            app.onitaai.com/workspace
          </span>
        </div>

        <div className="grid md:grid-cols-[220px_1fr]">
          <nav aria-label="Product preview navigation" className="hidden border-r border-border bg-surface p-3 md:block">
            <ul className="space-y-1">
              {sidebarItems.map(({ Icon, label, active }) => (
                <li key={label}>
                  <span
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium ${
                      active ? "bg-brand-50 text-brand-700" : "text-gray-600"
                    }`}
                  >
                    <Icon size={17} weight={active ? "fill" : "regular"} />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-surface-muted p-5 lg:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-bold text-ink-800">Growth workspace</p>
                <p className="text-sm text-muted-foreground">9 AI employees · 24 people</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-gray-500">
                <BellIcon size={17} weight="fill" />
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {boardColumns.map((col) => (
                <div key={col.title} className="rounded-2xl border border-border bg-surface p-3.5">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${col.tone}`} />
                    <span className="text-xs font-semibold text-gray-600">{col.title}</span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-ink-800">{col.count}</p>
                  <div className="mt-3 space-y-1.5" aria-hidden="true">
                    <span className="block h-1.5 w-full rounded-full bg-gray-200" />
                    <span className="block h-1.5 w-4/5 rounded-full bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                <RobotIcon size={17} weight="fill" />
              </span>
              <p className="text-sm text-ink-800">
                <strong className="font-semibold">Operations Agent</strong> moved 3 tasks to Done and
                drafted this week&rsquo;s report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
