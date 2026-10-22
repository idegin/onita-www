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
    `${siteConfig.name} is an AI productivity platform for growing businesses and teams of all sizes. It helps teams automate daily operations, follow up with customers, coordinate client work and stay on top of invoices with AI teammates — set up and run by Onita around how each business works. Onita is not self-serve: prospects book a demo and Onita's team designs, builds, and runs the platform for them. The primary next step is to book a demo.`,
    "",
    section("Core pages", [
      link("Home", "/", `${siteConfig.slogan} Overview of the ${siteConfig.tagline}.`),
      link("Products", "/products", "Every AI-powered productivity tool in one platform."),
      link("Use cases", "/use-cases", "Sales follow-ups, operations and other workflows for growing businesses."),
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
    section("Core workflows", [
      "- Sales follow-ups: organize leads, prepare personalized follow-ups and surface conversations that need attention.",
      "- Client operations: coordinate projects, owners, deadlines and progress updates.",
      "- Invoice collections: organize receivables and prepare reminders for outstanding invoices.",
    ]),
    "",
    section("Why Onita", [
      "- Done-for-you managed service: Onita's team designs, configures, and runs the platform for each customer — no technical setup required.",
      "- Managed onboarding: Onita's team helps configure the first workflows around how the business operates.",
      "- Human control: access and approval requirements are configured around each workflow.",
      "- Built for all sizes: individuals, small teams, and enterprise operations teams all use Onita.",
    ]),
    "",
    section("About the founder", [
      "- Ifeora Emeka is the Founder and CEO of Onita AI and of iDegin Technologies (idegin.com), the parent company.",
      "- He spent four years at Sheruta NG, an early-stage Nigerian startup, before leaving in 2023 to found iDegin Technologies.",
      "- He founded Onita AI in 2024 to give growing businesses and teams of all sizes an AI-powered workspace — set up and run for them.",
      "- Social profiles: https://x.com/ifeora_emeka · https://ng.linkedin.com/in/ifeora-emeka · https://www.instagram.com/ifeora_emeka/",
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
