export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items?: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "AI Agents", href: "/products/ai-agents", description: "Create AI team mates that work together" },
      { label: "Database", href: "/products/database", description: "Flexible data for every team" },
      { label: "Documents", href: "/products/documents", description: "Docs your agents can write" },
      { label: "Automations", href: "/products/automations", description: "Trigger, approve, done" },
      { label: "Forms", href: "/products/forms", description: "Capture and route requests" },
      { label: "Calendar", href: "/products/calendar", description: "Plans that update themselves" },
      { label: "Kanban", href: "/products/kanban", description: "Boards for every workflow" },
      { label: "Timeline", href: "/products/timeline", description: "See the whole plan at a glance" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Project Management", href: "/solutions/project-management" },
      { label: "CRM", href: "/solutions/crm" },
      { label: "HR", href: "/solutions/hr" },
      { label: "Sales", href: "/solutions/sales" },
      { label: "Marketing", href: "/solutions/marketing" },
      { label: "Operations", href: "/solutions/operations" },
      { label: "Customer Success", href: "/solutions/customer-success" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Agencies", href: "/industries/agencies" },
      { label: "Government", href: "/industries/government" },
      { label: "Nonprofits", href: "/industries/nonprofits" },
    ],
  },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
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
