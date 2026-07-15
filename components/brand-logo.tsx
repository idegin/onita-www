import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type BrandLogoProps = {
  className?: string;
  tone?: "light" | "dark";
  showWordmark?: boolean;
};

export function BrandLogo({
  className = "",
  tone = "dark",
  showWordmark = true,
}: BrandLogoProps) {
  const wordmarkColor = tone === "light" ? "text-white" : "text-ink-800";
  const subColor = tone === "light" ? "text-white/60" : "text-muted-foreground";
  const accentColor = tone === "light" ? "text-brand-300" : "text-brand-500";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src={siteConfig.assets.logo}
        alt={showWordmark ? "" : siteConfig.name}
        width={36}
        height={36}
        priority
        className="h-9 w-9 rounded-[10px] transition-transform duration-300 ease-out group-hover:scale-105"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-lg font-extrabold tracking-tight ${wordmarkColor}`}>
            Onita<span className={accentColor}> AI</span>
          </span>
          <span
            aria-hidden="true"
            className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] ${subColor}`}
          >
            AI Workforce
          </span>
        </span>
      )}
    </Link>
  );
}
