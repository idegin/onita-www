import type { Icon } from "@phosphor-icons/react";
import type { OgIconName } from "@/lib/og-icons";
import {
  SquaresFourIcon,
  TableIcon,
  FileTextIcon,
  ListChecksIcon,
  PresentationChartIcon,
  CalendarDotsIcon,
  ChartLineUpIcon,
  LightningIcon,
  RobotIcon,
  PulseIcon,
  GaugeIcon,
  BellRingingIcon,
  FunnelIcon,
  CalculatorIcon,
  LinkIcon,
  MagicWandIcon,
  ClockCountdownIcon,
  ShieldCheckIcon,
  PencilSimpleLineIcon,
  ChatsCircleIcon,
  GitBranchIcon,
  TreeStructureIcon,
  SlidersHorizontalIcon,
  ArrowsClockwiseIcon,
  UsersThreeIcon,
  FlagBannerIcon,
  StackIcon,
  BrainIcon,
  PlugsConnectedIcon,
  SignpostIcon,
  ChartBarIcon,
  PaintBrushBroadIcon,
  ClipboardTextIcon,
} from "@phosphor-icons/react/dist/ssr";

export type Accent = "brand" | "accent" | "info" | "success" | "warning";

export type Feature = { title: string; desc: string; Icon: Icon };
export type UseCase = { audience: string; title: string; desc: string };
export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  tab: string;
  category: string;
  accent: Accent;
  Icon: Icon;
  ogIcon: OgIconName;
  shots: string[];
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  subhead: string;
  definitionTitle: string;
  definition: string;
  highlights: string[];
  features: Feature[];
  workforceAngle: { title: string; desc: string };
  useCases: UseCase[];
  outcomes: string[];
  faqs: Faq[];
  related: string[];
};

const S = {
  a: "/screenshots/half-1.png",
  b: "/screenshots/half-2.png",
  c: "/screenshots/half-3.png",
  d: "/screenshots/half-4.png",
  e: "/screenshots/half-5.png",
  f: "/screenshots/half-6.png",
};

export const products: Product[] = [
  {
    slug: "dashboard",
    name: "Dashboard",
    tab: "Dashboard",
    category: "Command center",
    accent: "brand",
    ogIcon: "SquaresFour",
    Icon: SquaresFourIcon,
    shots: [S.a, S.f, S.b],
    metaTitle: "AI Dashboard for Growing Businesses & Teams",
    metaDescription:
      "See every project, deadline, and AI agent in one live dashboard. Onita gives growing teams a real-time command center for the whole business.",
    eyebrow: "Dashboard",
    headline: "The whole business, on",
    headlineEmphasis: "one screen",
    subhead:
      "One live command center for every project, metric, deadline, and AI agent — so leaders and managers see the state of the business at a glance, without chasing status updates.",
    definitionTitle: "What is the Onita Dashboard?",
    definition:
      "The Onita Dashboard is a real-time home base that pulls utilization, pipeline, project status, and AI agent activity into one view. Instead of exporting spreadsheets or asking for updates, your leadership sees exactly what's happening — and what needs attention — the moment it changes.",
    highlights: ["Live metrics across every team", "Agent activity in real time", "Custom widgets and saved views"],
    features: [
      { title: "Real-time metrics", desc: "Utilization, pipeline, and delivery health update the instant your data or your agents change something.", Icon: PulseIcon },
      { title: "Agent activity feed", desc: "Watch your AI workforce work — every task an agent picks up, completes, or escalates for approval.", Icon: RobotIcon },
      { title: "Custom widgets & views", desc: "Build a leadership view, a delivery view, and a client view from the same data — no rebuilding required.", Icon: GaugeIcon },
      { title: "Smart alerts", desc: "Get nudged when a deadline slips, a project stalls, or a number crosses a threshold you care about.", Icon: BellRingingIcon },
    ],
    workforceAngle: {
      title: "Your agents keep it current",
      desc: "The dashboard isn't a manual report you maintain. Your AI agents update the underlying work as they do it, so the numbers are always live — no weekly rollup, no stale slides.",
    },
    useCases: [
      { audience: "Leadership", title: "Portfolio at a glance", desc: "Track every active project, team utilization, and margin in one leadership dashboard." },
      { audience: "Operations", title: "Delivery oversight", desc: "See open work, upcoming deadlines, and progress without pinging your team for updates." },
      { audience: "Client teams", title: "Account health", desc: "Monitor every client, campaign, and deliverable so nothing slips between check-ins." },
    ],
    outcomes: [
      "Cut status meetings — the answer is already on screen",
      "Spot slipping work before a client does",
      "Give every leader the same source of truth",
    ],
    faqs: [
      { q: "Where does the dashboard get its data?", a: "From the work happening inside Onita — your spreadsheets, documents, timelines, and the actions your AI agents take — plus any tools you connect. It updates in real time." },
      { q: "Can different teams see different views?", a: "Yes. Build role-based views and widgets so leaders, delivery leads, and clients each see what's relevant, governed by permissions." },
      { q: "Do I have to build it myself?", a: "No. After your demo, our team designs and configures your dashboards around how your business measures success." },
    ],
    related: ["spreadsheet", "timeline", "ai-agents"],
  },
  {
    slug: "spreadsheet",
    name: "Spreadsheet",
    tab: "Spreadsheet",
    category: "Structured data",
    accent: "success",
    ogIcon: "Table",
    Icon: TableIcon,
    shots: [S.b, S.a, S.d],
    metaTitle: "AI Spreadsheet Your Agents Can Read & Update",
    metaDescription:
      "A powerful spreadsheet your team and your AI workforce share — formulas, filters, and pivots that agents can read, calculate, and update on their own.",
    eyebrow: "Spreadsheet",
    headline: "Spreadsheets your agents",
    headlineEmphasis: "actually use",
    subhead:
      "Familiar, powerful sheets your whole team can work in — and your AI workforce can read, calculate, and update on its own. The single place your numbers live and stay right.",
    definitionTitle: "What is the Onita Spreadsheet?",
    definition:
      "The Onita Spreadsheet gives you formulas, filters, and pivots like the tools you already know — but it's connected to the rest of your workspace and readable and writable by your AI agents. Ask an agent to reconcile a tracker, roll up hours, or flag anomalies, and it works directly in the sheet.",
    highlights: ["Formulas, filters, and pivots", "Live-linked to your data", "Readable and writable by agents"],
    features: [
      { title: "Powerful formulas", desc: "The functions, filters, and pivot tables your team already relies on — nothing to relearn.", Icon: CalculatorIcon },
      { title: "Agent-editable", desc: "Agents update cells, reconcile trackers, and roll up numbers with a full audit trail of every change.", Icon: RobotIcon },
      { title: "Live-linked data", desc: "Cells connect to records, documents, and dashboards, so one update flows everywhere at once.", Icon: LinkIcon },
      { title: "Instant analysis", desc: "Ask for a summary, an outlier check, or a forecast, and get it computed in the sheet — no macros.", Icon: MagicWandIcon },
    ],
    workforceAngle: {
      title: "Hand the busywork to an agent",
      desc: "Reconciling timesheets, cleaning a data pull, updating a budget tracker — the repetitive spreadsheet work that eats your team's afternoons is exactly what your agents take off their plate.",
    },
    useCases: [
      { audience: "Finance & ops", title: "Budgets & trackers", desc: "Keep budgets, hours, and margins in agent-maintained sheets that never go stale." },
      { audience: "Operations", title: "Living records", desc: "Run intake, inventory, and billing trackers your agents keep reconciled and up to date." },
      { audience: "Marketing", title: "Campaign numbers", desc: "Pull spend and performance into one sheet your agents refresh and summarize automatically." },
    ],
    outcomes: [
      "Reclaim hours lost to manual data entry",
      "Trust your numbers — every change is logged",
      "One connected sheet instead of ten emailed versions",
    ],
    faqs: [
      { q: "Is it like Excel or Google Sheets?", a: "Yes — the formulas, filters, and pivots are familiar. The difference is it lives in your workspace and your AI agents can work in it alongside you." },
      { q: "Can agents change my data without oversight?", a: "Only within the permissions you set, and every edit is tracked. You can require human approval before sensitive changes land." },
      { q: "Can I import existing spreadsheets?", a: "Yes. We migrate your existing trackers during setup so your team keeps working with data they recognize." },
    ],
    related: ["dashboard", "documents", "automations"],
  },
  {
    slug: "documents",
    name: "Documents",
    tab: "Documents",
    category: "Living documents",
    accent: "info",
    ogIcon: "FileText",
    Icon: FileTextIcon,
    shots: [S.c, S.e, S.a],
    metaTitle: "AI Documents That Draft & Update Themselves",
    metaDescription:
      "Living documents your AI agents draft, edit, and keep in sync with the data behind them — proposals, memos, and reports without the copy-paste.",
    eyebrow: "Documents",
    headline: "Documents that write",
    headlineEmphasis: "themselves",
    subhead:
      "Proposals, memos, contracts, and reports your AI agents draft, edit, and keep in sync with the data behind them — so the first draft is already on the page when your team sits down.",
    definitionTitle: "What are Onita Documents?",
    definition:
      "Onita Documents are living, collaborative docs where your AI agents do the heavy lifting: drafting from your templates and knowledge, pulling live figures from your data, and revising on request. Your experts edit and approve instead of starting from a blank page.",
    highlights: ["AI-assisted drafting", "Live-linked to your data", "Comments and version history"],
    features: [
      { title: "AI-assisted drafting", desc: "Agents draft from your templates, past work, and business knowledge — in your voice, not generic boilerplate.", Icon: PencilSimpleLineIcon },
      { title: "Live data blocks", desc: "Figures and tables stay connected to their source, so a number never goes out of date mid-document.", Icon: LinkIcon },
      { title: "Comments & review", desc: "Thread feedback, suggest edits, and route to a teammate for sign-off before anything reaches a client.", Icon: ChatsCircleIcon },
      { title: "Full version history", desc: "Every revision is captured and restorable, with a clear record of who — or which agent — changed what.", Icon: ClockCountdownIcon },
    ],
    workforceAngle: {
      title: "First draft, done for you",
      desc: "Give an agent the brief and it produces a structured first draft grounded in your business's real knowledge. Your people spend their time on judgment and polish, not on formatting and fetching facts.",
    },
    useCases: [
      { audience: "Sales & BD", title: "Proposals & reports", desc: "Agents assemble proposals and deliverables from live data and your best past work." },
      { audience: "Operations", title: "Drafting & review", desc: "Draft agreements and memos, then have an agent flag risky clauses for a person to review." },
      { audience: "Client teams", title: "Briefs & recaps", desc: "Turn notes into client-ready briefs, scopes, and recaps in minutes." },
    ],
    outcomes: [
      "Ship proposals and reports in a fraction of the time",
      "Keep every document on-brand and accurate",
      "Never chase the latest version again",
    ],
    faqs: [
      { q: "Will documents sound generic?", a: "No. Agents draft from your templates, tone, and past work, so output reads like your business — then your experts refine it." },
      { q: "Can it review as well as write?", a: "Yes. Agents can summarize, compare versions, and flag risky or missing sections for a human to approve." },
      { q: "Is sensitive content protected?", a: "Documents follow your permissions and audit logging, and your content is never used to train public models." },
    ],
    related: ["spreadsheet", "slides", "ai-agents"],
  },
  {
    slug: "forms",
    name: "Forms",
    tab: "Forms",
    category: "Intake & capture",
    accent: "accent",
    ogIcon: "ListChecks",
    Icon: ListChecksIcon,
    shots: [S.d, S.b, S.f],
    metaTitle: "AI Forms & Intake That Route Into Workflows",
    metaDescription:
      "Capture requests, intake, and briefs with no-code forms that route straight into workflows your AI agents act on — no more requests lost in an inbox.",
    eyebrow: "Forms",
    headline: "Intake that goes",
    headlineEmphasis: "straight to work",
    subhead:
      "Capture requests, client intake, and briefs with clean forms that route straight into workflows your AI agents can act on — so nothing sits in an inbox waiting to be triaged.",
    definitionTitle: "What are Onita Forms?",
    definition:
      "Onita Forms are no-code forms that turn any request — new-client intake, a project brief, an internal ask — into structured data that kicks off a workflow. The moment someone submits, an agent can triage it, enrich it, and route it to the right person or process.",
    highlights: ["No-code form builder", "Conditional logic", "Routes straight into workflows"],
    features: [
      { title: "No-code builder", desc: "Assemble forms in minutes with a drag-and-drop builder — no developer, no ticket queue.", Icon: SlidersHorizontalIcon },
      { title: "Conditional logic", desc: "Show the right questions based on earlier answers to keep intake short and relevant.", Icon: GitBranchIcon },
      { title: "Auto-routing", desc: "Every submission lands as a structured record and triggers the workflow you choose.", Icon: FunnelIcon },
      { title: "Agent triage", desc: "An agent reads each submission, enriches it, flags priority, and assigns it before anyone opens their inbox.", Icon: RobotIcon },
    ],
    workforceAngle: {
      title: "No request falls through",
      desc: "Every form submission becomes work an agent immediately picks up — categorized, enriched, and routed. Intake stops being a bottleneck and becomes the start of an automated pipeline.",
    },
    useCases: [
      { audience: "Operations", title: "Request intake", desc: "Capture new-project details and let an agent scope and route them to the right owner." },
      { audience: "Client teams", title: "Client onboarding", desc: "Run intake an agent screens and prepares before a person needs to review it." },
      { audience: "Marketing", title: "Creative briefs", desc: "Turn brief submissions into structured tickets your agents kick off automatically." },
    ],
    outcomes: [
      "Turn requests into action in seconds, not days",
      "Standardize intake across the whole business",
      "Free your team from manual triage",
    ],
    faqs: [
      { q: "Can forms start a workflow automatically?", a: "Yes — that's the point. Each submission becomes a structured record that triggers the automation or agent you assign." },
      { q: "Can we embed forms on our website?", a: "Yes. Share a link or embed a form anywhere, and responses flow straight into your workspace." },
      { q: "Can an agent handle submissions?", a: "Absolutely. Agents can triage, enrich, prioritize, and route every response before a person needs to touch it." },
    ],
    related: ["automations", "ai-agents", "spreadsheet"],
  },
  {
    slug: "slides",
    name: "Slides",
    tab: "Slides",
    category: "Presentations",
    accent: "warning",
    ogIcon: "PresentationChart",
    Icon: PresentationChartIcon,
    shots: [S.e, S.c, S.a],
    metaTitle: "AI Slides & Decks Built From Your Live Data",
    metaDescription:
      "Client-ready decks your AI agents build and update from the data behind them — on-brand presentations without the late-night formatting.",
    eyebrow: "Slides",
    headline: "Client-ready decks,",
    headlineEmphasis: "built for you",
    subhead:
      "Pitch decks, readouts, and board updates your AI agents assemble from your live data and past work — on brand, on message, and ready to present without the late-night formatting.",
    definitionTitle: "What are Onita Slides?",
    definition:
      "Onita Slides let your AI workforce turn data and documents into polished, on-brand presentations. Agents pull the latest numbers, apply your templates, and draft the narrative — so a deck that used to take a day is ready for review in minutes.",
    highlights: ["AI-built presentations", "On-brand templates", "Auto-updated from live data"],
    features: [
      { title: "AI-built decks", desc: "Describe the story and an agent assembles a structured, on-brand deck from your data and content.", Icon: MagicWandIcon },
      { title: "On-brand templates", desc: "Your fonts, colors, and layouts applied automatically, so every deck looks like your business made it.", Icon: PaintBrushBroadIcon },
      { title: "Live-linked charts", desc: "Charts and figures refresh from their source, so a deck is never built on last month's numbers.", Icon: ChartBarIcon },
      { title: "Speaker-ready", desc: "Agents draft talking points and summaries alongside the slides so anyone can present with confidence.", Icon: PresentationChartIcon },
    ],
    workforceAngle: {
      title: "From data to deck, automatically",
      desc: "Instead of copying charts into slides at midnight, your agents build the readout from live figures and your last deck. Your team reviews the story instead of wrestling with formatting.",
    },
    useCases: [
      { audience: "Sales & BD", title: "Pitches & readouts", desc: "Generate pitch decks and project readouts from live project data in your template." },
      { audience: "Client teams", title: "Client updates", desc: "Turn project status into clear client-facing updates without manual assembly." },
      { audience: "Marketing", title: "Campaign reports", desc: "Build performance decks that pull the latest results the moment you need to present." },
    ],
    outcomes: [
      "Turn a day of deck-building into minutes",
      "Present numbers you can trust are current",
      "Keep every deck consistently on-brand",
    ],
    faqs: [
      { q: "Can it match our brand exactly?", a: "Yes. We set up your templates, fonts, and colors during onboarding so every generated deck is on-brand by default." },
      { q: "Do the charts stay current?", a: "Charts link to their source data and refresh automatically, so decks reflect the latest numbers." },
      { q: "Can I export to PowerPoint or PDF?", a: "Yes. Present in Onita or export to the formats your clients expect." },
    ],
    related: ["documents", "dashboard", "spreadsheet"],
  },
  {
    slug: "calendar",
    name: "Calendar",
    tab: "Calendar",
    category: "Scheduling",
    accent: "brand",
    ogIcon: "CalendarDots",
    Icon: CalendarDotsIcon,
    shots: [S.f, S.d, S.b],
    metaTitle: "AI Calendar That Reschedules Itself",
    metaDescription:
      "Plans that update themselves as tasks shift and deadlines move. Onita's AI calendar keeps schedules, resources, and deadlines in sync automatically.",
    eyebrow: "Calendar",
    headline: "Schedules that keep",
    headlineEmphasis: "themselves current",
    subhead:
      "A calendar that updates itself as tasks shift, deadlines move, and agents reschedule — so your team always sees an accurate plan instead of one that's already out of date.",
    definitionTitle: "What is the Onita Calendar?",
    definition:
      "The Onita Calendar connects your schedule to the actual work. When a task slips or an agent finishes early, the plan adjusts automatically. Deadlines, resources, and team availability stay in sync without anyone dragging events around.",
    highlights: ["Self-updating schedules", "Deadline and task sync", "Team and resource views"],
    features: [
      { title: "Self-updating plans", desc: "As work moves, the calendar moves with it — no manual rescheduling every time something changes.", Icon: ArrowsClockwiseIcon },
      { title: "Deadline sync", desc: "Every task and milestone maps to a date, so a slipping deadline is visible the moment it happens.", Icon: ClockCountdownIcon },
      { title: "Resource views", desc: "See who and what is booked across the team to plan capacity without double-booking anyone.", Icon: UsersThreeIcon },
      { title: "Agent scheduling", desc: "Agents book, reschedule, and remind, keeping the plan realistic while your people focus on the work.", Icon: RobotIcon },
    ],
    workforceAngle: {
      title: "Let an agent run the schedule",
      desc: "Coordinating calendars, chasing reschedules, and reminding people is exactly the work an agent handles well. Your team stops playing scheduler and the plan stays honest.",
    },
    useCases: [
      { audience: "Delivery", title: "Delivery planning", desc: "Keep project timelines and team availability aligned as scope shifts." },
      { audience: "Operations", title: "Deadline management", desc: "Track critical deadlines that update as work progresses." },
      { audience: "Production", title: "Production schedules", desc: "Coordinate shoots, reviews, and launches across every client in one view." },
    ],
    outcomes: [
      "Always see a plan that reflects reality",
      "Stop double-booking scarce experts",
      "Never miss a deadline to a stale calendar",
    ],
    faqs: [
      { q: "Does it connect to Google or Outlook?", a: "Yes. We connect your existing calendars during setup so Onita reflects and updates the schedules your team already uses." },
      { q: "How does it stay up to date?", a: "It's linked to your tasks and timelines — when work moves, the calendar moves with it, and agents handle the reshuffling." },
      { q: "Can agents schedule on our behalf?", a: "Yes, within your rules. Agents can book, reschedule, and send reminders while keeping a human in the loop where you want one." },
    ],
    related: ["timeline", "automations", "dashboard"],
  },
  {
    slug: "timeline",
    name: "Timeline",
    tab: "Timeline",
    category: "Planning",
    accent: "info",
    ogIcon: "ChartLineUp",
    Icon: ChartLineUpIcon,
    shots: [S.a, S.c, S.e],
    metaTitle: "AI Project Timeline & Gantt for Teams",
    metaDescription:
      "See the whole plan in one view — dependencies, milestones, and progress at every stage. Onita's timeline keeps delivery on track automatically.",
    eyebrow: "Timeline",
    headline: "The whole plan,",
    headlineEmphasis: "at a glance",
    subhead:
      "Every project and workstream in one timeline — dependencies, milestones, and progress at each stage — so you can see what's on track, what's at risk, and what's next without opening ten trackers.",
    definitionTitle: "What is the Onita Timeline?",
    definition:
      "The Onita Timeline is a Gantt-style view of your delivery: tasks, dependencies, and milestones laid out over time and tied to the real work. It shows the critical path and progress automatically, and your agents keep it current as tasks complete.",
    highlights: ["Dependencies and milestones", "Critical path at a glance", "Progress tracking"],
    features: [
      { title: "Dependencies & milestones", desc: "Map how work connects so a delay in one place makes its downstream impact obvious immediately.", Icon: TreeStructureIcon },
      { title: "Critical path", desc: "See the sequence that determines your deadline, and where a slip actually threatens delivery.", Icon: SignpostIcon },
      { title: "Live progress", desc: "Bars fill as work completes — no manual percent-done updates, just the real state of the plan.", Icon: PulseIcon },
      { title: "Milestone flags", desc: "Get flagged the moment a milestone is at risk, while there's still time to do something about it.", Icon: FlagBannerIcon },
    ],
    workforceAngle: {
      title: "A plan that maintains itself",
      desc: "As your agents and team complete tasks, the timeline updates — progress, dates, and risk all reflect reality. Planning stops being a document you update and becomes a live picture of delivery.",
    },
    useCases: [
      { audience: "Delivery", title: "Project delivery", desc: "Plan phases and workstreams, and see instantly when a slip threatens a milestone." },
      { audience: "Operations", title: "Roadmaps", desc: "Lay out project phases and deadlines so the path to done is always clear." },
      { audience: "Marketing", title: "Campaign roadmaps", desc: "Sequence production and launch dependencies across every account in one view." },
    ],
    outcomes: [
      "See risk early, while you can still act",
      "Keep clients aligned with a clear roadmap",
      "Retire the manual status spreadsheet",
    ],
    faqs: [
      { q: "Is this a Gantt chart?", a: "Yes — a modern one. It shows tasks, dependencies, milestones, and the critical path, and it updates as the work does." },
      { q: "How does progress stay accurate?", a: "The timeline is tied to your tasks. As they complete, progress and dates update automatically — agents keep it honest." },
      { q: "Can clients see a version?", a: "Yes. Share a clean, client-safe view of the roadmap governed by your permissions." },
    ],
    related: ["calendar", "dashboard", "ai-agents"],
  },
  {
    slug: "automations",
    name: "Automations",
    tab: "Automations",
    category: "Workflow automation",
    accent: "accent",
    ogIcon: "Lightning",
    Icon: LightningIcon,
    shots: [S.b, S.f, S.d],
    metaTitle: "AI Workflow Automation — Trigger, Approve, Done",
    metaDescription:
      "Wire up repeatable work without code. Onita automations connect triggers, AI agents, and human approvals so routine processes run themselves.",
    eyebrow: "Automations",
    headline: "Repeatable work,",
    headlineEmphasis: "on autopilot",
    subhead:
      "Wire up the routine work your business repeats every week — trigger, approve, done — without writing a line of code. Agents do the steps; your people approve what matters.",
    definitionTitle: "What are Onita Automations?",
    definition:
      "Onita Automations connect a trigger to a sequence of actions — including work handled by AI agents and human approval steps. When something happens (a form is submitted, a deal moves, a date arrives), the workflow runs itself, looping in a person only where judgment is required.",
    highlights: ["Trigger, approve, done", "No code required", "Human-in-the-loop steps"],
    features: [
      { title: "Visual builder", desc: "Compose workflows from triggers, actions, and conditions on a canvas — no code, no engineer.", Icon: GitBranchIcon },
      { title: "Agent steps", desc: "Drop an AI agent into any step to draft, analyze, or decide, then pass the result down the line.", Icon: RobotIcon },
      { title: "Human approvals", desc: "Add approval gates so nothing sensitive or client-facing goes out without a person signing off.", Icon: ShieldCheckIcon },
      { title: "Any trigger", desc: "Start from a form, a status change, a schedule, or an incoming message across your connected tools.", Icon: LightningIcon },
    ],
    workforceAngle: {
      title: "Where agents and process meet",
      desc: "Automations are the wiring that lets your AI workforce run whole processes end to end — with approval gates exactly where your business needs a human decision. Set it once; it runs every time.",
    },
    useCases: [
      { audience: "Operations", title: "Onboarding & billing", desc: "Automate project setup, status rollups, and invoice prep with approvals built in." },
      { audience: "Client teams", title: "Intake to delivery", desc: "Turn intake into a check, an agreement, and an opened project — with sign-off." },
      { audience: "Marketing", title: "Brief to delivery", desc: "Route briefs into tasks, drafts, and reviews so production starts itself." },
    ],
    outcomes: [
      "Eliminate the recurring manual process tax",
      "Keep control with approvals where they count",
      "Scale output without scaling headcount",
    ],
    faqs: [
      { q: "Do I need to code?", a: "No. Automations are built visually. Our team sets up your core workflows during onboarding, and you can adjust them anytime." },
      { q: "Can a human approve before things happen?", a: "Yes. Add approval steps anywhere so sensitive or client-facing actions always get a sign-off." },
      { q: "What can trigger an automation?", a: "Forms, status changes, schedules, incoming messages, and events from your connected tools." },
    ],
    related: ["forms", "ai-agents", "calendar"],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tab: "AI Agents",
    category: "AI workforce",
    accent: "brand",
    ogIcon: "Robot",
    Icon: RobotIcon,
    shots: [S.c, S.a, S.f],
    metaTitle: "AI Agents for Modern Business Teams",
    metaDescription:
      "Build AI teammates that never sleep — each with memory, knowledge, tools, and permissions of their own. Onita agents collaborate to run whole workflows.",
    eyebrow: "AI Agents",
    headline: "Teammates that",
    headlineEmphasis: "never sleep",
    subhead:
      "Build AI employees for the roles your business runs on — research, business development, drafting, review, operations — each with its own memory, knowledge, tools, and permissions. They collaborate to run whole workflows, not just answer questions.",
    definitionTitle: "What is an AI Agent in Onita?",
    definition:
      "An Onita AI Agent is a configured digital worker with a job to do. It has memory of past work, access to the knowledge and tools it needs, and permissions that bound what it can touch. Agents take actions across your workspace and hand work to each other — so entire processes get done, with a human approving what matters.",
    highlights: ["Memory and knowledge", "Tools and permissions", "Collaborate across teams"],
    features: [
      { title: "Memory & knowledge", desc: "Each agent remembers your business's context and draws on the documents and data you give it.", Icon: BrainIcon },
      { title: "Tools & permissions", desc: "Grant an agent exactly the tools and access it needs — and nothing it doesn't.", Icon: PlugsConnectedIcon },
      { title: "They collaborate", desc: "Agents hand work to one another to run multi-step processes end to end, not one-off replies.", Icon: UsersThreeIcon },
      { title: "Human in the loop", desc: "Approval gates keep a person in control of anything sensitive or client-facing.", Icon: ShieldCheckIcon },
    ],
    workforceAngle: {
      title: "The center of your AI workforce",
      desc: "Agents are the employees. Every other product — documents, spreadsheets, timelines, automations — is a place they do the work. Design the roles your business needs and they operate across all of it together.",
    },
    useCases: [
      { audience: "Sales & BD", title: "Research & outreach", desc: "An agent researches a market and drafts the proposal while another preps the readout." },
      { audience: "Operations", title: "Review & intake", desc: "An agent runs first-pass review and intake screening for a person to approve." },
      { audience: "Marketing", title: "Content & ops", desc: "Agents draft content, build reports, and keep accounts moving between check-ins." },
    ],
    outcomes: [
      "Add capacity without adding payroll",
      "Put your best process into every agent",
      "Keep humans on judgment, not busywork",
    ],
    faqs: [
      { q: "How is an agent different from a chatbot?", a: "A chatbot answers. An agent acts — it takes steps across your tools, collaborates with other agents, and completes real work, looping in a human for approval." },
      { q: "What can an agent access?", a: "Only what you grant it. Each agent has scoped tools, knowledge, and permissions, with every action logged." },
      { q: "Who builds the agents?", a: "We do. After your demo, our team designs and configures the agents around your business's roles and workflows, then tunes them as you grow." },
    ],
    related: ["automations", "documents", "dashboard"],
  },
];

export const productMap: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug, p])
);

export function getProduct(slug: string): Product | undefined {
  return productMap[slug];
}

export const accentClasses: Record<
  Accent,
  { text: string; bg: string; softBg: string; border: string; ring: string; gradient: string }
> = {
  brand: {
    text: "text-brand-600",
    bg: "bg-brand-500",
    softBg: "bg-brand-50",
    border: "border-brand-200",
    ring: "ring-brand-500/20",
    gradient: "from-brand-500 to-accent-500",
  },
  accent: {
    text: "text-accent-600",
    bg: "bg-accent-500",
    softBg: "bg-accent-50",
    border: "border-accent-200",
    ring: "ring-accent-500/20",
    gradient: "from-accent-500 to-brand-500",
  },
  info: {
    text: "text-info-700",
    bg: "bg-info-500",
    softBg: "bg-info-50",
    border: "border-info-500/30",
    ring: "ring-info-500/20",
    gradient: "from-info-500 to-brand-500",
  },
  success: {
    text: "text-success-700",
    bg: "bg-success-500",
    softBg: "bg-success-50",
    border: "border-success-500/30",
    ring: "ring-success-500/20",
    gradient: "from-success-500 to-brand-500",
  },
  warning: {
    text: "text-warning-700",
    bg: "bg-warning-500",
    softBg: "bg-warning-50",
    border: "border-warning-500/30",
    ring: "ring-warning-500/20",
    gradient: "from-warning-500 to-accent-500",
  },
};

export const productIcons = { StackIcon, ClipboardTextIcon };
