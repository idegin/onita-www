import {
  MegaphoneIcon,
  TrendUpIcon,
  UsersThreeIcon,
  UserPlusIcon,
  GearSixIcon,
  WalletIcon,
  HeadsetIcon,
  PenNibIcon,
  KanbanIcon,
  BrainIcon,
  BooksIcon,
  WrenchIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const agents = [
  { name: "Marketing Agent", desc: "Plans campaigns, writes copy, and reports on what works.", Icon: MegaphoneIcon },
  { name: "Sales Agent", desc: "Qualifies leads, sends proposals, and books meetings.", Icon: TrendUpIcon },
  { name: "HR Agent", desc: "Onboards new hires and answers policy questions.", Icon: UsersThreeIcon },
  { name: "Recruitment Agent", desc: "Screens applicants and schedules interviews.", Icon: UserPlusIcon },
  { name: "Operations Agent", desc: "Keeps projects moving and flags what's blocked.", Icon: GearSixIcon },
  { name: "Finance Agent", desc: "Reconciles invoices and prepares reports.", Icon: WalletIcon },
  { name: "Support Agent", desc: "Resolves tickets and escalates the tricky ones.", Icon: HeadsetIcon },
  { name: "Content Agent", desc: "Drafts docs, blogs, and knowledge base articles.", Icon: PenNibIcon },
  { name: "Project Manager Agent", desc: "Assigns work, tracks deadlines, and updates stakeholders.", Icon: KanbanIcon },
];

const capabilities = [
  { label: "Memory", Icon: BrainIcon },
  { label: "Knowledge", Icon: BooksIcon },
  { label: "Tools", Icon: WrenchIcon },
  { label: "Permissions", Icon: ShieldCheckIcon },
];

export function AiWorkforce() {
  return (
    <Section id="ai-workforce" tone="dark" labelledBy="workforce-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-glow opacity-60"
      />
      <div className="relative">
        <SectionHeading
          id="workforce-heading"
          invert
          eyebrow="AI Workforce"
          title="Hire AI employees that never sleep."
          description="Each Onita agent is a specialist you can put to work in minutes — with the memory, knowledge, tools, and permissions to get real work done."
        />

        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {capabilities.map(({ label, Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-pill border border-white/12 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80"
            >
              <Icon size={15} weight="bold" className="text-brand-300" />
              {label}
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map(({ name, desc, Icon }) => (
            <li
              key={name}
              className="group rounded-card border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
                <Icon size={24} weight="fill" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
