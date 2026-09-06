import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const faqs = [
  {
    q: "What is Onita?",
    a: "Onita is an all-in-one AI work management platform where your team and AI teammates get work done side by side. It brings project management, task tracking, docs, spreadsheets, slides, forms, dashboards, email, calendar, and scheduling into one workspace — and adds AI teammates that do real work, like running projects, screening candidates, chasing leads, and following up for you.",
  },
  {
    q: "What can I use Onita for?",
    a: "Teams use Onita to run the work they'd normally spread across many tools: project management and task tracking, human resources and hiring, lead generation and cold outreach, and sales and marketing — plus operations, customer success, follow-ups, inventory, and more. You pick the jobs, and Onita's AI teammates handle the busywork while your people make the decisions.",
  },
  {
    q: "Can Onita handle project management and task tracking?",
    a: "Yes. Onita builds your boards and timelines, assigns tasks, chases status updates, and flags whatever is slipping — so projects ship on time without the manual admin. It works as a full AI work management platform, not just a to-do list, and keeps every project, task, and deadline in one place.",
  },
  {
    q: "Do I need any tech skills to use Onita?",
    a: "No. If you can describe a job to a new hire, you can set up an AI teammate — in plain English, no code and no complicated setup. And because it's a done-for-you service, our team configures everything around how you work before your people log in.",
  },
  {
    q: "Is it safe to let AI do real work?",
    a: "Yes — that's the whole point of Onita. Anything that can't be undone — sending, spending, publishing, deleting — waits for your one-tap approval, and you can undo anything. Your AI never sends a message with your name on it or spends money unless you say yes.",
  },
  {
    q: "Which tools does Onita integrate with?",
    a: "Onita connects to the tools you already run on — Gmail, Outlook, and Zoho Mail; Google Drive, OneDrive, Google Docs, Sheets, and Slides; Google and Outlook Calendar; Zoom, Google Meet, and Microsoft Teams; WhatsApp, Instagram, YouTube, Facebook, TikTok, LinkedIn, and Telegram; and Paystack and Flutterwave for payments. Your AI teammates work right where your business already lives and send updates back out to those tools in real time.",
  },
  {
    q: "How much does Onita cost, and is it affordable?",
    a: "Onita is priced around your budget, not overseas per-seat pricing. Tell us what you can afford and we design a plan that fits — a full AI workforce for a fraction of the cost of new hires or a stack of foreign subscriptions. Book a demo and we'll put together pricing for how your business actually runs.",
  },
  {
    q: "How is Onita different from ChatGPT or other AI tools?",
    a: "Chatbots talk. Onita's AI teammates do — across your real projects, files, email, and calendar — and they hand off to each other like a real team. Plus everything lives in one work management workspace with your actual work, not in a separate tab.",
  },
  {
    q: "Which AI models does Onita use?",
    a: "Onita works with the world's best models, including Claude, GPT, Gemini and Llama. We choose the right model for each job and can change it at any time as new models ship.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes. Your data is used only for what you asked, seen only by the right people, and truly deleted when you remove it — with role-based access, audit logs, and human approval on sensitive actions. You can also run a private instance hosted just for your business. We're compliant with Nigeria's NDPR and Europe's GDPR, and happy to sign NDAs and DPAs.",
  },
  {
    q: "What if we need a feature Onita doesn't have yet?",
    a: "We build it and ship it to you. Onita is a managed, done-for-you service, so your feedback shapes the roadmap — if your business needs something specific, our team builds it into your workspace rather than making you work around it.",
  },
  {
    q: "How do we get started?",
    a: "Book a demo. We'll show Onita running on your real work, then set up your workspace, connect your tools, build your first AI teammates, and take your team live — typically within a couple of weeks. There's nothing to build yourself.",
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
        description="Everything you need to know about putting AI teammates to work in Onita."
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
