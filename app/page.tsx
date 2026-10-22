import { Hero } from "@/components/sections/hero";
import { BusinessProblems, BusinessOutcomes, HowOnitaWorks, OnitaPlatform, Industries, WhyOnita, HomeProducts } from "@/components/sections/home-operations";
import { IntegrationsBand } from "@/components/sections/integrations-band";
import { AiWorkforce } from "@/components/sections/ai-workforce";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq, faqSchema } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { jsonLd, itemListSchema } from "@/lib/structured-data";

const solutionsSchema = itemListSchema("What growing businesses use Onita for", [
  { name: "Sales follow-ups", path: "/use-cases/follow-ups" },
  { name: "Client operations", path: "/use-cases/operations" },
  { name: "Invoice collections", path: "/use-cases/invoice-collections" },
]);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(solutionsSchema)} />
      <Hero />
      <BusinessProblems />
      <BusinessOutcomes />
      <HowOnitaWorks />
      <Stats />
      <OnitaPlatform />
      <HomeProducts />
      <IntegrationsBand />
      <AiWorkforce />
      <Industries />
      <WhyOnita />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
