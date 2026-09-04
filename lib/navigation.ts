export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavColumn = {
  title: string;
  items: NavLink[];
};

export type NavGroup = {
  label: string;
  href: string;
  items?: NavLink[];
  columns?: NavColumn[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    columns: [
      {
        title: "Create",
        items: [
          { label: "Spreadsheet", href: "/products/spreadsheet", description: "One sheet — grid, board, timeline, calendar" },
          { label: "Docs", href: "/products/docs", description: "Docs your team and AI write together" },
          { label: "Slides", href: "/products/slides", description: "On-brand decks built by AI" },
          { label: "Form Builder", href: "/products/forms", description: "Responses become tasks and workflows" },
          { label: "Dashboards", href: "/products/dashboards", description: "Live, filterable charts for everyone" },
        ],
      },
      {
        title: "Automate with AI",
        items: [
          { label: "AI Agents", href: "/products/ai-agents", description: "AI teammates that do real work" },
          { label: "Flow", href: "/products/flow", description: "“When this happens, do that”" },
          { label: "Approvals", href: "/products/approvals", description: "Your one-tap human-in-the-loop" },
        ],
      },
      {
        title: "Communicate",
        items: [
          { label: "Email", href: "/products/email", description: "Every inbox, sorted and drafted by AI" },
          { label: "Calendar", href: "/products/calendar", description: "All your calendars in one view" },
          { label: "AI Meeting Notetaker", href: "/products/notetaker", description: "Notes, recaps, and action items" },
          { label: "Bookings", href: "/products/bookings", description: "Share-a-link scheduling, built in" },
        ],
      },
      {
        title: "More",
        items: [
          { label: "Integrations", href: "/integrations", description: "Works with the tools you already use" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/use-cases",
    columns: [
      {
        title: "By team",
        items: [
          { label: "Sales", href: "/use-cases/sales" },
          { label: "Project Management", href: "/use-cases/project-management" },
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
          { label: "Startup", href: "/use-cases/startup" },
          { label: "Small Business", href: "/use-cases/small-business" },
          { label: "Non-profit", href: "/use-cases/non-profit" },
        ],
      },
      {
        title: "By use case",
        items: [
          { label: "Social Media & Content", href: "/use-cases/social-content" },
          { label: "Follow-ups", href: "/use-cases/follow-ups" },
          { label: "Inventory Management", href: "/use-cases/inventory" },
          { label: "Customer Success", href: "/use-cases/customer-success" },
          { label: "Resource Planning", href: "/use-cases/resource-planning" },
        ],
      },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "All products", href: "/products" },
      { label: "Spreadsheet", href: "/products/spreadsheet" },
      { label: "AI Agents", href: "/products/ai-agents" },
      { label: "Docs", href: "/products/docs" },
      { label: "Slides", href: "/products/slides" },
      { label: "Form Builder", href: "/products/forms" },
      { label: "Dashboards", href: "/products/dashboards" },
      { label: "Flow", href: "/products/flow" },
      { label: "Email", href: "/products/email" },
      { label: "Calendar", href: "/products/calendar" },
      { label: "AI Meeting Notetaker", href: "/products/notetaker" },
      { label: "Bookings", href: "/products/bookings" },
      { label: "Approvals", href: "/products/approvals" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All solutions", href: "/use-cases" },
      { label: "Sales", href: "/use-cases/sales" },
      { label: "Marketing", href: "/use-cases/marketing" },
      { label: "Operations", href: "/use-cases/operations" },
      { label: "Enterprise", href: "/use-cases/enterprise" },
      { label: "Startup", href: "/use-cases/startup" },
      { label: "Small Business", href: "/use-cases/small-business" },
      { label: "Customer Success", href: "/use-cases/customer-success" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Talk to sales", href: "/contact-sales" },
      { label: "Partner portal", href: "/reseller" },
      { label: "All products", href: "/products" },
      { label: "All solutions", href: "/use-cases" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Data protection", href: "/legal/gdpr" },
    ],
  },
];
