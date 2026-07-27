import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";
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
    `${siteConfig.name} is a done-for-you, managed AI Workforce Platform for growing businesses and teams of every kind. Prospects book a demo and our team designs, builds, hosts, and runs a team of AI agents around how each business works. There is no self-serve signup or login — every page drives one goal: Book a Demo (secondary: Talk to Sales).`,
    "",
    section("Core pages", [
      link("Home", "/", `${siteConfig.slogan} Overview of the ${siteConfig.tagline}.`),
      link("Products", "/products", "One workspace and every tool your business runs on, powered by AI agents."),
      link("Solutions", "/solutions", "AI workforce solutions for every team — from delivery to sales, people, and finance."),
      link("Team", "/team", "The people who design, build, and run AI workforces for growing businesses."),
      link("Book a demo", siteConfig.demoUrl, "Book a demo and we design, build, and run your AI workforce for you."),
      link("Talk to sales", siteConfig.salesUrl, "Talk to sales about an enterprise AI workforce engagement."),
    ]),
    "",
    section(
      "Products",
      products.map((p) => link(`Onita ${p.name}`, `/products/${p.slug}`, p.metaDescription))
    ),
    "",
    section(
      "Solutions",
      solutions.map((s) => link(`Onita for ${s.name}`, `/solutions/${s.slug}`, s.metaDescription))
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
