import { Hero } from "@/components/sections/hero";
import { GetStarted } from "@/components/sections/get-started";
import { Audience } from "@/components/sections/audience";
import { AiWorkforce } from "@/components/sections/ai-workforce";
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

      <section aria-label="Trusted by modern firms and agencies" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by consulting firms, law firms, and agencies — enterprise-grade from day one
          </p>
          <div className="mt-8">
            <LogoMarquee />
          </div>
        </div>
      </section>

      <Audience />
      <AiWorkforce />
      <Products />
      <RoiCalculator />
      <Testimonials />
      <GetStarted />
      <Faq />
      <FinalCta />
    </>
  );
}
