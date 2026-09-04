import type { Icon } from "@phosphor-icons/react";
import {
  HandTapIcon,
  ArrowCounterClockwiseIcon,
  ShieldCheckIcon,
  CheckIcon,
  PencilSimpleIcon,
  XIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Pillar = { title: string; desc: string; Icon: Icon };

const pillars: Pillar[] = [
  {
    title: "You approve what matters",
    desc: "Sending, spending, publishing, deleting — anything that can't be undone stops and waits for your one-tap yes. You can edit before it goes out.",
    Icon: HandTapIcon,
  },
  {
    title: "Undo anything",
    desc: "See exactly what your AI did, who did what and when — and roll back a mistake in a single tap.",
    Icon: ArrowCounterClockwiseIcon,
  },
  {
    title: "It can't be tricked",
    desc: "A dodgy email can't fool your AI into leaking your data or sending money. We built it to see through that.",
    Icon: ShieldCheckIcon,
  },
];

export function FullControl() {
  return (
    <Section id="control" tone="light" labelledBy="control-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="control-heading"
            align="left"
            eyebrow="Full control"
            title="Powerful AI. Full control."
            description="Onita never goes rogue. Anything that can't be undone waits for your approval — so you get the speed of AI with none of the risk."
          />

          <ul className="mt-10 flex flex-col gap-6">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <p.Icon size={22} weight="fill" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-800">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-card-lg bg-gradient-ai opacity-10 blur-2xl"
          />
          <figure className="relative rounded-card-lg border border-border bg-surface p-6 shadow-hover sm:p-8">
            <figcaption className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <ShieldCheckIcon size={14} weight="fill" aria-hidden="true" />
              Approval needed
            </figcaption>

            <div className="mt-5 rounded-card border border-border bg-surface-muted p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-ai text-white shadow-glow">
                  <EnvelopeSimpleIcon size={20} weight="fill" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-ink-800">
                    Your AI wants to send an email
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    To: chidi@brightpath.co · Re: Following up on your quote
                  </p>
                </div>
              </div>
              <p className="mt-4 rounded-xl border border-border bg-surface p-3 text-[13px] leading-6 text-foreground">
                Hi Chidi, just circling back on the quote we sent last week. Happy to jump on a quick
                call this week if that&rsquo;s easier — what works for you?
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <span className="inline-flex items-center justify-center gap-1.5 rounded-button bg-brand-500 px-3 py-2.5 text-sm font-semibold text-white">
                <CheckIcon size={15} weight="bold" aria-hidden="true" />
                Approve
              </span>
              <span className="inline-flex items-center justify-center gap-1.5 rounded-button border border-border bg-surface px-3 py-2.5 text-sm font-semibold text-ink-800">
                <PencilSimpleIcon size={15} weight="bold" aria-hidden="true" />
                Edit
              </span>
              <span className="inline-flex items-center justify-center gap-1.5 rounded-button border border-border bg-surface px-3 py-2.5 text-sm font-semibold text-muted-foreground">
                <XIcon size={15} weight="bold" aria-hidden="true" />
                Reject
              </span>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Nothing goes out with your name on it unless you say yes.
            </p>
          </figure>
        </div>
      </div>
    </Section>
  );
}
