import type { ReactNode } from "react";
import { RotatingShot } from "@/components/ui/rotating-shot";

type BrowserMockupProps = {
  shots: string[];
  alt: string;
  label?: string;
  badge?: ReactNode;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function BrowserMockup({
  shots,
  alt,
  label,
  badge,
  priority = false,
  sizes,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-card-lg border border-border bg-surface shadow-hover ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-danger-500/70" />
          <span className="h-3 w-3 rounded-full bg-warning-500/70" />
          <span className="h-3 w-3 rounded-full bg-success-500/70" />
        </span>
        {label && (
          <span className="ml-2 truncate font-display text-sm font-semibold text-ink-800">
            {label}
          </span>
        )}
        {badge && <span className="ml-auto hidden sm:inline-flex">{badge}</span>}
      </div>
      <RotatingShot
        shots={shots}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className="bg-surface-muted"
      />
    </div>
  );
}
