import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Onita Products — one workspace, every tool your business runs on";

export default function Image() {
  return createOgImage({
    title: "One workspace, every tool your business runs on",
    eyebrow: "Products",
    icon: "SquaresFour",
    theme: "dark",
    layout: "centered",
    accent: "brand",
  });
}
