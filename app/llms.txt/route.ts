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
    `${siteConfig.name} is ${siteConfig.tagline} — an AI productivity platform built for individuals and teams of all sizes. Onita bundles AI-powered products (AI Project Manager, AI Task Manager, AI Calendar, AI Meeting Assistant, AI Chat, AI Meeting Notetaker, AI Dashboards, AI Docs Assistant, AI Workflows, AI Slides, AI Forms) that use AI to double productivity by handling the busywork. Onita is a managed engagement: prospects book a demo and our team sets everything up for them. There is no self-serve signup or login — every page drives one goal: Book a Demo (secondary: Talk to Sales).`,
    "",
    section("Core pages", [
      link("Home", "/", `${siteConfig.slogan} Overview of the ${siteConfig.tagline}.`),
      link("Products", "/products", "Every AI-powered productivity tool in one platform."),
      link("Use cases", "/use-cases", "How Onita works for service businesses and functional teams — from IT providers and agencies to sales, startups, and executive teams."),
      link("Integrations", "/integrations", "Connect Onita to the tools you already use."),
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
