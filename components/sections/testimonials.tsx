import { QuotesIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const metrics = [
  { value: "10x", label: "faster client delivery" },
  { value: "40+", label: "billable hours reclaimed weekly" },
  { value: "60%", label: "lower tooling spend" },
  { value: "2 weeks", label: "from demo to live workforce" },
];

const quotes = [
  {
    quote:
      "Onita's team designed and built our research and deck agents around how we actually work. We deliver engagements in half the time, with the same senior team.",
    name: "Amara Okafor",
    role: "Managing Partner, Meridian Strategy",
  },
  {
    quote:
      "Contract review and intake used to swallow our associates' week. The agents draft it, we approve it, and our lawyers are back to the work clients pay for.",
    name: "David Okonkwo",
    role: "Partner, Okonkwo & Vale LLP",
  },
  {
    quote:
      "We took on three new retainers without a single new hire. The campaign and content agents run in parallel and my team just reviews and ships.",
    name: "Priya Nair",
    role: "Founder, Loop & Co. Agency",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="muted" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Customers"
        title="Lean firms, enterprise output."
        description="Consulting firms, law firms, and agencies use Onita to deliver more for clients without hiring more."
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
