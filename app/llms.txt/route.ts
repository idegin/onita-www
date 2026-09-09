import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import { useCases } from "@/lib/use-cases";
import { teamMembers } from "@/lib/team";
import { legalDocs } from "@/lib/legal";

export const dynamic = "force-static";

const abs = (path: string) => `${siteConfig.url}${path}`;

function section(title: string, lines: string[]) {
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

function link(label: string, path: string, description: string) {
  return `- [${label}](${abs(path)}): ${description}`;
}

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.tagline} — ${siteConfig.slogan} ${siteConfig.description}`,
    "",
    `${siteConfig.name} is ${siteConfig.tagline}, built for individuals, teams, and businesses of all sizes. Onita brings project management and task tracking, docs, spreadsheets, slides, forms, dashboards, email, calendar, scheduling, and automated workflows into one workspace, and adds AI teammates that handle the busywork. People use Onita most for project management and task tracking, human resources and hiring, lead generation and cold outreach, and sales and marketing — plus operations, customer success, follow-ups, and more. It connects to the tools you already use (Gmail, Outlook, Google Workspace, Zoho, WhatsApp, Instagram, YouTube, Zoom, Microsoft Teams, Paystack, Flutterwave and more) and sends work back out to them in real time. Onita is a done-for-you, managed service priced around your budget: prospects book a demo and our team sets it up and runs it for them. There is no self-serve signup or login — every page drives one goal: Book a Demo (secondary: Talk to Sales).`,
    "",
    section("Core pages", [
      link("Home", "/", `${siteConfig.slogan} Overview of the ${siteConfig.tagline}.`),
      link("Products", "/products", "Every AI-powered productivity tool in one platform."),
      link("Use cases", "/use-cases", "What people use Onita for — project management & task tracking, HR & hiring, lead generation & cold outreach, sales & marketing, operations, customer success, and more."),
      link("Integrations", "/integrations", "Connect Onita to Gmail, Outlook, Google Workspace, Zoho, WhatsApp, Zoom, Microsoft Teams, Paystack, Flutterwave and more — Onita sends work out to the tools you already use."),
      link("Team", "/team", "The people who build and run Onita for our customers."),
      link("Book a demo", siteConfig.demoUrl, "Book a demo and we set up your AI productivity platform for you."),
      link("Talk to sales", siteConfig.salesUrl, "Talk to sales about an enterprise Onita engagement."),
    ]),
    "",
    section(
      "Products",
      products.map((p) => link(`Onita ${p.name}`, `/products/${p.slug}`, p.metaDescription))
    ),
    "",
    section(
      "Use cases",
      useCases.map((s) => link(`Onita for ${s.name}`, `/use-cases/${s.slug}`, s.metaDescription))
    ),
    "",
    section("What people use Onita for", [
      "- Project management & task tracking: Onita builds the boards and timelines, assigns tasks, chases status updates, and flags what's slipping so projects ship on time.",
      "- Human resources & hiring: screens applicants, schedules interviews, answers candidate questions, and preps onboarding.",
      "- Lead generation & cold outreach (GTM): researches ideal-fit accounts, writes personalized cold outreach, and follows up on autopilot.",
      "- Sales & marketing: drafts campaigns and content, nurtures deals, and reports on what's working.",
      "- And more: operations, customer success, follow-ups, inventory, resource planning, and social media & content.",
    ]),
    "",
    section("Why Onita", [
      "- Secure & private: encryption, scoped access, audit logs, and an optional private instance hosted just for your business. NDPR- and GDPR-compliant.",
      "- Priced around your budget: tell us what you can afford and we build a plan that fits — a full AI workforce for a fraction of the cost of new hires or foreign tool subscriptions.",
      "- Done for you: we connect your tools, train your AI teammates, and keep everything running — no technical team required.",
      "- 24/7 support: real people in your timezone who work alongside your team.",
      "- We build what you need: if Onita is missing a feature, we build it and ship it to you.",
      "- Fits how you already do business: Paystack, Flutterwave, WhatsApp-first customers, and the tools you already run, wired into the world's best AI models.",
    ]),
    "",
    section("Ways to run Onita", [
      "- Onita Cloud: we host and run Onita for you on our secure cloud — nothing to install or manage.",
      "- Onita Private: a dedicated private instance deployed in your own environment; you own and control all of your data.",
    ]),
    "",
    section(
      "Team",
      teamMembers.map((m) => link(`${m.name} — ${m.role}`, `/team/${m.slug}`, m.metaDescription))
    ),
    "",
    section(
      "Legal",
      legalDocs.map((d) => link(d.title, `/legal/${d.slug}`, d.metaDescription))
    ),
    "",
    section("Contact", [
      `- General: ${siteConfig.contact.generalEmail}`,
      `- Sales: ${siteConfig.contact.salesEmail}`,
      `- Support: ${siteConfig.contact.supportEmail}`,
      `- Sitemap: ${abs("/sitemap.xml")}`,
    ]),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
