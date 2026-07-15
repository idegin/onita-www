import type { ReactNode } from "react";

type Tone = "light" | "muted" | "dark" | "gradient";

const toneClass: Record<Tone, string> = {
  light: "bg-surface text-foreground",
  muted: "bg-surface-muted text-foreground",
  dark: "bg-ink-950 text-white",
  gradient: "bg-gradient-hero text-white",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "light",
  labelledBy,
  ariaLabel,
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={`relative overflow-hidden py-20 lg:py-28 ${toneClass[tone]} ${className}`}
    >
      <div className={`mx-auto max-w-content px-4 sm:px-6 lg:px-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
