import type { Metadata } from "next";
import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarCheckIcon,
  CaretRightIcon,
  ChatCircleTextIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SalesForm } from "@/components/forms/sales-form";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Talk to Sales — Onita AI Workforce Platform",
  description:
    "Talk to the Onita sales team about pricing, security, and rolling out an AI workforce across your consulting firm, law firm, or agency. We build and run it for you.",
  alternates: { canonical: "/contact-sales" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact-sales`,
    title: "Talk to Sales — Onita AI Workforce Platform",
    description:
      "Talk to Onita about pricing, security, and rolling out an AI workforce across your business.",
  },
};

const channels = [
  {
    label: "Email sales",
    value: siteConfig.contact.salesEmail,
    href: `mailto:${siteConfig.contact.salesEmail}`,
    Icon: EnvelopeSimpleIcon,
  },
  {
    label: "Call us",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    Icon: PhoneIcon,
  },
  {
    label: "Head office",
    value: siteConfig.address.full,
    href: null,
    Icon: MapPinIcon,
  },
];

export default function ContactSalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Talk to sales", path: "/contact-sales" },
          ])
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow"
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
                Talk to sales
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <ChatCircleTextIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            Talk to sales
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Let&apos;s scope the right <span className="text-gradient-ai">AI workforce</span> for your
            firm
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Pricing, security reviews, or a firm-wide rollout — our team will help you plan it. Tell us
            what you need and we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Body: contact rail + form */}
      <section className="bg-surface py-20 lg:py-24" aria-label="Contact the Onita sales team">
        <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-800">Reach us directly</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Prefer email or phone? Use whichever suits you — or send the form and we&apos;ll come to
              you.
            </p>

            <ul className="mt-8 space-y-3">
              {channels.map((c) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-card border border-border bg-surface p-5 shadow-soft transition-all hover:border-brand-200 hover:shadow-hover">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <c.Icon size={22} weight="fill" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <span className="block font-display text-sm font-semibold text-ink-800">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block break-words text-sm text-muted-foreground">
                        {c.value}
                      </span>
                    </div>
                  </div>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <Link href={c.href} className="block">
                        {inner}
                      </Link>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-card border border-brand-100 bg-brand-50 p-5">
              <ClockIcon size={22} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" />
              <p className="text-sm leading-6 text-ink-800">
                <span className="font-semibold">We reply within one business day.</span> Ready to see
                it live instead?{" "}
                <Link
                  href={siteConfig.demoUrl}
                  className="inline-flex items-center gap-1 font-semibold text-brand-600 underline-offset-4 hover:underline"
                >
                  <CalendarCheckIcon size={15} weight="fill" aria-hidden="true" />
                  Book a demo
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-800">Send us a message</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Fields marked with <span className="text-danger-500">*</span> are required.
            </p>
            <div className="mt-6">
              <SalesForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
