import type { Icon } from "@phosphor-icons/react";
import type { Accent } from "@/lib/products";
import type { OgIconName } from "@/lib/og-icons";
import {
  KanbanIcon,
  RocketLaunchIcon,
  GearSixIcon,
  HeadsetIcon,
  TrendUpIcon,
  AddressBookIcon,
  MegaphoneIcon,
  HandHeartIcon,
  UsersThreeIcon,
  CalculatorIcon,
  CheckCircleIcon,
  BooksIcon,
  BrainIcon,
  PlugsConnectedIcon,
  ShieldCheckIcon,
  RobotIcon,
  LightningIcon,
  ClockCountdownIcon,
  ChartLineUpIcon,
  MagicWandIcon,
  FunnelIcon,
  FileTextIcon,
  GitBranchIcon,
  BellRingingIcon,
  ArrowsClockwiseIcon,
  GaugeIcon,
  MagnifyingGlassIcon,
  NotePencilIcon,
} from "@phosphor-icons/react/dist/ssr";

export type ComparisonRow = { old: string; onita: string };
export type Pillar = { title: string; desc: string; Icon: Icon };
export type WorkflowStep = { agent: string; action: string };
export type SolutionFeature = { title: string; desc: string; Icon: Icon };
export type SolutionMetric = { value: string; label: string };
export type SolutionFaq = { q: string; a: string };

export type Solution = {
  slug: string;
  name: string;
  group: string;
  accent: Accent;
  Icon: Icon;
  ogIcon: OgIconName;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  subhead: string;
  summary: string;
  comparison: ComparisonRow[];
  pillars: Pillar[];
  workflow: { title: string; steps: WorkflowStep[] };
  features: SolutionFeature[];
  agents: string[];
  metrics: SolutionMetric[];
  story: { quote: string; name: string; role: string };
  faqs: SolutionFaq[];
  related: string[];
};

export const solutions: Solution[] = [
  {
    slug: "project-management",
    name: "Project Management",
    group: "Operations & delivery",
    accent: "brand",
    Icon: KanbanIcon,
    ogIcon: "Kanban",
    metaTitle: "AI Project Management Software for Growing Teams",
    metaDescription:
      "Plan, assign, and deliver projects with an AI workforce that tracks progress, updates timelines, and chases blockers for you. Onita runs project management so your team ships.",
    eyebrow: "Project management",
    headline: "Every project delivered,",
    headlineEmphasis: "without the chasing",
    subhead:
      "Onita gives your delivery team AI project managers that assign work, keep timelines honest, flag risk early, and chase updates — so your people focus on the work, not the wrangling.",
    summary:
      "AI project management with Onita is a managed setup where AI agents run the coordination layer of your projects — planning, assigning, tracking, and reporting — alongside your team, so nothing stalls between status meetings.",
    comparison: [
      { old: "Status updates gathered by hand in weekly meetings", onita: "Progress rolls up live as work gets done" },
      { old: "Timelines go stale the moment scope shifts", onita: "Plans reschedule themselves as tasks move" },
      { old: "Blockers surface too late, after a deadline slips", onita: "Agents flag risk the moment it appears" },
      { old: "Managers spend their day chasing people for updates", onita: "Agents chase, summarize, and escalate for you" },
    ],
    pillars: [
      { title: "Plans that maintain themselves", desc: "Tasks, dependencies, and milestones stay current automatically as your team and agents complete work.", Icon: ArrowsClockwiseIcon },
      { title: "Risk you see coming", desc: "Agents watch the critical path and raise a flag while there's still time to act — not after the deadline.", Icon: BellRingingIcon },
      { title: "Reporting without the rollup", desc: "Client and leadership updates assemble themselves from live project data, ready to send.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "How a project runs itself",
      steps: [
        { agent: "Intake", action: "A brief or request comes in and becomes a scoped project" },
        { agent: "PM Agent", action: "Breaks work into tasks, sets dependencies, assigns owners" },
        { agent: "Delivery team", action: "Does the work while the plan tracks progress live" },
        { agent: "Risk Agent", action: "Flags a slipping milestone and proposes a reschedule" },
        { agent: "Manager", action: "Approves the plan change in one click" },
        { agent: "Report Agent", action: "Sends the client a clean status update" },
      ],
    },
    features: [
      { title: "Auto-assigned tasks", desc: "Agents break a brief into tasks and route each to the right owner with the context attached.", Icon: KanbanIcon },
      { title: "Self-updating timelines", desc: "Gantt views and deadlines shift automatically as work moves, so the plan is never a fiction.", Icon: ClockCountdownIcon },
      { title: "Blocker detection", desc: "An agent notices when a task stalls and nudges the owner or escalates before it costs you a deadline.", Icon: MagnifyingGlassIcon },
      { title: "One-click status", desc: "Client-ready and leadership updates generate from the real state of the work — no manual rollup.", Icon: FileTextIcon },
    ],
    agents: ["Project Manager Agent", "Risk Agent", "Report Agent"],
    metrics: [
      { value: "3x", label: "more projects per manager" },
      { value: "0", label: "manual status meetings" },
      { value: "90%", label: "of updates automated" },
    ],
    story: {
      quote:
        "Our project managers stopped spending Fridays building status decks. Onita's agents keep the plan current and write the client update — we just approve it.",
      name: "Amara Okafor",
      role: "COO, Northwind Group",
    },
    faqs: [
      { q: "Does Onita replace tools like Asana or ClickUp?", a: "Yes — Onita gives you boards, timelines, and tasks in one workspace, plus an AI workforce that actually runs the coordination instead of just displaying it." },
      { q: "Can agents assign work to people?", a: "Yes. Agents break down briefs, assign tasks with context, and chase owners — while you keep approval over anything sensitive." },
      { q: "How do timelines stay accurate?", a: "The plan is tied to the real work. As tasks complete or slip, dependencies and dates update automatically and agents flag risk." },
      { q: "Do we have to set it up ourselves?", a: "No. After your demo, our team designs and builds your project workflows around how your business delivers, then runs them for you." },
    ],
    related: ["operations", "product-development", "task-management"],
  },
  {
    slug: "product-development",
    name: "Product Development",
    group: "Operations & delivery",
    accent: "info",
    Icon: RocketLaunchIcon,
    ogIcon: "RocketLaunch",
    metaTitle: "AI for Product Development & Delivery Teams",
    metaDescription:
      "Ship faster with an AI workforce that turns research into specs, tracks the roadmap, drafts release notes, and keeps every stakeholder in sync. Onita runs the busywork of building.",
    eyebrow: "Product development",
    headline: "Ship more,",
    headlineEmphasis: "with the same team",
    subhead:
      "Onita gives product teams AI teammates that turn customer signal into specs, keep the roadmap honest, and handle the reporting — so your builders spend their time building.",
    summary:
      "Product development with Onita means AI agents handle the connective work around building — synthesizing research, drafting specs and release notes, and keeping the roadmap and stakeholders current — while your team focuses on shipping.",
    comparison: [
      { old: "Customer feedback scattered across tools and inboxes", onita: "Signal synthesized into themes automatically" },
      { old: "Specs and PRDs written from a blank page", onita: "First-draft specs generated from research" },
      { old: "Roadmap decks rebuilt for every stakeholder", onita: "Live roadmap views assemble themselves" },
      { old: "Release notes written the night before launch", onita: "Notes drafted from the work that shipped" },
    ],
    pillars: [
      { title: "Signal into specs", desc: "Agents cluster feedback, tickets, and calls into themes and turn them into structured first-draft specs.", Icon: MagnifyingGlassIcon },
      { title: "A roadmap that stays true", desc: "Priorities, status, and dates update from the real work, so every stakeholder sees the same current picture.", Icon: ChartLineUpIcon },
      { title: "Launch on autopilot", desc: "Release notes, changelogs, and stakeholder updates draft themselves from what actually shipped.", Icon: RocketLaunchIcon },
    ],
    workflow: {
      title: "From insight to launch",
      steps: [
        { agent: "Research Agent", action: "Clusters feedback and support tickets into themes" },
        { agent: "Spec Agent", action: "Drafts a PRD with problem, scope, and success metrics" },
        { agent: "Product lead", action: "Refines and approves the spec" },
        { agent: "PM Agent", action: "Turns the spec into a tracked, sequenced roadmap" },
        { agent: "Release Agent", action: "Drafts release notes from what shipped" },
      ],
    },
    features: [
      { title: "Feedback synthesis", desc: "Agents turn scattered customer signal into ranked themes so you build what matters most.", Icon: MagnifyingGlassIcon },
      { title: "Draft specs & PRDs", desc: "Structured first drafts grounded in your research and past docs — your team edits instead of starting cold.", Icon: NotePencilIcon },
      { title: "Living roadmap", desc: "One roadmap that updates itself and renders a clean view for engineering, sales, or the board.", Icon: ChartLineUpIcon },
      { title: "Auto release notes", desc: "Changelogs and launch updates generate from the work that shipped, on brand and on time.", Icon: FileTextIcon },
    ],
    agents: ["Research Agent", "Spec Agent", "Release Agent"],
    metrics: [
      { value: "2x", label: "faster spec to ship" },
      { value: "100%", label: "of feedback triaged" },
      { value: "1 day", label: "saved per launch" },
    ],
    story: {
      quote:
        "We turned a mountain of feedback into a prioritized roadmap in an afternoon. The agents draft the specs and release notes — the team just builds.",
      name: "Priya Nair",
      role: "Head of Product, Loop & Co.",
    },
    faqs: [
      { q: "Can Onita write specs for us?", a: "Agents draft structured specs and PRDs grounded in your research and past documents. Your product leads refine and approve — no blank pages." },
      { q: "Does it connect to our feedback sources?", a: "Yes. We connect your support, sales, and research inputs during setup so agents can synthesize signal into themes automatically." },
      { q: "Will the roadmap stay in sync?", a: "The roadmap is tied to the real work, so status and dates update themselves and every stakeholder sees one current view." },
      { q: "Who sets this up?", a: "We do. Our team designs and runs your product workflows end to end after your demo." },
    ],
    related: ["project-management", "marketing", "knowledge-base"],
  },
  {
    slug: "operations",
    name: "Operations",
    group: "Operations & delivery",
    accent: "success",
    Icon: GearSixIcon,
    ogIcon: "Gear",
    metaTitle: "AI for Operations & Admin Teams",
    metaDescription:
      "Automate the recurring work that runs your business — intake, approvals, reporting, and handoffs — with an AI workforce Onita builds and runs for you.",
    eyebrow: "Operations",
    headline: "Run the business,",
    headlineEmphasis: "not the busywork",
    subhead:
      "Onita gives your operations team AI agents that handle intake, approvals, reporting, and the hundred handoffs that keep a company moving — reliably, and with a human in the loop where it counts.",
    summary:
      "Operations with Onita is a managed AI workforce that runs your repeatable back-office processes — intake, routing, approvals, and reporting — end to end, escalating to a person only where judgment is required.",
    comparison: [
      { old: "Requests lost in inboxes and chat threads", onita: "Every request captured and routed instantly" },
      { old: "Approvals stall waiting on the right person", onita: "Agents route and remind until it's signed off" },
      { old: "Reports compiled by hand every week", onita: "Operational reports build themselves" },
      { old: "Processes live in someone's head", onita: "Processes run as reliable, auditable workflows" },
    ],
    pillars: [
      { title: "Intake that self-triages", desc: "Every request becomes structured work an agent categorizes, enriches, and routes to the right owner.", Icon: FunnelIcon },
      { title: "Approvals that keep moving", desc: "Agents route requests, chase sign-off, and enforce your rules, with humans gating what matters.", Icon: ShieldCheckIcon },
      { title: "Reporting on autopilot", desc: "Utilization, spend, and process health compile themselves into the views leadership needs.", Icon: GaugeIcon },
    ],
    workflow: {
      title: "How a request becomes done",
      steps: [
        { agent: "Form", action: "A request is submitted and captured as structured data" },
        { agent: "Ops Agent", action: "Triages, enriches, and routes it to the right process" },
        { agent: "Approver", action: "Signs off on anything sensitive in one click" },
        { agent: "Task Agent", action: "Executes the steps and updates the record" },
        { agent: "Report Agent", action: "Logs the outcome and rolls it into reporting" },
      ],
    },
    features: [
      { title: "Smart intake", desc: "Forms and requests route straight into workflows agents act on — nothing waits in a queue.", Icon: FunnelIcon },
      { title: "Approval workflows", desc: "Human-in-the-loop gates keep control while agents handle the routing and chasing around them.", Icon: ShieldCheckIcon },
      { title: "Process automation", desc: "Wire recurring processes once; agents run them every time, with a full audit trail.", Icon: LightningIcon },
      { title: "Live ops reporting", desc: "Leadership dashboards stay current without anyone compiling a weekly spreadsheet.", Icon: GaugeIcon },
    ],
    agents: ["Operations Agent", "Approval Agent", "Report Agent"],
    metrics: [
      { value: "40+", label: "hours saved weekly" },
      { value: "100%", label: "of requests tracked" },
      { value: "24/7", label: "processes running" },
    ],
    story: {
      quote:
        "Reporting and intake used to swallow our team's week. The agents draft it, we approve it, and everyone's back to work that actually moves the business.",
      name: "David Okonkwo",
      role: "Operations Lead, Vale & Co.",
    },
    faqs: [
      { q: "What kinds of processes can Onita run?", a: "Intake, routing, approvals, onboarding, billing prep, reporting — any recurring process with clear steps. We build yours around how your business already works." },
      { q: "Do humans stay in control?", a: "Always. You decide where approval gates sit, and agents never take sensitive actions without the sign-off you require." },
      { q: "Is there an audit trail?", a: "Yes. Every action an agent takes is logged, so you have a complete, reviewable record of what happened and why." },
      { q: "How fast can we go live?", a: "Most operations workflows are live within a couple of weeks. We design, build, and host them for you after your demo." },
    ],
    related: ["project-management", "accounting", "it"],
  },
  {
    slug: "it",
    name: "IT & Support",
    group: "Operations & delivery",
    accent: "info",
    Icon: HeadsetIcon,
    ogIcon: "Headset",
    metaTitle: "AI for IT & Internal Support Teams",
    metaDescription:
      "Resolve tickets faster with an AI workforce that triages requests, answers common questions from your knowledge base, and handles routine IT tasks — with humans on the hard cases.",
    eyebrow: "IT & support",
    headline: "Support that scales,",
    headlineEmphasis: "without the queue",
    subhead:
      "Onita gives your IT and internal-support team AI agents that triage every ticket, resolve the routine ones from your own knowledge, and hand the rest to a person with the context already gathered.",
    summary:
      "IT and support with Onita is an AI workforce that handles the front line of internal requests — triaging, answering from your knowledge base, and automating routine fixes — so your specialists spend time only on the cases that need them.",
    comparison: [
      { old: "Tickets pile up in a shared queue", onita: "Every ticket triaged and routed on arrival" },
      { old: "The same questions answered over and over", onita: "Routine requests resolved from your knowledge" },
      { old: "Context gathered from scratch on every escalation", onita: "Agents hand off with the full picture attached" },
      { old: "After-hours requests wait until morning", onita: "Agents respond around the clock" },
    ],
    pillars: [
      { title: "Instant triage", desc: "Every request is categorized, prioritized, and routed the moment it lands — no manual sorting.", Icon: FunnelIcon },
      { title: "Answers from your knowledge", desc: "Agents resolve common questions and how-tos straight from your own documented knowledge base.", Icon: BooksIcon },
      { title: "Warm handoffs", desc: "When a human is needed, the agent hands over with history, context, and a suggested next step.", Icon: HandHeartIcon },
    ],
    workflow: {
      title: "A ticket, resolved",
      steps: [
        { agent: "Request", action: "Someone submits an IT or internal-support ticket" },
        { agent: "Triage Agent", action: "Classifies, prioritizes, and checks the knowledge base" },
        { agent: "Support Agent", action: "Resolves routine issues and confirms with the requester" },
        { agent: "Specialist", action: "Takes complex cases, context already gathered" },
        { agent: "Knowledge Agent", action: "Turns the resolution into a reusable answer" },
      ],
    },
    features: [
      { title: "Auto-triage", desc: "Requests are classified and routed instantly, so nothing sits unassigned in a queue.", Icon: FunnelIcon },
      { title: "Self-serve resolution", desc: "Agents answer common questions from your knowledge, deflecting routine tickets entirely.", Icon: BooksIcon },
      { title: "Routine task automation", desc: "Access requests, resets, and provisioning run as workflows with approval where you need it.", Icon: LightningIcon },
      { title: "Knowledge that grows", desc: "Every resolved case becomes a documented answer, so the system gets smarter over time.", Icon: BrainIcon },
    ],
    agents: ["Triage Agent", "Support Agent", "Knowledge Agent"],
    metrics: [
      { value: "70%", label: "of tickets auto-resolved" },
      { value: "5x", label: "faster first response" },
      { value: "24/7", label: "coverage" },
    ],
    story: {
      quote:
        "Our internal support queue used to be a bottleneck. Now agents clear the routine tickets instantly and our specialists only see the ones that truly need them.",
      name: "Tunde Balogun",
      role: "IT Manager, Meridian",
    },
    faqs: [
      { q: "Can agents answer from our own documentation?", a: "Yes. We connect your knowledge base so agents resolve requests using your real, approved answers — not generic ones." },
      { q: "What happens with complex issues?", a: "Agents handle the routine work and escalate anything complex to a specialist, handing over full context and a suggested next step." },
      { q: "Can it automate routine IT tasks?", a: "Yes — access requests, provisioning, and resets can run as workflows, with approval gates wherever you require them." },
      { q: "Is it secure?", a: "Agents operate within scoped permissions, every action is logged, and sensitive steps require human approval." },
    ],
    related: ["operations", "knowledge-base", "customer-success"],
  },
  {
    slug: "sales",
    name: "Sales",
    group: "Sales & marketing",
    accent: "accent",
    Icon: TrendUpIcon,
    ogIcon: "TrendUp",
    metaTitle: "AI for Sales Teams — Sell More Without More Reps",
    metaDescription:
      "Give your sales team an AI workforce that researches prospects, drafts outreach and proposals, keeps the CRM clean, and never lets a follow-up slip. Built and run by Onita.",
    eyebrow: "Sales",
    headline: "More pipeline,",
    headlineEmphasis: "not more reps",
    subhead:
      "Onita gives your sales team AI agents that research every prospect, draft the outreach and proposals, log the CRM, and chase every follow-up — so your reps spend their time in conversations, not admin.",
    summary:
      "Sales with Onita is an AI workforce that removes the admin from selling — researching accounts, drafting personalized outreach and proposals, updating the CRM, and following up — so your reps focus on relationships and revenue.",
    comparison: [
      { old: "Reps spend half their day on CRM admin", onita: "Agents log and enrich records automatically" },
      { old: "Follow-ups slip through the cracks", onita: "Every follow-up tracked and drafted for you" },
      { old: "Generic outreach that gets ignored", onita: "Personalized outreach from real research" },
      { old: "Proposals take days to assemble", onita: "First-draft proposals ready in minutes" },
    ],
    pillars: [
      { title: "Research on every account", desc: "Agents brief your reps on each prospect — company, context, and angle — before the first touch.", Icon: MagnifyingGlassIcon },
      { title: "Outreach that sounds like you", desc: "Personalized sequences and replies drafted from real signal, in your voice, ready to send.", Icon: NotePencilIcon },
      { title: "A CRM that stays clean", desc: "Agents log activity, update stages, and enrich records, so your pipeline is always accurate.", Icon: AddressBookIcon },
    ],
    workflow: {
      title: "From lead to closed",
      steps: [
        { agent: "Lead", action: "A new lead arrives and is qualified automatically" },
        { agent: "Research Agent", action: "Builds a briefing on the account and contact" },
        { agent: "SDR Agent", action: "Drafts personalized outreach for the rep to send" },
        { agent: "Rep", action: "Runs the conversation and moves the deal" },
        { agent: "Proposal Agent", action: "Assembles a tailored proposal from live data" },
        { agent: "CRM Agent", action: "Logs everything and schedules the next follow-up" },
      ],
    },
    features: [
      { title: "Account research", desc: "Every prospect comes with a briefing so reps walk in informed, not cold.", Icon: MagnifyingGlassIcon },
      { title: "Drafted outreach", desc: "Personalized sequences and replies your reps approve and send in seconds.", Icon: NotePencilIcon },
      { title: "Auto proposals", desc: "Tailored proposals assemble from your templates and live pricing, ready to review.", Icon: FileTextIcon },
      { title: "Follow-up that never slips", desc: "Agents track every commitment and surface the next step at the right time.", Icon: BellRingingIcon },
    ],
    agents: ["Research Agent", "SDR Agent", "Proposal Agent", "CRM Agent"],
    metrics: [
      { value: "2x", label: "more selling time" },
      { value: "60%", label: "less CRM admin" },
      { value: "0", label: "dropped follow-ups" },
    ],
    story: {
      quote:
        "My reps get a full briefing and a drafted email before every call. Proposals that took two days go out the same afternoon. We closed more with the same team.",
      name: "Chidi Eze",
      role: "VP Sales, Vertex",
    },
    faqs: [
      { q: "Does Onita replace our CRM?", a: "Onita gives you a CRM plus the AI workforce to keep it clean — logging activity, updating stages, and enriching records so your pipeline is always accurate." },
      { q: "Will outreach feel generic?", a: "No. Agents draft from real research and your voice, so every message is personalized. Your reps review and send." },
      { q: "Can it build proposals?", a: "Yes. Proposals assemble from your templates and live pricing in minutes, ready for a rep to refine and send." },
      { q: "Who sets it up?", a: "We do. After your demo, our team builds your sales workflows around how you actually sell, and runs them for you." },
    ],
    related: ["crm", "marketing", "customer-success"],
  },
  {
    slug: "crm",
    name: "CRM",
    group: "Sales & marketing",
    accent: "brand",
    Icon: AddressBookIcon,
    ogIcon: "AddressBook",
    metaTitle: "AI CRM That Updates and Works Itself",
    metaDescription:
      "A CRM your AI workforce keeps clean — logging activity, enriching contacts, updating stages, and surfacing the next action. Onita builds and runs it around your pipeline.",
    eyebrow: "CRM",
    headline: "A CRM that",
    headlineEmphasis: "runs itself",
    subhead:
      "Onita gives you a CRM your AI workforce actually maintains — capturing every interaction, enriching every contact, and surfacing the next best action — so your relationships live in a system that's always current.",
    summary:
      "An Onita CRM is a customer database that your AI agents keep accurate and act on — logging activity, enriching records, updating stages, and prompting the next step — instead of a system your team has to babysit.",
    comparison: [
      { old: "Records go stale the day after they're entered", onita: "Agents keep every record current for you" },
      { old: "Reps forget to log calls and emails", onita: "Interactions captured and logged automatically" },
      { old: "Contacts missing key data and context", onita: "Records enriched the moment they're created" },
      { old: "The next action lives in someone's memory", onita: "Agents surface the next step at the right time" },
    ],
    pillars: [
      { title: "Always-clean data", desc: "Agents capture, dedupe, and enrich records continuously, so the CRM you trust is the one you have.", Icon: ArrowsClockwiseIcon },
      { title: "Context on every contact", desc: "Every relationship carries its full history and the intelligence agents gather around it.", Icon: BrainIcon },
      { title: "The next action, surfaced", desc: "Agents watch your pipeline and prompt the right follow-up before anything goes cold.", Icon: BellRingingIcon },
    ],
    workflow: {
      title: "How a relationship stays warm",
      steps: [
        { agent: "Interaction", action: "A call, email, or meeting happens" },
        { agent: "CRM Agent", action: "Logs it and updates the contact and deal stage" },
        { agent: "Enrichment Agent", action: "Fills in missing context and firmographics" },
        { agent: "Signal Agent", action: "Spots a cooling deal and drafts the next touch" },
        { agent: "Rep", action: "Approves and sends, relationship kept warm" },
      ],
    },
    features: [
      { title: "Auto-logged activity", desc: "Every interaction is captured and attached to the right record — no manual data entry.", Icon: AddressBookIcon },
      { title: "Continuous enrichment", desc: "Contacts and companies fill in with the context your team needs to sell and serve.", Icon: MagicWandIcon },
      { title: "Pipeline intelligence", desc: "Agents surface at-risk deals and the next best action, so nothing stalls unnoticed.", Icon: ChartLineUpIcon },
      { title: "Unified customer view", desc: "One record per relationship, shared across sales, success, and support.", Icon: UsersThreeIcon },
    ],
    agents: ["CRM Agent", "Enrichment Agent", "Signal Agent"],
    metrics: [
      { value: "100%", label: "activity captured" },
      { value: "0", label: "manual data entry" },
      { value: "1", label: "source of truth" },
    ],
    story: {
      quote:
        "For the first time our CRM is actually accurate. The agents log everything and tell us who to follow up with — we stopped nagging the team to update records.",
      name: "Ada Nwosu",
      role: "RevOps Lead, Quanta",
    },
    faqs: [
      { q: "Can we migrate our existing CRM data?", a: "Yes. We migrate and clean your existing records during setup, so your team keeps the relationships they know in a system that stays current." },
      { q: "How does data stay clean?", a: "Agents capture interactions, dedupe, and enrich records continuously — the maintenance that normally falls to reps happens automatically." },
      { q: "Does it work with sales and support?", a: "Yes. One unified record per relationship is shared across sales, customer success, and support so everyone sees the full picture." },
      { q: "Who configures it?", a: "We do. Our team builds your CRM and its agents around your pipeline and process after your demo." },
    ],
    related: ["sales", "customer-success", "marketing"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    group: "Sales & marketing",
    accent: "accent",
    Icon: MegaphoneIcon,
    ogIcon: "Megaphone",
    metaTitle: "AI for Marketing Teams — More Output, Same Team",
    metaDescription:
      "An AI workforce that plans campaigns, drafts content, builds reports, and keeps every channel moving. Onita helps lean marketing teams produce like a full agency.",
    eyebrow: "Marketing",
    headline: "Agency output,",
    headlineEmphasis: "in-house team",
    subhead:
      "Onita gives your marketing team AI agents that plan campaigns, draft content on brand, build the performance reports, and keep every channel moving — so a small team produces like a much bigger one.",
    summary:
      "Marketing with Onita is an AI workforce that carries the production load — planning, drafting content, running campaigns, and reporting — so a lean team ships the volume and consistency of a full agency.",
    comparison: [
      { old: "Content pipeline bottlenecked on one or two people", onita: "Agents draft across every channel in parallel" },
      { old: "Reporting cobbled together from five dashboards", onita: "Performance reports build themselves" },
      { old: "Campaigns stall between brief and execution", onita: "Briefs route straight into produced work" },
      { old: "Brand voice drifts as output scales", onita: "Every draft stays on brand and on message" },
    ],
    pillars: [
      { title: "Content at volume", desc: "Agents draft blogs, emails, social, and landing copy on brand, so your calendar is always full.", Icon: NotePencilIcon },
      { title: "Campaigns that run themselves", desc: "A brief becomes tasks, drafts, and scheduled work — production starts the moment you hit go.", Icon: LightningIcon },
      { title: "Reporting without the wrangling", desc: "Spend and performance pull into one report agents refresh and summarize for you.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "From brief to published",
      steps: [
        { agent: "Brief", action: "A campaign brief is submitted" },
        { agent: "Strategy Agent", action: "Turns it into a channel plan and content calendar" },
        { agent: "Content Agent", action: "Drafts the copy and creative on brand" },
        { agent: "Marketer", action: "Reviews, refines, and approves" },
        { agent: "Campaign Agent", action: "Schedules, publishes, and tracks performance" },
        { agent: "Report Agent", action: "Summarizes results and next steps" },
      ],
    },
    features: [
      { title: "On-brand drafting", desc: "Agents write in your voice from your guidelines, so scaling output doesn't dilute the brand.", Icon: NotePencilIcon },
      { title: "Campaign automation", desc: "Briefs route into produced, scheduled work with review gates where you want them.", Icon: LightningIcon },
      { title: "Performance reports", desc: "One report across channels that refreshes itself and explains what's working.", Icon: ChartLineUpIcon },
      { title: "Always-full calendar", desc: "The content pipeline stops being a bottleneck — drafts are ready before you need them.", Icon: MagicWandIcon },
    ],
    agents: ["Content Agent", "Campaign Agent", "Report Agent"],
    metrics: [
      { value: "4x", label: "more content shipped" },
      { value: "3", label: "new channels covered" },
      { value: "0", label: "reporting nights" },
    ],
    story: {
      quote:
        "We took on three new channels without a single new hire. The content and campaign agents run in parallel and my team just reviews and ships.",
      name: "Priya Nair",
      role: "Founder, Loop & Co.",
    },
    faqs: [
      { q: "Will content sound generic or off-brand?", a: "No. Agents draft from your brand voice, guidelines, and past work, so output reads like your team wrote it. Your marketers review and refine." },
      { q: "Can it run whole campaigns?", a: "Yes. A brief becomes a plan, drafts, scheduled work, and reporting — with approval gates wherever you want a human decision." },
      { q: "Does it handle reporting?", a: "Agents pull spend and performance into one report, refresh it automatically, and summarize what's working and what to do next." },
      { q: "How do we start?", a: "Book a demo. We design and build your marketing workflows around your brand and channels, then run them for you." },
    ],
    related: ["sales", "product-development", "customer-success"],
  },
  {
    slug: "customer-success",
    name: "Customer Success",
    group: "Sales & marketing",
    accent: "success",
    Icon: HandHeartIcon,
    ogIcon: "HandHeart",
    metaTitle: "AI for Customer Success Teams — Retain & Grow",
    metaDescription:
      "An AI workforce that watches account health, preps every check-in, drafts follow-ups, and flags churn risk early. Onita helps success teams keep and grow more customers.",
    eyebrow: "Customer success",
    headline: "Keep more customers,",
    headlineEmphasis: "with a lean team",
    subhead:
      "Onita gives your success team AI agents that monitor account health, prepare every check-in, draft the follow-ups, and flag risk before it becomes churn — so each CSM covers more accounts, better.",
    summary:
      "Customer success with Onita is an AI workforce that handles the monitoring and prep behind great account management — tracking health, prepping reviews, drafting outreach, and surfacing risk — so CSMs spend their time on relationships.",
    comparison: [
      { old: "Churn risk noticed only after cancellation", onita: "At-risk accounts flagged weeks early" },
      { old: "Check-ins prepped from scratch each time", onita: "Every review brief ready before the call" },
      { old: "Follow-ups written between back-to-back calls", onita: "Recaps and next steps drafted for you" },
      { old: "CSMs stretched thin across too many accounts", onita: "Agents extend each CSM's reach" },
    ],
    pillars: [
      { title: "Health you can see", desc: "Agents track usage, sentiment, and engagement, and surface the accounts that need attention now.", Icon: GaugeIcon },
      { title: "Reviews prepped for you", desc: "Every check-in comes with a briefing — history, wins, risks, and talking points — already assembled.", Icon: FileTextIcon },
      { title: "Risk caught early", desc: "Signals of churn get flagged with a suggested play while there's still time to turn it around.", Icon: BellRingingIcon },
    ],
    workflow: {
      title: "How an account stays healthy",
      steps: [
        { agent: "Signals", action: "Usage and sentiment data flow in continuously" },
        { agent: "Health Agent", action: "Scores accounts and flags anything at risk" },
        { agent: "CS Agent", action: "Preps the check-in brief and a recommended play" },
        { agent: "CSM", action: "Runs the conversation and strengthens the relationship" },
        { agent: "Follow-up Agent", action: "Drafts the recap, next steps, and expansion angle" },
      ],
    },
    features: [
      { title: "Account health scoring", desc: "Agents combine usage, sentiment, and engagement into a live health view per account.", Icon: GaugeIcon },
      { title: "Auto check-in prep", desc: "Every review arrives with a briefing so CSMs walk in ready, not scrambling.", Icon: FileTextIcon },
      { title: "Churn-risk alerts", desc: "Early warnings with a recommended play, so you save accounts before they cancel.", Icon: BellRingingIcon },
      { title: "Drafted follow-ups", desc: "Recaps, next steps, and expansion outreach written for the CSM to approve.", Icon: NotePencilIcon },
    ],
    agents: ["Health Agent", "CS Agent", "Follow-up Agent"],
    metrics: [
      { value: "2x", label: "accounts per CSM" },
      { value: "30%", label: "less churn" },
      { value: "100%", label: "of reviews prepped" },
    ],
    story: {
      quote:
        "The health scores flag at-risk accounts weeks before we'd have noticed. Our CSMs walk into every review prepped, and we're saving customers we used to lose.",
      name: "Grace Adeyemi",
      role: "Head of Success, Everstack",
    },
    faqs: [
      { q: "How does Onita predict churn risk?", a: "Agents combine usage, sentiment, and engagement signals into a health score and flag accounts trending down, with a recommended play to act on." },
      { q: "Can it prep our account reviews?", a: "Yes. Every check-in comes with a briefing — history, wins, risks, and talking points — assembled automatically before the call." },
      { q: "Does it help with expansion?", a: "Agents surface expansion signals and draft the outreach, so growing existing accounts becomes part of the routine." },
      { q: "Who builds it?", a: "We do. Our team designs your success workflows and agents around your accounts and playbooks after your demo." },
    ],
    related: ["sales", "crm", "it"],
  },
  {
    slug: "hr",
    name: "HR & Recruiting",
    group: "People & finance",
    accent: "brand",
    Icon: UsersThreeIcon,
    ogIcon: "UsersThree",
    metaTitle: "AI for HR & Recruiting Teams",
    metaDescription:
      "An AI workforce that screens candidates, runs onboarding, answers policy questions, and handles HR admin — so your people team spends time on people. Built and run by Onita.",
    eyebrow: "HR & recruiting",
    headline: "People work,",
    headlineEmphasis: "not paperwork",
    subhead:
      "Onita gives your people team AI agents that screen and coordinate candidates, run onboarding step by step, answer policy questions, and handle the HR admin — so your team spends its time on people, not process.",
    summary:
      "HR and recruiting with Onita is an AI workforce that carries the administrative load of people operations — screening, scheduling, onboarding, and answering employee questions — so your team focuses on hiring well and supporting people.",
    comparison: [
      { old: "Résumés reviewed one slow stack at a time", onita: "Candidates screened and ranked instantly" },
      { old: "Interview scheduling ping-pong over email", onita: "Agents coordinate and book for you" },
      { old: "Onboarding checklists that slip", onita: "Every new hire onboarded step by step" },
      { old: "The same policy questions asked daily", onita: "Employees get answers from your handbook" },
    ],
    pillars: [
      { title: "Faster, fairer screening", desc: "Agents screen applicants against your criteria and surface the strongest, consistently and quickly.", Icon: FunnelIcon },
      { title: "Onboarding that runs itself", desc: "Every new hire moves through a tracked, consistent onboarding with nothing forgotten.", Icon: CheckCircleIcon },
      { title: "Answers on demand", desc: "Employees get accurate policy and benefits answers from your own documented sources, anytime.", Icon: BooksIcon },
    ],
    workflow: {
      title: "From applicant to onboarded",
      steps: [
        { agent: "Application", action: "A candidate applies for an open role" },
        { agent: "Screening Agent", action: "Scores against criteria and ranks the shortlist" },
        { agent: "Scheduler Agent", action: "Coordinates and books interviews automatically" },
        { agent: "Recruiter", action: "Interviews and makes the decision" },
        { agent: "Onboarding Agent", action: "Runs the new hire through every step" },
      ],
    },
    features: [
      { title: "Candidate screening", desc: "Applicants are screened and ranked against your criteria so recruiters focus on the best.", Icon: FunnelIcon },
      { title: "Interview scheduling", desc: "Agents handle the back-and-forth and book interviews without the email ping-pong.", Icon: ArrowsClockwiseIcon },
      { title: "Guided onboarding", desc: "Every new hire moves through a consistent, tracked onboarding with tasks and docs handled.", Icon: CheckCircleIcon },
      { title: "Policy answers", desc: "Employees self-serve accurate HR answers from your handbook, any time of day.", Icon: BooksIcon },
    ],
    agents: ["Screening Agent", "Scheduler Agent", "Onboarding Agent"],
    metrics: [
      { value: "5x", label: "faster screening" },
      { value: "100%", label: "onboarding completed" },
      { value: "24/7", label: "employee answers" },
    ],
    story: {
      quote:
        "Screening and scheduling used to eat our recruiters' weeks. Now agents handle it and onboarding never slips — the team finally spends time with people.",
      name: "Ngozi Umeh",
      role: "Head of People, Cobalt",
    },
    faqs: [
      { q: "Does AI screening stay fair?", a: "Agents screen against the criteria you define, consistently applied and fully logged, so review is faster and more even. Humans make every hiring decision." },
      { q: "Can it run onboarding?", a: "Yes. Each new hire moves through a tracked, consistent onboarding — tasks, docs, and intros handled, nothing forgotten." },
      { q: "How do employees get answers?", a: "Agents answer policy and benefits questions from your own handbook, so people self-serve accurate information anytime." },
      { q: "Who sets it up?", a: "We do. Our team builds your HR and recruiting workflows around your roles and policies, then runs them for you." },
    ],
    related: ["operations", "knowledge-base", "accounting"],
  },
  {
    slug: "accounting",
    name: "Accounting & Finance",
    group: "People & finance",
    accent: "warning",
    Icon: CalculatorIcon,
    ogIcon: "Calculator",
    metaTitle: "AI for Accounting & Finance Teams",
    metaDescription:
      "An AI workforce that preps invoices, reconciles trackers, chases payments, and builds financial reports — with human approval on every sensitive step. Built and run by Onita.",
    eyebrow: "Accounting & finance",
    headline: "The numbers, handled,",
    headlineEmphasis: "with control intact",
    subhead:
      "Onita gives your finance team AI agents that prepare invoices, reconcile trackers, chase payments, and build the reports — with a human approving every sensitive step — so the books stay clean without the grind.",
    summary:
      "Accounting and finance with Onita is an AI workforce that handles the repetitive, deadline-driven work of finance — invoicing, reconciliation, collections, and reporting — with mandatory human approval on anything that touches money.",
    comparison: [
      { old: "Invoices prepared and sent by hand", onita: "Invoices drafted from the work delivered" },
      { old: "Reconciliation eats days each month", onita: "Trackers reconciled continuously by agents" },
      { old: "Payment chasing forgotten until it's late", onita: "Polite reminders sent on schedule" },
      { old: "Reports built from exports and copy-paste", onita: "Financial reports assemble themselves" },
    ],
    pillars: [
      { title: "Clean books, less grind", desc: "Agents reconcile trackers and flag anomalies continuously, so month-end stops being a marathon.", Icon: ArrowsClockwiseIcon },
      { title: "Control on every dollar", desc: "Anything that moves money requires human sign-off — agents prepare, people approve.", Icon: ShieldCheckIcon },
      { title: "Reporting on time", desc: "P&L, cash flow, and management reports build from live data, ready when leadership needs them.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "How the money work gets done",
      steps: [
        { agent: "Delivery", action: "Work is completed or a billing trigger fires" },
        { agent: "Billing Agent", action: "Drafts the invoice from hours and rates" },
        { agent: "Finance lead", action: "Reviews and approves before it sends" },
        { agent: "Collections Agent", action: "Sends reminders and tracks payment" },
        { agent: "Report Agent", action: "Rolls it into live financial reporting" },
      ],
    },
    features: [
      { title: "Invoice prep", desc: "Agents draft accurate invoices from tracked work, ready for a human to approve and send.", Icon: FileTextIcon },
      { title: "Continuous reconciliation", desc: "Trackers stay reconciled and anomalies get flagged, so the books are always close to closed.", Icon: ArrowsClockwiseIcon },
      { title: "Automated collections", desc: "Polite, scheduled reminders keep receivables moving without anyone remembering to chase.", Icon: BellRingingIcon },
      { title: "Live financial reports", desc: "P&L, cash flow, and management views build from current data — no export-and-paste.", Icon: ChartLineUpIcon },
    ],
    agents: ["Billing Agent", "Collections Agent", "Report Agent"],
    metrics: [
      { value: "80%", label: "less manual finance work" },
      { value: "100%", label: "approvals enforced" },
      { value: "days", label: "faster month-end" },
    ],
    story: {
      quote:
        "Invoicing and reconciliation used to consume the first week of every month. Agents prep it all now — we just approve. The books have never been cleaner.",
      name: "Emeka Obi",
      role: "Finance Director, Fluxwork",
    },
    faqs: [
      { q: "Do agents move money on their own?", a: "Never without approval. Agents prepare invoices, reconciliations, and reports; a person signs off on anything that touches money. Every step is logged." },
      { q: "Can it reconcile our trackers?", a: "Yes. Agents reconcile continuously and flag anomalies, so month-end is a review instead of a scramble." },
      { q: "Does it handle collections?", a: "Agents send polite, scheduled payment reminders and track receivables, keeping cash moving without manual chasing." },
      { q: "Is it secure and auditable?", a: "Yes. Permissions are scoped, sensitive actions require approval, and every action has a full audit trail." },
    ],
    related: ["operations", "sales", "hr"],
  },
  {
    slug: "task-management",
    name: "Task Management",
    group: "People & finance",
    accent: "info",
    Icon: CheckCircleIcon,
    ogIcon: "CheckCircle",
    metaTitle: "AI Task Management for Teams",
    metaDescription:
      "Capture, assign, and complete work with an AI workforce that turns requests into tasks, does the routine ones, and keeps everything moving. Onita runs your team's to-do list.",
    eyebrow: "Task management",
    headline: "Work that",
    headlineEmphasis: "moves itself forward",
    subhead:
      "Onita gives your team AI agents that turn every request into a tracked task, complete the routine ones outright, and keep the rest moving — so work doesn't pile up waiting on a person.",
    summary:
      "Task management with Onita is a shared work system where AI agents capture, prioritize, and execute tasks alongside your team — completing routine work and chasing the rest — so nothing sits idle in a backlog.",
    comparison: [
      { old: "Requests scattered across chat, email, and notes", onita: "Everything captured as a tracked task" },
      { old: "Routine tasks wait for a free pair of hands", onita: "Agents complete routine work themselves" },
      { old: "Priorities unclear, work sits idle", onita: "Agents prioritize and keep work moving" },
      { old: "Things fall through the cracks", onita: "Every task has an owner and a next step" },
    ],
    pillars: [
      { title: "Capture everything", desc: "Requests from any channel become structured, assigned tasks — nothing lives in a forgotten thread.", Icon: CheckCircleIcon },
      { title: "Agents do the routine", desc: "The repetitive tasks that clog a backlog get done by agents, not deferred by people.", Icon: RobotIcon },
      { title: "Nothing sits idle", desc: "Agents prioritize, chase, and escalate, so work keeps moving even when people are busy.", Icon: LightningIcon },
    ],
    workflow: {
      title: "How work gets done",
      steps: [
        { agent: "Request", action: "A task arrives from a form, message, or teammate" },
        { agent: "Task Agent", action: "Structures, prioritizes, and assigns it" },
        { agent: "Doer Agent", action: "Completes routine tasks outright" },
        { agent: "Teammate", action: "Handles work that needs a human" },
        { agent: "Task Agent", action: "Tracks completion and closes the loop" },
      ],
    },
    features: [
      { title: "Universal capture", desc: "Turn any request into a tracked task with an owner, due date, and context attached.", Icon: CheckCircleIcon },
      { title: "Agent-completed tasks", desc: "Routine work gets done by agents, clearing the backlog instead of growing it.", Icon: RobotIcon },
      { title: "Smart prioritization", desc: "Agents order work by urgency and impact so the right thing gets done next.", Icon: GaugeIcon },
      { title: "Nothing dropped", desc: "Every task is tracked to done, with reminders and escalation built in.", Icon: BellRingingIcon },
    ],
    agents: ["Task Agent", "Doer Agent"],
    metrics: [
      { value: "50%", label: "of tasks agent-completed" },
      { value: "0", label: "dropped requests" },
      { value: "1", label: "place for all work" },
    ],
    story: {
      quote:
        "Half our recurring tasks just get done by agents now. The team's backlog shrank instead of growing, and nothing slips through the cracks anymore.",
      name: "Lola Martins",
      role: "Ops Manager, Lumen",
    },
    faqs: [
      { q: "How is this different from a to-do app?", a: "A to-do app just holds tasks. Onita's agents actually complete the routine ones, prioritize the rest, and keep everything moving — the list works itself down." },
      { q: "What tasks can agents complete?", a: "Repetitive, rule-based work — updates, follow-ups, data entry, routing — with approval gates on anything sensitive." },
      { q: "Can people and agents share work?", a: "Yes. Agents and teammates work the same task board, handing off between each other with full context." },
      { q: "Who sets it up?", a: "We do. Our team builds your task workflows and agents around how your team works after your demo." },
    ],
    related: ["project-management", "operations", "knowledge-base"],
  },
  {
    slug: "knowledge-base",
    name: "Knowledge Base",
    group: "People & finance",
    accent: "brand",
    Icon: BooksIcon,
    ogIcon: "Books",
    metaTitle: "AI Knowledge Base That Answers for Your Team",
    metaDescription:
      "Turn your documents and processes into a living knowledge base your AI workforce reads, answers from, and keeps current. Onita makes your company's knowledge work for you.",
    eyebrow: "Knowledge base",
    headline: "Your company's knowledge,",
    headlineEmphasis: "finally usable",
    subhead:
      "Onita turns your scattered documents and know-how into a living knowledge base your AI agents read from, answer with, and keep current — so the right answer is always one question away.",
    summary:
      "An Onita knowledge base is a living, agent-readable source of your company's documents and processes — one that answers questions accurately, powers every other agent, and updates itself as your business changes.",
    comparison: [
      { old: "Knowledge buried across drives and inboxes", onita: "One connected, searchable source of truth" },
      { old: "Answers depend on asking the right person", onita: "Agents answer from your documented knowledge" },
      { old: "Documentation goes stale and gets ignored", onita: "Agents keep answers current as work happens" },
      { old: "New hires take months to get up to speed", onita: "Anyone gets accurate answers on day one" },
    ],
    pillars: [
      { title: "One source of truth", desc: "Your documents, processes, and decisions live in one connected place your whole team and workforce use.", Icon: BooksIcon },
      { title: "Answers, not searches", desc: "Ask a question and agents return the answer from your real knowledge — with the source cited.", Icon: MagnifyingGlassIcon },
      { title: "Knowledge that powers agents", desc: "Every other agent draws on this base, so your whole workforce operates on your real know-how.", Icon: BrainIcon },
    ],
    workflow: {
      title: "How knowledge stays useful",
      steps: [
        { agent: "Sources", action: "Your docs, wikis, and processes are connected" },
        { agent: "Knowledge Agent", action: "Structures and indexes it into one base" },
        { agent: "Teammate", action: "Asks a question in plain language" },
        { agent: "Answer Agent", action: "Returns a sourced answer instantly" },
        { agent: "Knowledge Agent", action: "Captures new decisions to keep it current" },
      ],
    },
    features: [
      { title: "Connected sources", desc: "Bring your documents, wikis, and processes into one place agents can read and reason over.", Icon: PlugsConnectedIcon },
      { title: "Cited answers", desc: "Every answer comes with its source, so your team can trust and verify what agents return.", Icon: MagnifyingGlassIcon },
      { title: "Always current", desc: "Agents capture new decisions and outcomes, so the knowledge base reflects how things work now.", Icon: ArrowsClockwiseIcon },
      { title: "Powers your workforce", desc: "This is the memory every other Onita agent draws on to do accurate, on-brand work.", Icon: BrainIcon },
    ],
    agents: ["Knowledge Agent", "Answer Agent"],
    metrics: [
      { value: "1", label: "source of truth" },
      { value: "24/7", label: "instant answers" },
      { value: "days", label: "faster onboarding" },
    ],
    story: {
      quote:
        "Onita turned our messy drives into a knowledge base that actually answers. New hires ramp in days, and every agent gives answers grounded in how we really work.",
      name: "Sam Iheanacho",
      role: "COO, Everstack",
    },
    faqs: [
      { q: "What is an AI knowledge base?", a: "It's a living, agent-readable source of your company's documents and processes that answers questions accurately, cites its sources, and stays current as your business changes." },
      { q: "Where does it get its knowledge?", a: "From your own connected sources — documents, wikis, and processes. We set up the connections during onboarding so answers reflect your real know-how." },
      { q: "Does it keep itself up to date?", a: "Yes. Agents capture new decisions and outcomes as work happens, so the base reflects how things work now, not last year." },
      { q: "How does it help other teams?", a: "It's the memory your whole AI workforce draws on, so every agent — sales, support, ops — works from your real, current knowledge." },
    ],
    related: ["it", "hr", "operations"],
  },
];

export const solutionMap: Record<string, Solution> = Object.fromEntries(
  solutions.map((s) => [s.slug, s])
);

export function getSolution(slug: string): Solution | undefined {
  return solutionMap[slug];
}

export const solutionGroups = [
  "Operations & delivery",
  "Sales & marketing",
  "People & finance",
] as const;
