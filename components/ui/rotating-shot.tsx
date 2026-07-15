"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type RotatingShotProps = {
  shots: string[];
  className?: string;
  sizes?: string;
  alt?: string;
  decorative?: boolean;
  priority?: boolean;
  interval?: number;
};

export function RotatingShot({
  shots,
  className = "",
  sizes,
  alt = "",
  decorative = false,
  priority = false,
  interval = 5000,
}: RotatingShotProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shots.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % shots.length), interval);
    return () => clearInterval(id);
  }, [shots.length, interval]);

  const containerProps = decorative
    ? { "aria-hidden": true as const }
    : { role: "img", "aria-label": alt };

  return (
    <div className={`aspect-[1329/959] ${className}`} {...containerProps}>
      {shots.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes={sizes}
          priority={priority && i === 0}
          className={`object-cover transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
