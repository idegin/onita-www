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
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "Operations & delivery",
        items: [
          { label: "Project Management", href: "/solutions/project-management" },
          { label: "Product Development", href: "/solutions/product-development" },
          { label: "Operations", href: "/solutions/operations" },
          { label: "IT & Support", href: "/solutions/it" },
        ],
      },
      {
        title: "Sales & marketing",
        items: [
          { label: "Sales", href: "/solutions/sales" },
          { label: "CRM", href: "/solutions/crm" },
          { label: "Marketing", href: "/solutions/marketing" },
          { label: "Customer Success", href: "/solutions/customer-success" },
        ],
      },
      {
        title: "People & finance",
        items: [
          { label: "HR & Recruiting", href: "/solutions/hr" },
          { label: "Accounting & Finance", href: "/solutions/accounting" },
          { label: "Task Management", href: "/solutions/task-management" },
          { label: "Knowledge Base", href: "/solutions/knowledge-base" },
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
      { label: "Dashboard", href: "/products/dashboard" },
      { label: "Documents", href: "/products/documents" },
      { label: "Spreadsheet", href: "/products/spreadsheet" },
      { label: "Slides", href: "/products/slides" },
      { label: "Automations", href: "/products/automations" },
      { label: "Timeline", href: "/products/timeline" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All solutions", href: "/solutions" },
      { label: "Project Management", href: "/solutions/project-management" },
      { label: "Sales", href: "/solutions/sales" },
      { label: "CRM", href: "/solutions/crm" },
      { label: "Marketing", href: "/solutions/marketing" },
      { label: "Operations", href: "/solutions/operations" },
      { label: "HR & Recruiting", href: "/solutions/hr" },
      { label: "Accounting & Finance", href: "/solutions/accounting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Talk to sales", href: "/contact-sales" },
      { label: "All products", href: "/products" },
      { label: "All solutions", href: "/solutions" },
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
