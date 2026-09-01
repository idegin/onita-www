import type { Icon } from "@phosphor-icons/react";
import type { Accent } from "@/lib/products";
import type { OgIconName } from "@/lib/og-icons";
import {
  KanbanIcon,
  RocketLaunchIcon,
  GearSixIcon,
  TrendUpIcon,
  AddressBookIcon,
  MegaphoneIcon,
  UsersThreeIcon,
  CheckCircleIcon,
  BrainIcon,
  ShieldCheckIcon,
  LightningIcon,
  ChartLineUpIcon,
  MagicWandIcon,
  FunnelIcon,
  FileTextIcon,
  BellRingingIcon,
  ArrowsClockwiseIcon,
  GaugeIcon,
  MagnifyingGlassIcon,
  NotePencilIcon,
  CalendarCheckIcon,
} from "@phosphor-icons/react/dist/ssr";

export type ComparisonRow = { old: string; onita: string };
export type Pillar = { title: string; desc: string; Icon: Icon };
export type WorkflowStep = { agent: string; action: string };
export type UseCaseFeature = { title: string; desc: string; Icon: Icon };
export type UseCaseMetric = { value: string; label: string };
export type UseCaseFaq = { q: string; a: string };

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
  features: UseCaseFeature[];
  agents: string[];
  metrics: UseCaseMetric[];
  story: { quote: string; name: string; role: string };
  faqs: UseCaseFaq[];
  related: string[];
};

export const useCases: Solution[] = [
  {
    slug: "it-service-providers",
    name: "IT Service Providers",
    group: "Service businesses",
    accent: "brand",
    Icon: GearSixIcon,
    ogIcon: "Gear",
    metaTitle: "Onita for IT Service Providers — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for MSPs and IT service providers. Use AI to triage tickets, run projects, and double billable output without adding headcount.",
    eyebrow: "IT Service Providers",
    headline: "Run every client, ticket, and project ",
    headlineEmphasis: "with AI-powered productivity",
    subhead:
      "Onita gives MSPs and IT service teams AI products that triage requests, keep projects on track, and turn every client call into documented action — so your engineers spend time solving problems, not shuffling tools.",
    summary:
      "Onita is an AI-era productivity platform that helps IT service providers manage tickets, client projects, and delivery in one place with AI doing the busywork.",
    comparison: [
      { old: "Tickets and projects split across a PSA, a spreadsheet, and Slack", onita: "One workspace where AI routes work and keeps every client in sync" },
      { old: "Engineers write up client calls from memory hours later", onita: "AI Meeting Notetaker captures calls and turns them into tasks instantly" },
      { old: "Utilization and SLA status only visible at month-end", onita: "AI Dashboards surface SLA risk and capacity in real time" },
      { old: "Runbooks and change docs go stale in a wiki nobody reads", onita: "AI Notes drafts and updates documentation as work happens" },
    ],
    pillars: [
      { title: "Never miss an SLA", desc: "AI triages incoming requests, sets priority, and flags anything about to breach before it does.", Icon: GaugeIcon },
      { title: "Deliver projects faster", desc: "The AI Project Manager keeps migrations and rollouts on schedule and reassigns work when engineers get pulled away.", Icon: KanbanIcon },
      { title: "Document as you go", desc: "Runbooks, change records, and client notes stay current without an engineer writing them up after hours.", Icon: FileTextIcon },
    ],
    workflow: {
      title: "From client request to resolved and documented",
      steps: [
        { agent: "AI Task Manager", action: "Captures the incoming request and sets priority against the SLA" },
        { agent: "AI Project Manager", action: "Slots the work into the right engineer's queue by capacity" },
        { agent: "AI Meeting Notetaker", action: "Records the client call and extracts every action item" },
        { agent: "AI Notes", action: "Updates the runbook and change record automatically" },
        { agent: "AI Dashboards", action: "Reports SLA status and utilization back to the account lead" },
      ],
    },
    features: [
      { title: "AI ticket triage", desc: "Incoming work is classified, prioritized, and assigned so nothing sits unowned in a queue.", Icon: FunnelIcon },
      { title: "Client project tracking", desc: "Every migration, onboarding, and rollout lives on a board the AI keeps moving.", Icon: KanbanIcon },
      { title: "Live SLA dashboards", desc: "See breach risk, response times, and engineer capacity across every account at a glance.", Icon: ChartLineUpIcon },
      { title: "Self-maintaining docs", desc: "Runbooks and change logs stay accurate because the AI writes them from the work itself.", Icon: FileTextIcon },
    ],
    agents: ["AI Project Manager", "AI Meeting Notetaker", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "billable output per engineer" },
      { value: "40%", label: "fewer SLA breaches" },
      { value: "6 hrs", label: "saved per engineer weekly" },
    ],
    story: {
      quote:
        "We used to lose an hour after every client call just writing it up. Now the notes, the tickets, and the runbook update themselves and my engineers stay on the tools.",
      name: "Daniel Okafor",
      role: "Operations Director, managed IT services provider",
    },
    faqs: [
      { q: "Does Onita replace our PSA or ticketing tool?", a: "Onita becomes the single place your team works — triaging requests, running projects, and reporting on SLAs — so most providers consolidate the scattered tools around their PSA into one AI-powered workspace." },
      { q: "How does the AI know how to prioritize our tickets?", a: "Onita learns your SLAs, client tiers, and escalation rules, then applies them automatically to every incoming request so priority is consistent across your whole team." },
      { q: "Can it keep client documentation current?", a: "Yes. The AI Notes drafts and updates runbooks, change records, and client notes from the actual work and calls, so documentation stays accurate without manual write-ups." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your queues, SLA rules, dashboards, and client workspaces are configured and ready before your engineers log in." },
    ],
    related: ["consulting-businesses", "startups", "executive-teams"],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    group: "Service businesses",
    accent: "accent",
    Icon: MegaphoneIcon,
    ogIcon: "Megaphone",
    metaTitle: "Onita for Marketing Agencies — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for marketing agencies. Use AI to plan campaigns, brief creative, and report to clients — doubling output without more headcount.",
    eyebrow: "Marketing Agencies",
    headline: "Ship more campaigns for every client ",
    headlineEmphasis: "with AI in your workflow",
    subhead:
      "Onita gives agencies AI products that plan campaigns, turn briefs into tasks, and build client reports automatically — so your team spends its time on the work clients actually pay for.",
    summary:
      "Onita is an AI-era productivity platform that helps marketing agencies manage campaigns, creative production, and client reporting in one place with AI handling the coordination.",
    comparison: [
      { old: "Every account managed in a different tool and spreadsheet", onita: "One workspace where AI keeps every client campaign moving" },
      { old: "Status meetings just to find out what's late", onita: "AI Dashboards show campaign status without a single check-in call" },
      { old: "Creative briefs lost in email threads", onita: "AI Automations turn approved briefs into production tasks instantly" },
      { old: "Monthly client reports built by hand from five platforms", onita: "AI Notes drafts branded client reports on demand" },
    ],
    pillars: [
      { title: "More campaigns, same team", desc: "AI plans timelines and assigns production so your team ships more without burning out.", Icon: RocketLaunchIcon },
      { title: "Briefs become work instantly", desc: "The moment a brief is approved, tasks, deadlines, and owners appear automatically.", Icon: MagicWandIcon },
      { title: "Reporting that writes itself", desc: "Client updates and monthly reports are drafted for you, ready to review and send.", Icon: FileTextIcon },
    ],
    workflow: {
      title: "From brief to campaign to client report",
      steps: [
        { agent: "AI Notes", action: "Turns the discovery call into a structured campaign brief" },
        { agent: "AI Project Manager", action: "Builds the production timeline and assigns each deliverable" },
        { agent: "AI Task Manager", action: "Keeps writers, designers, and media buyers moving in sync" },
        { agent: "AI Dashboards", action: "Tracks spend, status, and results across every client" },
        { agent: "AI Notes", action: "Drafts the monthly client report ready to send" },
      ],
    },
    features: [
      { title: "Campaign planning", desc: "AI builds realistic timelines across clients and flags conflicts before they become fire drills.", Icon: KanbanIcon },
      { title: "Brief-to-task automation", desc: "Approved briefs become fully assigned production plans with no manual setup.", Icon: MagicWandIcon },
      { title: "Client-ready reporting", desc: "Branded status updates and monthly reports drafted from your live campaign data.", Icon: FileTextIcon },
      { title: "Cross-account visibility", desc: "See every client's health, deadlines, and profitability in one dashboard.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Project Manager", "AI Notes", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "campaigns shipped per month" },
      { value: "70%", label: "less time on status reporting" },
      { value: "3 hrs", label: "saved per client each week" },
    ],
    story: {
      quote:
        "Onita gave us back the two days a month we lost building client reports. Now they're drafted for us and we spend that time actually growing accounts.",
      name: "Priya Sharma",
      role: "Managing Director, full-service marketing agency",
    },
    faqs: [
      { q: "Can Onita handle multiple clients at once?", a: "Yes. Each client gets their own organized workspace while your leadership sees every account's status, deadlines, and profitability in one place." },
      { q: "How does the reporting work?", a: "The AI Notes pulls from your live campaign data to draft branded, client-ready status updates and monthly reports, so you review and send instead of building from scratch." },
      { q: "Does it work for both creative and media teams?", a: "Onita keeps writers, designers, media buyers, and account managers on the same plan, so briefs flow straight into assigned production work for every discipline." },
      { q: "How do we roll it out?", a: "Book a demo and Onita's team sets everything up for you — your client workspaces, campaign templates, report formats, and dashboards are configured before your team starts." },
    ],
    related: ["design-agencies", "consulting-businesses", "sales-teams"],
  },
  {
    slug: "design-agencies",
    name: "Design Agencies",
    group: "Service businesses",
    accent: "info",
    Icon: MagicWandIcon,
    ogIcon: "Sparkle",
    metaTitle: "Onita for Design Agencies — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for design and creative studios. Use AI to manage projects, approvals, and feedback so designers spend more time designing.",
    eyebrow: "Design Agencies",
    headline: "Keep every design project moving ",
    headlineEmphasis: "so creatives can create",
    subhead:
      "Onita gives design studios AI products that run project timelines, chase approvals, and turn client feedback into clear tasks — so your designers stay in the work instead of managing it.",
    summary:
      "Onita is an AI-era productivity platform that helps design agencies manage creative projects, approval rounds, and client feedback in one place with AI handling coordination.",
    comparison: [
      { old: "Feedback scattered across email, calls, and comment threads", onita: "AI Meeting Notetaker turns every review into clear revision tasks" },
      { old: "Approvals stall and nobody knows who's blocking", onita: "AI Automations chase sign-off and flag stuck approvals automatically" },
      { old: "Designers pulled into status updates all day", onita: "AI Dashboards show project status without interrupting the studio" },
      { old: "Scope creep discovered only when the project runs over", onita: "AI flags out-of-scope requests the moment they land" },
    ],
    pillars: [
      { title: "Protect creative time", desc: "AI handles the coordination so designers stay in flow instead of managing timelines.", Icon: MagicWandIcon },
      { title: "Feedback becomes tasks", desc: "Every review call and comment turns into a clear, assigned revision — nothing lost.", Icon: NotePencilIcon },
      { title: "Approvals never stall", desc: "The AI chases sign-off and surfaces blockers before they cost you a deadline.", Icon: CheckCircleIcon },
    ],
    workflow: {
      title: "From brief to feedback to delivery",
      steps: [
        { agent: "AI Project Manager", action: "Builds the project timeline with review and delivery milestones" },
        { agent: "AI Task Manager", action: "Assigns each concept and revision to the right designer" },
        { agent: "AI Meeting Notetaker", action: "Captures the client review and turns notes into revision tasks" },
        { agent: "AI Automations", action: "Chases approval and flags anything stuck or out of scope" },
        { agent: "AI Dashboards", action: "Shows studio-wide status without a single status meeting" },
      ],
    },
    features: [
      { title: "Creative project management", desc: "Timelines built around review rounds and delivery, kept current by AI as work shifts.", Icon: KanbanIcon },
      { title: "Feedback to revision", desc: "Client comments and review calls become clear, assigned tasks with nothing lost in threads.", Icon: NotePencilIcon },
      { title: "Approval tracking", desc: "The AI chases sign-off and surfaces exactly who is blocking a project.", Icon: CheckCircleIcon },
      { title: "Scope protection", desc: "Out-of-scope requests are flagged instantly so you protect margin on every project.", Icon: MagnifyingGlassIcon },
    ],
    agents: ["AI Project Manager", "AI Meeting Notetaker", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "projects delivered per designer" },
      { value: "50%", label: "faster approval cycles" },
      { value: "5 hrs", label: "of design time reclaimed weekly" },
    ],
    story: {
      quote:
        "Our designers were spending half their week in project admin. Onita took that off their plate — feedback turns straight into tasks and the work just flows now.",
      name: "Marcus Bennett",
      role: "Creative Director, brand design studio",
    },
    faqs: [
      { q: "Will this get in the way of our creative process?", a: "No — Onita runs the coordination in the background so designers spend more time in the work, not less. Feedback and approvals flow automatically instead of interrupting the studio." },
      { q: "How does it capture client feedback?", a: "The AI Meeting Notetaker records review calls and turns comments into clear, assigned revision tasks, so nothing gets lost between a client note and the next round." },
      { q: "Can it help us protect scope?", a: "Yes. Onita flags out-of-scope requests the moment they arrive, so you catch scope creep early and protect margin on every project." },
      { q: "How do we get set up?", a: "Book a demo and Onita's team sets everything up for you — your project templates, review workflows, and studio dashboards are configured before your designers start." },
    ],
    related: ["marketing-agencies", "consulting-businesses", "startups"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    group: "Service businesses",
    accent: "success",
    Icon: ShieldCheckIcon,
    ogIcon: "ShieldCheck",
    metaTitle: "Onita for Law Firms — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for law firms. Use AI to run intake, matters, and client calls so attorneys spend more time on billable, high-value work.",
    eyebrow: "Law Firms",
    headline: "Run intake, matters, and client work ",
    headlineEmphasis: "with AI on your side",
    subhead:
      "Onita gives law firms AI products that structure intake, keep every matter on track, and capture client calls into documented action — so your attorneys spend more time practicing and less time on admin.",
    summary:
      "Onita is an AI-era productivity platform that helps law firms manage client intake, matters, and deadlines in one place with AI handling documentation and coordination.",
    comparison: [
      { old: "New client intake handled ad hoc over email and phone", onita: "AI Forms and Workflows structure intake and route it instantly" },
      { old: "Attorneys write up client calls from memory", onita: "AI Meeting Notetaker captures every call into an accurate record" },
      { old: "First drafts and letters written from a blank page", onita: "AI Notes drafts documents from your templates and matter" },
      { old: "Deadlines tracked in scattered calendars and reminders", onita: "AI Calendar keeps every filing and follow-up in view" },
    ],
    pillars: [
      { title: "More billable hours", desc: "AI absorbs the intake, notes, and drafting admin so attorneys spend time on billable work.", Icon: ShieldCheckIcon },
      { title: "Every call on record", desc: "Client meetings are captured accurately and turned into follow-up tasks — nothing missed.", Icon: NotePencilIcon },
      { title: "Nothing slips a deadline", desc: "The AI Calendar keeps filings, follow-ups, and statute dates in front of the right people.", Icon: CalendarCheckIcon },
    ],
    workflow: {
      title: "From new inquiry to managed matter",
      steps: [
        { agent: "AI Forms", action: "Captures the new client inquiry and required details" },
        { agent: "AI Automations", action: "Runs conflict-check and intake routing to the right attorney" },
        { agent: "AI Meeting Notetaker", action: "Records the client consultation into an accurate record" },
        { agent: "AI Notes", action: "Drafts the engagement letter and first documents from your templates" },
        { agent: "AI Calendar", action: "Locks in every deadline, filing, and follow-up" },
      ],
    },
    features: [
      { title: "Structured client intake", desc: "AI Forms and workflows capture, route, and organize every new matter consistently.", Icon: FunnelIcon },
      { title: "Accurate call records", desc: "Client consultations captured and turned into follow-ups so nothing is lost or misremembered.", Icon: NotePencilIcon },
      { title: "Assisted drafting", desc: "Engagement letters and first drafts generated from your own templates and matter details.", Icon: FileTextIcon },
      { title: "Deadline management", desc: "Filings, statutes, and follow-ups tracked in one calendar the whole firm trusts.", Icon: CalendarCheckIcon },
    ],
    agents: ["AI Meeting Notetaker", "AI Notes", "AI Automations"],
    metrics: [
      { value: "8 hrs", label: "of admin saved per attorney weekly" },
      { value: "2x", label: "faster client intake" },
      { value: "0", label: "missed filing deadlines" },
    ],
    story: {
      quote:
        "Intake used to eat our paralegals alive and consultations were written up from memory. Onita structures the whole thing and drafts the first documents — our attorneys got real hours back.",
      name: "Rebecca Harrington",
      role: "Managing Partner, boutique law firm",
    },
    faqs: [
      { q: "Is client information kept secure and confidential?", a: "Yes. Onita is built for confidential work with role-based permissions and access controls, so sensitive matters and client records stay restricted to the right people." },
      { q: "Does the AI replace attorney judgment on drafts?", a: "No. The AI Notes produces first drafts from your templates and matter details to save time, but every document stays under attorney review and control." },
      { q: "How does it handle intake?", a: "AI Forms capture new inquiries, then AI Automations run conflict checks and route each matter to the right attorney, so intake is consistent instead of ad hoc." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your intake forms, document templates, matter workflows, and deadline calendars are configured before your firm starts." },
    ],
    related: ["consulting-businesses", "real-estate-management", "executive-teams"],
  },
  {
    slug: "consulting-businesses",
    name: "Consulting Businesses",
    group: "Service businesses",
    accent: "warning",
    Icon: BrainIcon,
    ogIcon: "TrendUp",
    metaTitle: "Onita for Consulting Firms — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for consulting firms. Use AI to run engagements, capture client meetings, and build deliverables — doubling consultant output.",
    eyebrow: "Consulting Businesses",
    headline: "Deliver more engagements ",
    headlineEmphasis: "with AI doing the heavy lifting",
    subhead:
      "Onita gives consultancies AI products that run engagements, turn client meetings into insight, and draft deliverables and slides — so your consultants spend their time on strategy, not production.",
    summary:
      "Onita is an AI-era productivity platform that helps consulting firms manage engagements, client meetings, and deliverables in one place with AI accelerating the work.",
    comparison: [
      { old: "Engagement plans rebuilt from scratch for every client", onita: "AI Project Manager spins up plans from your proven playbooks" },
      { old: "Consultants type up client meetings for hours", onita: "AI Meeting Notetaker captures sessions into structured insight" },
      { old: "Decks and reports built manually the night before", onita: "AI Slides and Docs Assistant draft deliverables from your findings" },
      { old: "Utilization and margins visible only at quarter-end", onita: "AI Dashboards track utilization and engagement health live" },
    ],
    pillars: [
      { title: "Higher consultant leverage", desc: "AI produces the drafts and admin so each consultant delivers more billable value.", Icon: TrendUpIcon },
      { title: "Insight from every meeting", desc: "Client sessions become structured findings and next steps automatically.", Icon: BrainIcon },
      { title: "Deliverables, faster", desc: "First-draft decks and reports are generated from your findings, ready to refine.", Icon: FileTextIcon },
    ],
    workflow: {
      title: "From kickoff to delivered engagement",
      steps: [
        { agent: "AI Project Manager", action: "Builds the engagement plan from your delivery playbook" },
        { agent: "AI Meeting Notetaker", action: "Captures client workshops into structured findings" },
        { agent: "AI Notes", action: "Drafts the analysis and written deliverables" },
        { agent: "AI Slides", action: "Turns findings into a client-ready presentation" },
        { agent: "AI Dashboards", action: "Tracks utilization and engagement health for the partners" },
      ],
    },
    features: [
      { title: "Engagement management", desc: "AI builds and maintains engagement plans from your proven methodology, not a blank page.", Icon: KanbanIcon },
      { title: "Meeting to insight", desc: "Client workshops and interviews captured and structured into findings and actions.", Icon: BrainIcon },
      { title: "Deliverable drafting", desc: "First-draft reports and decks generated from your analysis so you refine instead of build.", Icon: FileTextIcon },
      { title: "Utilization visibility", desc: "See consultant utilization, margins, and engagement health across the firm in real time.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Meeting Notetaker", "AI Slides", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "engagements per consultant" },
      { value: "60%", label: "faster deliverable production" },
      { value: "10 hrs", label: "saved per consultant weekly" },
    ],
    story: {
      quote:
        "The night-before deck scramble is gone. Onita turns our workshop notes into a structured first draft, and our consultants spend their energy on the thinking, not the formatting.",
      name: "James Whitfield",
      role: "Partner, management consulting firm",
    },
    faqs: [
      { q: "Will the deliverables sound like our firm?", a: "Yes. Onita drafts from your own playbooks, findings, and templates, so decks and reports come out in your firm's structure and voice — ready for a consultant to refine." },
      { q: "How does it capture client workshops?", a: "The AI Meeting Notetaker records sessions and turns them into structured findings, decisions, and next steps, so consultants leave a workshop with insight instead of a page of raw notes." },
      { q: "Can partners see engagement health?", a: "AI Dashboards track utilization, margins, and delivery status across every engagement in real time, so partners spot risk long before quarter-end." },
      { q: "How do we roll it out?", a: "Book a demo and Onita's team sets everything up for you — your engagement playbooks, deliverable templates, and utilization dashboards are configured before your consultants start." },
    ],
    related: ["marketing-agencies", "law-firms", "executive-teams"],
  },
  {
    slug: "construction-companies",
    name: "Construction Companies",
    group: "Service businesses",
    accent: "brand",
    Icon: GaugeIcon,
    ogIcon: "Gear",
    metaTitle: "Onita for Construction Companies — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for construction companies. Use AI to run projects, coordinate crews, and keep sites, docs, and schedules on track.",
    eyebrow: "Construction Companies",
    headline: "Keep every project and crew on schedule ",
    headlineEmphasis: "with AI coordinating it all",
    subhead:
      "Onita gives construction teams AI products that manage project schedules, coordinate crews and subs, and turn site updates into documented action — so your projects finish on time and on budget.",
    summary:
      "Onita is an AI-era productivity platform that helps construction companies manage projects, crews, and site documentation in one place with AI keeping schedules on track.",
    comparison: [
      { old: "Schedules on whiteboards and out-of-date spreadsheets", onita: "AI Project Manager keeps live schedules across every job site" },
      { old: "Site updates trapped in texts and phone calls", onita: "AI Meeting Notetaker turns site walks and calls into logged tasks" },
      { old: "Delays discovered only when a deadline is already blown", onita: "AI Dashboards flag schedule and budget risk early" },
      { old: "RFIs and change orders drafted from scratch", onita: "AI Notes drafts change orders and reports fast" },
    ],
    pillars: [
      { title: "On-time delivery", desc: "AI maintains live project schedules and flags slippage before it costs you the deadline.", Icon: GaugeIcon },
      { title: "Coordinated crews", desc: "Assignments, subs, and dependencies stay in sync so no crew shows up to a blocked site.", Icon: UsersThreeIcon },
      { title: "Site to system", desc: "Site walks and calls become logged tasks and reports without paperwork at day's end.", Icon: NotePencilIcon },
    ],
    workflow: {
      title: "From site update to schedule to owner report",
      steps: [
        { agent: "AI Meeting Notetaker", action: "Captures the site walk and turns issues into tasks" },
        { agent: "AI Project Manager", action: "Updates the live schedule and reflags dependencies" },
        { agent: "AI Task Manager", action: "Assigns work to the right crew and subcontractors" },
        { agent: "AI Notes", action: "Drafts the change order and daily site report" },
        { agent: "AI Dashboards", action: "Reports schedule and budget status to the owner" },
      ],
    },
    features: [
      { title: "Live project scheduling", desc: "AI keeps schedules current across every job and flags slippage before deadlines are missed.", Icon: GaugeIcon },
      { title: "Crew and sub coordination", desc: "Assignments and dependencies stay in sync so crews never arrive to a blocked site.", Icon: UsersThreeIcon },
      { title: "Site documentation", desc: "Site walks, calls, and updates become logged tasks and daily reports automatically.", Icon: NotePencilIcon },
      { title: "Budget and schedule dashboards", desc: "See schedule risk and budget status across every project in one place.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Project Manager", "AI Meeting Notetaker", "AI Dashboards"],
    metrics: [
      { value: "30%", label: "fewer schedule overruns" },
      { value: "2x", label: "faster site reporting" },
      { value: "5 hrs", label: "of PM admin saved weekly" },
    ],
    story: {
      quote:
        "We caught schedule slips weeks earlier once Onita kept our project timelines live. Site walks turn straight into tasks and reports, so nothing gets lost between the field and the office.",
      name: "Anthony Russo",
      role: "Project Director, commercial construction firm",
    },
    faqs: [
      { q: "Can Onita handle multiple job sites at once?", a: "Yes. Each project has its own live schedule and crew plan while your leadership sees schedule and budget risk across every site in one dashboard." },
      { q: "How does it capture what happens on site?", a: "The AI Meeting Notetaker turns site walks and phone calls into logged tasks and daily reports, so field updates reach the office without end-of-day paperwork." },
      { q: "Does it help with change orders and RFIs?", a: "The AI Notes drafts change orders, RFIs, and site reports from your templates and project details, so documentation keeps pace with the work." },
      { q: "How do we get set up?", a: "Book a demo and Onita's team sets everything up for you — your project schedules, crew assignments, report templates, and dashboards are configured before your team starts." },
    ],
    related: ["real-estate-management", "it-service-providers", "executive-teams"],
  },
  {
    slug: "real-estate-management",
    name: "Real Estate Management",
    group: "Service businesses",
    accent: "info",
    Icon: AddressBookIcon,
    ogIcon: "AddressBook",
    metaTitle: "Onita for Real Estate Management — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for property and real estate management. Use AI to track requests, coordinate vendors, and keep tenants and owners happy.",
    eyebrow: "Real Estate Management",
    headline: "Manage every property and request ",
    headlineEmphasis: "with AI keeping pace",
    subhead:
      "Onita gives property and real estate managers AI products that triage tenant requests, coordinate vendors, and keep owners informed — so your team manages more units without dropping the ball.",
    summary:
      "Onita is an AI-era productivity platform that helps real estate and property managers handle tenant requests, vendor coordination, and owner reporting in one place with AI.",
    comparison: [
      { old: "Tenant requests scattered across email, text, and calls", onita: "AI Forms and Task Manager capture and triage every request" },
      { old: "Vendor coordination handled by memory and follow-up calls", onita: "AI Automations dispatch vendors and chase completion" },
      { old: "Owners chasing you for updates on their properties", onita: "AI Dashboards give owners live status without the phone tag" },
      { old: "Leases, notices, and renewals tracked manually", onita: "AI Calendar keeps every renewal and deadline in view" },
    ],
    pillars: [
      { title: "More units per manager", desc: "AI absorbs the request and vendor coordination so each manager handles more doors.", Icon: AddressBookIcon },
      { title: "Faster resolution", desc: "Tenant requests are triaged, dispatched, and chased to completion automatically.", Icon: LightningIcon },
      { title: "Owners in the loop", desc: "Property status and financials are reported to owners without constant phone tag.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "From tenant request to resolved and reported",
      steps: [
        { agent: "AI Forms", action: "Captures the tenant request with all the details needed" },
        { agent: "AI Task Manager", action: "Triages urgency and assigns the right owner" },
        { agent: "AI Automations", action: "Dispatches the vendor and chases completion" },
        { agent: "AI Calendar", action: "Tracks the renewal, inspection, or follow-up date" },
        { agent: "AI Dashboards", action: "Reports property status and spend to the owner" },
      ],
    },
    features: [
      { title: "Request triage", desc: "Tenant requests captured, prioritized, and assigned so nothing falls through the cracks.", Icon: FunnelIcon },
      { title: "Vendor coordination", desc: "AI dispatches vendors and chases completion so repairs don't stall on a forgotten call.", Icon: ArrowsClockwiseIcon },
      { title: "Owner reporting", desc: "Live property status, spend, and occupancy shared with owners without manual updates.", Icon: ChartLineUpIcon },
      { title: "Lease and renewal tracking", desc: "Renewals, notices, and inspections tracked in one calendar the whole team trusts.", Icon: CalendarCheckIcon },
    ],
    agents: ["AI Task Manager", "AI Automations", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "units managed per person" },
      { value: "50%", label: "faster request resolution" },
      { value: "6 hrs", label: "saved per manager weekly" },
    ],
    story: {
      quote:
        "Tenant requests used to slip through email and text. Now everything is triaged, the vendor is dispatched, and owners get updates automatically — we manage far more doors with the same team.",
      name: "Sofia Mendes",
      role: "Director of Operations, property management company",
    },
    faqs: [
      { q: "Can Onita manage requests across a large portfolio?", a: "Yes. Every property and unit stays organized, and requests are triaged and assigned automatically so nothing falls through the cracks no matter how many doors you manage." },
      { q: "How does vendor coordination work?", a: "AI Automations dispatch the right vendor for each request and chase completion, so repairs and maintenance don't stall on a forgotten follow-up call." },
      { q: "Can owners see how their properties are doing?", a: "AI Dashboards give owners live status, spend, and occupancy, so they stay informed without calling your team for updates." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your request forms, vendor workflows, renewal calendars, and owner dashboards are configured before your team starts." },
    ],
    related: ["construction-companies", "law-firms", "it-service-providers"],
  },
  {
    slug: "startups",
    name: "Startups",
    group: "Functional teams",
    accent: "accent",
    Icon: RocketLaunchIcon,
    ogIcon: "RocketLaunch",
    metaTitle: "Onita for Startups — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for startups. Use AI to run product, ops, and go-to-market in one place — move faster and do more with a small team.",
    eyebrow: "Startups",
    headline: "Move faster with a small team ",
    headlineEmphasis: "and AI in every workflow",
    subhead:
      "Onita gives startups AI products that run product, operations, and go-to-market in one place — so a lean team ships faster and does the work of a much bigger one.",
    summary:
      "Onita is an AI-era productivity platform that helps startups run product, operations, and go-to-market in one place with AI multiplying a small team's output.",
    comparison: [
      { old: "Five tools stitched together as the team grows", onita: "One AI-powered workspace that scales with you" },
      { old: "Founders doing project and ops admin at midnight", onita: "AI Project Manager and Task Manager run the day-to-day" },
      { old: "Standups and syncs just to know what's happening", onita: "AI Dashboards give the whole team live status" },
      { old: "Docs, updates, and reports written by hand", onita: "AI Notes drafts investor updates and specs fast" },
    ],
    pillars: [
      { title: "Do more with less", desc: "AI multiplies a small team's output so you compete without a big headcount.", Icon: RocketLaunchIcon },
      { title: "One place for everything", desc: "Product, ops, and go-to-market live in a single workspace that scales with you.", Icon: KanbanIcon },
      { title: "Founder time back", desc: "The AI runs the coordination and drafting so founders work on the business.", Icon: LightningIcon },
    ],
    workflow: {
      title: "From idea to shipped to investor update",
      steps: [
        { agent: "AI Project Manager", action: "Turns the roadmap into a plan with owners and dates" },
        { agent: "AI Task Manager", action: "Keeps the whole team moving without daily standups" },
        { agent: "AI Meeting Notetaker", action: "Captures customer and team calls into action" },
        { agent: "AI Notes", action: "Drafts the specs, docs, and investor update" },
        { agent: "AI Dashboards", action: "Shows traction and progress to the founders" },
      ],
    },
    features: [
      { title: "Roadmap to execution", desc: "AI turns your roadmap into an assigned plan and keeps it moving as priorities shift.", Icon: KanbanIcon },
      { title: "Lean-team coordination", desc: "The team stays in sync without endless standups, so everyone builds instead of syncing.", Icon: UsersThreeIcon },
      { title: "Investor-ready updates", desc: "Investor updates and internal docs drafted from your live progress and metrics.", Icon: FileTextIcon },
      { title: "One scalable workspace", desc: "Product, ops, and GTM in one place that grows with you — no re-platforming later.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Project Manager", "AI Notes", "AI Dashboards"],
    metrics: [
      { value: "3x", label: "output per team member" },
      { value: "50%", label: "less time in status meetings" },
      { value: "1", label: "workspace instead of five tools" },
    ],
    story: {
      quote:
        "As a five-person team, Onita is our unfair advantage. The AI runs the coordination and drafts our updates, so we ship like a company three times our size.",
      name: "Aisha Bello",
      role: "Co-founder & CEO, early-stage startup",
    },
    faqs: [
      { q: "Is Onita too much for a small team?", a: "No — it's built to make small teams punch above their weight. The AI runs the coordination and drafting so a lean team does the work of a much bigger one, without adding tools or headcount." },
      { q: "Will it scale as we grow?", a: "Yes. Onita is one workspace for product, ops, and go-to-market that grows with you, so you avoid stitching together new tools every time the team expands." },
      { q: "Can it help with investor updates?", a: "The AI Notes drafts investor updates and internal docs from your live progress and metrics, so founders spend minutes reviewing instead of hours writing." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your roadmap, workflows, docs, and dashboards are configured to fit how your startup works before you dive in." },
    ],
    related: ["sales-teams", "consulting-businesses", "marketing-agencies"],
  },
  {
    slug: "sales-teams",
    name: "Sales Teams",
    group: "Functional teams",
    accent: "success",
    Icon: TrendUpIcon,
    ogIcon: "TrendUp",
    metaTitle: "Onita for Sales Teams — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for sales teams. Use AI to capture calls, follow up, and forecast — so reps spend more time selling and less on admin.",
    eyebrow: "Sales Teams",
    headline: "Close more deals ",
    headlineEmphasis: "with AI handling the admin",
    subhead:
      "Onita gives sales teams AI products that capture every call, draft the follow-up, and keep the pipeline current — so reps spend their time selling instead of updating records.",
    summary:
      "Onita is an AI-era productivity platform that helps sales teams capture calls, automate follow-up, and forecast the pipeline in one place with AI handling the admin.",
    comparison: [
      { old: "Reps updating records instead of selling", onita: "AI Meeting Notetaker logs every call automatically" },
      { old: "Follow-ups forgotten and deals gone cold", onita: "AI Automations draft and schedule every follow-up" },
      { old: "Pipeline reviews built from stale, hand-typed data", onita: "AI Dashboards keep the pipeline and forecast live" },
      { old: "Proposals and recaps written from scratch", onita: "AI Notes drafts recaps and proposals instantly" },
    ],
    pillars: [
      { title: "More selling time", desc: "AI handles call logging and follow-up so reps stay in front of prospects.", Icon: TrendUpIcon },
      { title: "No deal goes cold", desc: "Every follow-up is drafted and scheduled, so nothing slips between conversations.", Icon: BellRingingIcon },
      { title: "A forecast you trust", desc: "The pipeline stays current automatically, so reviews run on real data.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "From discovery call to closed deal",
      steps: [
        { agent: "AI Meeting Notetaker", action: "Captures the sales call and logs it to the deal" },
        { agent: "AI Notes", action: "Drafts the recap and follow-up email" },
        { agent: "AI Automations", action: "Schedules next steps so the deal keeps moving" },
        { agent: "AI Task Manager", action: "Keeps the rep on top of every open opportunity" },
        { agent: "AI Dashboards", action: "Updates the pipeline and forecast for the manager" },
      ],
    },
    features: [
      { title: "Automatic call capture", desc: "Every sales call is recorded, summarized, and logged to the deal with no manual entry.", Icon: NotePencilIcon },
      { title: "Follow-up automation", desc: "Recaps and next steps drafted and scheduled so no deal goes cold between calls.", Icon: BellRingingIcon },
      { title: "Live pipeline and forecast", desc: "The pipeline stays current automatically, so managers forecast on real data.", Icon: ChartLineUpIcon },
      { title: "Proposal drafting", desc: "Proposals and recaps generated from the conversation, ready for the rep to send.", Icon: FileTextIcon },
    ],
    agents: ["AI Meeting Notetaker", "AI Automations", "AI Dashboards"],
    metrics: [
      { value: "2x", label: "more selling time per rep" },
      { value: "35%", label: "more follow-ups completed" },
      { value: "5 hrs", label: "of admin saved per rep weekly" },
    ],
    story: {
      quote:
        "My reps stopped living in data entry. Onita captures every call, drafts the follow-up, and keeps the pipeline honest — so our forecast is finally something I can trust.",
      name: "Michael Chen",
      role: "VP of Sales, B2B software company",
    },
    faqs: [
      { q: "Does Onita replace our CRM?", a: "Onita becomes where reps actually work — capturing calls, drafting follow-ups, and keeping the pipeline current — so the admin that reps normally skip in a CRM finally happens automatically." },
      { q: "How does it capture sales calls?", a: "The AI Meeting Notetaker records each call, summarizes it, and logs it to the deal, so reps leave every conversation with the record and next steps already handled." },
      { q: "Will our forecast actually be accurate?", a: "Because the pipeline updates automatically from real activity instead of manual entry, AI Dashboards give managers a live, trustworthy forecast to run reviews on." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your pipeline stages, follow-up workflows, proposal templates, and dashboards are configured before your reps start." },
    ],
    related: ["startups", "marketing-agencies", "executive-teams"],
  },
  {
    slug: "executive-teams",
    name: "Executive Teams",
    group: "Functional teams",
    accent: "brand",
    Icon: UsersThreeIcon,
    ogIcon: "UsersThree",
    metaTitle: "Onita for Executive Teams — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for executive teams. Use AI to run meetings, track priorities, and see the whole business — decide faster with less noise.",
    eyebrow: "Executive Teams",
    headline: "See the whole business and decide faster ",
    headlineEmphasis: "with AI cutting the noise",
    subhead:
      "Onita gives leadership teams AI products that run meetings, track priorities to owners, and surface the numbers that matter — so executives spend their time deciding, not chasing updates.",
    summary:
      "Onita is an AI-era productivity platform that helps executive teams run meetings, track company priorities, and see performance in one place with AI cutting the noise.",
    comparison: [
      { old: "Leadership decisions lost in untracked meeting notes", onita: "AI Meeting Notetaker turns decisions into owned actions" },
      { old: "Chasing every function for a status update", onita: "AI Dashboards surface company-wide status in one view" },
      { old: "Board decks assembled by hand for days", onita: "AI Slides and Docs Assistant draft board materials fast" },
      { old: "Priorities set in offsites, then forgotten", onita: "AI Task Manager keeps strategic priorities on track" },
    ],
    pillars: [
      { title: "Decisions that stick", desc: "Every meeting decision becomes an owned action the AI tracks to completion.", Icon: CheckCircleIcon },
      { title: "The whole business, one view", desc: "Company-wide status and metrics surface automatically — no more chasing functions.", Icon: ChartLineUpIcon },
      { title: "Less noise, sharper focus", desc: "The AI cuts through the reporting so leaders spend time on the decisions that matter.", Icon: BrainIcon },
    ],
    workflow: {
      title: "From leadership meeting to executed strategy",
      steps: [
        { agent: "AI Meeting Notetaker", action: "Captures the leadership meeting and every decision" },
        { agent: "AI Task Manager", action: "Turns decisions into priorities with clear owners" },
        { agent: "AI Dashboards", action: "Surfaces company-wide status and the metrics that matter" },
        { agent: "AI Slides", action: "Drafts the board and all-hands materials" },
        { agent: "AI Notes", action: "Writes the update and circulates it to the team" },
      ],
    },
    features: [
      { title: "Decision tracking", desc: "Leadership decisions become owned actions the AI follows to completion — nothing forgotten.", Icon: CheckCircleIcon },
      { title: "Company-wide visibility", desc: "Status and metrics from every function surface in one executive view, always current.", Icon: ChartLineUpIcon },
      { title: "Board-ready materials", desc: "Board decks and all-hands updates drafted from your live data, ready to refine.", Icon: FileTextIcon },
      { title: "Priority alignment", desc: "Strategic priorities from offsites and reviews stay tracked instead of fading away.", Icon: KanbanIcon },
    ],
    agents: ["AI Meeting Notetaker", "AI Dashboards", "AI Slides"],
    metrics: [
      { value: "50%", label: "less time chasing updates" },
      { value: "2x", label: "faster board prep" },
      { value: "100%", label: "of decisions tracked to owners" },
    ],
    story: {
      quote:
        "Our leadership meetings finally produce action that sticks. Onita tracks every decision to an owner and gives me the whole company in one view — I spend my time deciding, not chasing.",
      name: "Elena Vasquez",
      role: "Chief Operating Officer, mid-market company",
    },
    faqs: [
      { q: "How does Onita help our leadership meetings?", a: "The AI Meeting Notetaker captures every decision and turns it into an owned action the AI tracks to completion, so what you agree in the room actually gets executed." },
      { q: "Can we see the whole business in one place?", a: "Yes. AI Dashboards pull status and metrics from every function into one executive view that stays current, so you stop chasing individual teams for updates." },
      { q: "Does it help with board prep?", a: "AI Slides and the AI Notes draft board decks and all-hands updates from your live data, turning days of assembly into a quick review and refine." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your leadership workflows, company dashboards, and board templates are configured to fit how your team runs before you begin." },
    ],
    related: ["startups", "sales-teams", "consulting-businesses"],
  },
];

export const useCaseMap: Record<string, Solution> = Object.fromEntries(
  useCases.map((u) => [u.slug, u])
);

export function getUseCase(slug: string): Solution | undefined {
  return useCaseMap[slug];
}

export const useCaseGroups = ["Service businesses", "Functional teams"] as const;
