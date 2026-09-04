import { Hero } from "@/components/sections/hero";
import { YourTeam } from "@/components/sections/your-team";
import { GetOnita } from "@/components/sections/get-onita";
import { AiWorkforce } from "@/components/sections/ai-workforce";
import { Products } from "@/components/sections/products";
import { FullControl } from "@/components/sections/full-control";
import { IntegrationsBand } from "@/components/sections/integrations-band";
import { Stats } from "@/components/sections/stats";
import { Workflow } from "@/components/sections/workflow";
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

      <section aria-label="Trusted by individuals, teams, and businesses" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by individuals, teams, and businesses of all sizes
          </p>
          <div className="mt-8">
            <LogoMarquee />
          </div>
        </div>
      </section>

      <YourTeam />
      <AiWorkforce />
      <Products />
      <FullControl />
      <IntegrationsBand />
      <Stats />
      <Workflow />
      <Testimonials />
      <GetOnita />
      <Faq />
      <FinalCta />
    </>
  );
}
