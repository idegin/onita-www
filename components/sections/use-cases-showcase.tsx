import Image from "next/image";
import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  KanbanIcon,
  UsersThreeIcon,
  MagnetIcon,
  MegaphoneIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { useCases as allUseCases } from "@/lib/use-cases";

type UseCase = {
  n: string;
  Icon: Icon;
  title: string;
  desc: string;
  tasks: string[];
  image: string;
  alt: string;
  bg: string;
  text: "light" | "dark";
};

const INK = "#1b0a45";

const useCases: UseCase[] = [
  {
    n: "01",
    Icon: KanbanIcon,
    title: "Project management & task tracking",
    desc: "Hand Onita the plan. It builds the boards, assigns the tasks, chases the updates, and flags whatever's slipping — so projects ship on time without the manual admin.",
    tasks: ["Boards & timelines", "Auto status updates", "Deadline nudges"],
    image: "/use-cases/project-management.jpg",
    alt: "Three colleagues collaborating around a project board with To Do, Doing and Done columns",
    bg: "#280f60",
    text: "light",
  },
  {
    n: "02",
    Icon: UsersThreeIcon,
    title: "Human resources & hiring",
    desc: "From open role to signed offer, Onita screens applicants, schedules interviews, answers candidate questions, and preps onboarding — your team just makes the calls that matter.",
    tasks: ["CV screening", "Interview scheduling", "Onboarding packs"],
    image: "/use-cases/human-resources.jpg",
    alt: "Two colleagues shaking hands across a desk beside candidate CVs and an interview calendar",
    bg: "#d641a9",
    text: "light",
  },
  {
    n: "03",
    Icon: MagnetIcon,
    title: "Lead generation & cold outreach",
    desc: "Onita researches ideal-fit accounts, writes personalized cold outreach, and follows up on autopilot — filling your pipeline with real conversations while your team sleeps.",
    tasks: ["Lead research", "Personalized outreach", "Auto follow-ups"],
    image: "/use-cases/lead-generation.jpg",
    alt: "A specialist at a laptop with a magnet drawing in leads and a rising sales pipeline funnel",
    bg: "#f4886b",
    text: "dark",
  },
  {
    n: "04",
    Icon: MegaphoneIcon,
    title: "Sales & marketing",
    desc: "Onita drafts the campaigns, spins up the content, nurtures every deal, and reports on what's working — turning attention into revenue with a fraction of the effort.",
    tasks: ["Campaigns & content", "Proposal drafting", "Pipeline nurture"],
    image: "/use-cases/sales-marketing.jpg",
    alt: "Two marketers presenting a growth dashboard beside a megaphone and a rising revenue counter",
    bg: "#46a4f1",
    text: "dark",
  },
];

export function UseCasesShowcase() {
  return (
    <section id="use-cases" aria-labelledby="use-cases-heading" className="bg-surface">
      <div className="px-6 pt-24 pb-12 sm:px-10 lg:px-16 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Use cases
          </span>
          <h2
            id="use-cases-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
          >
            How teams use Onita every day
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From projects and hiring to outreach and revenue, Onita does the work alongside your
            team — set up and run for you. Here&apos;s where it earns its keep.
          </p>
        </div>
      </div>

      {useCases.map((uc, i) => {
        const light = uc.text === "light";
        const imageLeft = i % 2 === 1;
        return (
          <article
            key={uc.n}
            style={{ backgroundColor: uc.bg }}
            className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-2"
          >
            <div
              className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-24 ${
                imageLeft ? "lg:order-2" : ""
              }`}
              style={light ? undefined : { color: INK }}
            >
              <div className="mx-auto w-full max-w-lg">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      light ? "bg-white/15 text-white ring-1 ring-white/25" : "bg-black/10"
                    }`}
                    style={light ? undefined : { color: INK }}
                  >
                    <uc.Icon size={26} weight="fill" aria-hidden="true" />
                  </span>
                  <span
                    className={`font-display text-sm font-bold tracking-wider ${
                      light ? "text-white/60" : ""
                    }`}
                    style={light ? undefined : { color: INK, opacity: 0.55 }}
                  >
                    {uc.n} / 04
                  </span>
                </div>

                <h3
                  className={`mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl ${
                    light ? "text-white" : ""
                  }`}
                >
                  {uc.title}
                </h3>
                <p
                  className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${
                    light ? "text-white/85" : ""
                  }`}
                  style={light ? undefined : { color: INK, opacity: 0.82 }}
                >
                  {uc.desc}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {uc.tasks.map((task) => (
                    <li
                      key={task}
                      className={`rounded-pill px-3.5 py-1.5 text-sm font-medium ${
                        light
                          ? "bg-white/15 text-white ring-1 ring-white/20"
                          : "bg-white/40 ring-1 ring-black/10"
                      }`}
                      style={light ? undefined : { color: INK }}
                    >
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Link
                    href={siteConfig.demoUrl}
                    className={`inline-flex items-center gap-2 rounded-button px-6 py-3.5 font-display text-base font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover ${
                      light ? "bg-white" : "text-white"
                    }`}
                    style={light ? { color: uc.bg } : { backgroundColor: INK }}
                  >
                    Book a demo
                    <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-0 ${
                imageLeft ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={uc.image}
                alt={uc.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </article>
        );
      })}

      <div className="relative overflow-hidden bg-ink-950 px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-glow opacity-50"
        />
        <div className="relative mx-auto max-w-content">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              And plenty more
            </span>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Whatever your team does, Onita does it with them.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/70">
              From operations and recruiting to customer success, inventory, and follow-ups — Onita
              adapts to how your team already works. Explore the full library of use cases.
            </p>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {allUseCases.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/use-cases/${s.slug}`}
                  className="inline-flex items-center rounded-pill border border-white/12 bg-white/5 px-4 py-2 font-display text-sm font-medium text-white/85 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 rounded-button bg-white px-6 py-3.5 font-display text-base font-semibold text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
            >
              Explore all use cases
              <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
