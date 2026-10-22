import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const faqs = [
  {
    q: "What exactly is Onita AI?",
    a: "Onita is an AI-powered business operations workspace. It helps growing teams organize information, coordinate everyday work and delegate repetitive preparation and follow-up tasks to AI teammates.",
  },
  {
    q: "Do I need technical knowledge to use Onita?",
    a: "No. You describe how your business works in everyday language, and our team helps configure the workspace, supported connections and AI teammates around the workflow you choose to improve first.",
  },
  {
    q: "Will Onita replace my employees?",
    a: "That is not the goal. Onita helps your existing team spend less time on repetitive administrative work and more time on customers, decisions and work that needs human judgment.",
  },
  {
    q: "Can Onita work with tools we already use?",
    a: "Onita supports connections across common email, calendar, file, meeting, messaging and payment tools. The exact connections available depend on your services and account setup, and we confirm them during onboarding.",
  },
  {
    q: "Can AI take actions without my permission?",
    a: "You define what each AI teammate may access and do. Work can be prepared for review, while explicitly authorized tasks may run within configured boundaries. Sensitive actions can be set to require a person's approval.",
  },
  {
    q: "Can I see Onita before committing?",
    a: "Yes. Book a demo and we will walk you through the product using examples relevant to your business, then discuss the workflow, setup and pricing that fit your needs.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <Section id="faq" tone="light" labelledBy="faq-heading" containerClassName="max-w-3xl">
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Questions, answered."
        description="Straight answers about setup, control and how Onita fits your team."
      />

      <div className="mt-12 divide-y divide-border border-y border-border">
        {faqs.map((item) => (
          <details key={item.q} className="group py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-ink-800">
              {item.q}
              <PlusIcon
                size={20}
                weight="bold"
                aria-hidden="true"
                className="shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 pr-8 text-[15px] leading-7 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
