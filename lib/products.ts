import type { Icon } from "@phosphor-icons/react";
import type { OgIconName } from "@/lib/og-icons";
import {
  TableIcon,
  RobotIcon,
  PresentationChartIcon,
  FileTextIcon,
  ListChecksIcon,
  SquaresFourIcon,
  LightningIcon,
  EnvelopeSimpleIcon,
  CalendarDotsIcon,
  NotePencilIcon,
  CalendarCheckIcon,
  ShieldCheckIcon,
  MagicWandIcon,
  ArrowsClockwiseIcon,
  TreeStructureIcon,
  SparkleIcon,
  MagnifyingGlassIcon,
  UsersThreeIcon,
  GitBranchIcon,
  CheckCircleIcon,
  FunnelIcon,
  StackIcon,
  ChartLineUpIcon,
  ChartBarIcon,
  BellRingingIcon,
  PencilSimpleLineIcon,
  PlugsConnectedIcon,
  PaintBrushBroadIcon,
  SlidersHorizontalIcon,
  BrainIcon,
  LinkIcon,
  ClipboardTextIcon,
  ArrowUUpLeftIcon,
  PencilSimpleIcon,
  HandPointingIcon,
  ClipboardIcon,
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
  docs1: "/screenshots/docs/1.png",
  docs2: "/screenshots/docs/2.png",
  docs3: "/screenshots/docs/3.png",
  cal1: "/screenshots/calendar/1.png",
  dash1: "/screenshots/dashboard/1.png",
  dash2: "/screenshots/dashboard/2.png",
  slides1: "/screenshots/slides/1.png",
  email1: "/screenshots/email/1.png",
  email2: "/screenshots/email/2.png",
};

export const products: Product[] = [
  {
    slug: "spreadsheet",
    name: "Spreadsheet",
    tab: "Spreadsheet",
    category: "Spreadsheets & databases",
    accent: "info",
    ogIcon: "Table",
    Icon: TableIcon,
    shots: [S.a, S.b],
    metaTitle: "Spreadsheet — A Spreadsheet That's Also a Database",
    metaDescription:
      "Onita's Spreadsheet is a powerful spreadsheet and database in one — view the same data as a grid, board, timeline, or calendar, link records, add formulas, and let AI keep it up to date.",
    eyebrow: "Spreadsheet",
    headline: "A spreadsheet that's also",
    headlineEmphasis: "a database",
    subhead:
      "Keep your data in one place and look at it however you need — as a familiar grid, a board, a timeline, or a calendar. Records link together, formulas do the math, forms fill it in, and your AI reads and updates it for you.",
    definitionTitle: "What is the Onita Spreadsheet?",
    definition:
      "The Onita Spreadsheet is a spreadsheet and a database rolled into one. Your data lives as a single set of records you can view as a grid, a Kanban board, a Gantt timeline, or a calendar — no exporting, no rebuilding. Records connect to each other, computed and formula fields keep numbers current, forms feed rows straight in, and your AI can read and update everything so your data actually does something.",
    highlights: ["One dataset, four ways to see it", "Linked records and formulas", "Read and updated by your AI"],
    features: [
      { title: "Grid, board, timeline, calendar", desc: "See the exact same records as a spreadsheet grid, a Kanban board, a Gantt timeline, or a calendar — switch views without moving a thing.", Icon: TableIcon },
      { title: "Records that link up", desc: "Connect clients, projects, and tasks so related data stays in sync and nothing has to be re-typed.", Icon: TreeStructureIcon },
      { title: "Formulas and rollups", desc: "Computed and formula fields do the math for you and update themselves as the numbers change.", Icon: ChartLineUpIcon },
      { title: "Forms feed it, AI runs it", desc: "Form answers land as new rows, and your AI reads, fills, and updates cells as the work happens.", Icon: SparkleIcon },
    ],
    workforceAngle: {
      title: "Data that works, not just sits there",
      desc: "Because your AI can read and write your tables, records don't gather dust — they kick off tasks, update statuses, and feed your reports on their own, so your spreadsheet earns its keep.",
    },
    useCases: [
      { audience: "Operations", title: "One source of truth", desc: "Track projects, clients, and assets in linked tables the whole team can trust." },
      { audience: "Teams", title: "Work it your way", desc: "Grid for entry, board for flow, timeline for planning — all over the same records." },
      { audience: "Leadership", title: "Numbers that stay current", desc: "Formulas and rollups summarize your data live, so a glance is always up to date." },
    ],
    outcomes: [
      "Replace scattered spreadsheets with one live source",
      "See the same data as a grid, board, timeline, or calendar",
      "Let AI keep every record current for you",
    ],
    faqs: [
      { q: "Is this a spreadsheet or a database?", a: "It's both. You get the comfort of a spreadsheet with the power of a database — linked records, formulas, and several views over the same data." },
      { q: "Can the AI update my data?", a: "Yes. Your AI can read your tables, answer questions about them, and update cells — filling fields, changing statuses, and adding rows as work happens." },
      { q: "Who sets it up?", a: "Our team does. After your demo we build out the tables, views, and links your business runs on." },
    ],
    related: ["dashboards", "forms", "ai-agents"],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tab: "AI Agents",
    category: "AI workforce",
    accent: "brand",
    ogIcon: "Robot",
    Icon: RobotIcon,
    shots: [S.c, S.a],
    metaTitle: "AI Agents — AI Teammates That Do Real Work",
    metaDescription:
      "Onita's AI Agents are AI teammates you set up by describing their job in plain English. They work across your files, email, and calendar, learn your business, and always ask before anything risky.",
    eyebrow: "AI Agents",
    headline: "AI teammates that",
    headlineEmphasis: "do real work",
    subhead:
      "Set up an AI teammate in minutes — just describe the job in plain English. It gets real work done across your files, email, and calendar, learns how your business runs, teams up with your other agents, and always checks with you before anything risky.",
    definitionTitle: "What are AI Agents?",
    definition:
      "AI Agents are Onita's AI teammates. You create one by describing its role the way you'd brief a new hire, and it goes to work across your files, email, and calendar. Each agent builds up knowledge, skills, and memory about your business, hands tasks to other agents when it makes sense, and pauses for your yes before anything it can't take back — so you get more done without giving up control.",
    highlights: ["Set up in plain English", "Works across your whole workspace", "Always asks before anything risky"],
    features: [
      { title: "Describe the job, done", desc: "Write what you want an agent to handle in plain words — no setup wizardry — and it's ready to work.", Icon: MagicWandIcon },
      { title: "Learns your business", desc: "Each agent builds up knowledge, skills, and memory, so it gets sharper and more useful the longer it works with you.", Icon: BrainIcon },
      { title: "Teams that hand off", desc: "Agents work together and pass tasks to the right teammate on their own, just like a real team would.", Icon: UsersThreeIcon },
      { title: "Safe by default", desc: "Anything it can't undo — a send, a payment, a publish — waits for your one-tap approval first.", Icon: ShieldCheckIcon },
    ],
    workforceAngle: {
      title: "A workforce that scales with you",
      desc: "Instead of hiring for every extra hour of busywork, you stand up AI teammates that handle it around the clock — while your people focus on the judgment calls and the relationships that need a human.",
    },
    useCases: [
      { audience: "Teams", title: "An extra pair of hands", desc: "Hand off the repetitive work so your team spends its time on what actually needs a person." },
      { audience: "Operations", title: "Always-on execution", desc: "Agents keep the routine running overnight and over weekends without missing a beat." },
      { audience: "Leadership", title: "More output, same team", desc: "Grow what your team can deliver without growing headcount for every task." },
    ],
    outcomes: [
      "Stand up an AI teammate in minutes, not weeks",
      "Get real work done across files, email, and calendar",
      "Keep control — nothing risky happens without your yes",
    ],
    faqs: [
      { q: "Do I need to be technical to set one up?", a: "Not at all. You describe the job in plain English, the way you'd explain it to a new colleague, and the agent takes it from there." },
      { q: "Can an agent do something without asking me?", a: "It handles the safe, reversible work on its own, but anything it can't undo — sending, spending, publishing, deleting — waits for your approval." },
      { q: "Who sets up our agents?", a: "Our team does. After your demo we build your agents around your real roles and workflows so they're useful from day one." },
    ],
    related: ["approvals", "spreadsheet", "flow"],
  },
  {
    slug: "slides",
    name: "Slides",
    tab: "Slides",
    category: "Presentations",
    accent: "warning",
    ogIcon: "PresentationChart",
    Icon: PresentationChartIcon,
    shots: [S.slides1, S.e],
    metaTitle: "Slides — Boardroom Decks Built by AI From Your Live Data",
    metaDescription:
      "Onita's Slides builds boardroom-quality presentations from your live data and brand in seconds — and keeps every number current, so your decks are never out of date.",
    eyebrow: "Slides",
    headline: "Boardroom decks that",
    headlineEmphasis: "build themselves",
    subhead:
      "Go from a quick brief to a polished presentation in seconds. Onita drafts the story, applies your brand, and pulls in your live numbers — then keeps them current, so your deck is never stale the moment you open it.",
    definitionTitle: "What is Onita Slides?",
    definition:
      "Onita Slides is an AI presentation builder that produces boardroom-quality decks from your live data. Describe the deck you need — a client update, a pitch, a review — and Onita drafts a clean, on-brand presentation with the right story and your real numbers already in place. When the data changes, the slides update, so what you present is always current.",
    highlights: ["Full decks in seconds", "On-brand automatically", "Numbers stay current"],
    features: [
      { title: "AI-built decks", desc: "Turn a short brief or a report into a structured, presentable deck without starting from a blank slide.", Icon: MagicWandIcon },
      { title: "On-brand by default", desc: "Your fonts, colors, and layouts are applied for you, so every deck looks like your team made it.", Icon: PaintBrushBroadIcon },
      { title: "Live data on the slides", desc: "Charts and figures come from your real numbers and refresh whenever the data does.", Icon: ChartLineUpIcon },
      { title: "Polish in minutes", desc: "Reorder, rewrite, and restyle with AI so tidying up takes minutes, not a whole afternoon.", Icon: SlidersHorizontalIcon },
    ],
    workforceAngle: {
      title: "The deck-building, handled",
      desc: "The structure, the design, and the number-wrangling are done for you. You bring the message and the room — Onita takes care of the busywork behind a great presentation.",
    },
    useCases: [
      { audience: "Client teams", title: "Updates in minutes", desc: "Spin up client-ready decks from live account data whenever you need one." },
      { audience: "Leadership", title: "Reviews made easy", desc: "Board and business reviews assembled from current numbers, automatically." },
      { audience: "Sales", title: "Pitches on demand", desc: "Tailored, on-brand pitch decks ready in the time it takes to grab a coffee." },
    ],
    outcomes: [
      "Build presentations in seconds, not hours",
      "Keep every deck on-brand without lifting a finger",
      "Never present a stale number again",
    ],
    faqs: [
      { q: "Will the slides match our branding?", a: "Yes. Onita applies your templates, fonts, and colors so decks look professionally designed and on-brand every time." },
      { q: "Can a deck pull from live data?", a: "It can. Charts and figures link to your Onita data and refresh on their own whenever it changes." },
      { q: "Who sets up our templates?", a: "Our team does, after your demo — we load your brand and deck styles so your very first presentation already looks right." },
    ],
    related: ["dashboards", "docs", "spreadsheet"],
  },
  {
    slug: "docs",
    name: "Docs",
    tab: "Docs",
    category: "Docs & notes",
    accent: "info",
    ogIcon: "FileText",
    Icon: FileTextIcon,
    shots: [S.docs1, S.docs2, S.docs3],
    metaTitle: "Docs — Documents Your Team and AI Write Together",
    metaDescription:
      "Onita's Docs are clean, shareable documents your team and AI write together — @-mention people, link files, and turn notes straight into tasks, all in one organized place.",
    eyebrow: "Docs",
    headline: "Documents you and your AI",
    headlineEmphasis: "write together",
    subhead:
      "Write in seconds, not hours. Onita drafts and tidies your writing, you @-mention teammates and link files right in the doc, and any note can become a tracked task — so your docs turn into action instead of gathering dust.",
    definitionTitle: "What is Onita Docs?",
    definition:
      "Onita Docs is a clean, shareable document editor with AI built in and your team along for the ride. You and your AI draft, edit, and polish together; you @-mention people, link files, and reference other work right inside the doc; and any action item you jot down can become a real task. It's one organized, searchable home for notes, wikis, and processes.",
    highlights: ["Written with your AI", "@-mention people and link files", "Notes become tasks"],
    features: [
      { title: "AI drafting and editing", desc: "Turn a prompt or an outline into a solid draft, then tighten your writing as you go.", Icon: PencilSimpleLineIcon },
      { title: "Mention and link inline", desc: "@-mention teammates and link files right in the doc so context lives with the words.", Icon: HandPointingIcon },
      { title: "Notes into tasks", desc: "Pull the to-dos hiding inside a doc straight into your task list — no re-typing.", Icon: CheckCircleIcon },
      { title: "One searchable home", desc: "Notes, wikis, and processes in one place, easy to find and share as a link.", Icon: MagnifyingGlassIcon },
    ],
    workforceAngle: {
      title: "AI writes the first draft",
      desc: "Give Onita the intent and the facts and it produces a strong first draft, files it neatly, and surfaces the tasks buried inside. You bring the judgment and the finishing touch.",
    },
    useCases: [
      { audience: "Individuals", title: "Never face a blank page", desc: "Start from a solid draft to react to instead of a blinking cursor." },
      { audience: "Teams", title: "On the same page", desc: "Write proposals, briefs, and processes together with a consistent voice and structure." },
      { audience: "Operations", title: "Living documentation", desc: "SOPs and wikis that stay current, organized, and easy to find." },
    ],
    outcomes: [
      "Turn hours of writing into minutes",
      "Keep people and files linked right in the doc",
      "Pull forgotten tasks out of your notes",
    ],
    faqs: [
      { q: "Can it write in our voice?", a: "Yes. It learns your tone and templates so drafts sound like your team, not like generic AI text." },
      { q: "How do notes become tasks?", a: "Onita spots the action items inside your docs and pulls them into your task list, with the right owner where it can tell." },
      { q: "Who sets it up?", a: "Our team does. After your demo we configure it with your templates, brand voice, and knowledge sources." },
    ],
    related: ["ai-agents", "notetaker", "slides"],
  },
  {
    slug: "forms",
    name: "Form Builder",
    tab: "Form Builder",
    category: "Forms & intake",
    accent: "success",
    ogIcon: "ListChecks",
    Icon: ListChecksIcon,
    shots: [S.d, S.c],
    metaTitle: "Form Builder — Forms Where Every Answer Becomes Action",
    metaDescription:
      "Onita's Form Builder lets you create a form in seconds, and every response becomes a row, a task, or a workflow automatically — so intake turns into work in motion.",
    eyebrow: "Form Builder",
    headline: "Forms where every answer",
    headlineEmphasis: "becomes action",
    subhead:
      "Build a form in seconds and put it to work. Every response lands as a row in your data, a task for the right person, or a whole workflow — so requests turn into action instead of piling up in someone's inbox.",
    definitionTitle: "What is the Onita Form Builder?",
    definition:
      "The Onita Form Builder is a fast way to collect what you need and act on it. Describe what you're gathering and Onita assembles the form for you. Every submission flows automatically into the right place — a new row in your spreadsheet, a task with an owner, or a workflow that runs on its own — so intake becomes work in motion, not a backlog someone has to sort by hand.",
    highlights: ["Forms built in seconds", "Every answer becomes a row or task", "Routes into workflows on its own"],
    features: [
      { title: "Forms in seconds", desc: "Describe what you're collecting and Onita puts together the fields, structure, and logic for you.", Icon: MagicWandIcon },
      { title: "Answers into rows", desc: "Each response drops straight into your spreadsheet as a clean, structured row.", Icon: TableIcon },
      { title: "Answers into tasks", desc: "Turn a submission into a tracked task for the right owner the moment it lands.", Icon: CheckCircleIcon },
      { title: "Kicks off workflows", desc: "Wire a form into your workflows so a single answer starts the whole process off.", Icon: PlugsConnectedIcon },
    ],
    workforceAngle: {
      title: "Intake that acts on itself",
      desc: "A submission isn't the end of the line — it's the start of the work. Onita hands each response straight to the row, task, or workflow that resolves it, so nothing waits for someone to notice.",
    },
    useCases: [
      { audience: "Operations", title: "Requests that route themselves", desc: "Internal requests land as tracked work with the right owner, automatically." },
      { audience: "Teams", title: "Faster intake", desc: "Client and lead intake flows straight into your process with no manual sorting." },
      { audience: "HR & IT", title: "Clean every time", desc: "Onboarding, tickets, and approvals captured neatly and routed instantly." },
    ],
    outcomes: [
      "Build a form in seconds, not an afternoon",
      "Turn every submission into tracked work",
      "Stop requests dying in someone's inbox",
    ],
    faqs: [
      { q: "What happens to a response?", a: "It becomes a row in your spreadsheet, a task for the right person, or a workflow that runs on its own — the moment it's submitted." },
      { q: "Can the form change based on answers?", a: "Yes. It can show or hide questions based on earlier responses, so the form stays short and relevant." },
      { q: "Do we build the forms ourselves?", a: "No. After your demo our team sets up your forms and the routing behind them so answers flow into action from day one." },
    ],
    related: ["spreadsheet", "flow", "ai-agents"],
  },
  {
    slug: "dashboards",
    name: "Dashboards",
    tab: "Dashboards",
    category: "Reporting & analytics",
    accent: "brand",
    ogIcon: "SquaresFour",
    Icon: SquaresFourIcon,
    shots: [S.dash1, S.dash2],
    metaTitle: "Dashboards — Live Reporting Without an Analyst",
    metaDescription:
      "Onita's Dashboards give you live, interactive reports the whole team can filter, with over-time trends built in — clear answers on progress and performance, no analyst required.",
    eyebrow: "Dashboards",
    headline: "Live reporting,",
    headlineEmphasis: "no analyst required",
    subhead:
      "Stop exporting spreadsheets. Onita's Dashboards give you live, interactive views the whole team can filter — with progress, capacity, and over-time trends right there — so anyone can get the answer without waiting on a report.",
    definitionTitle: "What are Onita Dashboards?",
    definition:
      "Onita Dashboards are live, interactive reports built on your real work. They read your current data, chart it clearly, and let anyone on the team filter by date, owner, or category to answer their own question. Over-time trends show where things are heading, so reporting stops being a weekly chore and simply stays available — always current, no analyst required.",
    highlights: ["Live and always current", "Filter it yourself", "Over-time trends built in"],
    features: [
      { title: "Live in one view", desc: "Progress, capacity, and results in a single view that updates as the work does.", Icon: ChartBarIcon },
      { title: "Filter for yourself", desc: "Anyone can filter by date, owner, or category to get their own answer — no request needed.", Icon: FunnelIcon },
      { title: "See the trend", desc: "Over-time views show whether things are speeding up or slowing down at a glance.", Icon: ChartLineUpIcon },
      { title: "Delivered on schedule", desc: "The right report reaches the right people automatically, on the cadence they need.", Icon: BellRingingIcon },
    ],
    workforceAngle: {
      title: "Answers without the analyst",
      desc: "Onita builds and keeps the dashboards current so nobody spends a night in spreadsheets. The whole team self-serves the numbers, and you spend your time deciding, not compiling.",
    },
    useCases: [
      { audience: "Leadership", title: "The business at a glance", desc: "A live view of performance you can filter down the moment a question comes up." },
      { audience: "Managers", title: "No more report night", desc: "Weekly reports assemble and send themselves — no manual pulling required." },
      { audience: "Operations", title: "Spot the bottleneck", desc: "See where work piles up and rebalance before it becomes a real problem." },
    ],
    outcomes: [
      "Replace manual reporting with live dashboards",
      "Let the whole team filter for their own answers",
      "See where the numbers are heading, not just where they are",
    ],
    faqs: [
      { q: "Where do the dashboards get their data?", a: "From your work inside Onita — your spreadsheets, forms, tasks, and docs — plus anything you connect. They update in real time." },
      { q: "Can non-technical people use them?", a: "Yes. Anyone can filter by date, owner, or category to get their own answer without asking an analyst." },
      { q: "Do we build them?", a: "No. After your demo our team sets up the dashboards around the metrics and audiences that matter to your business." },
    ],
    related: ["spreadsheet", "flow", "slides"],
  },
  {
    slug: "flow",
    name: "Flow",
    tab: "Flow",
    category: "Automation",
    accent: "warning",
    ogIcon: "Lightning",
    Icon: LightningIcon,
    shots: [S.b, S.d],
    metaTitle: "Flow — Automated Workflows That Run on Their Own",
    metaDescription:
      "Onita's Flow turns 'when this happens, do that' into working automations — triggers, steps, and human approvals — so your repeatable work runs itself once you set it up.",
    eyebrow: "Flow",
    headline: "Set it once,",
    headlineEmphasis: "it runs on its own",
    subhead:
      "Describe what should happen — 'when this happens, do that' — and Onita builds the workflow. Triggers kick it off, steps do the work, and approvals pause for a human where it matters, so your repeatable jobs run themselves.",
    definitionTitle: "What is Onita Flow?",
    definition:
      "Onita Flow is workflow automation in plain language. Describe a process the way you'd explain it to a colleague and Onita turns it into a working automation with the right trigger, steps, and human approvals. Once it's set up, the routine runs on its own — a form comes in, a status changes, a schedule hits — and your team steps in only for the decisions that need a person.",
    highlights: ["When this, do that", "Triggers, steps, and approvals", "Runs itself once set up"],
    features: [
      { title: "Describe it in plain words", desc: "Explain the process the way you'd tell a colleague, and Onita builds the workflow for you.", Icon: MagicWandIcon },
      { title: "Triggers and steps", desc: "Kick off from a form, a status change, a schedule, or an event, then run every step end to end.", Icon: LightningIcon },
      { title: "Approvals built in", desc: "Add a human sign-off on sensitive steps so nothing risky runs without a check.", Icon: GitBranchIcon },
      { title: "Runs on its own", desc: "Handoffs, reminders, and follow-ups happen automatically instead of by nudge.", Icon: ArrowsClockwiseIcon },
    ],
    workforceAngle: {
      title: "Your processes, running without you",
      desc: "Flow captures how your best people work and makes it repeatable. The routine runs itself, and your team only steps in for the calls that genuinely need a human.",
    },
    useCases: [
      { audience: "Operations", title: "Standardize everything", desc: "Turn the steps living in people's heads into workflows that run the same way every time." },
      { audience: "Teams", title: "Kill the busywork", desc: "Approvals, handoffs, and follow-ups happen on their own instead of by reminder." },
      { audience: "Finance & HR", title: "Controlled by design", desc: "Bake approvals and a clear trail into every sensitive process." },
    ],
    outcomes: [
      "Automate a process without building a flowchart",
      "Make your best practices run every single time",
      "Keep approvals and control right where you need them",
    ],
    faqs: [
      { q: "Do I need to know how to build automations?", a: "No. Describe the process in plain language and Onita builds the workflow for you." },
      { q: "Can a human still approve steps?", a: "Yes. You choose which steps need sign-off, and the workflow pauses for approval before it continues." },
      { q: "Who builds our workflows?", a: "Our team does the initial build after your demo, mapping your real processes into Onita so they run reliably from day one." },
    ],
    related: ["ai-agents", "forms", "approvals"],
  },
  {
    slug: "email",
    name: "Email",
    tab: "Email",
    category: "Email",
    accent: "accent",
    ogIcon: "ChatCircleText",
    Icon: EnvelopeSimpleIcon,
    shots: [S.email1, S.email2],
    metaTitle: "Email — One Smart Inbox for Gmail, Outlook & Zoho",
    metaDescription:
      "Onita's Email brings Gmail, Outlook, and Zoho into one inbox, with AI to sort, draft, and reply — and turn any message into a task or a record.",
    eyebrow: "Email",
    headline: "One inbox that",
    headlineEmphasis: "works for you",
    subhead:
      "Bring Gmail, Outlook, and Zoho into a single inbox. Onita sorts what matters, drafts replies in your voice, and turns any message into a task or a record — so your inbox stops being a to-do list you dread.",
    definitionTitle: "What is Onita Email?",
    definition:
      "Onita Email is a connected inbox that unifies your Gmail, Outlook, and Zoho mail in one place. AI sorts your messages so the important ones rise to the top, drafts and sends replies in your voice, and links email to the rest of your work — turning a message into a task, a record, or a triggered workflow without ever leaving the inbox.",
    highlights: ["Gmail, Outlook & Zoho in one inbox", "AI sorts, drafts, and replies", "Emails become tasks and records"],
    features: [
      { title: "One unified inbox", desc: "Connect Gmail, Outlook, and Zoho and work from a single, organized inbox.", Icon: EnvelopeSimpleIcon },
      { title: "Sorted for you", desc: "AI surfaces what needs you and quiets what doesn't, so nothing important slips.", Icon: FunnelIcon },
      { title: "Drafts in your voice", desc: "Reply in your tone and clear routine mail in a click — always under your review.", Icon: SparkleIcon },
      { title: "Email into action", desc: "Turn a message into a task or a record, wired into the rest of your workspace.", Icon: ArrowsClockwiseIcon },
    ],
    workforceAngle: {
      title: "Your inbox, handled",
      desc: "Email doesn't just show your mail — it sorts, drafts, and connects it to your work, so the inbox becomes a starting point for getting things done instead of another chore.",
    },
    useCases: [
      { audience: "Individuals", title: "Inbox zero, for real", desc: "AI sorts and drafts so you clear mail in minutes, not hours." },
      { audience: "Sales & client teams", title: "Nothing slips", desc: "Client emails become tracked tasks and follow-ups automatically." },
      { audience: "Operations", title: "Mail that triggers work", desc: "Turn inbound messages into records and workflows without copy-paste." },
    ],
    outcomes: [
      "Work Gmail, Outlook, and Zoho from one inbox",
      "Let AI sort and draft your mail",
      "Turn emails into tasks and records automatically",
    ],
    faqs: [
      { q: "Which email providers does it support?", a: "Gmail, Outlook, and Zoho Mail — all unified into one inbox inside Onita." },
      { q: "Can it draft replies in my voice?", a: "Yes. It drafts responses in your tone and can clear routine messages in a click, always under your review." },
      { q: "Who sets it up?", a: "Our team connects your mailboxes and configures the sorting and routing after your demo." },
    ],
    related: ["calendar", "ai-agents", "notetaker"],
  },
  {
    slug: "calendar",
    name: "Calendar",
    tab: "Calendar",
    category: "Calendar & scheduling",
    accent: "brand",
    ogIcon: "CalendarDots",
    Icon: CalendarDotsIcon,
    shots: [S.cal1, S.f],
    metaTitle: "Calendar — All Your Calendars in One AI-Managed View",
    metaDescription:
      "Onita's Calendar combines your calendars into one view and lets AI schedule, reschedule, and protect your focus time — so your days plan themselves.",
    eyebrow: "Calendar",
    headline: "All your calendars,",
    headlineEmphasis: "one smart view",
    subhead:
      "Bring every calendar — work and personal — into one place, then let AI run it. Onita schedules and reschedules for you, defends your focus time, and keeps your day sensible so you never double-book again.",
    definitionTitle: "What is Onita Calendar?",
    definition:
      "Onita Calendar combines all your calendars into a single view and puts AI in charge of the busywork. It schedules and reschedules meetings and focus blocks around your priorities, reflows your day when something moves, and protects the time you need to do deep work — so instead of playing calendar tetris, you just show up to the right thing next.",
    highlights: ["Every calendar in one view", "AI schedules and reschedules", "Focus time protected"],
    features: [
      { title: "All calendars combined", desc: "Merge your work and personal calendars into one view so you never double-book.", Icon: CalendarDotsIcon },
      { title: "AI schedules for you", desc: "Onita places meetings and tasks in the right slots around your priorities, on its own.", Icon: SparkleIcon },
      { title: "Reschedules automatically", desc: "When something moves, your whole day reflows to stay sensible — no manual shuffling.", Icon: ArrowsClockwiseIcon },
      { title: "Protects your focus", desc: "Deep-work time is defended so meetings don't quietly eat your whole day.", Icon: ShieldCheckIcon },
    ],
    workforceAngle: {
      title: "A schedule that manages itself",
      desc: "Rather than hand-arranging your week, you let Onita keep the day optimized around what matters all day long. You just show up to the right thing next.",
    },
    useCases: [
      { audience: "Individuals", title: "A day that makes sense", desc: "Wake up to a planned day with your focus time already protected." },
      { audience: "Teams", title: "Effortless coordination", desc: "Keep everyone's time aligned to priorities without the constant back-and-forth." },
      { audience: "Leaders", title: "Time on what matters", desc: "Your calendar reflects priorities, not just whoever booked first." },
    ],
    outcomes: [
      "See every calendar in one place",
      "Let AI plan and reshuffle your day",
      "Protect focus time even when plans change",
    ],
    faqs: [
      { q: "Does it connect to my existing calendars?", a: "Yes. Onita brings your work and personal calendars together and manages them intelligently in one view." },
      { q: "How does it decide my day?", a: "It uses your priorities, deadlines, and working preferences to place the right thing in the right slot, reshuffling as things change." },
      { q: "Who configures it?", a: "We do. After your demo we set it up with your working hours, focus preferences, and scheduling rules." },
    ],
    related: ["bookings", "notetaker", "email"],
  },
  {
    slug: "notetaker",
    name: "AI Meeting Notetaker",
    tab: "AI Meeting Notetaker",
    category: "Meetings",
    accent: "accent",
    ogIcon: "Sparkle",
    Icon: NotePencilIcon,
    shots: [S.d, S.e],
    metaTitle: "AI Meeting Notetaker — Notes, Recaps & Follow-Ups, Handled",
    metaDescription:
      "Onita joins your calls, writes the notes and summary, emails everyone the recap, and turns action items into tasks — so every meeting keeps working after it ends.",
    eyebrow: "AI Meeting Notetaker",
    headline: "Notes, recaps, and follow-ups,",
    headlineEmphasis: "handled",
    subhead:
      "Show up and be present. Onita joins your calls, takes clean notes and a summary, emails everyone the recap, and turns the action items into tasks for the right people — so the meeting keeps working long after it ends.",
    definitionTitle: "What is the AI Meeting Notetaker?",
    definition:
      "The AI Meeting Notetaker joins your meetings and does the write-up for you. It captures the conversation, produces clean notes with the decisions and action items, and emails everyone the recap. Notes and transcripts become searchable docs automatically, and every action item becomes a tracked task — so nobody plays secretary and nothing said in the room gets lost.",
    highlights: ["Clean notes and a summary", "Recap emailed to everyone", "Action items become tasks"],
    features: [
      { title: "Joins and takes notes", desc: "Onita sits in on the call and writes the notes, so you can focus on the conversation, not your keyboard.", Icon: NotePencilIcon },
      { title: "Recap sent for you", desc: "Everyone gets the summary, decisions, and next steps by email right after the call.", Icon: SparkleIcon },
      { title: "Action items become tasks", desc: "Follow-ups turn into tracked tasks with owners — no re-typing your notes into a list.", Icon: CheckCircleIcon },
      { title: "Searchable afterward", desc: "Notes and transcripts become docs you can search, so you can find any moment later.", Icon: MagnifyingGlassIcon },
    ],
    workforceAngle: {
      title: "The meeting keeps working after it ends",
      desc: "Onita doesn't just record — it turns talk into action. Decisions become tasks, notes become docs, and the follow-through happens without anyone chasing it down.",
    },
    useCases: [
      { audience: "Individuals", title: "Be fully present", desc: "Stop splitting attention between listening and scribbling notes." },
      { audience: "Teams", title: "Aligned after every call", desc: "Everyone leaves with the same summary and the same action items." },
      { audience: "Sales & client teams", title: "Perfect recall", desc: "Every client conversation captured, searchable, and turned into next steps." },
    ],
    outcomes: [
      "Never take manual meeting notes again",
      "Give everyone a perfect recap in seconds",
      "Turn every decision into a tracked follow-up",
    ],
    faqs: [
      { q: "Which meetings does it work with?", a: "Your video calls — Onita joins, captures the conversation, and produces notes, a recap, and action items." },
      { q: "How do action items get tracked?", a: "They flow straight into your tasks with the right owner, so following up happens on its own." },
      { q: "Can I still take my own notes?", a: "Yes. Your notes are combined with Onita's, so nothing you jotted down is lost." },
    ],
    related: ["calendar", "bookings", "docs"],
  },
  {
    slug: "bookings",
    name: "Bookings",
    tab: "Bookings",
    category: "Scheduling",
    accent: "success",
    ogIcon: "CalendarCheck",
    Icon: CalendarCheckIcon,
    shots: [S.f, S.d],
    metaTitle: "Bookings — Share a Link, Let People Book Your Real Time",
    metaDescription:
      "Onita's Bookings gives you Calendly-style share-a-link scheduling built in — invitees pick from your real availability, and the meeting books itself.",
    eyebrow: "Bookings",
    headline: "Share a link,",
    headlineEmphasis: "skip the back-and-forth",
    subhead:
      "Stop trading emails to find a time. Share a booking link and let people grab a slot from your real availability — the meeting books itself, adds itself to your day, and everyone gets the invite.",
    definitionTitle: "What is Onita Bookings?",
    definition:
      "Onita Bookings is share-a-link scheduling built right in — the Calendly-style page your invitees use to book time with you. It draws availability from your real calendars so nobody can double-book you, handles the invites automatically, and drops the meeting straight into your day. One link replaces a whole email thread.",
    highlights: ["A booking link of your own", "Real availability, no double-booking", "Invites handled for you"],
    features: [
      { title: "Booking pages in seconds", desc: "Share a link and let people pick a slot — Onita creates the page and sends the invites.", Icon: CalendarCheckIcon },
      { title: "Your real availability", desc: "Slots come from all your calendars at once, so you're never double-booked.", Icon: UsersThreeIcon },
      { title: "Books itself", desc: "A chosen slot lands on your calendar with the invite sent — no manual step.", Icon: ArrowsClockwiseIcon },
      { title: "Protects your time", desc: "Onita keeps bookings inside the windows you set so meetings don't overrun your day.", Icon: ShieldCheckIcon },
    ],
    workforceAngle: {
      title: "Scheduling that runs itself",
      desc: "No coordinator, no email ping-pong. People pick a time from your real availability, Onita books it, and it slots into a day that's already arranged around your priorities.",
    },
    useCases: [
      { audience: "Individuals", title: "One link, done", desc: "Send a booking link instead of trading five emails to find a time." },
      { audience: "Sales & client teams", title: "Faster booking", desc: "Let prospects and clients book against your real availability, day or night." },
      { audience: "Recruiting", title: "Interviews on autopilot", desc: "Candidates self-schedule into open slots without a coordinator in the loop." },
    ],
    outcomes: [
      "Book meetings without the back-and-forth",
      "Never get double-booked across calendars",
      "Let people self-schedule any time of day",
    ],
    faqs: [
      { q: "How is this different from the Calendar?", a: "The Calendar plans your own day; Bookings is the share-a-link page others use to book time with you. They work together." },
      { q: "Can people self-schedule with me?", a: "Yes. Share your booking page and invitees pick from your real availability, with the meeting booked automatically." },
      { q: "Who sets it up?", a: "Our team configures it after your demo, connected to your calendars and your scheduling preferences." },
    ],
    related: ["calendar", "notetaker", "email"],
  },
  {
    slug: "approvals",
    name: "Approvals",
    tab: "Approvals",
    category: "Control & trust",
    accent: "info",
    ogIcon: "ShieldCheck",
    Icon: ShieldCheckIcon,
    shots: [S.e, S.c],
    metaTitle: "Approvals — The Human-in-the-Loop Safety Net for AI",
    metaDescription:
      "Onita's Approvals are the safety net for AI at work: anything it can't undo — send, spend, publish, delete — waits for your one-tap yes. Edit before it sends, undo anything, full audit trail.",
    eyebrow: "Approvals",
    headline: "AI you can trust,",
    headlineEmphasis: "because you're in control",
    subhead:
      "Let your AI move fast on the safe stuff, and keep the final say on the rest. Anything it can't undo — a send, a payment, a publish, a delete — waits for your one-tap yes. Edit it before it goes, undo anything, and see every step.",
    definitionTitle: "What are Onita Approvals?",
    definition:
      "Approvals are Onita's human-in-the-loop safety net for AI at work. Your agents handle the safe, reversible work on their own, but anything that can't be taken back — sending an email, spending money, publishing, deleting — pauses for your one-tap approval. You can edit the draft before it sends, undo anything after the fact, and review a full trail of who did what. It's how you get the speed of AI without ever losing control.",
    highlights: ["One-tap yes on risky actions", "Edit before it sends", "Undo anything, full trail"],
    features: [
      { title: "Nothing risky without you", desc: "Sends, payments, publishes, and deletes all wait for your one-tap approval first.", Icon: ShieldCheckIcon },
      { title: "Edit before it goes", desc: "Tweak the email or the draft in the approval itself, then send exactly what you meant.", Icon: PencilSimpleIcon },
      { title: "Undo anything", desc: "Change your mind after the fact — actions are reversible, so a mistake is never final.", Icon: ArrowUUpLeftIcon },
      { title: "Full audit trail", desc: "See who did what and when, with a clear record of every action for peace of mind.", Icon: ClipboardIcon },
    ],
    workforceAngle: {
      title: "Speed with a seatbelt",
      desc: "Approvals let your AI teammates work at full speed on everything safe while you keep the final call on anything that matters — so you get the output without the worry.",
    },
    useCases: [
      { audience: "Leadership", title: "Confidence to say yes", desc: "Roll out AI knowing nothing irreversible happens without a human check." },
      { audience: "Finance", title: "Money stays gated", desc: "Every payment or spend waits for approval, with a clear record behind it." },
      { audience: "Operations", title: "Guardrails by default", desc: "Outbound sends and deletes pause for review, so mistakes never quietly ship." },
    ],
    outcomes: [
      "Let AI move fast without losing control",
      "Catch and edit anything before it goes out",
      "Undo mistakes and see a full trail of every action",
    ],
    faqs: [
      { q: "What kinds of actions need approval?", a: "Anything the AI can't take back — sending an email, spending money, publishing, or deleting. The safe, reversible work happens on its own." },
      { q: "Can I change something before it sends?", a: "Yes. You can edit the draft right in the approval, so what goes out is exactly what you meant." },
      { q: "Who sets up the approval rules?", a: "Our team does, after your demo — we tune what needs sign-off and who approves it around how your business works." },
    ],
    related: ["ai-agents", "flow", "email"],
  },
];

export const menuProductSlugs = [
  "spreadsheet",
  "ai-agents",
  "slides",
  "docs",
  "forms",
  "dashboards",
  "flow",
  "email",
  "calendar",
  "notetaker",
  "bookings",
  "approvals",
] as const;

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

export const productIcons = { StackIcon, ClipboardTextIcon, LinkIcon };
