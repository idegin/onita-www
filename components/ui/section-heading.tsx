import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  invert?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            invert ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1] ${
          invert ? "text-white" : "text-ink-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${invert ? "text-white/70" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
