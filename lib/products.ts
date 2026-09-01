import type { Icon } from "@phosphor-icons/react";
import type { OgIconName } from "@/lib/og-icons";
import {
  KanbanIcon,
  ChartLineUpIcon,
  LightningIcon,
  CheckCircleIcon,
  CalendarDotsIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  NotePencilIcon,
  SquaresFourIcon,
  FileTextIcon,
  PresentationChartIcon,
  ListChecksIcon,
  TableIcon,
  EnvelopeSimpleIcon,
  SparkleIcon,
  MagicWandIcon,
  ArrowsClockwiseIcon,
  TreeStructureIcon,
  ClockCountdownIcon,
  FunnelIcon,
  PulseIcon,
  ChatsCircleIcon,
  MagnifyingGlassIcon,
  UsersThreeIcon,
  ShieldCheckIcon,
  GitBranchIcon,
  BellRingingIcon,
  ChartBarIcon,
  GaugeIcon,
  PaintBrushBroadIcon,
  SlidersHorizontalIcon,
  SignpostIcon,
  PlugsConnectedIcon,
  PencilSimpleLineIcon,
  StackIcon,
  LinkIcon,
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
    slug: "project-manager",
    name: "AI Project Manager",
    tab: "AI Project Manager",
    category: "Project management",
    accent: "brand",
    ogIcon: "Kanban",
    Icon: KanbanIcon,
    shots: [S.c, S.a],
    metaTitle: "AI Project Manager — Plan & Run Projects Automatically",
    metaDescription:
      "Onita's AI Project Manager creates entire projects in seconds, assigns tasks, and keeps statuses current for you — so projects finish faster without the babysitting.",
    eyebrow: "AI Project Manager",
    headline: "Plan and manage projects",
    headlineEmphasis: "automatically",
    subhead:
      "Describe the goal and Onita builds the entire project — tasks, deadlines, assignees, and stages — in seconds. Then it updates statuses, reassigns work, and flags delays for you, so nothing needs babysitting.",
    definitionTitle: "What is the AI Project Manager?",
    definition:
      "The AI Project Manager is Onita's tool for planning and running projects on autopilot. Give it a brief and it drafts a complete, ~90% ready project plan. As work moves, it keeps statuses current, rebalances assignments, and warns you early when a deadline is at risk — replacing the manual tracking that eats a project manager's week.",
    highlights: ["Entire projects built in seconds", "Statuses updated for you", "Delays flagged before they hurt"],
    features: [
      { title: "Create projects with AI", desc: "Describe the project, drop in a doc, and Onita builds tasks, deadlines, assignees, and stages — saving hours per project.", Icon: MagicWandIcon },
      { title: "No more status chasing", desc: "Onita updates statuses, assigns next steps, and flags delays automatically, so you stop pinging your team for updates.", Icon: ArrowsClockwiseIcon },
      { title: "Optimal plan, always", desc: "It analyzes tasks, priorities, and capacity to build the best plan — and reflows it whenever anything changes.", Icon: TreeStructureIcon },
      { title: "Collaboration in context", desc: "Ask questions and discuss right inside projects and tasks, so decisions live with the work — not lost in chat.", Icon: ChatsCircleIcon },
    ],
    workforceAngle: {
      title: "Less project admin, more delivery",
      desc: "The AI handles setup and upkeep — the parts nobody enjoys. Projects get done meaningfully faster because idle time and manual tracking disappear, while your team focuses on execution.",
    },
    useCases: [
      { audience: "Teams", title: "Kick off in minutes", desc: "Spin up a fully structured project from a short brief instead of a blank board." },
      { audience: "Project managers", title: "Stop babysitting", desc: "Statuses update themselves, so standups are about decisions, not data entry." },
      { audience: "Leadership", title: "Portfolio at a glance", desc: "Track every active project, milestone, and risk from one place." },
    ],
    outcomes: [
      "Launch projects in seconds, not planning sessions",
      "Keep every board honest without manual updates",
      "Catch slipping deadlines before they surprise you",
    ],
    faqs: [
      { q: "How accurate is an AI-generated project?", a: "It gives you a strong, roughly 90%-ready draft based on your brief and similar past work. You refine it in a few clicks — far faster than starting from scratch." },
      { q: "Can it manage many projects at once?", a: "Yes. The AI Project Manager tracks a whole portfolio, rolling status and risk up so leaders see everything in one view." },
      { q: "Do we set it up ourselves?", a: "No. After your demo, our team configures it around your delivery process, stages, and templates." },
    ],
    related: ["task-manager", "workflows", "dashboards"],
  },
  {
    slug: "workflows",
    name: "AI Automations",
    tab: "AI Automations",
    category: "Workflow automation",
    accent: "warning",
    ogIcon: "Lightning",
    Icon: LightningIcon,
    shots: [S.b, S.d],
    metaTitle: "AI Automations — Turn SOPs Into Workflows in Seconds",
    metaDescription:
      "Onita's AI Workflows turns your SOP docs into working automations with triggers, approvals, and auto-assigned tasks — so repeatable projects run the same way every time.",
    eyebrow: "AI Automations",
    headline: "Automate repeatable projects",
    headlineEmphasis: "and SOPs",
    subhead:
      "Turn the processes living in docs and people's heads into automation. Point Onita at an SOP and it builds a step-by-step workflow — then turns it into a project with tasks auto-assigned to the right people.",
    definitionTitle: "What is AI Workflows?",
    definition:
      "AI Workflows is Onita's automation builder. Write or drop in an SOP and Onita converts it into a repeatable workflow with the right triggers, steps, approvals, and assignments. Your team follows a simple, prioritized task list instead of memorizing a complicated process — and the busywork runs itself.",
    highlights: ["SOP to workflow in seconds", "Auto-assigned tasks", "Human approvals where needed"],
    features: [
      { title: "SOP to automation", desc: "Turn a written process — or an AI-drafted one — into a live, step-by-step workflow automatically.", Icon: MagicWandIcon },
      { title: "Triggers & actions", desc: "Kick off from a form, a status change, a schedule, or an event, then run every step end to end.", Icon: LightningIcon },
      { title: "Approvals built in", desc: "Insert human sign-off on sensitive steps so nothing risky runs without a check.", Icon: GitBranchIcon },
      { title: "A list they can follow", desc: "Each teammate gets a simple, prioritized task list — no need to learn the whole SOP.", Icon: CheckCircleIcon },
    ],
    workforceAngle: {
      title: "Your processes, running on their own",
      desc: "AI Workflows captures how your best people work and makes it repeatable. The routine runs automatically, and your team steps in only for the decisions that need a human.",
    },
    useCases: [
      { audience: "Operations", title: "Standardize everything", desc: "Turn tribal knowledge and SOPs into automations that run the same way every time." },
      { audience: "Teams", title: "Kill the busywork", desc: "Approvals, handoffs, and follow-ups happen automatically instead of by reminder." },
      { audience: "Finance & HR", title: "Controlled by design", desc: "Bake approvals and audit trails into every sensitive process." },
    ],
    outcomes: [
      "Automate processes without building flowcharts",
      "Make your best practices run every time",
      "Keep approvals and control where you need them",
    ],
    faqs: [
      { q: "Do I need to know how to build automations?", a: "No. Share the SOP or describe the process in plain language, and Onita builds the workflow for you." },
      { q: "Can a human still approve steps?", a: "Yes. You choose which steps need sign-off, and the workflow pauses for approval before continuing." },
      { q: "Who builds our workflows?", a: "Our team does the initial build after your demo, mapping your real SOPs into Onita so they run reliably from day one." },
    ],
    related: ["project-manager", "forms", "task-manager"],
  },
  {
    slug: "task-manager",
    name: "AI Task Manager",
    tab: "AI Task Manager",
    category: "Task management",
    accent: "success",
    ogIcon: "CheckCircle",
    Icon: CheckCircleIcon,
    shots: [S.a, S.b],
    metaTitle: "AI Task Manager — Auto-Prioritize & Never Miss a Deadline",
    metaDescription:
      "Onita's AI Task Manager detects and prioritizes your most urgent tasks automatically, gathers to-dos from every app into one list, and makes sure you never miss a deadline.",
    eyebrow: "AI Task Manager",
    headline: "Organize and prioritize",
    headlineEmphasis: "your tasks",
    subhead:
      "Stop deciding what to do next. Onita detects and prioritizes your most urgent, important tasks automatically — pulling them from every app into one global list — and makes sure a deadline never slips.",
    definitionTitle: "What is the AI Task Manager?",
    definition:
      "The AI Task Manager is Onita's tool for capturing and prioritizing your work automatically. It ranks tasks by project, priority, dependencies, deadlines, and duration, gathers to-dos from your other apps into one place, and matches your workload to the time you actually have — so you always know what to work on next.",
    highlights: ["Auto-detected priorities", "One global task list", "Never miss a deadline"],
    features: [
      { title: "Automatic prioritization", desc: "Onita ranks your most urgent, important tasks by deadline, effort, and dependencies — so your list is always in the right order.", Icon: FunnelIcon },
      { title: "Do date ≠ due date", desc: "Onita plans when you'll actually do each task by matching your workload to your free time, so nothing is left to the last minute.", Icon: ClockCountdownIcon },
      { title: "One global list", desc: "Tasks from Gmail, Outlook, Slack, Zoom, Teams, and more flow into a single list automatically.", Icon: StackIcon },
      { title: "Progress you can see", desc: "Subtasks, statuses, and reminders keep every task moving without you chasing it.", Icon: PulseIcon },
    ],
    workforceAngle: {
      title: "The AI does the organizing",
      desc: "You describe the outcome; Onita breaks it into steps, sequences them, and keeps the plan current. It's the difference between managing a list and simply working a plan that's already sorted.",
    },
    useCases: [
      { audience: "Individuals", title: "A calmer day", desc: "Wake up to a prioritized plan instead of a scattered list you have to sort yourself." },
      { audience: "Teams", title: "Nothing dropped", desc: "Requests from chat, email, and meetings become tracked tasks with clear owners." },
      { audience: "Managers", title: "Instant visibility", desc: "See what your team is working on and what's at risk — without a status meeting." },
    ],
    outcomes: [
      "Start every day knowing exactly what to do next",
      "Stop losing action items in chat and email",
      "Match your workload to the time you have",
    ],
    faqs: [
      { q: "How does it decide what's important?", a: "It weighs deadlines, effort, dependencies, and how you've prioritized similar work before — then puts the highest-impact task on top. You can always override it." },
      { q: "Where do tasks come from?", a: "From Onita and your connected tools — email, chat, meetings, docs, and forms — plus anything you add by hand." },
      { q: "Do I set it up myself?", a: "No. After your demo, our team configures it around how you and your team already work." },
    ],
    related: ["calendar", "project-manager", "notetaker"],
  },
  {
    slug: "calendar",
    name: "AI Calendar",
    tab: "AI Calendar",
    category: "Scheduling",
    accent: "brand",
    ogIcon: "CalendarDots",
    Icon: CalendarDotsIcon,
    shots: [S.cal1, S.f],
    metaTitle: "AI Calendar — Auto-Plan Your Day With Smart Scheduling",
    metaDescription:
      "Onita's AI Calendar time-blocks your day automatically, tells you what to work on next, re-plans when things change, and combines all your calendars into one view.",
    eyebrow: "AI Calendar",
    headline: "Auto-plan your day with",
    headlineEmphasis: "smart scheduling",
    subhead:
      "Let AI run your schedule. Onita takes your projects and tasks, prioritizes them, and time-blocks your calendar — then re-optimizes dozens of times a day so you always know exactly what to work on next.",
    definitionTitle: "What is the AI Calendar?",
    definition:
      "The AI Calendar is Onita's scheduling assistant. It plans your day by time-blocking tasks and focus time in the right slots, automatically re-plans whenever anything changes, and combines all your calendars — work and personal — into a single view that prevents double-booking.",
    highlights: ["Your day, time-blocked for you", "Re-plans automatically", "All calendars in one view"],
    features: [
      { title: "Automatic day planning", desc: "Onita takes your tasks and priorities and time-blocks them into the hours you actually have.", Icon: CalendarDotsIcon },
      { title: "Know what's next", desc: "At any moment, Onita tells you the single best task to work on — optimized across deadlines and priorities.", Icon: SparkleIcon },
      { title: "Auto re-planning", desc: "When a task slips or a meeting moves, your whole day reflows automatically to stay optimal.", Icon: ArrowsClockwiseIcon },
      { title: "All calendars combined", desc: "Merge Google, Outlook, and iCloud into one interface so you never double-book work and life.", Icon: ShieldCheckIcon },
    ],
    workforceAngle: {
      title: "Your schedule manages itself",
      desc: "Instead of playing calendar tetris by hand, Onita keeps your day optimized for your priorities all day long. You just show up to the right thing next.",
    },
    useCases: [
      { audience: "Individuals", title: "A day that makes sense", desc: "Wake up to a planned day with focus time already protected." },
      { audience: "Teams", title: "Effortless scheduling", desc: "Keep everyone's time aligned to priorities without constant coordination." },
      { audience: "Leaders", title: "Time on what matters", desc: "Your calendar reflects priorities, not just whoever booked first." },
    ],
    outcomes: [
      "Stop planning your day — let AI do it",
      "Always know the best task to do next",
      "Protect focus time even when plans change",
    ],
    faqs: [
      { q: "Does it connect to my existing calendar?", a: "Yes. Onita works with Google, Outlook, and iCloud and manages them intelligently in one place." },
      { q: "How does it decide my day?", a: "It uses your priorities, task deadlines, and working preferences to place the right work in the right slots, re-planning as things change." },
      { q: "Who configures it?", a: "We do. After your demo we set it up with your working hours, focus preferences, and scheduling rules." },
    ],
    related: ["task-manager", "meeting-assistant", "notetaker"],
  },
  {
    slug: "meeting-assistant",
    name: "AI Meeting Assistant",
    tab: "AI Meeting Assistant",
    category: "Scheduling",
    accent: "accent",
    ogIcon: "CalendarCheck",
    Icon: CalendarCheckIcon,
    shots: [S.f, S.d],
    metaTitle: "AI Meeting Assistant — Effortless Scheduling & Booking Links",
    metaDescription:
      "Onita's AI Meeting Assistant creates booking pages, shares your real availability, and schedules meetings automatically at times that protect your focus.",
    eyebrow: "AI Meeting Assistant",
    headline: "Simplify meeting scheduling",
    headlineEmphasis: "and booking links",
    subhead:
      "Book meetings in seconds, not email threads. Onita creates booking pages, shares your live availability, and schedules calls at the times that best protect your focus — no back-and-forth required.",
    definitionTitle: "What is the AI Meeting Assistant?",
    definition:
      "The AI Meeting Assistant is Onita's scheduling tool for meetings. It generates shareable booking links, shows your real availability across every calendar, and picks meeting times that maximize focus time — turning the usual back-and-forth into a single click.",
    highlights: ["Instant booking links", "Real cross-calendar availability", "Times that protect focus"],
    features: [
      { title: "Booking pages in seconds", desc: "Share a link and let people grab a slot — Onita creates the page and handles the invites.", Icon: CalendarCheckIcon },
      { title: "Real availability", desc: "Availability is drawn from all your calendars at once, so you never get double-booked.", Icon: UsersThreeIcon },
      { title: "Focus-friendly scheduling", desc: "Onita clusters meetings and defends deep-work time so your calendar stays workable.", Icon: ShieldCheckIcon },
      { title: "Auto follow-up", desc: "Meetings flow straight into your day plan, and notes and action items are captured for you.", Icon: NotePencilIcon },
    ],
    workforceAngle: {
      title: "Scheduling that runs itself",
      desc: "No coordinator, no email ping-pong. Onita finds the time, books it, and fits it into a day that's already optimized around your priorities.",
    },
    useCases: [
      { audience: "Individuals", title: "One link, done", desc: "Send a booking link instead of trading five emails to find a time." },
      { audience: "Sales & client teams", title: "Faster booking", desc: "Let prospects and clients self-schedule against your real availability." },
      { audience: "Managers", title: "Fewer, better meetings", desc: "Cluster calls and protect focus so meetings don't fragment the day." },
    ],
    outcomes: [
      "Book meetings without the back-and-forth",
      "Never double-book across calendars again",
      "Keep meetings from eating your focus time",
    ],
    faqs: [
      { q: "How is this different from the AI Calendar?", a: "The AI Calendar plans your work; the AI Meeting Assistant handles booking meetings with others — booking links, availability, and invites. They work together." },
      { q: "Can people self-schedule with me?", a: "Yes. Share a booking page and invitees pick from your real availability, with the meeting booked automatically." },
      { q: "Who sets it up?", a: "Our team configures it after your demo, connected to your calendars and scheduling preferences." },
    ],
    related: ["calendar", "notetaker", "task-manager"],
  },
  {
    slug: "chat",
    name: "AI Chat",
    tab: "AI Chat",
    category: "Knowledge & assistant",
    accent: "info",
    ogIcon: "ChatCircleText",
    Icon: ChatCircleTextIcon,
    shots: [S.c, S.e],
    metaTitle: "AI Chat — The Fastest Way to Go From Question to Done",
    metaDescription:
      "Onita's AI Chat knows all your work — tasks, projects, docs, notes, and meetings. Ask anything and it finds the answer, drafts the doc, or creates the task instantly.",
    eyebrow: "AI Chat",
    headline: "The fastest way to go from",
    headlineEmphasis: "question to done",
    subhead:
      "Ask Onita anything and get an answer grounded in your actual work — not a generic reply. Because it knows your tasks, projects, docs, notes, and meetings, AI Chat can find, draft, and do in a single message.",
    definitionTitle: "What is AI Chat?",
    definition:
      "AI Chat is Onita's assistant that understands all of your work. It's hyper-personalized across your tasks, projects, docs, notes, calendar, and meetings, so you can search everything instantly, ask questions in plain language, and turn answers into action — creating tasks, drafting docs, or kicking off workflows without leaving the conversation.",
    highlights: ["Knows all your work", "Search everything instantly", "Answers that turn into action"],
    features: [
      { title: "Grounded in your data", desc: "AI Chat draws on your tasks, projects, docs, notes, and meetings — so answers are personal and accurate, not generic.", Icon: SparkleIcon },
      { title: "Instant search", desc: "Find any doc, note, task, project, or decision across your whole workspace in seconds.", Icon: MagnifyingGlassIcon },
      { title: "Do, don't just ask", desc: "Turn a reply into a task, a draft, or a workflow without leaving the chat.", Icon: LightningIcon },
      { title: "Always in context", desc: "Ask follow-ups naturally — Onita remembers what you're working on and keeps up.", Icon: ChatsCircleIcon },
    ],
    workforceAngle: {
      title: "One place to ask, and it's done",
      desc: "Instead of hunting through apps and tabs, you ask once. AI Chat finds the answer and takes the next step, collapsing question-to-done into a single move.",
    },
    useCases: [
      { audience: "Individuals", title: "Find anything fast", desc: "Ask where something is or what was decided and get the answer instantly." },
      { audience: "Teams", title: "Shared knowledge", desc: "Everyone can query the team's work without interrupting a colleague." },
      { audience: "Leaders", title: "Answers on demand", desc: "Ask about status, risk, or progress and get a grounded reply in seconds." },
    ],
    outcomes: [
      "Go from question to done in one message",
      "Stop hunting across apps and tabs",
      "Get answers grounded in your real work",
    ],
    faqs: [
      { q: "How is this different from a generic AI chatbot?", a: "AI Chat is connected to your actual work, so answers are specific to your projects and data — and it can take action, not just talk." },
      { q: "Which AI models power it?", a: "Onita uses leading models from providers like Anthropic and OpenAI, chosen per task, all included in your engagement." },
      { q: "Who sets it up?", a: "Our team connects your knowledge sources and tools after your demo, so AI Chat is useful from day one." },
    ],
    related: ["docs-assistant", "notetaker", "dashboards"],
  },
  {
    slug: "notetaker",
    name: "AI Meeting Notetaker",
    tab: "AI Meeting Notetaker",
    category: "Meetings & notes",
    accent: "accent",
    ogIcon: "Sparkle",
    Icon: NotePencilIcon,
    shots: [S.d, S.e],
    metaTitle: "AI Meeting Notetaker — Perfect Notes, Summaries & Follow-Ups",
    metaDescription:
      "Onita's AI Meeting Notetaker takes perfect notes, writes summaries and action items, and sends follow-ups for you — then turns decisions into tasks automatically.",
    eyebrow: "AI Meeting Notetaker",
    headline: "Auto-capture meeting notes",
    headlineEmphasis: "and summaries",
    subhead:
      "Show up and be present. Onita joins your meetings, takes perfect notes, and writes the summary, key takeaways, and action items — then turns the follow-ups into tasks assigned to the right people.",
    definitionTitle: "What is the AI Meeting Notetaker?",
    definition:
      "The AI Meeting Notetaker is Onita's AI assistant for meetings. It records and transcribes your calls, writes clean summaries with decisions and action items, and even sends the follow-up email for you. Notes, recordings, and transcripts become Onita docs automatically, and action items become tracked tasks — so every meeting keeps working after it ends.",
    highlights: ["Perfect notes and summaries", "Action items become tasks", "Follow-up emails sent for you"],
    features: [
      { title: "Automatic notes", desc: "Every meeting is transcribed and summarized so you can focus on the conversation, not your keyboard.", Icon: NotePencilIcon },
      { title: "Action items that stick", desc: "Follow-ups become tasks with owners and due dates in the AI Task Manager — no re-typing your notes.", Icon: CheckCircleIcon },
      { title: "Follow-up emails, handled", desc: "Onita drafts and sends the recap email with summary, notes, and action items after the call.", Icon: SparkleIcon },
      { title: "Searchable recordings", desc: "Full transcripts and recordings, labeled with time codes, so you can jump to any moment instantly.", Icon: MagnifyingGlassIcon },
    ],
    workforceAngle: {
      title: "The meeting keeps working after it ends",
      desc: "Onita doesn't just record — it turns talk into action. Decisions become tasks, notes become docs, and the follow-through happens without anyone playing secretary.",
    },
    useCases: [
      { audience: "Individuals", title: "Be fully present", desc: "Stop splitting attention between listening and note-taking." },
      { audience: "Teams", title: "Aligned after every call", desc: "Everyone leaves with the same summary and the same action items." },
      { audience: "Sales & client teams", title: "Perfect recall", desc: "Every client conversation captured, searchable, and turned into next steps." },
    ],
    outcomes: [
      "Never take manual meeting notes again",
      "Turn every decision into tracked follow-up",
      "Give absentees a perfect recap in seconds",
    ],
    faqs: [
      { q: "Which meetings does it work with?", a: "Video calls and in-person meetings alike — Onita captures the conversation and produces notes and action items either way." },
      { q: "How do action items get tracked?", a: "They flow straight into the AI Task Manager with the right owner and due date, so follow-up is automatic." },
      { q: "Can I still take my own notes?", a: "Yes. Your notes get combined with Onita's AI notes, so nothing you jotted down is lost." },
    ],
    related: ["meeting-assistant", "task-manager", "docs-assistant"],
  },
  {
    slug: "dashboards",
    name: "AI Dashboards",
    tab: "AI Dashboards",
    category: "Reporting & analytics",
    accent: "brand",
    ogIcon: "SquaresFour",
    Icon: SquaresFourIcon,
    shots: [S.dash1, S.dash2],
    metaTitle: "AI Dashboards — Track Progress & ROI in One View",
    metaDescription:
      "Onita's AI Dashboards visualize project progress, team capacity, and bottlenecks in one live view — with written insights that help teams get up to 40% more efficient.",
    eyebrow: "AI Dashboards",
    headline: "Track project progress",
    headlineEmphasis: "in one view",
    subhead:
      "Stop exporting spreadsheets. Onita's AI Dashboards visualize progress, capacity, and bottlenecks in one live view — and explain what's happening in plain language, so you get more efficient without the analysis.",
    definitionTitle: "What are AI Dashboards?",
    definition:
      "AI Dashboards are Onita's reporting and business-intelligence view. They read your live work, build the right charts automatically, and write plain-language insights about bottlenecks, capacity, and the ROI of every project — so reporting stops being a weekly chore and simply stays available, always current.",
    highlights: ["Live progress in one view", "Written insights, not just charts", "Capacity and bottlenecks surfaced"],
    features: [
      { title: "Auto-built dashboards", desc: "Onita picks the right metrics and visuals for your question and assembles the dashboard for you.", Icon: ChartBarIcon },
      { title: "Capacity at a glance", desc: "See who's over or under capacity so you can rebalance work and prevent burnout.", Icon: GaugeIcon },
      { title: "Understand ROI", desc: "Intelligent dashboards surface bottlenecks and show the exact ROI of every project.", Icon: ChartLineUpIcon },
      { title: "Scheduled delivery", desc: "The right report reaches the right people automatically, on the cadence they need.", Icon: BellRingingIcon },
    ],
    workforceAngle: {
      title: "Insight without the analysis",
      desc: "Onita doesn't just chart your data — it interprets it. You get the story and the recommendation, so you spend your time deciding, not building spreadsheets.",
    },
    useCases: [
      { audience: "Leadership", title: "The business at a glance", desc: "A live view of performance with the narrative already written." },
      { audience: "Managers", title: "No more report night", desc: "Weekly reports assemble and send themselves, with insights included." },
      { audience: "Operations", title: "Find the bottleneck", desc: "See where work piles up and rebalance before it becomes a problem." },
    ],
    outcomes: [
      "Replace manual reporting with live dashboards",
      "Get the insight, not just the chart",
      "Rebalance capacity before people burn out",
    ],
    faqs: [
      { q: "Where do dashboards get their data?", a: "From your work inside Onita — tasks, projects, forms, and docs — plus any tools you connect. They update in real time." },
      { q: "Can they explain the numbers?", a: "Yes. Every dashboard includes a written summary of what's happening and a recommended next step, in plain language." },
      { q: "Do we build them?", a: "No. After your demo we set up the dashboards around the metrics and audiences that matter to your business." },
    ],
    related: ["project-manager", "workflows", "task-manager"],
  },
  {
    slug: "docs-assistant",
    name: "AI Notes",
    tab: "AI Notes",
    category: "Docs & notes",
    accent: "info",
    ogIcon: "FileText",
    Icon: FileTextIcon,
    shots: [S.docs1, S.docs2, S.docs3],
    metaTitle: "AI Notes — Write & Organize Docs Faster With AI",
    metaDescription:
      "Onita's AI Docs Assistant drafts and proofreads in seconds, turns notes into tasks and projects, and keeps every doc organized and searchable in one place.",
    eyebrow: "AI Notes",
    headline: "Help writing and organizing",
    headlineEmphasis: "docs faster",
    subhead:
      "Write in seconds, not hours. Onita drafts and proofreads for you, turns messy notes into clean tasks and projects, and keeps notes, wikis, and processes organized and searchable in one place.",
    definitionTitle: "What is AI Notes?",
    definition:
      "AI Notes is Onita's document editor with AI built in. It drafts and proofreads content, transforms words in your docs into organized tasks and projects, and gives you one home for notes, wikis, and processes. Because Onita knows all your work, it can create, edit, summarize, and search across everything — no lengthy prompts required.",
    highlights: ["Draft and proofread in seconds", "Notes become tasks and projects", "One organized, searchable home"],
    features: [
      { title: "AI drafting & proofreading", desc: "Turn a prompt or an outline into a polished draft, and tighten your writing as you go.", Icon: PencilSimpleLineIcon },
      { title: "Words into work", desc: "Onita transforms notes and brainstorms into clean tasks and organized projects — without breaking your flow.", Icon: MagicWandIcon },
      { title: "Everything in one place", desc: "Write notes, document processes, and build wikis; keep them private or share as links.", Icon: StackIcon },
      { title: "Knows all your work", desc: "Ask anything and search across every note and doc instantly, with answers grounded in your data.", Icon: MagnifyingGlassIcon },
    ],
    workforceAngle: {
      title: "AI writes the first 80%",
      desc: "Give Onita the intent and the facts; it produces a strong draft, files it, and pulls out the tasks hiding inside. You add the judgment and the finishing touch.",
    },
    useCases: [
      { audience: "Individuals", title: "Never face a blank page", desc: "Get a solid draft to react to instead of starting cold." },
      { audience: "Teams", title: "On-brand every time", desc: "Consistent tone and structure across proposals, briefs, and processes." },
      { audience: "Operations", title: "Living documentation", desc: "SOPs and wikis that stay current, organized, and easy to find." },
    ],
    outcomes: [
      "Turn hours of writing into minutes",
      "Pull forgotten tasks out of old notes",
      "Find any doc instantly — it organizes itself",
    ],
    faqs: [
      { q: "Can it write in our voice?", a: "Yes. It learns your tone and templates so drafts sound like you, not like generic AI text." },
      { q: "How does it turn docs into tasks?", a: "Onita detects action items inside your notes and docs and pulls them into your task list automatically." },
      { q: "Who sets it up?", a: "Our team does. After your demo we configure it with your templates, brand voice, and knowledge sources." },
    ],
    related: ["chat", "notetaker", "slides"],
  },
  {
    slug: "slides",
    name: "AI Slides",
    tab: "AI Slides",
    category: "Presentations",
    accent: "warning",
    ogIcon: "PresentationChart",
    Icon: PresentationChartIcon,
    shots: [S.slides1, S.e],
    metaTitle: "AI Slides — Presentations Built From Your Live Data",
    metaDescription:
      "Onita's AI Slides builds on-brand presentations from your live data in seconds — drafting the story, designing the layout, and keeping every number current.",
    eyebrow: "AI Slides",
    headline: "Decks that build",
    headlineEmphasis: "themselves",
    subhead:
      "Go from prompt to presentation in seconds. Onita drafts the story, designs on-brand layouts, and pulls in your live numbers — then keeps them current — so building a deck stops eating your afternoon.",
    definitionTitle: "What is AI Slides?",
    definition:
      "AI Slides is Onita's AI presentation builder. Describe the deck you need — a client update, a pitch, a review — and it generates a structured, on-brand presentation populated with your live data. When the numbers change, the slides update, so your decks are never stale the moment you export them.",
    highlights: ["Full decks in seconds", "On-brand templates", "Auto-updated from live data"],
    features: [
      { title: "AI-built decks", desc: "Turn a prompt or a report into a structured, presentable deck without starting from a blank slide.", Icon: MagicWandIcon },
      { title: "On-brand by default", desc: "Your fonts, colors, and layouts applied automatically, so every deck looks like your team made it.", Icon: PaintBrushBroadIcon },
      { title: "Live data slides", desc: "Charts and figures pull from your real numbers and refresh when the data does.", Icon: ChartLineUpIcon },
      { title: "Fast iteration", desc: "Reorder, rewrite, and restyle with AI so polishing takes minutes, not hours.", Icon: SlidersHorizontalIcon },
    ],
    workforceAngle: {
      title: "AI does the deck-building",
      desc: "The structure, the design, and the data wrangling are handled for you. You bring the message and the room — Onita handles the busywork behind a great presentation.",
    },
    useCases: [
      { audience: "Individuals", title: "Present without the prep", desc: "Get a polished draft deck to refine instead of building from scratch." },
      { audience: "Client teams", title: "Updates in minutes", desc: "Generate client-ready decks from live account data on demand." },
      { audience: "Leadership", title: "Reviews made easy", desc: "Board and business reviews assembled from current numbers automatically." },
    ],
    outcomes: [
      "Build presentations in seconds, not hours",
      "Keep every deck on-brand automatically",
      "Never present stale numbers again",
    ],
    faqs: [
      { q: "Will slides match our branding?", a: "Yes. Onita applies your templates, fonts, and colors so decks look professionally designed and on-brand." },
      { q: "Can decks pull from live data?", a: "They can. Charts and figures link to your Onita data and refresh automatically when it changes." },
      { q: "Who sets up our templates?", a: "Our team does, after your demo — we load your brand and deck styles so your first presentation already looks right." },
    ],
    related: ["docs-assistant", "dashboards", "project-manager"],
  },
  {
    slug: "forms",
    name: "AI Forms",
    tab: "AI Forms",
    category: "Intake & capture",
    accent: "success",
    ogIcon: "ListChecks",
    Icon: ListChecksIcon,
    shots: [S.d, S.c],
    metaTitle: "AI Forms — Intake That Routes Straight Into Workflows",
    metaDescription:
      "Onita's AI Forms builds intake forms for you and routes every response into tasks and workflows automatically — so requests turn into action instead of sitting in an inbox.",
    eyebrow: "AI Forms",
    headline: "Forms that turn requests",
    headlineEmphasis: "into action",
    subhead:
      "Capture anything, act on everything. Onita builds the form for you, then routes each response straight into tasks and workflows — so intake becomes work in motion instead of a pile in someone's inbox.",
    definitionTitle: "What is AI Forms?",
    definition:
      "AI Forms is Onita's intake and capture tool. Describe what you need to collect and it builds the form — fields, logic, and all. Every submission routes automatically into the right task, project, or workflow, so requests turn into action without anyone manually triaging an inbox.",
    highlights: ["Forms built for you", "Conditional logic", "Routes straight into workflows"],
    features: [
      { title: "AI form builder", desc: "Describe what you're collecting and Onita assembles the fields, structure, and logic automatically.", Icon: MagicWandIcon },
      { title: "Conditional logic", desc: "Show the right questions based on earlier answers, so forms stay short and relevant.", Icon: SignpostIcon },
      { title: "Automatic routing", desc: "Each response becomes a task, project, or workflow assigned to the right owner — instantly.", Icon: ArrowsClockwiseIcon },
      { title: "Connected intake", desc: "Wire forms into the rest of Onita so a request kicks off real work the moment it lands.", Icon: PlugsConnectedIcon },
    ],
    workforceAngle: {
      title: "Intake that acts on itself",
      desc: "A submission isn't the end of the line — it's the start of a workflow. Onita hands each request straight to the work that resolves it, so nothing waits for a human to notice.",
    },
    useCases: [
      { audience: "Operations", title: "Requests that route themselves", desc: "Internal requests land as tracked work with the right owner automatically." },
      { audience: "Teams", title: "Faster intake", desc: "Client and lead intake flows straight into your process without manual triage." },
      { audience: "HR & IT", title: "Structured every time", desc: "Onboarding, tickets, and approvals captured cleanly and routed instantly." },
    ],
    outcomes: [
      "Build a form in seconds, not an afternoon",
      "Turn every submission into tracked work",
      "Stop requests dying in someone's inbox",
    ],
    faqs: [
      { q: "How do responses become work?", a: "Onita routes each submission into a task, project, or workflow with the right owner — automatically, the moment it's submitted." },
      { q: "Can forms adapt to answers?", a: "Yes. Conditional logic shows or hides questions based on earlier responses so forms stay short and relevant." },
      { q: "Do we build the forms ourselves?", a: "No. After your demo we set up your intake forms and the routing behind them so requests flow into action from day one." },
    ],
    related: ["workflows", "task-manager", "project-manager"],
  },
  {
    slug: "database",
    name: "AI Database",
    tab: "AI Database",
    category: "Databases & spreadsheets",
    accent: "info",
    ogIcon: "Table",
    Icon: TableIcon,
    shots: [S.a, S.b],
    metaTitle: "AI Database — Spreadsheets & Tables Your AI Can Run",
    metaDescription:
      "Onita's AI Database gives you tables with grid, Kanban, Gantt, and calendar views — linked records, computed fields, and form submissions your AI can read and update.",
    eyebrow: "AI Database",
    headline: "Your data in tables",
    headlineEmphasis: "your AI can run",
    subhead:
      "Store anything in flexible tables — then see it as a grid, board, timeline, or calendar. Onita's AI reads and updates your records, links data across tables, and turns rows into action.",
    definitionTitle: "What is AI Database?",
    definition:
      "AI Database is Onita's spreadsheet-meets-database. Every table works as a grid, Kanban board, Gantt timeline, or calendar over the same data, with linked records, computed fields, and form submissions flowing in. Your AI can query it, update it, and act on it — so your data isn't just stored, it's working.",
    highlights: ["Grid, board, timeline, and calendar views", "Linked records and computed fields", "Readable and writable by AI"],
    features: [
      { title: "Every view over one dataset", desc: "See the same records as a grid, Kanban board, Gantt timeline, or calendar — no exporting or rebuilding.", Icon: TableIcon },
      { title: "Linked records", desc: "Connect tables so your projects, clients, and tasks reference each other and stay in sync.", Icon: TreeStructureIcon },
      { title: "AI-powered fields", desc: "Let AI fill, classify, and summarize columns automatically as new rows arrive.", Icon: SparkleIcon },
      { title: "Forms feed your tables", desc: "Form submissions land straight in the right table and kick off the work that follows.", Icon: ListChecksIcon },
    ],
    workforceAngle: {
      title: "Data that does something",
      desc: "Because your AI can read and write your tables, records don't just sit there — they trigger tasks, update statuses, and feed dashboards automatically.",
    },
    useCases: [
      { audience: "Operations", title: "One source of truth", desc: "Track projects, clients, and assets in linked tables the whole team trusts." },
      { audience: "Teams", title: "Work your way", desc: "Grid for data entry, Kanban for flow, Gantt for planning — over the same records." },
      { audience: "Leadership", title: "Live rollups", desc: "Computed fields and dashboards summarize your data as it changes." },
    ],
    outcomes: [
      "Replace scattered spreadsheets with one live database",
      "See the same data as a grid, board, timeline, or calendar",
      "Let AI keep your records current",
    ],
    faqs: [
      { q: "Is this a spreadsheet or a database?", a: "Both. AI Database gives you the familiarity of a spreadsheet with the power of a relational database — linked records, computed fields, and multiple views over one dataset." },
      { q: "Can AI update my tables?", a: "Yes. Your AI can read, query, and write records — filling fields, updating statuses, and creating rows as work happens." },
      { q: "Who sets it up?", a: "Our team does, after your demo — with the tables, views, and links your business runs on." },
    ],
    related: ["dashboards", "forms", "project-manager"],
  },
  {
    slug: "email",
    name: "AI Email",
    tab: "AI Email",
    category: "Email",
    accent: "accent",
    ogIcon: "ChatCircleText",
    Icon: EnvelopeSimpleIcon,
    shots: [S.email1, S.email2],
    metaTitle: "AI Email — A Smart Inbox Wired Into Your Work",
    metaDescription:
      "Onita's AI Email unifies Gmail, Outlook, and Zoho, drafts and triages your messages, and turns emails into tasks — so your inbox works with the rest of your workspace.",
    eyebrow: "AI Email",
    headline: "An inbox that",
    headlineEmphasis: "works for you",
    subhead:
      "Bring Gmail, Outlook, and Zoho into one place. Onita drafts replies, triages what matters, and turns emails into tasks and records — so your inbox stops being a to-do list you dread.",
    definitionTitle: "What is AI Email?",
    definition:
      "AI Email is Onita's connected inbox. It unifies your Gmail, Outlook, and Zoho mail, uses AI to draft and prioritize messages, and links email to the rest of your workspace — turning a message into a task, a record, or a triggered workflow without leaving your inbox.",
    highlights: ["Unified Gmail, Outlook & Zoho inbox", "AI drafts, replies, and triage", "Emails become tasks and records"],
    features: [
      { title: "One unified inbox", desc: "Connect Gmail, Outlook, and Zoho and work from a single, organized inbox.", Icon: EnvelopeSimpleIcon },
      { title: "AI drafting & replies", desc: "Draft responses in your voice and clear routine mail in a click.", Icon: SparkleIcon },
      { title: "Smart triage", desc: "AI surfaces what needs you and quiets what doesn't, so nothing important slips.", Icon: FunnelIcon },
      { title: "Email into action", desc: "Turn a message into a task, a record, or a workflow — wired into the rest of Onita.", Icon: ArrowsClockwiseIcon },
    ],
    workforceAngle: {
      title: "Your inbox, handled",
      desc: "AI Email doesn't just show your mail — it drafts, sorts, and connects it to your work, so email becomes an input to getting things done instead of a chore.",
    },
    useCases: [
      { audience: "Individuals", title: "Inbox zero, for real", desc: "AI triages and drafts so you clear mail in minutes, not hours." },
      { audience: "Sales & client teams", title: "Nothing slips", desc: "Client emails become tracked tasks and follow-ups automatically." },
      { audience: "Operations", title: "Email that triggers work", desc: "Turn inbound mail into records and workflows without copy-paste." },
    ],
    outcomes: [
      "Work Gmail, Outlook, and Zoho from one inbox",
      "Let AI draft and triage your mail",
      "Turn emails into tasks and records automatically",
    ],
    faqs: [
      { q: "Which email providers does it support?", a: "Gmail, Outlook, and Zoho Mail — unified into one inbox inside Onita." },
      { q: "Can it draft replies in my voice?", a: "Yes. AI Email drafts responses in your tone and can clear routine messages in a click, always under your review." },
      { q: "Who sets it up?", a: "Our team connects your mailboxes and configures triage and routing after your demo." },
    ],
    related: ["meeting-assistant", "task-manager", "notetaker"],
  },
];

export const menuProductSlugs = [
  "project-manager",
  "workflows",
  "task-manager",
  "calendar",
  "meeting-assistant",
  "email",
  "chat",
  "notetaker",
  "dashboards",
  "database",
  "docs-assistant",
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
