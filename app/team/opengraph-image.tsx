import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The team behind Onita — the AI Workforce Platform";

export default function Image() {
  return createOgImage({
    title: "The people building your AI workforce",
    eyebrow: "Team",
    icon: "UsersThree",
    theme: "gradient",
    layout: "centered",
    accent: "brand",
    badge: "Team",
  });
}
