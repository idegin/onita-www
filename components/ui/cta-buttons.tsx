import Link from "next/link";
import { ArrowRightIcon, PlayCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

type CtaButtonsProps = {
  invert?: boolean;
  align?: "start" | "center";
  className?: string;
};

export function CtaButtons({ invert = false, align = "start", className = "" }: CtaButtonsProps) {
  const alignClass = align === "center" ? "justify-center" : "";
  const primary = invert
    ? "bg-white text-ink-800 hover:bg-gray-100"
    : "bg-brand-500 text-white hover:bg-brand-600";
  const secondary = invert
    ? "border-white/25 text-white hover:bg-white/10"
    : "border-border text-ink-800 hover:bg-surface-muted";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${alignClass} ${className}`}>
      <a
        href={siteConfig.signupUrl}
        className={`inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 text-base font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover ${primary}`}
      >
        Start free
        <ArrowRightIcon size={18} weight="bold" />
      </a>
      <Link
        href={siteConfig.demoUrl}
        className={`inline-flex items-center justify-center gap-2 rounded-button border px-6 py-3.5 text-base font-semibold transition-colors ${secondary}`}
      >
        <PlayCircleIcon size={20} weight="fill" />
        Book a demo
      </Link>
    </div>
  );
}
