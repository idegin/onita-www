import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Talk to sales — Onita AI Workforce Platform";

export default function Image() {
  return createOgImage({
    title: "Let's scope the right AI workforce for your business",
    eyebrow: "Talk to sales",
    icon: "ChatCircleText",
    theme: "dark",
    layout: "standard",
    accent: "accent",
    badge: "Sales",
  });
}
