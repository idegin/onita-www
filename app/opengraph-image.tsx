import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${siteConfig.name} — ${siteConfig.slogan}`;

export default function Image() {
  return createOgImage({
    title: siteConfig.slogan,
    eyebrow: siteConfig.tagline,
    icon: "Sparkle",
    theme: "gradient",
    layout: "centered",
    accent: "brand",
    footer: "onitaai.com/book-demo",
  });
}
