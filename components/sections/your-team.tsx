import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCaseMap } from "@/lib/use-cases";
import { accentClasses } from "@/lib/products";

const featured = [
  "sales",
  "marketing",
  "operations",
  "project-management",
  "customer-success",
  "follow-ups",
  "startup",
  "small-business",
  "social-content",
];

export function YourTeam() {
  const solutions = featured.map((slug) => useCaseMap[slug]).filter(Boolean);

  return (
    <Section id="solutions" tone="light" labelledBy="solutions-heading">
      <SectionHeading
        id="solutions-heading"
        eyebrow="Solutions"
        title="Your team just got bigger."
        description="Whatever your team does — sales, marketing, operations, recruiting, customer success — Onita gives it AI teammates that pitch in and get real work done."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => {
          const a = accentClasses[s.accent];
          return (
            <li key={s.slug}>
              <Link
                href={`/use-cases/${s.slug}`}
                className="group flex h-full flex-col rounded-card-lg border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                >
                  <s.Icon size={24} weight="fill" aria-hidden="true" />
                </span>
                <span className={`mt-5 text-xs font-semibold uppercase tracking-wider ${a.text}`}>
                  {s.group}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-800">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                  Explore {s.name}
                  <ArrowRightIcon
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/use-cases"
          className="inline-flex items-center gap-1.5 rounded-button border border-border bg-surface px-5 py-3 font-display text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
        >
          See all solutions
          <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
