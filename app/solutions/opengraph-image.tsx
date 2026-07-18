import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita Solutions — an AI workforce for every team";

export default function Image() {
  return createOgImage({
    title: "An AI workforce for every team you run",
    eyebrow: "Solutions",
    icon: "Stack",
    theme: "dark",
    layout: "centered",
    accent: "brand",
  });
}
