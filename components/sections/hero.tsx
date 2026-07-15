import Link from "next/link";
import Image from "next/image";
import {
  SparkleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  TrendUpIcon,
  HeadsetIcon,
  MegaphoneIcon,
  UsersThreeIcon,
  CheckCircleIcon,
  LightningIcon,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { aiProviders } from "@/lib/brands";

const agents = [
  { label: "Sales Agent", Icon: TrendUpIcon, position: "left-4 top-0 -translate-y-1/2", motion: "animate-float", delay: "0s" },
  { label: "Support Agent", Icon: HeadsetIcon, position: "right-4 top-0 -translate-y-1/2", motion: "animate-drift", delay: "0.6s" },
  { label: "Marketing Agent", Icon: MegaphoneIcon, position: "left-4 bottom-0 translate-y-1/2", motion: "animate-drift", delay: "1.1s" },
  { label: "HR Agent", Icon: UsersThreeIcon, position: "right-4 bottom-0 translate-y-1/2", motion: "animate-float", delay: "1.6s" },
];

const activity = [
  { agent: "Sales Agent", action: "sent 12 proposals", tone: "text-success-500" },
  { agent: "Support Agent", action: "resolved 34 tickets", tone: "text-brand-300" },
  { agent: "Finance Agent", action: "reconciled invoices", tone: "text-accent-400" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-glow"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -right-32 top-40 h-[460px] w-[460px] rounded-full"
        style={{ backgroundImage: "radial-gradient(circle, rgba(206,62,152,0.28), transparent 70%)", animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div className="max-w-xl">
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <SparkleIcon size={14} weight="fill" className="text-accent-400" />
            {siteConfig.tagline}
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.12s" }}
          >
            Your team just got{" "}
            <span className="text-gradient-ai">bigger.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-lg leading-8 text-white/70"
            style={{ animationDelay: "0.2s" }}
          >
            Create AI employees that collaborate with your team, automate repetitive work, and help
            your business scale without hiring hundreds of people.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href={siteConfig.signupUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
            >
              Start free
              <ArrowRightIcon size={18} weight="bold" />
            </a>
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PlayCircleIcon size={20} weight="fill" />
              Book a demo
            </Link>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-3"
            style={{ animationDelay: "0.36s" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Powered by the world&rsquo;s best AI models
            </p>
            <ul className="flex flex-wrap gap-2">
              {aiProviders.map((model) => (
                <li
                  key={model.name}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-white/12 bg-white/5 py-1 pl-1 pr-3 text-sm font-medium text-white/80"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1">
                    <Image src={model.logo} alt="" width={16} height={16} className="h-full w-full object-contain" />
                  </span>
                  {model.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "0.24s" }}
        >
          <div className="relative rounded-card-lg border border-white/12 bg-white/[0.06] p-3 shadow-glow backdrop-blur-xl">
            <div className="rounded-card bg-surface p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-ai text-white">
                    <LightningIcon size={17} weight="fill" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800">Today&rsquo;s workforce</p>
                    <p className="text-xs text-muted-foreground">9 AI employees active</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
                  Live
                </span>
              </div>

              <div
                className="mt-5 grid grid-cols-7 items-end gap-2"
                role="img"
                aria-label="Weekly tasks completed by your AI workforce, trending upward"
              >
                {[38, 52, 45, 66, 58, 80, 92].map((h, i) => (
                  <span
                    key={i}
                    className="rounded-t-md bg-gradient-to-t from-brand-200 to-brand-500"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <ul className="mt-5 space-y-2.5">
                {activity.map((item) => (
                  <li
                    key={item.agent}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface-muted px-3 py-2.5"
                  >
                    <CheckCircleIcon size={18} weight="fill" className={item.tone} />
                    <span className="text-sm text-ink-800">
                      <strong className="font-semibold">{item.agent}</strong>{" "}
                      <span className="text-muted-foreground">{item.action}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {agents.map(({ label, Icon, position, motion, delay }) => (
            <div key={label} className={`absolute z-10 hidden md:block ${position}`}>
              <div
                style={{ animationDelay: delay }}
                className={`${motion} inline-flex items-center gap-2 rounded-pill border border-white/15 bg-ink-900/85 px-3 py-2 text-sm font-medium text-white shadow-hover backdrop-blur`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Icon size={14} weight="bold" />
                </span>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
