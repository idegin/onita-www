import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  ClipboardTextIcon,
  MagnifyingGlassIcon,
  CompassIcon,
  PresentationChartIcon,
  PenNibIcon,
  PaletteIcon,
  ShieldCheckIcon,
  ReceiptIcon,
  MegaphoneIcon,
  GearSixIcon,
  BooksIcon,
  BrainIcon,
  WrenchIcon,
  SparkleIcon,
  LightningIcon,
  FilePdfIcon,
  FileDocIcon,
  FileXlsIcon,
  FileTextIcon,
  FolderSimpleIcon,
  DatabaseIcon,
  ChartLineIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Doc = { name: string; Icon: Icon };
type Model = { name: string; logo: string };
type Agent = {
  name: string;
  model: Model;
  Icon: Icon;
  skills: string[];
  docs: Doc[];
};

const MODELS: Record<string, Model> = {
  claude: { name: "Claude", logo: "/logos/claude.svg" },
  gpt: { name: "GPT-4o", logo: "/logos/openai.svg" },
  gemini: { name: "Gemini", logo: "/logos/gemini.svg" },
  deepseek: { name: "DeepSeek", logo: "/logos/deepseek.svg" },
  llama: { name: "Llama", logo: "/logos/meta.svg" },
};

const agents: Agent[] = [
  {
    name: "Business Development Agent",
    model: MODELS.claude,
    Icon: ClipboardTextIcon,
    skills: ["Qualify leads", "Draft proposals", "Scope engagements"],
    docs: [
      { name: "Proposal_template.docx", Icon: FileDocIcon },
      { name: "Client_CRM", Icon: DatabaseIcon },
      { name: "Rate_card.pdf", Icon: FilePdfIcon },
    ],
  },
  {
    name: "Research Agent",
    model: MODELS.gemini,
    Icon: MagnifyingGlassIcon,
    skills: ["Market research", "Competitor scan", "Benchmarks"],
    docs: [
      { name: "Market_report.pdf", Icon: FilePdfIcon },
      { name: "Competitors.xlsx", Icon: FileXlsIcon },
      { name: "Industry_db", Icon: DatabaseIcon },
    ],
  },
  {
    name: "Strategy Agent",
    model: MODELS.claude,
    Icon: CompassIcon,
    skills: ["Frameworks", "Financial models", "Recommendations"],
    docs: [
      { name: "Financial_model.xlsx", Icon: FileXlsIcon },
      { name: "Findings.docx", Icon: FileDocIcon },
      { name: "Data_room", Icon: FolderSimpleIcon },
    ],
  },
  {
    name: "Deck Agent",
    model: MODELS.gpt,
    Icon: PresentationChartIcon,
    skills: ["Build decks", "Data viz", "On-brand design"],
    docs: [
      { name: "Deck_template", Icon: FolderSimpleIcon },
      { name: "Brand_kit", Icon: FolderSimpleIcon },
      { name: "Charts.xlsx", Icon: FileXlsIcon },
    ],
  },
  {
    name: "Content Agent",
    model: MODELS.gpt,
    Icon: PenNibIcon,
    skills: ["Copywriting", "SEO", "Editing"],
    docs: [
      { name: "Content_calendar", Icon: FileTextIcon },
      { name: "Brand_voice.md", Icon: FileTextIcon },
      { name: "Blog_drafts", Icon: FolderSimpleIcon },
    ],
  },
  {
    name: "Creative Agent",
    model: MODELS.claude,
    Icon: PaletteIcon,
    skills: ["Concepts", "Design briefs", "Assets"],
    docs: [
      { name: "Creative_brief.docx", Icon: FileDocIcon },
      { name: "Moodboard", Icon: FolderSimpleIcon },
      { name: "Asset_library", Icon: FolderSimpleIcon },
    ],
  },
  {
    name: "Campaign Agent",
    model: MODELS.gpt,
    Icon: MegaphoneIcon,
    skills: ["Campaigns", "Paid media", "Analytics"],
    docs: [
      { name: "Campaign_plan", Icon: FileTextIcon },
      { name: "Ad_accounts", Icon: DatabaseIcon },
      { name: "Analytics", Icon: ChartLineIcon },
    ],
  },
  {
    name: "Project Manager Agent",
    model: MODELS.deepseek,
    Icon: GearSixIcon,
    skills: ["Assign work", "Track timelines", "Reporting"],
    docs: [
      { name: "Project_board", Icon: FolderSimpleIcon },
      { name: "Timeline", Icon: ChartLineIcon },
      { name: "Reports.pdf", Icon: FilePdfIcon },
    ],
  },
  {
    name: "Billing Agent",
    model: MODELS.llama,
    Icon: ReceiptIcon,
    skills: ["Time tracking", "Invoicing", "Retainers"],
    docs: [
      { name: "Timesheets.xlsx", Icon: FileXlsIcon },
      { name: "Invoices", Icon: FolderSimpleIcon },
      { name: "Retainers.pdf", Icon: FilePdfIcon },
    ],
  },
];

const capabilities = [
  { label: "Memory", Icon: BrainIcon },
  { label: "Knowledge", Icon: BooksIcon },
  { label: "Tools", Icon: WrenchIcon },
  { label: "Permissions", Icon: ShieldCheckIcon },
];

function AgentCard({ agent, hidden = false }: { agent: Agent; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="relative w-[19rem] shrink-0 pt-6 sm:w-[21rem]"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-brand-400 ring-4 ring-brand-400/20" />
        <span
          className="h-4 w-px"
          style={{ backgroundImage: "linear-gradient(to bottom, #9a7df5, transparent)" }}
        />
      </span>

      <article className="rounded-card border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <header className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-ai text-white shadow-glow">
            <agent.Icon size={24} weight="fill" aria-hidden="true" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-success-500" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-base font-bold text-white">{agent.name}</h3>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white p-[3px]">
                <Image
                  src={agent.model.logo}
                  alt=""
                  width={12}
                  height={12}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="truncate text-xs font-medium text-white/60">{agent.model.name}</span>
            </div>
          </div>
          <span className="ml-auto inline-flex items-center gap-1 rounded-pill bg-success-500/15 px-2 py-0.5 text-[0.65rem] font-semibold text-success-500">
            <SparkleIcon size={10} weight="fill" aria-hidden="true" />
            Active
          </span>
        </header>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center gap-2">
            <FileTextIcon size={15} weight="fill" className="text-brand-300" aria-hidden="true" />
            <span className="font-mono text-xs text-white/80">skills.md</span>
            <span className="ml-auto rounded bg-brand-500/20 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-brand-200">
              MD
            </span>
          </div>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {agent.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[0.7rem] font-medium text-white/70"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
            Has access to
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {agent.docs.map((doc) => (
              <li
                key={doc.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[0.7rem] font-medium text-white/70"
              >
                <doc.Icon size={13} weight="fill" className="shrink-0 text-brand-300" aria-hidden="true" />
                <span className="max-w-[9rem] truncate font-mono">{doc.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

export function AiWorkforce() {
  const row = [...agents, ...agents];

  return (
    <Section id="ai-workforce" tone="dark" labelledBy="workforce-heading" className="select-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-glow opacity-60"
      />
      <div className="relative">
        <SectionHeading
          id="workforce-heading"
          invert
          eyebrow="AI Workforce"
          title="Create AI team mates that never sleep."
          description="Purpose-built for growing businesses and teams — each Onita agent is a specialist with its own skills, knowledge, and document access, all designed and run by us so work flows between them without you chasing it."
        />

        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {capabilities.map(({ label, Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-pill border border-white/12 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80"
            >
              <Icon size={15} weight="bold" className="text-brand-300" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-card-lg border border-white/12 bg-white/[0.06] p-6 text-center shadow-glow backdrop-blur">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-card-lg bg-gradient-ai opacity-10"
            />
            <div className="relative flex items-center justify-center gap-3">
              <Image
                src={siteConfig.assets.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl"
              />
              <span className="text-left">
                <span className="block font-display text-lg font-extrabold text-white">
                  Onita
                </span>
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-brand-300">
                  Orchestrator
                </span>
              </span>
            </div>
            <p className="relative mt-4 text-sm leading-6 text-white/70">
              Onita assigns the work, shares context between agents, and enforces every permission —
              controlling your entire AI workforce from one command center.
            </p>
            <div className="relative mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <LightningIcon size={13} weight="fill" className="text-brand-300" aria-hidden="true" />
                {agents.length} agents active
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BrainIcon size={13} weight="fill" className="text-brand-300" aria-hidden="true" />
                Shared memory
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheckIcon size={13} weight="fill" className="text-brand-300" aria-hidden="true" />
                Scoped permissions
              </span>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="h-10 w-px"
            style={{ backgroundImage: "linear-gradient(to bottom, #9a7df5, transparent)" }}
          />
        </div>

        <div className="relative -mx-4 mt-2 sm:-mx-6 lg:-mx-10">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-[1.5px] h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, rgba(154,125,245,0.55) 20%, rgba(154,125,245,0.55) 80%, transparent)",
            }}
          />
          <div
            className="group overflow-hidden px-1 motion-reduce:overflow-x-auto"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            }}
          >
            <ul
              className="animate-marquee flex w-max gap-5 pr-5 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "70s" }}
            >
              {row.map((agent, i) => (
                <AgentCard
                  key={`${agent.name}-${i}`}
                  agent={agent}
                  hidden={i >= agents.length}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
