import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Audience } from "@/components/sections/audience";
import { AiWorkforce } from "@/components/sections/ai-workforce";
import { Collaboration } from "@/components/sections/collaboration";
import { Products } from "@/components/sections/products";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq, faqSchema } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { jsonLd } from "@/lib/structured-data";
import { LogoMarquee } from "@/components/ui/logo-marquee";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <Hero />

      <section aria-label="Trusted by growing businesses" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by growing businesses — enterprise-grade from day one
          </p>
          <div className="mt-8">
            <LogoMarquee />
          </div>
        </div>
      </section>

      <Problem />
      <Solution />
      <Audience />
      <AiWorkforce />
      <Collaboration />
      <Products />
      <RoiCalculator />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
