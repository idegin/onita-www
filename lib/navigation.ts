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
        title: "Project Management",
        items: [
          { label: "AI Project Manager", href: "/products/project-manager", description: "Plan and manage projects automatically" },
          { label: "AI Automations", href: "/products/workflows", description: "Automate repeatable projects and SOPs" },
        ],
      },
      {
        title: "Time Management",
        items: [
          { label: "AI Task Manager", href: "/products/task-manager", description: "Organize and prioritize your tasks" },
          { label: "AI Calendar", href: "/products/calendar", description: "Auto-plan your day with smart scheduling" },
          { label: "AI Meeting Assistant", href: "/products/meeting-assistant", description: "Simplify meeting scheduling and booking links" },
          { label: "AI Email", href: "/products/email", description: "A smart inbox wired into your work" },
        ],
      },
      {
        title: "Knowledge Management",
        items: [
          { label: "AI Chat", href: "/products/chat", description: "The fastest way to go from question to done" },
          { label: "AI Meeting Notetaker", href: "/products/notetaker", description: "Auto-capture meeting notes and summaries" },
          { label: "AI Dashboards", href: "/products/dashboards", description: "Track project progress in one view" },
          { label: "AI Database", href: "/products/database", description: "Spreadsheets and tables your AI can run" },
          { label: "AI Notes", href: "/products/docs-assistant", description: "Write and organize docs faster" },
        ],
      },
      {
        title: "And More",
        items: [
          { label: "Integrations", href: "/integrations", description: "Connect your favorite tools to Onita" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    columns: [
      {
        title: "Service businesses",
        items: [
          { label: "IT Service Providers", href: "/use-cases/it-service-providers" },
          { label: "Marketing Agencies", href: "/use-cases/marketing-agencies" },
          { label: "Design Agencies", href: "/use-cases/design-agencies" },
          { label: "Law Firms", href: "/use-cases/law-firms" },
          { label: "Consulting Businesses", href: "/use-cases/consulting-businesses" },
          { label: "Construction Companies", href: "/use-cases/construction-companies" },
          { label: "Real Estate Management", href: "/use-cases/real-estate-management" },
        ],
      },
      {
        title: "Functional teams",
        items: [
          { label: "Startups", href: "/use-cases/startups" },
          { label: "Sales Teams", href: "/use-cases/sales-teams" },
          { label: "Executive Teams", href: "/use-cases/executive-teams" },
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
      { label: "AI Project Manager", href: "/products/project-manager" },
      { label: "AI Task Manager", href: "/products/task-manager" },
      { label: "AI Calendar", href: "/products/calendar" },
      { label: "AI Meeting Notetaker", href: "/products/notetaker" },
      { label: "AI Notes", href: "/products/docs-assistant" },
      { label: "AI Database", href: "/products/database" },
      { label: "AI Email", href: "/products/email" },
      { label: "AI Dashboards", href: "/products/dashboards" },
      { label: "AI Automations", href: "/products/workflows" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "All use cases", href: "/use-cases" },
      { label: "IT Service Providers", href: "/use-cases/it-service-providers" },
      { label: "Marketing Agencies", href: "/use-cases/marketing-agencies" },
      { label: "Law Firms", href: "/use-cases/law-firms" },
      { label: "Consulting Businesses", href: "/use-cases/consulting-businesses" },
      { label: "Startups", href: "/use-cases/startups" },
      { label: "Sales Teams", href: "/use-cases/sales-teams" },
      { label: "Executive Teams", href: "/use-cases/executive-teams" },
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
      { label: "All use cases", href: "/use-cases" },
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
