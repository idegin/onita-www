import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  CaretRightIcon,
  CheckIcon,
  CheckCircleIcon,
  SparkleIcon,
  PlusIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { products, getProduct, accentClasses } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import {
  jsonLd,
  productSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const path = `/products/${product.slug}`;
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${path}`,
      title: `${product.metaTitle} | ${siteConfig.name}`,
      description: product.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.metaTitle} | ${siteConfig.name}`,
      description: product.metaDescription,
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const a = accentClasses[product.accent];
  const related = product.related
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const [featured, ...rest] = product.features;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          productSchema({
            name: product.name,
            slug: product.slug,
            description: product.metaDescription,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqPageSchema(product.faqs))}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 55% at 80% 20%, #000 30%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className={`animate-pulse-glow pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br ${a.gradient} opacity-30 blur-3xl`}
        />

        <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li>
                  <Link href="/products" className="transition-colors hover:text-white">
                    Products
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li className="font-medium text-white/90" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 py-1.5 pl-2 pr-3.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <product.Icon size={14} weight="fill" aria-hidden="true" className="text-white" />
              </span>
              {product.category}
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {product.headline}{" "}
              <span className="text-gradient-ai">{product.headlineEmphasis}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">{product.subhead}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="inline-flex items-center gap-2 text-sm font-medium text-white/75">
                  <CheckCircleIcon size={17} weight="fill" aria-hidden="true" className="text-brand-300" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <BrowserMockup
            shots={product.shots}
            alt={`The Onita ${product.name} interface`}
            label={`${product.name} — onitaai.com`}
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="lg:rotate-1"
          />
        </div>
      </section>

      {/* ---------- Definition ---------- */}
      <Section tone="light" labelledBy="definition-heading">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>
              Definition
            </span>
            <h2
              id="definition-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl"
            >
              {product.definitionTitle}
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-foreground">{product.definition}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className={`inline-flex items-center gap-2 rounded-pill border border-border ${a.softBg} px-3.5 py-1.5 text-sm font-medium text-ink-800`}
                >
                  <CheckIcon size={14} weight="bold" aria-hidden="true" className={a.text} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- Features (1 + list bento) ---------- */}
      <Section tone="muted" labelledBy="features-heading">
        <SectionHeading
          id="features-heading"
          align="left"
          eyebrow="Capabilities"
          title={`Everything ${product.name} does for your firm`}
          description={`Built to carry real work — not just another view of it.`}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="relative flex flex-col overflow-hidden rounded-card-lg border border-border bg-surface p-8 shadow-soft">
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.bg} text-white shadow-soft`}
            >
              <featured.Icon size={24} weight="fill" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-ink-800">{featured.title}</h3>
            <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">{featured.desc}</p>
            <div className="mt-8 overflow-hidden rounded-card border border-border">
              <BrowserMockup
                shots={[product.shots[0]]}
                alt={`${product.name} — ${featured.title}`}
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
            </div>
          </article>

          <div className="grid gap-5">
            {rest.map((f) => (
              <article
                key={f.title}
                className="flex gap-5 rounded-card-lg border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-hover sm:p-7"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.softBg} ${a.text}`}
                >
                  <f.Icon size={24} weight="fill" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-800">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- Workforce angle (dark band) ---------- */}
      <Section tone="gradient" labelledBy="workforce-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/85">
              <SparkleIcon size={14} weight="fill" aria-hidden="true" className="text-accent-300" />
              AI Workforce
            </span>
            <h2
              id="workforce-heading"
              className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {product.workforceAngle.title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">
              {product.workforceAngle.desc}
            </p>
            <Link
              href="/products/ai-agents"
              className="mt-8 inline-flex items-center gap-1.5 font-display text-base font-semibold text-white transition-colors hover:text-brand-200"
            >
              Meet the AI agents
              <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
            </Link>
          </div>
          <BrowserMockup
            shots={product.shots}
            alt={`Onita AI agents working in ${product.name}`}
            label={`${product.name} — live`}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="lg:-rotate-1"
          />
        </div>
      </Section>

      {/* ---------- Use cases by audience ---------- */}
      <Section tone="light" labelledBy="usecases-heading">
        <SectionHeading
          id="usecases-heading"
          eyebrow="Who it's for"
          title={`${product.name} for consulting, law, and agencies`}
          description="The same product, tuned to how your practice actually delivers."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {product.useCases.map((uc) => (
            <article
              key={uc.audience}
              className={`relative flex flex-col rounded-card-lg border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover`}
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 rounded-t-card-lg ${a.bg}`} />
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-pill ${a.softBg} px-3 py-1 text-xs font-semibold uppercase tracking-wide ${a.text}`}
              >
                {uc.audience}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-800">{uc.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{uc.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------- Outcomes + related ---------- */}
      <Section tone="muted" ariaLabel={`Outcomes and related products for ${product.name}`}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>
              What changes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              The outcome your firm feels
            </h2>
            <ul className="mt-8 space-y-4">
              {product.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3.5">
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${a.bg} text-white`}
                  >
                    <CheckIcon size={15} weight="bold" aria-hidden="true" />
                  </span>
                  <span className="text-lg leading-7 text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-800">Works with</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every Onita product shares the same data and the same AI workforce.
            </p>
            <ul className="mt-6 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/products/${r.slug}`}
                    className="group flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-hover"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${accentClasses[r.accent].softBg} ${accentClasses[r.accent].text}`}
                    >
                      <r.Icon size={22} weight="fill" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-base font-semibold text-ink-800">
                        {r.name}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {r.category}
                      </span>
                    </span>
                    <ArrowRightIcon
                      size={18}
                      weight="bold"
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-brand-500"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section tone="light" labelledBy="product-faq-heading" containerClassName="max-w-3xl">
        <SectionHeading
          id="product-faq-heading"
          eyebrow="FAQ"
          title={`${product.name}, answered`}
        />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {product.faqs.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-ink-800">
                {item.q}
                <PlusIcon
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className={`shrink-0 ${a.text} transition-transform duration-200 group-open:rotate-45`}
                />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-7 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section tone="muted" ariaLabel={`Get started with ${product.name}`}>
        <div className="relative overflow-hidden rounded-card-lg bg-gradient-hero px-6 py-14 text-center shadow-hover sm:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br ${a.gradient} opacity-40 blur-3xl`}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Put {product.name} to work for your firm
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Book a demo and we&apos;ll design, build, and run your AI workforce — {product.name}{" "}
              included — around how your team actually operates.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
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
    </>
  );
}
