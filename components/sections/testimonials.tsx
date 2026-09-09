"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { QuotesIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Testimonial = {
  company: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    company: "Chebez Group",
    logo: "/partners/chebez-group.png",
    quote:
      "Onita's team set up AI teammates around how we actually work. We deliver projects in half the time — with the same lean core team.",
    name: "Chinelo Okafor",
    role: "Group Operations Director",
  },
  {
    company: "iDegin Technologies",
    logo: "/partners/idegin-technologies.png",
    quote:
      "The busywork between our engineers and clients just disappeared. Onita drafts the updates, we approve, and everyone stays focused on shipping.",
    name: "Tunde Bello",
    role: "Head of Delivery",
  },
  {
    company: "IGA Investment",
    logo: "/partners/iga-investment.png",
    quote:
      "Investor reporting used to eat a full week every month. Now the AI pulls it together, we review it, and it goes out on time — every time.",
    name: "Ngozi Eze",
    role: "Managing Partner",
  },
  {
    company: "Chebez Global Ventures",
    logo: "/partners/chebez-global-ventures.png",
    quote:
      "We run across several markets with a small team. Onita's AI teammates keep every unit coordinated so nothing slips between the cracks.",
    name: "Emeka Nwosu",
    role: "Chief Executive",
  },
  {
    company: "Hawksworth",
    logo: "/partners/hawksworth.svg",
    quote:
      "We took on three new clients without a single new hire. The content and follow-up teammates run in parallel and my team just reviews and ships.",
    name: "Sarah Adeyemi",
    role: "Client Services Lead",
  },
  {
    company: "Tensillabs",
    logo: "/partners/tensillabs.png",
    quote:
      "As a startup, Onita is our unfair advantage. A handful of us now output like a company three times our size, and it was all set up for us.",
    name: "David Okon",
    role: "Founder",
  },
  {
    company: "HAN",
    logo: "/partners/han.png",
    quote:
      "Scheduling, intake, and follow-ups are all handled in the background now. Our people finally spend their time on the work that matters.",
    name: "Aisha Bello",
    role: "Program Manager",
  },
  {
    company: "TPA",
    logo: "/partners/tpa.png",
    quote:
      "The admin that used to swallow our week runs itself. Onita drafts it, we sign off, and we're back to serving clients within minutes.",
    name: "Kunle Ade",
    role: "Partner",
  },
  {
    company: "Pantaker Store",
    logo: "/partners/pantaker-store.png",
    quote:
      "Customer replies, order updates, and daily sales reports now handle themselves. I get twice as much done and never miss a message.",
    name: "Blessing Uche",
    role: "Owner",
  },
];

const ROTATE_MS = 6000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setActive((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  const t = testimonials[active];

  return (
    <Section id="testimonials" tone="muted" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Customers"
        title="Lean teams, enterprise output."
        description="Individuals, teams, and businesses use Onita to get twice as much done. Here's how."
      />

      <div
        className="mt-12 sm:mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <figure className="relative mx-auto max-w-3xl overflow-hidden rounded-card-lg border border-border bg-surface p-7 shadow-soft sm:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-glow opacity-60"
          />
          <QuotesIcon
            size={40}
            weight="fill"
            className="relative text-brand-200"
            aria-hidden="true"
          />
          <blockquote
            key={active}
            aria-live="polite"
            className="animate-fade-up relative mt-5 font-display text-lg font-semibold leading-8 text-ink-800 sm:text-2xl sm:leading-[2.4rem]"
          >
            “{t.quote}”
          </blockquote>
          <figcaption className="relative mt-7 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-soft">
              <Image
                src={t.logo}
                alt={t.company}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-bold text-ink-800">
                {t.name}
                <span className="font-normal text-muted-foreground"> — {t.company}</span>
              </span>
              <span className="block text-xs text-muted-foreground">{t.role}</span>
            </span>
          </figcaption>
        </figure>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink-800 shadow-soft transition-colors hover:border-brand-200 hover:text-brand-600"
          >
            <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
          </button>
          <span className="min-w-[3.5rem] text-center font-display text-sm font-semibold text-muted-foreground tabular-nums">
            {active + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink-800 shadow-soft transition-colors hover:border-brand-200 hover:text-brand-600"
          >
            <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Section>
  );
}
