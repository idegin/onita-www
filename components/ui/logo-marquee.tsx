import Image from "next/image";

type PartnerLogo = {
  name: string;
  src: string;
};

const partners: PartnerLogo[] = [
  { name: "Chebez Group", src: "/partners/chebez-group.png" },
  { name: "iDegin Technologies", src: "/partners/idegin-technologies.png" },
  { name: "IGA Investment", src: "/partners/iga-investment.png" },
  { name: "Chebez Global Ventures", src: "/partners/chebez-global-ventures.png" },
  { name: "Hawksworth", src: "/partners/hawksworth.svg" },
  { name: "Tensillabs", src: "/partners/tensillabs.png" },
  { name: "HAN", src: "/partners/han.png" },
  { name: "TPA", src: "/partners/tpa.png" },
  { name: "Pantaker Store", src: "/partners/pantaker-store.png" },
];

export function LogoMarquee() {
  const row = [...partners, ...partners];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
      }}
    >
      <ul className="animate-marquee flex w-max items-center gap-x-16 pr-16 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {row.map((partner, i) => (
          <li
            key={`${partner.name}-${i}`}
            aria-hidden={i >= partners.length ? true : undefined}
            className="flex h-12 w-40 shrink-0 items-center justify-center opacity-70 grayscale transition duration-300 ease-out hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={partner.src}
              alt={i >= partners.length ? "" : partner.name}
              width={160}
              height={48}
              className="max-h-10 w-auto max-w-[150px] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
