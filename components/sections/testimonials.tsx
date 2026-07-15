import { QuotesIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const metrics = [
  { value: "10x", label: "faster output per team" },
  { value: "40+", label: "hours saved weekly" },
  { value: "60%", label: "lower tooling spend" },
  { value: "3 days", label: "to full onboarding" },
];

const quotes = [
  {
    quote:
      "We replaced five tools and two contractor roles with Onita agents. Our small team now ships like a company three times our size.",
    name: "Amara Okafor",
    role: "COO, Northwind Logistics",
  },
  {
    quote:
      "The Sales and CRM agents run our entire pipeline. I approve proposals from my phone and the follow-ups just happen.",
    name: "David Chen",
    role: "Founder, Loop Studio",
  },
  {
    quote:
      "Onboarding used to take a week of my time. The HR Agent handles it end to end and our new hires love it.",
    name: "Priya Nair",
    role: "Head of People, Cedar Health",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="muted" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Customers"
        title="Small teams, enterprise output."
        description="Growing businesses use Onita to do more without hiring more."
      />

      <dl className="mt-12 grid grid-cols-2 gap-6 rounded-card-lg border border-border bg-surface p-8 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <dt className="font-display text-3xl font-extrabold text-brand-600 lg:text-4xl">
              {m.value}
            </dt>
            <dd className="mt-1 text-sm text-muted-foreground">{m.label}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 grid gap-4 lg:grid-cols-3">
        {quotes.map((q) => (
          <li key={q.name}>
            <figure className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft">
              <QuotesIcon size={28} weight="fill" className="text-brand-200" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-ink-800">
                {q.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={15} weight="fill" className="text-warning-500" />
                ))}
              </div>
              <figcaption className="mt-3">
                <span className="block font-display text-sm font-bold text-ink-800">{q.name}</span>
                <span className="block text-xs text-muted-foreground">{q.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
