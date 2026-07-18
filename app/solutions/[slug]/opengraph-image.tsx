import { solutions, getSolution } from "@/lib/solutions";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita solution — the AI Workforce Platform";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return createOgImage({ title: "Onita", theme: "gradient" });

  return createOgImage({
    title: `${solution.headline} ${solution.headlineEmphasis}`,
    eyebrow: solution.name,
    icon: solution.ogIcon,
    accent: solution.accent,
    theme: "gradient",
    layout: "split",
    badge: "Solution",
  });
}
