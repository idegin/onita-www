import { teamMembers, getTeamMember } from "@/lib/team";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita team member — the AI Workforce Platform";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return createOgImage({ title: "Onita", theme: "gradient" });

  return createOgImage({
    title: member.name,
    eyebrow: member.role,
    icon: member.ogIcon,
    accent: member.accent,
    theme: "gradient",
    layout: "split",
    badge: "Team",
  });
}
