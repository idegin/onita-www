import { products, getProduct } from "@/lib/products";
import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita product — the AI Workforce Platform";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return createOgImage({ title: "Onita", theme: "dark" });

  return createOgImage({
    title: `${product.headline} ${product.headlineEmphasis}`,
    eyebrow: product.category,
    icon: product.ogIcon,
    accent: product.accent,
    theme: "dark",
    layout: "split",
    badge: "Product",
  });
}
