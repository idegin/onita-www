import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const faqs = [
  {
    q: "What is Onita?",
    a: "Onita is an AI productivity platform for individuals and teams of all sizes. It bundles AI-powered products — Project Manager, Task Manager, Calendar, Meeting Notetaker, Docs, Dashboards, Workflows and more — into one place, and uses AI to handle the busywork so you get twice as much done. It's the productivity platform for the AI era.",
  },
  {
    q: "Who is Onita built for?",
    a: "Onita is built for individuals and teams of all sizes — from solo professionals and startups to the operations, sales, marketing, and delivery teams inside larger organizations. Anyone who wants to use AI to get more done. We tailor Onita to how you actually work, whether that's projects and tasks, meetings and docs, or reporting and workflows.",
  },
  {
    q: "How is Onita different from an AI chatbot?",
    a: "A chatbot answers questions. Onita's AI does the work: it takes actions across your projects, tasks, documents, and connected apps, turns meetings into action items, and loops in a human for approval before anything important goes out.",
  },
  {
    q: "Do we have to set it up ourselves?",
    a: "No — Onita is fully managed. After a demo, our team sets up your workspace, configures the AI products around how you work, connects your tools and documents, and gets everything running for you. Then we onboard your team and stay on to tune it as you grow. You get a working platform, not a blank canvas.",
  },
  {
    q: "How do we get started?",
    a: "Book a demo. We'll show Onita running on your real use cases, then design and build your workspace, connect your tools, and take your team live — typically within a couple of weeks. There's no free trial to set up and nothing to build yourself.",
  },
  {
    q: "Which AI models does Onita use?",
    a: "Onita works with the world's best models, including Claude, GPT, Gemini and Llama. We choose the right model for each product and task, and can change it at any time as new models ship.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Onita is SOC 2 Type II audited with end-to-end encryption, role-based access control, audit logs, automated backups, and SSO — with human approval on sensitive actions. We host your workspace in isolation, and your data is never used to train public models. We're happy to sign NDAs and DPAs.",
  },
  {
    q: "How much does Onita cost?",
    a: "Pricing scales with the size of your team. Book a demo and we'll put together a plan that fits — one predictable bill instead of ten separate subscriptions, with enterprise options for larger organizations.",
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
        description="Everything you need to know about using Onita to double your productivity."
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
