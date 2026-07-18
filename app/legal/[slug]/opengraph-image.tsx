import { legalDocs, getLegalDoc } from "@/lib/legal";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita — legal";

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return createOgImage({ title: "Onita", theme: "light" });

  return createOgImage({
    title: doc.title,
    eyebrow: "Legal",
    icon: "ShieldCheck",
    theme: "light",
    layout: "standard",
    accent: "brand",
  });
}
