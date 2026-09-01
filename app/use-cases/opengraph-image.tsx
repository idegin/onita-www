import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita use cases — AI productivity for every business and team";

export default function Image() {
  return createOgImage({
    title: "AI productivity for every business and team",
    eyebrow: "Use cases",
    icon: "Stack",
    theme: "dark",
    layout: "centered",
    accent: "brand",
  });
}
