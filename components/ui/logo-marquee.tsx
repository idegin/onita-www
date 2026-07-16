import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

type CompanyLogo = {
  name: string;
  color: string;
  Mark: (props: MarkProps) => React.JSX.Element;
};

const companies: CompanyLogo[] = [
  {
    name: "Northwind",
    color: "#4f46e5",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <path d="M6 24V8l10 8 10-8v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Lumen",
    color: "#f59e0b",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <circle cx="16" cy="16" r="7" fill="currentColor" />
        <path d="M16 2v3M16 27v3M2 16h3M27 16h3M6 6l2 2M24 24l2 2M26 6l-2 2M8 24l-2 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vertex",
    color: "#059669",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <path d="M16 4l11 22H5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Quanta",
    color: "#765af3",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="3" />
        <path d="M20 20l6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Fluxwork",
    color: "#ce3e98",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <path d="M4 22C10 22 10 10 16 10s6 12 12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="10" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Cobalt",
    color: "#2563eb",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <rect x="5" y="5" width="10" height="10" rx="2.5" fill="currentColor" />
        <rect x="17" y="17" width="10" height="10" rx="2.5" fill="currentColor" />
        <rect x="17" y="5" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="2.6" />
      </svg>
    ),
  },
  {
    name: "Meridian",
    color: "#0d9488",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.6" />
        <path d="M5 16h22M16 5c4 3.5 4 18.5 0 22M16 5c-4 3.5-4 18.5 0 22" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    name: "Everstack",
    color: "#ea580c",
    Mark: (p) => (
      <svg viewBox="0 0 32 32" fill="none" {...p}>
        <path d="M16 4l11 6-11 6L5 10z" fill="currentColor" />
        <path d="M5 16l11 6 11-6M5 22l11 6 11-6" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function LogoMarquee() {
  const row = [...companies, ...companies];

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
      <ul className="animate-marquee flex w-max items-center gap-x-14 pr-14 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {row.map((company, i) => (
          <li
            key={`${company.name}-${i}`}
            aria-hidden={i >= companies.length ? true : undefined}
            className="flex shrink-0 items-center gap-2.5 grayscale opacity-60 transition duration-300 ease-out hover:grayscale-0 hover:opacity-100"
          >
            <company.Mark className="h-7 w-7 shrink-0" style={{ color: company.color }} aria-hidden="true" />
            <span className="font-display text-lg font-bold tracking-tight text-ink-800">
              {company.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
