export type NavLink = { label: string; href: string; description?: string };
export type NavColumn = { title: string; items: NavLink[] };
export type NavGroup = { label: string; href: string; items?: NavLink[]; columns?: NavColumn[] };

const productColumns: NavColumn[] = [
  {
    title: "Create",
    items: [
      { label: "Spreadsheet", href: "/products/spreadsheet" },
      { label: "Documents", href: "/products/docs" },
      { label: "Slides", href: "/products/slides" },
      { label: "Forms", href: "/products/forms" },
      { label: "Dashboards", href: "/products/dashboards" },
    ],
  },
  {
    title: "Automate with AI",
    items: [
      { label: "AI teammates", href: "/products/ai-agents" },
      { label: "Flow", href: "/products/flow" },
      { label: "Approvals", href: "/products/approvals" },
    ],
  },
  {
    title: "Communicate",
    items: [
      { label: "Email", href: "/products/email" },
      { label: "Calendar", href: "/products/calendar" },
      { label: "Meeting notetaker", href: "/products/notetaker" },
      { label: "Bookings", href: "/products/bookings" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "All products", href: "/products" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
];

const useCaseColumns: NavColumn[] = [
  {
    title: "By team",
    items: [
      { label: "Sales", href: "/use-cases/sales" },
      { label: "Project management", href: "/use-cases/project-management" },
      { label: "Operations", href: "/use-cases/operations" },
      { label: "Marketing", href: "/use-cases/marketing" },
      { label: "Recruiting", href: "/use-cases/recruiting" },
      { label: "Communication", href: "/use-cases/communication" },
    ],
  },
  {
    title: "By company type",
    items: [
      { label: "Enterprise", href: "/use-cases/enterprise" },
      { label: "Startups", href: "/use-cases/startup" },
      { label: "Small businesses", href: "/use-cases/small-business" },
      { label: "Non-profits", href: "/use-cases/non-profit" },
    ],
  },
  {
    title: "By use case",
    items: [
      { label: "All use cases", href: "/use-cases" },
      { label: "Social content", href: "/use-cases/social-content" },
      { label: "Follow-ups", href: "/use-cases/follow-ups" },
      { label: "Inventory", href: "/use-cases/inventory" },
      { label: "Customer success", href: "/use-cases/customer-success" },
      { label: "Resource planning", href: "/use-cases/resource-planning" },
    ],
  },
];

export const primaryNav: NavGroup[] = [
  { label: "Products", href: "/products", columns: productColumns },
  { label: "Use cases", href: "/use-cases", columns: useCaseColumns },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      ...productColumns.flatMap((column) => column.items),
    ],
  },
  {
    title: "Use cases",
    links: [
      ...useCaseColumns.flatMap((column) => column.items),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Contact", href: "/contact-sales" },
      { label: "Partner portal", href: "/reseller" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Data protection", href: "/legal/gdpr" },
    ],
  },
];
