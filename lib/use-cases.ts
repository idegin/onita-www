import type { Icon } from "@phosphor-icons/react";
import type { Accent } from "@/lib/products";
import type { OgIconName } from "@/lib/og-icons";
import {
  TrendUpIcon,
  KanbanIcon,
  GearSixIcon,
  MegaphoneIcon,
  UsersThreeIcon,
  ChatCircleTextIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  StorefrontIcon,
  HandHeartIcon,
  BellRingingIcon,
  StackIcon,
  HeadsetIcon,
  GaugeIcon,
  SparkleIcon,
  ChartLineUpIcon,
  FileTextIcon,
  CheckCircleIcon,
  LightningIcon,
  NotePencilIcon,
  CalendarCheckIcon,
  ArrowsClockwiseIcon,
  MagnifyingGlassIcon,
  EnvelopeSimpleIcon,
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
    slug: "sales",
    name: "Sales",
    group: "By team",
    accent: "success",
    Icon: TrendUpIcon,
    ogIcon: "TrendUp",
    metaTitle: "Onita for Sales — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for sales teams. Put an AI teammate on lead-finding and follow-ups so reps sell more and no deal goes cold.",
    eyebrow: "Sales",
    headline: "Fill the pipeline and chase every follow-up ",
    headlineEmphasis: "so reps just sell",
    subhead:
      "Onita gives sales teams an AI teammate that finds leads, drafts and chases every follow-up, and keeps the pipeline warm — with every outbound email waiting for your yes before it sends.",
    summary:
      "Onita is an AI-era productivity platform that helps sales teams find leads, follow up on time, and keep the pipeline current, with a person approving anything that goes out.",
    comparison: [
      { old: "Reps building lead lists by hand instead of selling", onita: "AI Agents find and score leads into a ready-to-work list" },
      { old: "Follow-ups forgotten and warm deals going cold", onita: "Flow drafts and schedules every follow-up automatically" },
      { old: "Pipeline reviews run on stale, hand-typed numbers", onita: "Dashboards keep the pipeline and forecast live" },
      { old: "Outbound sent with no oversight or brand check", onita: "Approvals hold every email for a person to send" },
    ],
    pillars: [
      { title: "More time selling", desc: "The AI handles list-building and follow-up admin so reps stay in front of buyers.", Icon: TrendUpIcon },
      { title: "No deal goes cold", desc: "Every follow-up is drafted and scheduled, so nothing slips between conversations.", Icon: BellRingingIcon },
      { title: "You approve every send", desc: "Outbound waits in Approvals until a person reviews and sends it — nothing goes out on its own.", Icon: CheckCircleIcon },
    ],
    workflow: {
      title: "From cold lead to closed deal",
      steps: [
        { agent: "AI Agents", action: "Finds and scores new leads into a ranked list" },
        { agent: "AI Meeting Notetaker", action: "Captures the sales call and logs it to the deal" },
        { agent: "Email", action: "Drafts the recap and follow-up, held for your approval" },
        { agent: "Flow", action: "Schedules every next step so the deal keeps moving" },
        { agent: "Dashboards", action: "Keeps the pipeline and forecast current for the manager" },
      ],
    },
    features: [
      { title: "AI lead-finding", desc: "The AI harvests and scores prospects into a ranked list your reps can work straight away.", Icon: MagnifyingGlassIcon },
      { title: "Follow-up on autopilot", desc: "Recaps and next steps drafted and scheduled so no warm deal ever goes quiet.", Icon: BellRingingIcon },
      { title: "Live pipeline and forecast", desc: "The pipeline updates from real activity, so managers forecast on numbers they trust.", Icon: ChartLineUpIcon },
      { title: "Every outbound approved", desc: "Emails and offers wait for a human yes, so nothing reaches a buyer unreviewed.", Icon: CheckCircleIcon },
    ],
    agents: ["AI Agents", "Email", "Dashboards", "Approvals"],
    metrics: [
      { value: "2x", label: "more selling time per rep" },
      { value: "35%", label: "more follow-ups completed" },
      { value: "5 hrs", label: "of admin saved per rep weekly" },
    ],
    story: {
      quote:
        "My reps stopped living in list-building and reminders. Onita finds the leads, drafts every follow-up for me to approve, and keeps the pipeline honest — so our forecast is finally something I trust.",
      name: "Michael Chen",
      role: "VP of Sales, B2B software company",
    },
    faqs: [
      { q: "Does Onita send emails to prospects on its own?", a: "No. The AI drafts every outbound message, but it waits in Approvals for a person to review and send, so nothing reaches a buyer without your sign-off." },
      { q: "How does the lead-finding work?", a: "The AI harvests public contacts, scores them, and builds a ranked list your reps can start working immediately — so the pipeline stays full without hours of manual research." },
      { q: "Will our forecast actually be accurate?", a: "Because the pipeline updates from real activity instead of manual entry, Dashboards give managers a live, trustworthy forecast to run reviews on." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your pipeline stages, follow-up flows, lead sources, and dashboards are configured before your reps start." },
    ],
    related: ["follow-ups", "marketing", "customer-success"],
  },
  {
    slug: "project-management",
    name: "Project Management",
    group: "By team",
    accent: "brand",
    Icon: KanbanIcon,
    ogIcon: "Kanban",
    metaTitle: "Onita for Project Management — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for project teams. Plan work as a board, timeline, or calendar and let AI keep it moving so nothing slips.",
    eyebrow: "Project Management",
    headline: "Plan work your way and let AI ",
    headlineEmphasis: "keep it moving",
    subhead:
      "Onita lets you run projects as a board, a timeline, or a calendar, with an AI teammate that assigns work, chases owners, and reflags dependencies — so nothing slips between updates.",
    summary:
      "Onita is an AI-era productivity platform that helps teams plan projects as boards, timelines, or calendars with AI keeping every task on track.",
    comparison: [
      { old: "Plans that go stale the moment priorities shift", onita: "AI Agents keep the plan current as work changes" },
      { old: "Standups just to find out what's blocked", onita: "Dashboards show project health without a check-in" },
      { old: "Tasks slipping because nobody chased the owner", onita: "Flow chases owners and flags anything at risk" },
      { old: "One rigid view that never fits the work", onita: "Spreadsheet gives you board, timeline, or calendar" },
    ],
    pillars: [
      { title: "Nothing slips", desc: "The AI chases owners and reflags dependencies before a deadline is ever at risk.", Icon: CheckCircleIcon },
      { title: "See work your way", desc: "Run the same plan as a board, a timeline, or a calendar — whatever fits the team.", Icon: KanbanIcon },
      { title: "Fewer status meetings", desc: "Live status means the team builds instead of gathering to report progress.", Icon: LightningIcon },
    ],
    workflow: {
      title: "From plan to delivered, kept on track",
      steps: [
        { agent: "AI Agents", action: "Turns the goal into a plan with owners and dates" },
        { agent: "Spreadsheet", action: "Lays the plan out as a board, timeline, or calendar" },
        { agent: "Flow", action: "Chases owners and reflags dependencies as work shifts" },
        { agent: "AI Meeting Notetaker", action: "Turns project calls into new tasks automatically" },
        { agent: "Dashboards", action: "Shows delivery health to the whole team live" },
      ],
    },
    features: [
      { title: "Board, timeline, or calendar", desc: "Run the same project in whichever view fits the work, all kept in sync.", Icon: KanbanIcon },
      { title: "Self-updating plans", desc: "The AI keeps the plan current and reflags dependencies as priorities move.", Icon: ArrowsClockwiseIcon },
      { title: "Owner chasing", desc: "Tasks that stall get chased automatically, so nothing sits waiting on a forgotten nudge.", Icon: BellRingingIcon },
      { title: "Live delivery health", desc: "See risk, blockers, and progress across every project in one place.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Agents", "Spreadsheet", "Flow", "Dashboards"],
    metrics: [
      { value: "40%", label: "fewer missed deadlines" },
      { value: "50%", label: "less time in status meetings" },
      { value: "6 hrs", label: "saved per manager weekly" },
    ],
    story: {
      quote:
        "We caught slips weeks earlier once Onita kept the plan live. It chases the owners for me and the team sees exactly where things stand — no more standups just to find out what's stuck.",
      name: "Sofia Mendes",
      role: "Head of Delivery, product company",
    },
    faqs: [
      { q: "Can we run projects as a board and a timeline?", a: "Yes. The same plan renders as a board, a timeline, or a calendar, so different people can work in the view that suits them while everything stays in sync." },
      { q: "How does the AI keep things from slipping?", a: "It chases owners on stalled tasks and reflags dependencies as priorities shift, so risks surface early instead of on the deadline itself." },
      { q: "Do we still need status meetings?", a: "Far fewer. Dashboards show live delivery health to the whole team, so people build instead of gathering just to report where things stand." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your project views, plan templates, and dashboards are configured to fit how your team works before you begin." },
    ],
    related: ["operations", "resource-planning", "communication"],
  },
  {
    slug: "operations",
    name: "Operations",
    group: "By team",
    accent: "brand",
    Icon: GearSixIcon,
    ogIcon: "Gear",
    metaTitle: "Onita for Operations — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for operations teams. Turn repeat work into workflows that run themselves and standardize every SOP.",
    eyebrow: "Operations",
    headline: "Turn repeat work into workflows ",
    headlineEmphasis: "that run themselves",
    subhead:
      "Onita helps operations teams capture how work should be done once, then let AI run it every time — standardizing SOPs, handling the busywork, and keeping every process consistent.",
    summary:
      "Onita is an AI-era productivity platform that helps operations teams standardize SOPs and turn repeat work into workflows AI runs on its own.",
    comparison: [
      { old: "Processes living in one person's head", onita: "Docs capture every SOP so the whole team runs it the same" },
      { old: "The same manual steps repeated every week", onita: "Flow runs the routine work automatically, start to finish" },
      { old: "Handoffs dropped between people and tools", onita: "AI Agents route each step to the right owner on time" },
      { old: "No view into where a process is stuck", onita: "Dashboards show every workflow's status at a glance" },
    ],
    pillars: [
      { title: "Runs itself", desc: "Repeat work becomes a workflow the AI executes every time, without someone driving it.", Icon: ArrowsClockwiseIcon },
      { title: "Every SOP standardized", desc: "How work should be done lives in one place, so the whole team does it the same way.", Icon: FileTextIcon },
      { title: "Nothing dropped", desc: "Handoffs route to the right owner automatically, so no step falls through a gap.", Icon: CheckCircleIcon },
    ],
    workflow: {
      title: "From messy process to workflow on autopilot",
      steps: [
        { agent: "Docs", action: "Captures the SOP so every run follows the same steps" },
        { agent: "Flow", action: "Runs the routine work automatically, end to end" },
        { agent: "AI Agents", action: "Routes each handoff to the right owner on time" },
        { agent: "Approvals", action: "Pauses for a human check where the process needs one" },
        { agent: "Dashboards", action: "Shows where every workflow stands in one view" },
      ],
    },
    features: [
      { title: "Workflow automation", desc: "Repeat processes run themselves, so your team stops doing the same steps by hand.", Icon: ArrowsClockwiseIcon },
      { title: "Standardized SOPs", desc: "Every procedure is captured once so the whole team runs it consistently.", Icon: FileTextIcon },
      { title: "Reliable handoffs", desc: "Each step routes to the right owner automatically, so nothing gets dropped.", Icon: GearSixIcon },
      { title: "Process visibility", desc: "See every workflow's status and spot bottlenecks before they cause delays.", Icon: ChartLineUpIcon },
    ],
    agents: ["Flow", "AI Agents", "Docs", "Dashboards"],
    metrics: [
      { value: "60%", label: "less time on repeat work" },
      { value: "2x", label: "faster process handoffs" },
      { value: "8 hrs", label: "saved per person weekly" },
    ],
    story: {
      quote:
        "Half our week went to the same manual steps. Onita turned them into workflows that just run, and now every handoff lands with the right person automatically — our processes finally run themselves.",
      name: "Daniel Okafor",
      role: "Operations Director, services company",
    },
    faqs: [
      { q: "What kind of work can Onita automate?", a: "Any repeat process — onboarding, approvals, reporting, routing requests — gets captured once and then runs automatically, with a human check wherever you want one." },
      { q: "How does it keep our SOPs consistent?", a: "Procedures live in Docs and drive the workflow, so every run follows the same steps no matter who's involved — the process stops living in one person's head." },
      { q: "Can we see where things get stuck?", a: "Yes. Dashboards show the status of every workflow, so you spot bottlenecks and fix them before they slow the team down." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your SOPs, workflows, and dashboards are mapped and configured before your team starts." },
    ],
    related: ["project-management", "resource-planning", "communication"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    group: "By team",
    accent: "accent",
    Icon: MegaphoneIcon,
    ogIcon: "Megaphone",
    metaTitle: "Onita for Marketing — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for marketing teams. Plan campaigns, draft content, and manage channels in one place — ship more with the same team.",
    eyebrow: "Marketing",
    headline: "Plan campaigns, draft content, run every channel ",
    headlineEmphasis: "in one place",
    subhead:
      "Onita gives marketing teams an AI teammate that plans campaigns, drafts content, and keeps every channel on schedule — so a lean team ships far more without burning out.",
    summary:
      "Onita is an AI-era productivity platform that helps marketing teams plan campaigns, draft content, and manage channels in one place with AI doing the heavy lifting.",
    comparison: [
      { old: "Campaign plans scattered across tools and docs", onita: "AI Agents keep every campaign plan in one workspace" },
      { old: "Content written from a blank page every time", onita: "Docs drafts posts, emails, and copy in your voice" },
      { old: "Channels managed by memory and missed dates", onita: "Flow schedules and chases every deliverable" },
      { old: "Reporting pulled by hand from five platforms", onita: "Dashboards show campaign results in one view" },
    ],
    pillars: [
      { title: "Ship more, same team", desc: "The AI plans and drafts so your team produces far more without extra headcount.", Icon: RocketLaunchIcon },
      { title: "Content that starts written", desc: "Posts, emails, and copy come out as strong first drafts in your brand voice.", Icon: NotePencilIcon },
      { title: "Every channel on schedule", desc: "Deliverables are scheduled and chased, so nothing misses its date.", Icon: CalendarCheckIcon },
    ],
    workflow: {
      title: "From campaign idea to results",
      steps: [
        { agent: "AI Agents", action: "Turns the campaign goal into a plan with owners and dates" },
        { agent: "Docs", action: "Drafts the posts, emails, and copy in your voice" },
        { agent: "Flow", action: "Schedules and chases every deliverable across channels" },
        { agent: "Email", action: "Sends the campaign emails once a person approves them" },
        { agent: "Dashboards", action: "Shows spend, status, and results in one view" },
      ],
    },
    features: [
      { title: "Campaign planning", desc: "The AI builds realistic plans and flags conflicts before they become fire drills.", Icon: KanbanIcon },
      { title: "Content drafting", desc: "Posts, emails, and long-form copy drafted in your brand voice, ready to refine.", Icon: NotePencilIcon },
      { title: "Channel management", desc: "Every deliverable scheduled and chased so nothing misses its slot.", Icon: MegaphoneIcon },
      { title: "Results in one view", desc: "Spend, status, and performance across every campaign in a single dashboard.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Agents", "Docs", "Flow", "Dashboards"],
    metrics: [
      { value: "2x", label: "content shipped per month" },
      { value: "70%", label: "less time on reporting" },
      { value: "6 hrs", label: "saved per marketer weekly" },
    ],
    story: {
      quote:
        "Onita gave us the output of a much bigger team. It plans the campaign, drafts the content, and keeps every channel on schedule — we ship twice as much and the reporting builds itself.",
      name: "Priya Sharma",
      role: "Head of Marketing, growth-stage company",
    },
    faqs: [
      { q: "Will the content sound like our brand?", a: "Yes. The AI drafts from your voice, past content, and guidelines, so posts, emails, and copy come out on-brand and ready for a quick review instead of a blank page." },
      { q: "Can it manage multiple channels at once?", a: "It schedules and chases every deliverable across your channels, so nothing misses its date and your team spends time on the work, not the coordination." },
      { q: "How does reporting work?", a: "Dashboards pull spend, status, and results into one live view, so you stop assembling reports by hand from five different platforms." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your campaign templates, content flows, channels, and dashboards are configured before your team starts." },
    ],
    related: ["social-content", "sales", "communication"],
  },
  {
    slug: "recruiting",
    name: "Recruiting",
    group: "By team",
    accent: "info",
    Icon: UsersThreeIcon,
    ogIcon: "UsersThree",
    metaTitle: "Onita for Recruiting — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for recruiting teams. Track candidates, schedule interviews, and follow up automatically — hire without the busywork.",
    eyebrow: "Recruiting",
    headline: "Track candidates and schedule interviews ",
    headlineEmphasis: "without the busywork",
    subhead:
      "Onita gives recruiting teams an AI teammate that keeps every candidate moving, books interviews around everyone's calendar, and follows up automatically — so no great candidate goes cold.",
    summary:
      "Onita is an AI-era productivity platform that helps recruiting teams track candidates, schedule interviews, and follow up automatically so hiring runs itself.",
    comparison: [
      { old: "Candidates tracked across inboxes and spreadsheets", onita: "Spreadsheet keeps every candidate and stage in one place" },
      { old: "Endless back-and-forth to book an interview", onita: "Bookings lets candidates pick a slot that works" },
      { old: "Great candidates going cold from slow follow-up", onita: "Flow follows up on time, every time" },
      { old: "Interview notes lost after the call", onita: "AI Meeting Notetaker captures every interview" },
    ],
    pillars: [
      { title: "No candidate goes cold", desc: "Follow-ups are drafted and sent on time, so strong candidates stay engaged.", Icon: BellRingingIcon },
      { title: "Scheduling that books itself", desc: "Candidates pick a slot around everyone's calendar — no email ping-pong.", Icon: CalendarCheckIcon },
      { title: "The whole pipeline in view", desc: "See every candidate and stage at a glance, so nobody gets forgotten.", Icon: UsersThreeIcon },
    ],
    workflow: {
      title: "From applicant to offer",
      steps: [
        { agent: "Form Builder", action: "Captures applications with everything you need" },
        { agent: "Spreadsheet", action: "Tracks each candidate through every stage" },
        { agent: "Bookings", action: "Lets candidates book interviews around the panel's calendar" },
        { agent: "AI Meeting Notetaker", action: "Captures each interview into a clear record" },
        { agent: "Flow", action: "Follows up and moves candidates forward automatically" },
      ],
    },
    features: [
      { title: "Candidate tracking", desc: "Every candidate and stage in one place, so nobody slips through the cracks.", Icon: UsersThreeIcon },
      { title: "Self-service scheduling", desc: "Candidates pick interview slots that fit the panel's calendar automatically.", Icon: CalendarCheckIcon },
      { title: "Automatic follow-up", desc: "Timely, on-brand follow-ups keep strong candidates warm through the whole process.", Icon: BellRingingIcon },
      { title: "Interview capture", desc: "Every interview recorded and summarized, so decisions rest on notes, not memory.", Icon: NotePencilIcon },
    ],
    agents: ["Form Builder", "Bookings", "AI Meeting Notetaker", "Flow"],
    metrics: [
      { value: "2x", label: "faster time-to-hire" },
      { value: "50%", label: "less scheduling admin" },
      { value: "6 hrs", label: "saved per recruiter weekly" },
    ],
    story: {
      quote:
        "We lost great people to slow follow-up and scheduling chaos. Now candidates book their own slots, follow-ups go out on time, and every interview is captured — hiring finally feels calm.",
      name: "Aisha Bello",
      role: "Head of Talent, scaling company",
    },
    faqs: [
      { q: "Does Onita replace our applicant tracking system?", a: "Onita becomes where your team actually works the pipeline — tracking candidates, scheduling, and following up — so the admin that usually gets skipped happens automatically." },
      { q: "How does interview scheduling work?", a: "Candidates pick a slot that fits the panel's real calendar through Bookings, so you skip the endless back-and-forth and interviews get booked in minutes." },
      { q: "Can it keep candidates warm?", a: "Yes. Flow sends timely, on-brand follow-ups at every stage, so strong candidates stay engaged instead of going cold while you're busy." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your pipeline stages, application forms, scheduling, and follow-up flows are configured before your team starts." },
    ],
    related: ["communication", "operations", "small-business"],
  },
  {
    slug: "communication",
    name: "Communication",
    group: "By team",
    accent: "info",
    Icon: ChatCircleTextIcon,
    ogIcon: "ChatCircleText",
    metaTitle: "Onita for Communication — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for team communication. Keep email, meetings, and updates in one place — sorted and summarized by AI so nothing slips.",
    eyebrow: "Communication",
    headline: "Email, meetings, and updates in one place ",
    headlineEmphasis: "sorted by AI",
    subhead:
      "Onita brings email, meetings, and team updates together with an AI teammate that sorts, summarizes, and turns talk into action — so nothing important slips through the cracks.",
    summary:
      "Onita is an AI-era productivity platform that keeps email, meetings, and updates in one place, sorted and summarized by AI so nothing slips.",
    comparison: [
      { old: "Important messages buried in a full inbox", onita: "Email sorts and summarizes so priorities surface first" },
      { old: "Meetings that end with nothing written down", onita: "AI Meeting Notetaker turns calls into decisions and tasks" },
      { old: "Decisions scattered across chats and threads", onita: "AI Agents pull the thread into one clear summary" },
      { old: "Follow-ups forgotten after the conversation", onita: "Flow turns every commitment into a tracked task" },
    ],
    pillars: [
      { title: "Nothing slips through", desc: "The AI sorts and summarizes so the important message never gets buried.", Icon: CheckCircleIcon },
      { title: "Meetings become action", desc: "Every call turns into decisions and tasks, not a page of forgotten notes.", Icon: NotePencilIcon },
      { title: "One clear thread", desc: "Email, meetings, and updates live together, summarized instead of scattered.", Icon: ChatCircleTextIcon },
    ],
    workflow: {
      title: "From inbox to action, nothing missed",
      steps: [
        { agent: "Email", action: "Sorts and summarizes the inbox so priorities surface first" },
        { agent: "AI Meeting Notetaker", action: "Captures every meeting into decisions and tasks" },
        { agent: "AI Agents", action: "Pulls scattered threads into one clear summary" },
        { agent: "Flow", action: "Turns commitments into tracked follow-ups" },
        { agent: "Calendar", action: "Keeps every meeting and follow-up in view" },
      ],
    },
    features: [
      { title: "Smart inbox", desc: "Email sorts, summarizes, and surfaces what needs a reply, so nothing important gets buried.", Icon: EnvelopeSimpleIcon },
      { title: "Meeting capture", desc: "Every call turns into decisions, tasks, and a shareable summary automatically.", Icon: NotePencilIcon },
      { title: "Thread summaries", desc: "Long chats and threads condensed into one clear picture of where things stand.", Icon: ChatCircleTextIcon },
      { title: "Commitments tracked", desc: "Whatever you agree to becomes a follow-up the AI keeps in front of you.", Icon: CheckCircleIcon },
    ],
    agents: ["Email", "AI Meeting Notetaker", "Calendar", "Flow"],
    metrics: [
      { value: "2x", label: "faster inbox triage" },
      { value: "100%", label: "of meetings captured to action" },
      { value: "5 hrs", label: "saved per person weekly" },
    ],
    story: {
      quote:
        "Things used to fall through the cracks between email and meetings. Now Onita sorts my inbox, captures every call into tasks, and keeps the whole thread in one place — nothing slips anymore.",
      name: "Elena Vasquez",
      role: "Chief of Staff, mid-market company",
    },
    faqs: [
      { q: "How does Onita keep things from slipping?", a: "It sorts and summarizes your inbox, captures every meeting into tasks, and turns commitments into tracked follow-ups, so the important things surface instead of getting buried." },
      { q: "Does it work with our existing email and calendar?", a: "Yes. Onita connects your email and calendar so everything lives in one place, sorted and summarized, with meetings and follow-ups always in view." },
      { q: "What happens to meeting notes?", a: "The AI Meeting Notetaker captures every call and turns it into decisions, tasks, and a shareable summary, so nothing depends on someone remembering to write it down." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your inboxes, calendars, meeting capture, and follow-up flows are connected and configured before your team starts." },
    ],
    related: ["project-management", "marketing", "customer-success"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    group: "By company type",
    accent: "brand",
    Icon: ShieldCheckIcon,
    ogIcon: "ShieldCheck",
    metaTitle: "Onita for Enterprise — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for enterprise. Power and control at scale — many teams, tight permissions, a full audit trail, and AI that respects every rule.",
    eyebrow: "Enterprise",
    headline: "Power and control at scale ",
    headlineEmphasis: "with AI that respects every rule",
    subhead:
      "Onita gives large organizations AI across every team with the control the enterprise demands — tight permissions, a full audit trail, and human approval on anything that leaves the building.",
    summary:
      "Onita is an AI-era productivity platform built for enterprise: many teams, tight permissions, a full audit trail, and AI that respects every rule.",
    comparison: [
      { old: "AI tools that ignore who can see what", onita: "AI Agents respect every permission on every action" },
      { old: "No record of what the AI did or why", onita: "Approvals keep a full audit trail of every change" },
      { old: "Each team on its own disconnected stack", onita: "Dashboards give leadership one view across teams" },
      { old: "Outbound actions with no oversight", onita: "Approvals hold anything outbound for a human" },
    ],
    pillars: [
      { title: "Control at scale", desc: "Tight permissions mean every team gets AI without anyone seeing what they shouldn't.", Icon: ShieldCheckIcon },
      { title: "A full audit trail", desc: "Every AI action and approval is recorded, so you always know what happened and why.", Icon: CheckCircleIcon },
      { title: "One view across teams", desc: "Leadership sees status and performance across the whole organization in one place.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "From request to action, under full control",
      steps: [
        { agent: "AI Agents", action: "Does the work within each team's exact permissions" },
        { agent: "Approvals", action: "Holds anything outbound or sensitive for a human" },
        { agent: "Flow", action: "Runs standardized processes consistently across teams" },
        { agent: "Dashboards", action: "Gives leadership one view across the organization" },
        { agent: "Docs", action: "Keeps every policy and record current and accessible" },
      ],
    },
    features: [
      { title: "Permission-aware AI", desc: "The AI only ever acts within a person's access, so scale never means exposure.", Icon: ShieldCheckIcon },
      { title: "Full audit trail", desc: "Every action and approval is recorded, ready for compliance and review.", Icon: CheckCircleIcon },
      { title: "Human approval gates", desc: "Anything outbound or high-stakes waits for a person, so control never slips.", Icon: CheckCircleIcon },
      { title: "Cross-team visibility", desc: "One live view of status and performance across every team and function.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Agents", "Approvals", "Dashboards", "Docs"],
    metrics: [
      { value: "100%", label: "of AI actions permission-checked" },
      { value: "2x", label: "faster cross-team reporting" },
      { value: "1", label: "view across every team" },
    ],
    story: {
      quote:
        "We needed AI everyone could use without opening the doors. Onita respects every permission, logs every action for audit, and holds anything outbound for a person — so we scaled it with confidence.",
      name: "James Whitfield",
      role: "VP of Operations, enterprise organization",
    },
    faqs: [
      { q: "Does the AI respect our permissions?", a: "Yes. The AI only ever acts within a person's own access, so rolling it out across many teams never means anyone sees or touches what they shouldn't." },
      { q: "Can we audit what the AI does?", a: "Every AI action and approval is recorded in a full audit trail, so you always have a clear record of what happened, who signed off, and why." },
      { q: "How do you keep outbound actions in check?", a: "Anything outbound or sensitive waits in Approvals for a person to review, so control stays with your people no matter how much the AI handles." },
      { q: "How do we get started?", a: "Talk to sales and Onita's team sets everything up for you — your teams, permissions, approval gates, and dashboards are configured to your policies before rollout." },
    ],
    related: ["operations", "resource-planning", "startup"],
  },
  {
    slug: "startup",
    name: "Startup",
    group: "By company type",
    accent: "accent",
    Icon: RocketLaunchIcon,
    ogIcon: "RocketLaunch",
    metaTitle: "Onita for Startups — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for startups. Move like a bigger team — get the output of a full department without the headcount.",
    eyebrow: "Startup",
    headline: "Move like a bigger team ",
    headlineEmphasis: "without the headcount",
    subhead:
      "Onita gives startups AI teammates that run product, ops, sales, and marketing in one place — so a lean team produces the output of a full department and moves far faster.",
    summary:
      "Onita is an AI-era productivity platform that helps startups get the output of a full department without the headcount.",
    comparison: [
      { old: "Founders doing admin at midnight", onita: "AI Agents run the day-to-day so founders build" },
      { old: "Five tools stitched together as you grow", onita: "One workspace that scales with the team" },
      { old: "Work stalling when one person is stretched", onita: "Flow keeps processes running without a driver" },
      { old: "Updates and docs written by hand", onita: "Docs drafts investor updates and specs fast" },
    ],
    pillars: [
      { title: "A department in a tool", desc: "AI teammates produce the output of a full team so you compete without the headcount.", Icon: RocketLaunchIcon },
      { title: "Everything in one place", desc: "Product, ops, sales, and marketing live in one workspace that grows with you.", Icon: StackIcon },
      { title: "Founder time back", desc: "The AI runs coordination and drafting so founders work on the business, not admin.", Icon: LightningIcon },
    ],
    workflow: {
      title: "From idea to shipped to investor update",
      steps: [
        { agent: "AI Agents", action: "Runs the day-to-day across product, ops, and go-to-market" },
        { agent: "Spreadsheet", action: "Keeps the roadmap and pipeline organized in one place" },
        { agent: "AI Meeting Notetaker", action: "Turns customer and team calls into action" },
        { agent: "Docs", action: "Drafts the specs, updates, and investor report" },
        { agent: "Dashboards", action: "Shows traction and progress to the founders" },
      ],
    },
    features: [
      { title: "Full-department output", desc: "AI teammates cover the work of a bigger team, so a lean crew punches far above its weight.", Icon: RocketLaunchIcon },
      { title: "One scalable workspace", desc: "Product, ops, sales, and marketing in one place that grows with you — no re-platforming later.", Icon: StackIcon },
      { title: "Investor-ready updates", desc: "Updates and internal docs drafted from your live progress and metrics.", Icon: FileTextIcon },
      { title: "Fewer tools to run", desc: "Consolidate the sprawling startup stack into a single AI-powered workspace.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Agents", "Docs", "Dashboards", "Spreadsheet"],
    metrics: [
      { value: "3x", label: "output per team member" },
      { value: "1", label: "workspace instead of five tools" },
      { value: "10 hrs", label: "of founder time back weekly" },
    ],
    story: {
      quote:
        "As a five-person team, Onita is our unfair advantage. The AI runs the day-to-day and drafts our updates, so we ship like a company three times our size without hiring for it.",
      name: "Aisha Bello",
      role: "Co-founder & CEO, early-stage startup",
    },
    faqs: [
      { q: "Is Onita too much for a small team?", a: "No — it's built to make small teams punch above their weight. AI teammates do the work of a much bigger team, so a lean crew ships like a full department without extra headcount." },
      { q: "Will it scale as we grow?", a: "Yes. Onita is one workspace for product, ops, sales, and marketing that grows with you, so you avoid stitching together new tools every time the team expands." },
      { q: "Can it help with investor updates?", a: "Docs drafts investor updates and internal specs from your live progress and metrics, so founders spend minutes reviewing instead of hours writing." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your roadmap, workflows, docs, and dashboards are configured to fit how your startup works before you dive in." },
    ],
    related: ["small-business", "sales", "marketing"],
  },
  {
    slug: "small-business",
    name: "Small Business",
    group: "By company type",
    accent: "success",
    Icon: StorefrontIcon,
    ogIcon: "Stack",
    metaTitle: "Onita for Small Business — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for small businesses. Your whole back office handled — sales, invoices, follow-ups, and customer care in one affordable tool.",
    eyebrow: "Small Business",
    headline: "Your whole back office handled ",
    headlineEmphasis: "in one affordable tool",
    subhead:
      "Onita gives small businesses AI teammates that handle sales, invoices, follow-ups, and customer care — so you run the whole operation without hiring for every job.",
    summary:
      "Onita is an AI-era productivity platform that handles a small business's whole back office — sales, invoices, follow-ups, and customer care — in one affordable tool.",
    comparison: [
      { old: "Juggling a different tool for every job", onita: "One workspace runs the whole back office" },
      { old: "Invoices and follow-ups slipping through", onita: "Flow chases invoices and follow-ups automatically" },
      { old: "Customer messages missed when you're busy", onita: "Email sorts and drafts replies so nobody waits" },
      { old: "No time to see how the business is doing", onita: "Dashboards show sales and cash at a glance" },
    ],
    pillars: [
      { title: "One tool, whole back office", desc: "Sales, invoices, follow-ups, and customer care handled in a single affordable place.", Icon: StorefrontIcon },
      { title: "Nothing slips", desc: "The AI chases invoices and follow-ups, so you stop leaving money on the table.", Icon: BellRingingIcon },
      { title: "Customers looked after", desc: "Replies are drafted and sent on time, so nobody waits when you're busy.", Icon: HeadsetIcon },
    ],
    workflow: {
      title: "From new customer to paid and cared for",
      steps: [
        { agent: "Spreadsheet", action: "Keeps customers, orders, and cash in one place" },
        { agent: "Email", action: "Sorts messages and drafts replies for your approval" },
        { agent: "Flow", action: "Chases invoices and follow-ups until they're done" },
        { agent: "Bookings", action: "Lets customers book you without the back-and-forth" },
        { agent: "Dashboards", action: "Shows sales and cash flow at a glance" },
      ],
    },
    features: [
      { title: "All-in-one workspace", desc: "Run sales, invoices, follow-ups, and customer care without a tool for every task.", Icon: StorefrontIcon },
      { title: "Invoice and payment chasing", desc: "The AI follows up on unpaid invoices so cash comes in without the awkward reminders.", Icon: BellRingingIcon },
      { title: "Customer replies drafted", desc: "Messages sorted and answers drafted, so customers hear back fast even when you're slammed.", Icon: HeadsetIcon },
      { title: "Simple business dashboard", desc: "See sales, outstanding invoices, and cash flow in plain numbers at a glance.", Icon: ChartLineUpIcon },
    ],
    agents: ["Spreadsheet", "Email", "Flow", "Dashboards"],
    metrics: [
      { value: "2x", label: "faster invoice collection" },
      { value: "40%", label: "less time on admin" },
      { value: "1", label: "tool instead of many" },
    ],
    story: {
      quote:
        "I was drowning in invoices, emails, and follow-ups on top of the actual work. Onita handles the whole back office now — chasing invoices, drafting replies, showing me the numbers — for one affordable price.",
      name: "Sofia Mendes",
      role: "Owner, independent services business",
    },
    faqs: [
      { q: "Do I need to be technical to use Onita?", a: "No. It's built for busy owners, not engineers — everything reads in plain language, and our team sets it all up for you so you just get the work done." },
      { q: "Can it really handle my whole back office?", a: "Yes. Sales, invoices, follow-ups, and customer care all live in one workspace, with the AI chasing what needs chasing so nothing slips while you run the business." },
      { q: "Is it affordable for a small team?", a: "Onita is priced to replace a stack of separate tools, so a small business gets a full back office in one place instead of paying for many." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your customers, invoices, follow-ups, and dashboards are configured before you start." },
    ],
    related: ["follow-ups", "customer-success", "startup"],
  },
  {
    slug: "non-profit",
    name: "Non-profit",
    group: "By company type",
    accent: "warning",
    Icon: HandHeartIcon,
    ogIcon: "HandHeart",
    metaTitle: "Onita for Non-profits — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for non-profits. Do more with less — stretch a small team further with AI teammates that never clock out.",
    eyebrow: "Non-profit",
    headline: "Do more with less ",
    headlineEmphasis: "with AI teammates that never clock out",
    subhead:
      "Onita gives non-profits AI teammates that handle donor follow-up, grant reporting, volunteer coordination, and communications — so a small team stretches its mission much further.",
    summary:
      "Onita is an AI-era productivity platform that helps non-profits do more with less by stretching a small team with AI teammates that never clock out.",
    comparison: [
      { old: "Donor thank-yous and follow-ups falling behind", onita: "Flow sends timely donor follow-ups automatically" },
      { old: "Grant reports built by hand under deadline", onita: "Docs drafts reports from your live program data" },
      { old: "Volunteer coordination run on scattered lists", onita: "Spreadsheet keeps volunteers and shifts organized" },
      { old: "A small team stretched past its limits", onita: "AI Agents cover the busywork around the clock" },
    ],
    pillars: [
      { title: "Stretch every hour", desc: "AI teammates handle the busywork so your small team spends more time on the mission.", Icon: HandHeartIcon },
      { title: "Donors well looked after", desc: "Thank-yous and follow-ups go out on time, so supporters stay engaged.", Icon: BellRingingIcon },
      { title: "Reporting made easy", desc: "Grant and board reports draft themselves from your program data.", Icon: FileTextIcon },
    ],
    workflow: {
      title: "From donation to impact reported",
      steps: [
        { agent: "Spreadsheet", action: "Keeps donors, grants, and volunteers organized" },
        { agent: "Flow", action: "Sends donor thank-yous and follow-ups on time" },
        { agent: "AI Agents", action: "Handles the day-to-day coordination around the clock" },
        { agent: "Docs", action: "Drafts grant and board reports from program data" },
        { agent: "Dashboards", action: "Shows impact and funding at a glance" },
      ],
    },
    features: [
      { title: "Donor follow-up", desc: "Timely thank-yous and updates keep supporters close without extra hours from your team.", Icon: BellRingingIcon },
      { title: "Grant reporting", desc: "Reports drafted from your live program data, ready to review instead of build from scratch.", Icon: FileTextIcon },
      { title: "Volunteer coordination", desc: "Volunteers, shifts, and outreach organized in one place the whole team trusts.", Icon: UsersThreeIcon },
      { title: "Impact at a glance", desc: "See funding, programs, and outcomes in one simple dashboard for the board.", Icon: ChartLineUpIcon },
    ],
    agents: ["AI Agents", "Flow", "Docs", "Dashboards"],
    metrics: [
      { value: "2x", label: "more done per staff member" },
      { value: "60%", label: "less time on reporting" },
      { value: "8 hrs", label: "saved per person weekly" },
    ],
    story: {
      quote:
        "Our team is tiny and the work never stops. Onita took over donor follow-ups, grant reports, and volunteer coordination — so we put far more of our hours straight into the mission.",
      name: "Grace Adeyemi",
      role: "Executive Director, community non-profit",
    },
    faqs: [
      { q: "Is Onita affordable for a non-profit?", a: "Yes. It replaces several separate tools with one workspace, so a lean budget covers a full back office — and our team helps you get set up." },
      { q: "How does it help our small team?", a: "AI teammates handle the donor follow-ups, reporting, and coordination around the clock, so your people spend far more of their hours on the mission itself." },
      { q: "Can it help with grant reporting?", a: "Docs drafts grant and board reports from your live program data, turning a deadline scramble into a quick review and refine." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your donors, grants, volunteers, and reports are configured before your team starts." },
    ],
    related: ["small-business", "operations", "communication"],
  },
  {
    slug: "social-content",
    name: "Social Media & Content",
    group: "By use case",
    accent: "accent",
    Icon: MegaphoneIcon,
    ogIcon: "Sparkle",
    metaTitle: "Onita for Social Media & Content — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for content teams. Plan, draft, and manage content — and let AI even run your YouTube channel.",
    eyebrow: "Social Media & Content",
    headline: "Plan, draft, and manage content ",
    headlineEmphasis: "and even run your channel",
    subhead:
      "Onita gives content teams an AI teammate that plans the calendar, drafts posts and scripts, and can even run your YouTube channel end to end — with a person approving what goes public.",
    summary:
      "Onita is an AI-era productivity platform that helps content teams plan, draft, and manage content, and can even run a YouTube channel with human approval.",
    comparison: [
      { old: "A content calendar nobody keeps up", onita: "AI Agents keep the calendar planned and moving" },
      { old: "Every post written from a blank page", onita: "Docs drafts posts and scripts in your voice" },
      { old: "YouTube managed by hand, video by video", onita: "AI Agents can run the channel end to end" },
      { old: "Publishing with no review step", onita: "Approvals hold anything public for a person" },
    ],
    pillars: [
      { title: "Always something to post", desc: "The AI keeps the calendar full and drafts the content, so you never run dry.", Icon: SparkleIcon },
      { title: "Runs your channel", desc: "AI can manage your YouTube channel — uploads, thumbnails, and replies — end to end.", Icon: MegaphoneIcon },
      { title: "You approve what's public", desc: "Anything that goes live waits for a person, so your brand stays in your hands.", Icon: CheckCircleIcon },
    ],
    workflow: {
      title: "From calendar to published",
      steps: [
        { agent: "AI Agents", action: "Plans the content calendar and keeps it moving" },
        { agent: "Docs", action: "Drafts posts, captions, and video scripts in your voice" },
        { agent: "Slides", action: "Builds carousels and visual content ready to share" },
        { agent: "Approvals", action: "Holds anything public for a person to review" },
        { agent: "Flow", action: "Schedules and publishes across your channels" },
      ],
    },
    features: [
      { title: "Content planning", desc: "The AI keeps a full calendar so there's always something ready to publish.", Icon: SparkleIcon },
      { title: "Draft anything", desc: "Posts, captions, and video scripts drafted in your voice, ready to refine.", Icon: NotePencilIcon },
      { title: "YouTube management", desc: "AI can run the channel — uploads, thumbnails, playlists, and comment replies — with approval on what's public.", Icon: MegaphoneIcon },
      { title: "Approval on publish", desc: "Anything that goes live waits for a person, so your brand voice stays yours.", Icon: CheckCircleIcon },
    ],
    agents: ["AI Agents", "Docs", "Slides", "Flow"],
    metrics: [
      { value: "3x", label: "more content shipped" },
      { value: "60%", label: "less time drafting" },
      { value: "6 hrs", label: "saved per creator weekly" },
    ],
    story: {
      quote:
        "We went from scrambling for posts to a full calendar the AI keeps stocked. It even manages our YouTube channel end to end — and everything public still waits for my yes.",
      name: "Priya Sharma",
      role: "Content Lead, media brand",
    },
    faqs: [
      { q: "Can Onita really run our YouTube channel?", a: "Yes. The AI can handle uploads, thumbnails, playlists, and comment replies end to end, with publishing and public comments always held for a person to approve first." },
      { q: "Will the content sound like us?", a: "The AI drafts from your voice and past content, so posts and scripts come out on-brand and ready for a quick review rather than a rewrite." },
      { q: "Does anything post without our say-so?", a: "No. Anything that goes public waits in Approvals for a person, so your brand stays fully in your control." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your content calendar, brand voice, channels, and approval steps are configured before you start." },
    ],
    related: ["marketing", "sales", "communication"],
  },
  {
    slug: "follow-ups",
    name: "Follow-ups",
    group: "By use case",
    accent: "success",
    Icon: BellRingingIcon,
    ogIcon: "CalendarCheck",
    metaTitle: "Onita for Follow-ups — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for follow-ups. Put an AI teammate on every unanswered email, quote, and invoice — recover the money you're leaving on the table.",
    eyebrow: "Follow-ups",
    headline: "Chase every unanswered email, quote, and invoice ",
    headlineEmphasis: "automatically",
    subhead:
      "Onita puts an AI teammate on every follow-up — the quiet quote, the unpaid invoice, the email nobody answered — so you recover the money and deals you're leaving on the table.",
    summary:
      "Onita is an AI-era productivity platform that sets an AI teammate to chase every unanswered email, quote, and invoice so nothing valuable slips.",
    comparison: [
      { old: "Quotes that go quiet and never get chased", onita: "Flow follows up on every quote until it's answered" },
      { old: "Invoices sitting unpaid because nobody nudged", onita: "Flow chases invoices politely until they're paid" },
      { old: "Emails left unanswered and forgotten", onita: "AI Agents track every thread that needs a reply" },
      { old: "Follow-ups sent with no oversight", onita: "Approvals hold each message for your yes" },
    ],
    pillars: [
      { title: "Recover lost money", desc: "The AI chases unpaid invoices and quiet quotes, so revenue stops slipping away.", Icon: TrendUpIcon },
      { title: "Nothing forgotten", desc: "Every unanswered email and open thread is tracked and followed up on time.", Icon: BellRingingIcon },
      { title: "Always on-brand", desc: "Follow-ups are drafted in your voice and held for your approval before they send.", Icon: CheckCircleIcon },
    ],
    workflow: {
      title: "From silence to answered and paid",
      steps: [
        { agent: "AI Agents", action: "Spots every quote, invoice, and email that's gone quiet" },
        { agent: "Email", action: "Drafts a polite, on-brand follow-up for each one" },
        { agent: "Approvals", action: "Holds each message for your review before it sends" },
        { agent: "Flow", action: "Keeps following up on a cadence until there's a reply" },
        { agent: "Dashboards", action: "Shows what's recovered and what's still open" },
      ],
    },
    features: [
      { title: "Invoice chasing", desc: "The AI follows up on unpaid invoices politely and persistently, so cash comes in.", Icon: BellRingingIcon },
      { title: "Quote follow-up", desc: "Quiet quotes get chased until you get an answer, so warm deals don't just fade away.", Icon: TrendUpIcon },
      { title: "Email follow-up", desc: "Every unanswered thread is tracked and nudged, so nothing important slips your mind.", Icon: EnvelopeSimpleIcon },
      { title: "You approve each send", desc: "Follow-ups are drafted in your voice and wait for your yes before they go out.", Icon: CheckCircleIcon },
    ],
    agents: ["AI Agents", "Email", "Flow", "Approvals"],
    metrics: [
      { value: "2x", label: "faster invoice collection" },
      { value: "30%", label: "more quotes closed" },
      { value: "5 hrs", label: "of chasing saved weekly" },
    ],
    story: {
      quote:
        "We were losing real money to quotes and invoices nobody had time to chase. Onita follows up on every one for me to approve — and the cash we were leaving on the table started coming in.",
      name: "Michael Chen",
      role: "Founder, services business",
    },
    faqs: [
      { q: "Does Onita send follow-ups without me?", a: "No. The AI drafts each follow-up in your voice, but it waits in Approvals for your review, so nothing goes out unless you say so." },
      { q: "What can it follow up on?", a: "Unpaid invoices, quiet quotes, and unanswered emails — anything valuable that's gone silent gets tracked and chased on a sensible cadence until there's a reply." },
      { q: "Will the chasing feel pushy?", a: "The follow-ups are polite, on-brand, and spaced sensibly, so they recover money and deals without straining the relationship." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your invoices, quotes, follow-up cadence, and approval steps are configured before you start." },
    ],
    related: ["sales", "small-business", "customer-success"],
  },
  {
    slug: "inventory",
    name: "Inventory Management",
    group: "By use case",
    accent: "info",
    Icon: StackIcon,
    ogIcon: "Stack",
    metaTitle: "Onita for Inventory Management — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for inventory. Track stock in a smart sheet that warns you before you run out.",
    eyebrow: "Inventory Management",
    headline: "Track your stock in a smart sheet ",
    headlineEmphasis: "that warns you before you run out",
    subhead:
      "Onita tracks your inventory in a smart sheet that watches stock levels, flags what's running low, and reminds you to reorder — so you never run out or over-order again.",
    summary:
      "Onita is an AI-era productivity platform that tracks inventory in a smart sheet and warns you before you run out.",
    comparison: [
      { old: "A static spreadsheet nobody keeps current", onita: "Spreadsheet tracks stock and flags what's low" },
      { old: "Finding out you're out only when a customer asks", onita: "Flow warns you before stock runs out" },
      { old: "Reorders forgotten until it's too late", onita: "Flow reminds you to reorder on time" },
      { old: "No clear view of what's moving", onita: "Dashboards show stock and sales trends at a glance" },
    ],
    pillars: [
      { title: "Never run out", desc: "The sheet watches your stock and warns you in time to reorder.", Icon: BellRingingIcon },
      { title: "Never over-order", desc: "Clear trends show what's really moving, so you don't tie up cash in dead stock.", Icon: StackIcon },
      { title: "Always up to date", desc: "Stock levels stay current automatically, so the numbers you act on are real.", Icon: ArrowsClockwiseIcon },
    ],
    workflow: {
      title: "From stock in to reorder on time",
      steps: [
        { agent: "Spreadsheet", action: "Tracks every item, quantity, and reorder point" },
        { agent: "Flow", action: "Watches levels and flags anything running low" },
        { agent: "AI Agents", action: "Drafts the reorder and reminds the right person" },
        { agent: "Approvals", action: "Holds any purchase order for your sign-off" },
        { agent: "Dashboards", action: "Shows stock health and what's moving" },
      ],
    },
    features: [
      { title: "Smart stock sheet", desc: "Every item, quantity, and reorder point tracked in one sheet that stays current.", Icon: StackIcon },
      { title: "Low-stock alerts", desc: "The AI warns you before an item runs out, so you reorder in time, every time.", Icon: BellRingingIcon },
      { title: "Reorder reminders", desc: "Reorders are drafted and flagged for approval, so nothing gets forgotten.", Icon: ArrowsClockwiseIcon },
      { title: "Stock trends", desc: "See what's selling and what's sitting, so you buy the right amounts.", Icon: ChartLineUpIcon },
    ],
    agents: ["Spreadsheet", "Flow", "AI Agents", "Dashboards"],
    metrics: [
      { value: "90%", label: "fewer stockouts" },
      { value: "30%", label: "less cash tied in dead stock" },
      { value: "4 hrs", label: "saved on stock admin weekly" },
    ],
    story: {
      quote:
        "We used to find out we were out of something when a customer asked for it. Now the sheet warns us before it happens and reminds us to reorder — we haven't had a stockout since.",
      name: "Grace Adeyemi",
      role: "Operations Manager, retail business",
    },
    faqs: [
      { q: "How does Onita know when I'm running low?", a: "You set a reorder point for each item and the smart sheet watches your levels, so it flags anything running low and reminds you before you actually run out." },
      { q: "Can it help me reorder?", a: "Yes. The AI drafts the reorder and flags it for your approval, so restocking happens on time without you having to remember every item." },
      { q: "Do I need special software?", a: "No — it's a smart sheet that reads in plain language, and our team sets it up around your products and reorder points for you." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your items, quantities, reorder points, and alerts are configured before you start." },
    ],
    related: ["small-business", "operations", "resource-planning"],
  },
  {
    slug: "customer-success",
    name: "Customer Success",
    group: "By use case",
    accent: "brand",
    Icon: HeadsetIcon,
    ogIcon: "Headset",
    metaTitle: "Onita for Customer Success — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for customer success. Answer faster, follow up on time, and never drop a ticket — keep customers happy automatically.",
    eyebrow: "Customer Success",
    headline: "Answer faster and never drop a ticket ",
    headlineEmphasis: "so customers stay happy",
    subhead:
      "Onita gives customer teams an AI teammate that sorts every request, drafts fast replies, and follows up on time — so nothing is dropped and customers stay happy automatically.",
    summary:
      "Onita is an AI-era productivity platform that helps customer teams answer faster, follow up on time, and never drop a ticket.",
    comparison: [
      { old: "Requests scattered across inboxes and chats", onita: "Email sorts every request into one clear queue" },
      { old: "Slow replies while agents draft from scratch", onita: "AI Agents draft answers so replies go out fast" },
      { old: "Tickets dropped when things get busy", onita: "Flow tracks every ticket to resolution" },
      { old: "Follow-ups forgotten after the first reply", onita: "Flow schedules the check-in automatically" },
    ],
    pillars: [
      { title: "Faster answers", desc: "The AI drafts replies from your knowledge, so customers hear back in minutes, not days.", Icon: LightningIcon },
      { title: "Nothing dropped", desc: "Every ticket is tracked to resolution, so no request slips when things get busy.", Icon: CheckCircleIcon },
      { title: "Follow-up on time", desc: "Check-ins are scheduled automatically, so customers feel looked after.", Icon: BellRingingIcon },
    ],
    workflow: {
      title: "From request to resolved and followed up",
      steps: [
        { agent: "Email", action: "Sorts every request into one clear queue" },
        { agent: "AI Agents", action: "Drafts a fast, accurate reply from your knowledge" },
        { agent: "Approvals", action: "Holds sensitive replies for a person to send" },
        { agent: "Flow", action: "Tracks the ticket to resolution and schedules the follow-up" },
        { agent: "Dashboards", action: "Shows response times and open tickets at a glance" },
      ],
    },
    features: [
      { title: "Unified request queue", desc: "Every message across channels sorted into one queue, so nothing hides in an inbox.", Icon: HeadsetIcon },
      { title: "Drafted replies", desc: "The AI drafts accurate answers from your knowledge, so agents reply in minutes.", Icon: ChatCircleTextIcon },
      { title: "Ticket tracking", desc: "Every ticket followed to resolution, so nothing gets dropped when volume spikes.", Icon: CheckCircleIcon },
      { title: "Timely follow-up", desc: "Check-ins scheduled automatically, so customers feel looked after after the fix.", Icon: BellRingingIcon },
    ],
    agents: ["Email", "AI Agents", "Flow", "Dashboards"],
    metrics: [
      { value: "2x", label: "faster first response" },
      { value: "0", label: "tickets dropped" },
      { value: "5 hrs", label: "saved per agent weekly" },
    ],
    story: {
      quote:
        "Requests used to slip through the cracks when we got busy. Now every ticket is sorted, replies are drafted for us, and follow-ups happen on time — our customers notice, and our scores went up.",
      name: "Sofia Mendes",
      role: "Head of Customer Success, software company",
    },
    faqs: [
      { q: "Does the AI reply to customers on its own?", a: "It drafts fast, accurate replies from your knowledge base, and you decide which go out automatically and which wait for a person — sensitive replies are always held for approval." },
      { q: "How does it stop tickets being dropped?", a: "Every request is sorted into one queue and tracked to resolution, so nothing hides in an inbox or gets forgotten when volume spikes." },
      { q: "Can it handle follow-ups?", a: "Yes. Flow schedules check-ins automatically after a fix, so customers feel looked after without an agent having to remember each one." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your queues, knowledge base, reply drafts, and follow-up flows are configured before your team starts." },
    ],
    related: ["follow-ups", "communication", "small-business"],
  },
  {
    slug: "resource-planning",
    name: "Resource Planning",
    group: "By use case",
    accent: "warning",
    Icon: GaugeIcon,
    ogIcon: "ChartLineUp",
    metaTitle: "Onita for Resource Planning — AI Productivity Platform",
    metaDescription:
      "Onita is the #1 rated productivity platform for resource planning. Balance people, projects, and deadlines in one live view so nobody's overloaded and nothing slips.",
    eyebrow: "Resource Planning",
    headline: "Balance people, projects, and deadlines ",
    headlineEmphasis: "in one live view",
    subhead:
      "Onita gives planning teams a live view of who's working on what, where the pressure is, and which deadlines are at risk — so you allocate people well without anyone burning out.",
    summary:
      "Onita is an AI-era productivity platform that balances people, projects, and deadlines in one live view for confident resource planning.",
    comparison: [
      { old: "Capacity guessed from a stale spreadsheet", onita: "Spreadsheet shows real capacity and workload live" },
      { old: "Overloaded people spotted too late", onita: "AI Agents flag over-allocation before it burns out" },
      { old: "Deadline clashes discovered at the worst time", onita: "Flow surfaces at-risk deadlines early" },
      { old: "No single picture of the whole plan", onita: "Dashboards show people, projects, and dates in one view" },
    ],
    pillars: [
      { title: "Nobody overloaded", desc: "The AI flags over-allocation early, so you rebalance before anyone burns out.", Icon: GaugeIcon },
      { title: "Deadlines protected", desc: "At-risk dates surface early, so you move people before a clash becomes a miss.", Icon: CalendarCheckIcon },
      { title: "One live picture", desc: "People, projects, and deadlines in a single view that's always current.", Icon: ChartLineUpIcon },
    ],
    workflow: {
      title: "From capacity to a balanced plan",
      steps: [
        { agent: "Spreadsheet", action: "Tracks who's assigned to what and how full they are" },
        { agent: "AI Agents", action: "Flags over-allocation and clashing deadlines early" },
        { agent: "Flow", action: "Suggests rebalancing and updates the plan" },
        { agent: "Calendar", action: "Keeps every deadline and commitment in view" },
        { agent: "Dashboards", action: "Shows capacity and risk across the whole team live" },
      ],
    },
    features: [
      { title: "Live capacity view", desc: "See who's working on what and how full they are, always current.", Icon: GaugeIcon },
      { title: "Overload alerts", desc: "The AI flags over-allocation before it turns into burnout or a missed deadline.", Icon: BellRingingIcon },
      { title: "Deadline risk", desc: "Clashing and at-risk dates surface early, so you rebalance in time.", Icon: CalendarCheckIcon },
      { title: "One planning dashboard", desc: "People, projects, and deadlines in one live view for confident decisions.", Icon: ChartLineUpIcon },
    ],
    agents: ["Spreadsheet", "AI Agents", "Calendar", "Dashboards"],
    metrics: [
      { value: "40%", label: "fewer overloaded weeks" },
      { value: "30%", label: "fewer missed deadlines" },
      { value: "5 hrs", label: "saved on planning weekly" },
    ],
    story: {
      quote:
        "We used to plan capacity off a spreadsheet that was always out of date. Onita shows who's stretched and which deadlines are at risk in real time — so I rebalance before anyone burns out.",
      name: "James Whitfield",
      role: "Head of Delivery, agency",
    },
    faqs: [
      { q: "How does Onita show capacity?", a: "It tracks who's assigned to what and how full each person is in one live view, so you plan off real workload instead of a stale spreadsheet." },
      { q: "Can it warn me before someone's overloaded?", a: "Yes. The AI flags over-allocation and clashing deadlines early, so you rebalance the plan before it turns into burnout or a missed date." },
      { q: "Does it work across multiple projects?", a: "It pulls people, projects, and deadlines into one dashboard, so you see the whole plan at once and make confident trade-offs." },
      { q: "How do we get started?", a: "Book a demo and Onita's team sets everything up for you — your people, projects, capacity, and dashboards are configured before your team starts." },
    ],
    related: ["project-management", "operations", "enterprise"],
  },
];

export const useCaseMap: Record<string, Solution> = Object.fromEntries(
  useCases.map((u) => [u.slug, u])
);

export function getUseCase(slug: string): Solution | undefined {
  return useCaseMap[slug];
}

export const useCaseGroups = ["By team", "By company type", "By use case"] as const;
