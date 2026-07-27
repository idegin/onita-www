import Image from "next/image";
import type { Accent } from "@/lib/products";
import { accentClasses } from "@/lib/products";

type MemberAvatarProps = {
  name: string;
  image?: string;
  accent?: Accent;
  className?: string;
  monogramClassName?: string;
  sizes?: string;
  priority?: boolean;
};

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function MemberAvatar({
  name,
  image,
  accent = "brand",
  className = "",
  monogramClassName = "text-2xl",
  sizes,
  priority = false,
}: MemberAvatarProps) {
  const a = accentClasses[accent];

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${a.gradient} ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-full w-full items-center justify-center font-display font-bold tracking-tight text-white ${monogramClassName}`}
        >
          {initialsOf(name)}
        </span>
      )}
    </div>
  );
}
