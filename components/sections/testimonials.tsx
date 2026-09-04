import { QuotesIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const quotes = [
  {
    quote:
      "Onita's team set up AI teammates around how we actually work. We deliver projects in half the time, with the same core team.",
    name: "Amara Okafor",
    role: "COO, Northwind Group",
  },
  {
    quote:
      "Reporting and intake used to swallow our team's week. The AI drafts it, we approve it, and everyone's back to the work that actually moves the business.",
    name: "David Okonkwo",
    role: "Operations Lead, Vale & Co.",
  },
  {
    quote:
      "We took on three new clients without a single new hire. The content and follow-up teammates run in parallel and my team just reviews and ships.",
    name: "Priya Nair",
    role: "Founder, Loop & Co.",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="muted" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Customers"
        title="Lean teams, enterprise output."
        description="Individuals and teams of all sizes use Onita to get twice as much done."
      />

      <ul className="mt-14 grid gap-4 lg:grid-cols-3">
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
