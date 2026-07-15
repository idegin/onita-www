import Link from "next/link";
import Image from "next/image";
import { SparkleIcon, ArrowRightIcon, PlayCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { aiProviders } from "@/lib/brands";
import { RotatingShot } from "@/components/ui/rotating-shot";

const PRODUCT_SHOTS = [
  "/screenshots/half-1.png",
  "/screenshots/half-2.png",
  "/screenshots/half-3.png",
  "/screenshots/half-4.png",
  "/screenshots/half-5.png",
  "/screenshots/half-6.png",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-16 lg:min-h-[52rem] lg:pt-32 lg:pb-28">
      <RotatingShot
        shots={PRODUCT_SHOTS}
        decorative
        priority
        sizes="60vw"
        className="pointer-events-none absolute bottom-0 right-[-1rem] hidden w-[52rem] overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:block xl:w-[60rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, #11052c 0%, #11052c 26%, rgba(17,5,44,0.82) 42%, rgba(17,5,44,0.32) 60%, rgba(17,5,44,0) 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, #11052c 0%, rgba(17,5,44,0) 26%), linear-gradient(to bottom, #11052c 0%, rgba(17,5,44,0) 12%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 20% 30%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-glow"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute left-[15%] top-64 h-[26rem] w-[26rem] rounded-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(206,62,152,0.24), transparent 70%)",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
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
            Your team just got <span className="text-gradient-ai">bigger.</span>
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
                    <Image
                      src={model.logo}
                      alt=""
                      width={16}
                      height={16}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  {model.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:h-full">
          <RotatingShot
            shots={PRODUCT_SHOTS}
            alt="The Onita workspace dashboard, where AI employees run reports, charts, and tasks alongside your team."
            priority
            sizes="100vw"
            className="relative overflow-hidden rounded-card border border-white/12 shadow-hover lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
