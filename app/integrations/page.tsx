import type { Metadata } from "next";
import Link from "next/link";
import {
  CaretRightIcon,
  PlugsConnectedIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  GoogleLogoIcon,
  MicrosoftOutlookLogoIcon,
  EnvelopeSimpleIcon,
  CloudArrowUpIcon,
  FolderSimpleIcon,
  CreditCardIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Integrations — Connect Onita to the Tools You Use",
  description:
    "Onita connects to Gmail, Outlook, Zoho, Google Drive, OneDrive, Google & Outlook Calendar, Zoho Booking, Paystack, and Flutterwave — so your data flows between the tools you already use and your AI products.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/integrations`,
    title: "Onita Integrations — Connect Your Favorite Tools",
    description:
      "Pass data between Onita and the tools you already use — Gmail, Outlook, Zoho, Drive, OneDrive, calendars, Zoho Booking, Paystack, and Flutterwave.",
  },
};

const groups = [
  {
    title: "Email",
    items: [
      { name: "Gmail", Icon: GoogleLogoIcon },
      { name: "Outlook", Icon: MicrosoftOutlookLogoIcon },
      { name: "Zoho Mail", Icon: EnvelopeSimpleIcon },
    ],
  },
  {
    title: "Storage & files",
    items: [
      { name: "Google Drive", Icon: GoogleLogoIcon },
      { name: "OneDrive", Icon: CloudArrowUpIcon },
      { name: "Zoho Drive", Icon: FolderSimpleIcon },
    ],
  },
  {
    title: "Calendar & scheduling",
    items: [
      { name: "Google Calendar", Icon: GoogleLogoIcon },
      { name: "Outlook Calendar", Icon: MicrosoftOutlookLogoIcon },
      { name: "Zoho Booking", Icon: CalendarCheckIcon },
    ],
  },
  {
    title: "Payments",
    items: [
      { name: "Paystack", Icon: CreditCardIcon },
      { name: "Flutterwave", Icon: CreditCardIcon },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Integrations", path: "/integrations" },
          ])
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="animate-pulse-glow pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 30% 20%, #000 30%, transparent 100%)",
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
                Integrations
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <PlugsConnectedIcon size={14} weight="fill" aria-hidden="true" className="text-accent-400" />
            Integrations
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connect Onita to <span className="text-gradient-ai">the tools you use</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Onita passes data between your favorite tools and your AI products — so your projects,
            tasks, meetings, and docs stay in sync everywhere. Connect Gmail, Outlook, Zoho, Google
            Drive, OneDrive, your calendars, Zoho Booking, Paystack, and Flutterwave.
          </p>
        </div>
      </section>

      {/* Integration groups */}
      <Section tone="light" ariaLabel="Onita integrations">
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
                {group.title}
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map(({ name, Icon }) => (
                  <li key={name}>
                    <div className="flex h-full items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-hover">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon size={26} weight="fill" aria-hidden="true" />
                      </span>
                      <span className="font-display text-base font-bold text-ink-800">{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-base text-muted-foreground">
          Plus a robust API and hundreds more connectors. Need something specific?{" "}
          <Link href={siteConfig.salesUrl} className="font-semibold text-brand-600 hover:text-brand-700">
            Talk to sales
          </Link>
          .
        </p>
      </Section>

      {/* CTA */}
      <Section tone="muted" ariaLabel="Get started with Onita">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Bring Onita into your existing stack
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Book a demo and we&apos;ll connect Onita to the tools you already use — and set the whole
            thing up around how your business runs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.demoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover"
            >
              <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
              Book a demo
            </Link>
            <Link
              href={siteConfig.salesUrl}
              className="inline-flex items-center justify-center gap-2 rounded-button border border-border bg-surface px-6 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
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
