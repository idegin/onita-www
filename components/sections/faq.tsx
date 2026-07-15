import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const faqs = [
  {
    q: "What is an AI Workforce?",
    a: "An AI Workforce is a team of AI employees — specialized agents for sales, support, HR, finance and more — that work alongside your people. Each agent has its own memory, knowledge, tools and permissions, and they collaborate to run entire workflows end to end.",
  },
  {
    q: "How is Onita different from an AI chatbot?",
    a: "A chatbot answers questions. Onita agents do the work: they take actions across your database, documents, boards and connected apps, hand tasks to each other, and loop in a human for approval when needed.",
  },
  {
    q: "Do I need technical skills to set up AI employees?",
    a: "No. You hire an Onita agent the same way you'd brief a new teammate — describe the role, connect your tools and knowledge, and set permissions. No code required.",
  },
  {
    q: "Which AI models does Onita use?",
    a: "Onita works with the world's best models, including Claude, GPT, Gemini and DeepSeek. You choose the right model for each task, and can change it at any time.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Onita is SOC 2 Type II audited with end-to-end encryption, role-based access control, audit logs, automated backups, and SSO. Your data is never used to train public models.",
  },
  {
    q: "How much does Onita cost?",
    a: "You can start free, no credit card required. Paid plans scale with your team, and enterprise pricing is available for larger organizations — one predictable bill instead of ten separate subscriptions.",
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
        description="Everything you need to know about building an AI workforce with Onita."
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
