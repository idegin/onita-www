import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CaretRightIcon,
  UsersThreeIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { MemberAvatar } from "@/components/ui/member-avatar";
import { teamMembers } from "@/lib/team";
import { accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema, personSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Team — The People Building Onita",
  description:
    "Meet the team behind Onita, the AI Productivity Platform. We set up and run AI products for individuals and teams of all sizes so they get more done with AI.",
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/team`,
    title: "The team behind Onita — the AI Productivity Platform",
    description:
      "Meet the people who set up and run AI productivity platforms for individuals and teams of all sizes.",
  },
};

const socialIcons: Record<string, Icon> = {
  X: XLogoIcon,
  LinkedIn: LinkedinLogoIcon,
};

export default function TeamIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ])
        )}
      />
      {teamMembers.map((member) => (
        <script
          key={member.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            personSchema({
              name: member.name,
              slug: member.slug,
              role: member.role,
              description: member.summary,
              sameAs: member.socials.map((s) => s.href),
              image: member.image,
            })
          )}
        />
      ))}

      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 70% 20%, #000 30%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-white/55">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
              <li className="font-medium text-white/90" aria-current="page">
                Team
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <UsersThreeIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            The team
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The people building your <span className="text-gradient-ai">AI productivity platform</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Onita is a fully managed platform, which means real people stand behind every workspace we
            ship. We configure the AI products, wire them into your tools, and run them for you — so your
            team gets more done with AI.
          </p>
        </div>
      </section>

      <Section tone="light" labelledBy="team-leadership-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id="team-leadership-heading"
            className="font-display text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl"
          >
            Leadership
          </h2>
          <span className="text-sm text-muted-foreground">
            {teamMembers.length} {teamMembers.length === 1 ? "person" : "people"}
          </span>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => {
            const a = accentClasses[member.accent];
            return (
              <li key={member.slug}>
                <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-card-lg border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${a.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                  />
                  <Link
                    href={`/team/${member.slug}`}
                    className="relative shrink-0 rounded-card ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${member.name}, ${member.role}`}
                  >
                    <MemberAvatar
                      name={member.name}
                      image={member.image}
                      accent={member.accent}
                      className="h-24 w-24 rounded-card sm:h-28 sm:w-28"
                      monogramClassName="text-3xl sm:text-4xl"
                      sizes="112px"
                    />
                  </Link>

                  <div className="relative min-w-0">
                    <h3 className="font-display text-xl font-bold text-ink-800">
                      <Link
                        href={`/team/${member.slug}`}
                        className="transition-colors after:absolute after:inset-0 hover:text-brand-600"
                      >
                        {member.name}
                      </Link>
                    </h3>
                    <p className={`mt-0.5 text-sm font-semibold ${a.text}`}>{member.role}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.tagline}</p>

                    <div className="relative z-10 mt-4 flex items-center gap-2">
                      {member.socials.map((social) => {
                        const SocialIcon = socialIcons[social.label];
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on ${social.label}`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-gray-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                          >
                            {SocialIcon ? <SocialIcon size={17} weight="fill" aria-hidden="true" /> : social.label}
                          </a>
                        );
                      })}
                      <span className="ml-auto inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                        Profile
                        <ArrowRightIcon
                          size={15}
                          weight="bold"
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="gradient" ariaLabel="Work with the Onita team">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build your AI productivity platform together
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Book a demo and our team will map your biggest time sinks to the AI products that clear them — then
            set up and run the whole thing for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
            >
              <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
              Book a demo
            </Link>
            <Link
              href={siteConfig.salesUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
              Talk to sales
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
