import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { legalDocs, getLegalDoc } from "@/lib/legal";
import { siteConfig } from "@/lib/site-config";
import { jsonLd, breadcrumbSchema } from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  const path = `/legal/${doc.slug}`;
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${path}`,
      title: `${doc.metaTitle} | ${siteConfig.name}`,
      description: doc.metaDescription,
    },
  };
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: `/legal/${doc.slug}` },
            { name: doc.title, path: `/legal/${doc.slug}` },
          ])
        )}
      />

      <article>
        <header className="relative overflow-hidden bg-ink-950 pt-32 pb-16">
          <div
            aria-hidden="true"
            className="animate-pulse-glow pointer-events-none absolute -left-40 top-0 h-[26rem] w-[26rem] rounded-full bg-glow"
          />
          <div className="relative mx-auto max-w-prose px-4 sm:px-6 lg:px-0">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-sm text-white/55">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <CaretRightIcon size={13} weight="bold" aria-hidden="true" />
                <li className="font-medium text-white/90" aria-current="page">
                  {doc.title}
                </li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {doc.title}
            </h1>
            <p className="mt-4 text-sm text-white/60">Last updated: {doc.updated}</p>
          </div>
        </header>

        <div className="mx-auto max-w-prose px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <p className="text-lg leading-8 text-foreground">{doc.summary}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading} aria-labelledby={`s-${section.heading}`}>
                <h2
                  id={`s-${section.heading}`}
                  className="font-display text-xl font-bold tracking-tight text-ink-800 sm:text-2xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-4 text-base leading-7 text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-base leading-7 text-muted-foreground">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <nav aria-label="Legal documents" className="mt-16 border-t border-border pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              More legal
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {legalDocs
                .filter((d) => d.slug !== doc.slug)
                .map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/legal/${d.slug}`}
                      className="inline-flex rounded-pill border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-600"
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}
