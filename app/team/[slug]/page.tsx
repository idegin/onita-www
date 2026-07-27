import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CaretRightIcon,
  MapPinIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { MemberAvatar } from "@/components/ui/member-avatar";
import { teamMembers, getTeamMember } from "@/lib/team";
import { accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, personSchema, breadcrumbSchema } from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

const socialIcons: Record<string, Icon> = {
  X: XLogoIcon,
  LinkedIn: LinkedinLogoIcon,
};

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  const path = `/team/${member.slug}`;
  const images = member.ogImage ? [{ url: member.ogImage }] : undefined;
  return {
    title: member.metaTitle,
    description: member.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      url: `${siteConfig.url}${path}`,
      title: `${member.metaTitle} | ${siteConfig.name}`,
      description: member.metaDescription,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.metaTitle} | ${siteConfig.name}`,
      description: member.metaDescription,
      ...(images ? { images } : {}),
    },
  };
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const a = accentClasses[member.accent];
  const others = teamMembers.filter((m) => m.slug !== member.slug);

  return (
    <>
      <script
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
            { name: member.name, path: `/team/${member.slug}` },
          ])
        )}
      />

      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-28">
        <div
          aria-hidden="true"
          className={`animate-pulse-glow pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br ${a.gradient} opacity-25 blur-3xl`}
        />
        <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="order-2 lg:order-1">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li>
                  <Link href="/team" className="transition-colors hover:text-white">
                    Team
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li className="font-medium text-white/90" aria-current="page">
                  {member.name}
                </li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
              <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-300" />
              {member.group}
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {member.name}
            </h1>
            <p className={`mt-3 font-display text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${a.gradient}`}>
              {member.role}
            </p>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">{member.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <MapPinIcon size={16} weight="fill" aria-hidden="true" className="text-brand-300" />
                {member.location}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {member.socials.map((social) => {
                const SocialIcon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-button border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {SocialIcon ? (
                      <SocialIcon size={18} weight="fill" aria-hidden="true" className="text-brand-300" />
                    ) : null}
                    {social.handle}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
              <div
                aria-hidden="true"
                className={`absolute -inset-3 rounded-card-lg bg-gradient-to-br ${a.gradient} opacity-30 blur-2xl`}
              />
              <div className="relative rounded-card-lg border border-white/10 bg-white/[0.04] p-3 shadow-hover backdrop-blur-xl">
                <MemberAvatar
                  name={member.name}
                  image={member.image}
                  accent={member.accent}
                  className="aspect-square w-full rounded-card"
                  monogramClassName="text-7xl sm:text-8xl"
                  sizes="(max-width: 1024px) 24rem, 30vw"
                  priority
                />
                <dl className="mt-3 grid grid-cols-3 gap-2">
                  {member.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-card border border-white/10 bg-white/[0.03] px-2.5 py-3 text-center"
                    >
                      <dt className="sr-only">{item.label}</dt>
                      <dd className="font-display text-base font-bold text-white">{item.value}</dd>
                      <dd className="mt-0.5 text-[11px] leading-tight text-white/55">{item.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light" labelledBy="team-bio-heading" containerClassName="max-w-content">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-prose">
            <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>About</span>
            <h2
              id="team-bio-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl"
            >
              About {member.name.split(" ")[0]}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-foreground">
              {member.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside aria-labelledby="team-focus-heading" className="lg:pt-14">
            <h3 id="team-focus-heading" className="font-display text-lg font-bold text-ink-800">
              Where {member.name.split(" ")[0]} focuses
            </h3>
            <ul className="mt-5 space-y-4">
              {member.focus.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-card border border-border bg-surface p-4 shadow-soft"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                  >
                    <item.Icon size={22} weight="fill" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold text-ink-800">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted-foreground">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="muted" labelledBy="team-more-heading">
          <h2 id="team-more-heading" className="font-display text-2xl font-bold text-ink-800 sm:text-3xl">
            More of the team
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => {
              const ma = accentClasses[m.accent];
              return (
                <li key={m.slug}>
                  <Link
                    href={`/team/${m.slug}`}
                    className="group flex h-full items-center gap-4 rounded-card-lg border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
                  >
                    <MemberAvatar
                      name={m.name}
                      image={m.image}
                      accent={m.accent}
                      className="h-14 w-14 shrink-0 rounded-2xl"
                      monogramClassName="text-lg"
                      sizes="56px"
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-base font-bold text-ink-800">{m.name}</span>
                      <span className={`block text-sm font-medium ${ma.text}`}>{m.role}</span>
                    </span>
                    <ArrowRightIcon
                      size={16}
                      weight="bold"
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      <Section tone="light" ariaLabel={`Work with ${member.name} and the Onita team`}>
        <div className="relative overflow-hidden rounded-card-lg bg-ink-950 px-6 py-14 shadow-hover sm:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${a.gradient} opacity-40 blur-3xl`}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build your AI workforce with our team
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                Book a demo and the people behind Onita will design, build, and run a team of AI agents
                around how your business already works.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={siteConfig.demoUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
              >
                <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
                Book a demo
              </Link>
              <Link
                href={siteConfig.salesUrl}
                className="inline-flex items-center justify-center gap-2 rounded-button border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ChatCircleTextIcon size={20} weight="fill" aria-hidden="true" />
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" ariaLabel="Back to the team">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          <ArrowLeftIcon size={16} weight="bold" aria-hidden="true" />
          Back to the team
        </Link>
      </Section>
    </>
  );
}
