import Image from "next/image";
import type { ReactNode } from "react";

type GlassMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  chip?: ReactNode;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function GlassMockup({
  src,
  alt,
  caption,
  chip,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
}: GlassMockupProps) {
  return (
    <figure className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-ai opacity-20 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-card-lg border border-white/15 bg-white/10 p-2.5 shadow-hover backdrop-blur-xl ring-1 ring-white/10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top"
          />
        </div>
        {chip && (
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/15 bg-ink-900/80 px-4 py-3 shadow-hover backdrop-blur-xl">
            {chip}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-6 text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
