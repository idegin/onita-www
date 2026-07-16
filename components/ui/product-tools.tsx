import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function DocsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

function SheetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="M3.5 9.5h17M3.5 14.5h17M9 4.5v15M15 4.5v15" />
    </svg>
  );
}

function SlidesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="12" rx="3" />
      <path d="M10 20h4M12 16.5V20" />
      <path d="M10 8.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FormIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M8.5 8.5l1 1 2-2M8.5 15l1 1 2-2" />
      <path d="M13.5 8h3M13.5 15h3" />
    </svg>
  );
}

function BoardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4" width="5" height="16" rx="2" />
      <rect x="9.5" y="4" width="5" height="11" rx="2" />
      <rect x="15.5" y="4" width="5" height="8" rx="2" />
    </svg>
  );
}

function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M4 9.5h16M8.5 3v4M15.5 3v4" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
    </svg>
  );
}

function AutomationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 6H15.6M18 8.4v7.2M8 8l7 7" />
    </svg>
  );
}

function AiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 3.5l1.9 4.6 4.6 1.9-4.6 1.9L12 16.5l-1.9-4.6L5.5 10l4.6-1.9z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M18 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export type ProductTool = {
  name: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

export const productTools: ProductTool[] = [
  { name: "Docs", Icon: DocsIcon },
  { name: "Sheets", Icon: SheetIcon },
  { name: "Boards", Icon: BoardIcon },
  { name: "Slides", Icon: SlidesIcon },
  { name: "Forms", Icon: FormIcon },
  { name: "Calendar", Icon: CalendarIcon },
  { name: "Automations", Icon: AutomationIcon },
  { name: "AI Agents", Icon: AiIcon },
];
