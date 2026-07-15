import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { AiWorkforce } from "@/components/sections/ai-workforce";
import { Collaboration } from "@/components/sections/collaboration";
import { Products } from "@/components/sections/products";
import { Solutions } from "@/components/sections/solutions";
import { AiStack } from "@/components/sections/ai-stack";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq, faqSchema } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { jsonLd } from "@/lib/structured-data";

const trustSignals = [
  "SOC 2 Type II",
  "GDPR ready",
  "Role-based access",
  "Audit logs",
  "End-to-end encryption",
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <Hero />

      <section aria-label="Trusted by growing businesses" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by growing businesses — enterprise-grade from day one
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustSignals.map((signal) => (
              <li key={signal} className="text-sm font-semibold text-gray-600">
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Problem />
      <Solution />
      <AiWorkforce />
      <Collaboration />
      <Products />
      <Solutions />
      <AiStack />
      <RoiCalculator />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
