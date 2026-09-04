import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "30,000+", label: "people & teams already on Onita" },
  { value: "2x", label: "more work done, same size team" },
  { value: "12", label: "tools replaced by one workspace" },
  { value: "40+", label: "hours saved per team each week" },
];

export function Stats() {
  return (
    <Section id="stats" tone="dark" labelledBy="stats-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-glow opacity-60"
      />
      <div className="relative">
        <SectionHeading
          id="stats-heading"
          invert
          eyebrow="By the numbers"
          title="Teams get more done with Onita."
          description="Real momentum from teams that put AI teammates to work."
        />

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-gradient-ai">{s.value}</span>
              </dt>
              <dd className="mx-auto mt-3 max-w-[16rem] text-sm leading-6 text-white/65">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
