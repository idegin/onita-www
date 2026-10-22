import Image from "next/image";
import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowRightIcon, BuildingsIcon, CalendarCheckIcon, ChartLineUpIcon,
  CheckCircleIcon, ClockCountdownIcon, CurrencyNgnIcon, EnvelopeSimpleIcon,
  FileTextIcon, GraduationCapIcon, HandTapIcon, HeadsetIcon, HouseLineIcon,
  KanbanIcon, LightningIcon, ShieldCheckIcon, StackIcon,
  UsersThreeIcon, WrenchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const problems = [
  { Icon: ClockCountdownIcon, title: "Follow-ups keep falling through", body: "A prospect asks for a quote. Someone means to reply. A week passes and the opportunity goes quiet." },
  { Icon: StackIcon, title: "Information lives everywhere", body: "Customer details, project updates and invoices are split across apps, chats and spreadsheets." },
  { Icon: UsersThreeIcon, title: "Too much depends on you", body: "Reminders, approvals and routine decisions keep finding their way back to the founder's desk." },
  { Icon: ChartLineUpIcon, title: "Busy is not the same as in control", body: "The team is working, but it is difficult to see what is late, blocked or waiting for attention." },
];

export function BusinessProblems() {
  return (
    <Section id="problems" tone="light" labelledBy="problems-heading">
      <SectionHeading id="problems-heading" eyebrow="Sound familiar?" title="Growth creates work your team should not have to chase." description="Onita takes the repetitive coordination around customers, delivery and payments off your team's plate." />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-card-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {problems.map(({ Icon, title, body }, index) => (
          <li key={title} className="group bg-surface p-6 transition-colors hover:bg-brand-50/55 lg:p-7">
            <span className="font-mono text-xs font-semibold text-brand-500">0{index + 1}</span>
            <Icon size={27} weight="fill" className="mt-8 text-ink-800 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

type Outcome = { number: string; eyebrow: string; title: string; body: string; points: string[]; href: string; Icon: Icon; tone: string; visual: React.ReactNode };

const outcomes: Outcome[] = [
  {
    number: "01", eyebrow: "Sales follow-ups", title: "Keep every good opportunity moving.",
    body: "Onita keeps leads and conversations organized, prepares timely follow-ups and shows your team which opportunities need attention.",
    points: ["Track every lead and conversation", "Prepare personalized follow-ups", "Surface deals that need attention"],
    href: "/use-cases/follow-ups", Icon: EnvelopeSimpleIcon, tone: "bg-ink-950",
    visual: <div className="space-y-3"><p className="text-xs font-semibold uppercase tracking-wider text-white/45">Follow-up queue</p>{["Ada · Proposal sent", "Kola · Demo completed", "Teni · Quote viewed"].map((item, i) => <div key={item} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3"><span className="text-sm text-white/85">{item}</span><span className={i === 0 ? "shrink-0 rounded-pill bg-warning-500/20 px-2 py-1 text-[11px] font-semibold text-warning-500" : "shrink-0 rounded-pill bg-success-500/15 px-2 py-1 text-[11px] font-semibold text-success-500"}>{i === 0 ? "Due today" : "Draft ready"}</span></div>)}</div>,
  },
  {
    number: "02", eyebrow: "Client operations", title: "Keep work moving without chasing everyone.",
    body: "Onita organizes projects, responsibilities and deadlines, then prepares clear updates so you know what is moving and what needs help.",
    points: ["Organize projects and owners", "Track deadlines and blockers", "Prepare progress updates"],
    href: "/use-cases/operations", Icon: KanbanIcon, tone: "bg-brand-600",
    visual: <div><p className="text-xs font-semibold uppercase tracking-wider text-white/55">Client delivery</p><div className="mt-4 grid grid-cols-3 gap-2">{[["To do","4"],["In progress","7"],["Complete","12"]].map(([label,count]) => <div key={label} className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15"><span className="block text-2xl font-extrabold text-white">{count}</span><span className="mt-1 block text-[11px] text-white/65">{label}</span></div>)}</div><div className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold text-ink-900 shadow-soft">Website review <span className="float-right text-brand-600">Due Fri</span></div></div>,
  },
  {
    number: "03", eyebrow: "Invoice collections", title: "Finish the work. Follow through on payment.",
    body: "Onita keeps receivables visible and prepares polite reminders, so outstanding invoices do not disappear beneath the day's other work.",
    points: ["Keep payment records organized", "Prepare overdue reminders", "See paid, pending and overdue"],
    href: "/use-cases/follow-ups", Icon: CurrencyNgnIcon, tone: "bg-accent-700",
    visual: <div><p className="text-xs font-semibold uppercase tracking-wider text-white/55">Receivables</p><p className="mt-3 text-4xl font-extrabold text-white">₦4.8m</p><p className="mt-1 text-sm text-white/60">Outstanding across 8 invoices</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15"><span className="block h-full w-[68%] rounded-full bg-white" /></div><div className="mt-3 flex justify-between text-xs text-white/60"><span>68% collected</span><span>3 reminders ready</span></div></div>,
  },
];

export function BusinessOutcomes() {
  return (
    <section id="solutions" aria-labelledby="outcomes-heading" className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-10">
        <SectionHeading id="outcomes-heading" eyebrow="Real work. Clear outcomes." title="Start where the manual work costs you most." description="Three practical workflows cover the path from a new opportunity to delivered work and money in the bank." />
        <div className="mt-14 space-y-5">
          {outcomes.map((item, index) => (
            <article key={item.title} className="grid overflow-hidden rounded-card-lg border border-border bg-surface shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3"><span className="font-mono text-xs font-semibold text-brand-500">{item.number}</span><span className="h-px w-8 bg-brand-200" /><span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{item.eyebrow}</span></div>
                <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{item.body}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{item.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-medium text-foreground"><CheckCircleIcon size={17} weight="fill" className="mt-0.5 shrink-0 text-success-600" />{point}</li>)}</ul>
                <Link href={item.href} className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700">Explore {item.eyebrow}<ArrowRightIcon size={15} weight="bold" /></Link>
              </div>
              <div className={`relative flex min-h-[20rem] items-center justify-center overflow-hidden p-7 sm:p-12 lg:min-h-[30rem] ${item.tone}`}>
                <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:36px_36px]" />
                <div className="relative w-full max-w-md rounded-card border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ink-900"><item.Icon size={22} weight="fill" /></div>{item.visual}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", Icon: HeadsetIcon, title: "Show us what takes up your time", body: "Tell us how your business works, the tools you use and where important work gets stuck." },
  { n: "02", Icon: WrenchIcon, title: "We set Onita up around you", body: "We organize the workspace, connect supported tools and configure your first AI teammates." },
  { n: "03", Icon: HandTapIcon, title: "Your team stays in control", body: "Routine work moves forward. Actions that need judgment stop for review and approval." },
];

export function HowOnitaWorks() {
  return (
    <Section id="how-it-works" tone="dark" labelledBy="how-heading">
      <SectionHeading invert id="how-heading" eyebrow="Simple to start" title="Tell us how your business works. We help with the rest." description="You do not need a technical team or weeks of complicated setup. Onita is configured around the work your team already does." />
      <ol className="relative mt-14 grid gap-4 lg:grid-cols-3">
        {steps.map(({ n, Icon, title, body }) => <li key={title} className="relative rounded-card border border-white/10 bg-white/[0.045] p-7"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-200"><Icon size={24} weight="fill" /></span><span className="font-mono text-xs font-semibold text-white/35">{n} / 03</span></div><h3 className="mt-8 text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{body}</p></li>)}
      </ol>
      <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-card border border-success-500/20 bg-success-500/[0.08] px-6 py-5 sm:flex-row"><p className="flex items-start gap-3 text-sm leading-6 text-white/75"><ShieldCheckIcon size={21} weight="fill" className="mt-0.5 shrink-0 text-success-500" /><span><strong className="text-white">Approval is part of the workflow.</strong> Define what AI teammates may access, which tasks they can prepare and where a person must decide.</span></p><Link href={siteConfig.demoUrl} className="shrink-0 rounded-button bg-white px-5 py-3 text-sm font-bold text-ink-900">Plan your first workflow</Link></div>
    </Section>
  );
}

const platformItems = [
  { Icon: FileTextIcon, title: "Documents & files", body: "Draft, summarize and keep business information useful." },
  { Icon: StackIcon, title: "Business databases", body: "Organize customers, projects, invoices and records." },
  { Icon: ChartLineUpIcon, title: "Dashboards & reports", body: "Turn operational records into a clear view of the business." },
  { Icon: LightningIcon, title: "Automations & approvals", body: "Move repeat work forward with human checks where needed." },
];

export function OnitaPlatform() {
  return (
    <Section id="platform" tone="light" labelledBy="platform-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div><SectionHeading id="platform-heading" align="left" eyebrow="One connected workspace" title="Your work in one place. AI teammates that help move it forward." description="Onita connects the records, communication and repeatable work behind your business so your team can see the whole picture." /><ul className="mt-9 grid gap-5 sm:grid-cols-2">{platformItems.map(({ Icon, title, body }) => <li key={title} className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon size={20} weight="fill" /></span><div><h3 className="text-sm font-bold text-ink-900">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p></div></li>)}</ul><Link href="/products" className="mt-8 inline-flex items-center gap-1.5 rounded-button border border-border px-5 py-3 text-sm font-bold text-ink-900 hover:border-brand-200 hover:text-brand-600">Explore the platform<ArrowRightIcon size={15} weight="bold" /></Link></div>
        <div className="relative"><div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-brand-100/70 blur-2xl" /><Image src="/screenshots/half-1.png" alt="Onita dashboard showing business records and live reports in one workspace" width={1329} height={959} sizes="(max-width: 1024px) 100vw, 55vw" className="relative rounded-card-lg border border-border shadow-hover" /></div>
      </div>
    </Section>
  );
}

const industries = [
  { Icon: BuildingsIcon, title: "Agencies & consultancies", body: "Coordinate client delivery, updates, approvals and follow-ups." },
  { Icon: UsersThreeIcon, title: "Professional services", body: "Keep client information, meetings and recurring work organized." },
  { Icon: HouseLineIcon, title: "Real estate", body: "Stay on top of inquiries, appointments, documents and prospects." },
  { Icon: GraduationCapIcon, title: "Education & training", body: "Coordinate admissions, schedules, payments and learner communication." },
];

export function Industries() {
  return <Section id="industries" tone="light" labelledBy="industries-heading"><SectionHeading id="industries-heading" eyebrow="Built for businesses like yours" title="Different services. The same need to keep work moving." description="Start with the workflow that costs your team the most time, then expand as the business grows." /><ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map(({ Icon, title, body }) => <li key={title}><article className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft"><Icon size={27} weight="fill" className="text-brand-600" /><h3 className="mt-8 text-lg font-bold text-ink-900">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{body}</p></article></li>)}</ul></Section>;
}

const whyReasons = [
  { Icon: WrenchIcon, title: "Configured around your business", body: "Tell us how your business works, and our team builds the workspace, connections, and AI teammates around your actual workflows — not the other way round." },
  { Icon: CalendarCheckIcon, title: "Managed from day one", body: "Our team handles setup, onboarding, and tuning so your people get up and running without any technical work on your side." },
  { Icon: ShieldCheckIcon, title: "People stay in control", body: "Your team keeps final judgment on relationships, decisions, and actions that matter. AI handles the preparation and follow-through." },
];

export function WhyOnita() {
  return <Section id="why-onita" tone="muted" labelledBy="fit-heading"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><SectionHeading id="fit-heading" align="left" eyebrow="Why Onita" title="Made for the way growing businesses actually work." description="Useful automation is not a blank canvas. It starts with your processes, your people and support you can reach." /><ul className="grid gap-4 sm:grid-cols-3">{whyReasons.map(({ Icon, title, body }) => <li key={title} className="rounded-card border border-border bg-surface p-6"><Icon size={24} weight="fill" className="text-accent-600" /><h3 className="mt-5 text-base font-bold text-ink-900">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></li>)}</ul></div></Section>;
}
