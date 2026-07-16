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
    items: [
      { label: "Dashboard", href: "/products/dashboard", description: "One command center for every metric" },
      { label: "Spreadsheet", href: "/products/spreadsheet", description: "Sheets your agents can read and update" },
      { label: "Documents", href: "/products/documents", description: "Living docs your agents write" },
      { label: "Forms", href: "/products/forms", description: "Capture and route requests" },
      { label: "Slides", href: "/products/slides", description: "Client-ready decks, auto-updated" },
      { label: "Calendar", href: "/products/calendar", description: "Plans that update themselves" },
      { label: "Timeline", href: "/products/timeline", description: "See the whole plan at a glance" },
      { label: "Automations", href: "/products/automations", description: "Trigger, approve, done" },
      { label: "AI Agents", href: "/products/ai-agents", description: "Teammates that never sleep" },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    columns: [
      {
        title: "By firm",
        items: [
          { label: "Consulting firms", href: "/industries/consulting-firms" },
          { label: "Law firms", href: "/industries/law-firms" },
          { label: "Marketing & creative agencies", href: "/industries/agencies" },
          { label: "Accounting & audit firms", href: "/industries/accounting-firms" },
          { label: "Recruitment & HR firms", href: "/industries/recruitment-firms" },
        ],
      },
      {
        title: "By team",
        items: [
          { label: "Client delivery", href: "/solutions/client-delivery" },
          { label: "Business development", href: "/solutions/business-development" },
          { label: "Operations & admin", href: "/solutions/operations" },
          { label: "Finance & billing", href: "/solutions/finance-billing" },
        ],
      },
      {
        title: "By workflow",
        items: [
          { label: "Proposals & pitches", href: "/use-cases/proposals" },
          { label: "Client onboarding", href: "/use-cases/client-onboarding" },
          { label: "Research & due diligence", href: "/use-cases/research-due-diligence" },
          { label: "Reports & deliverables", href: "/use-cases/reports-deliverables" },
        ],
      },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "All products", href: "/products" },
      { label: "AI Agents", href: "/products/ai-agents" },
      { label: "Documents", href: "/products/documents" },
      { label: "Spreadsheet", href: "/products/spreadsheet" },
      { label: "Automations", href: "/products/automations" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Talk to sales", href: "/contact-sales" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
      { label: "Guides", href: "/guides" },
      { label: "Documentation", href: "/docs" },
      { label: "API", href: "/docs/api" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "GDPR", href: "/legal/gdpr" },
    ],
  },
];
