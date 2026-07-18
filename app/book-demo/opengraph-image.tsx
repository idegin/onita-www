import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Book a demo of Onita — the AI Workforce Platform";

export default function Image() {
  return createOgImage({
    title: "See your AI workforce on your real work",
    eyebrow: "Book a demo",
    icon: "CalendarCheck",
    theme: "dark",
    layout: "standard",
    accent: "brand",
    badge: "Demo",
  });
}
