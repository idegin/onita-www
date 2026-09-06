export const siteConfig = {
  name: "Onita AI",
  shortName: "Onita",
  legalName: "iDegin Technologies Ltd",
  tagline: "The all-in-one AI work management platform",
  slogan: "Your team, plus a team of AI workers.",
  description:
    "Onita is the all-in-one AI work management platform where your team and AI teammates get work done side by side. Project management, task tracking, docs, spreadsheets, slides, forms, dashboards, email, calendar, scheduling, and automated workflows all live in one workspace — and AI teammates run the busywork for you across project management, HR and hiring, lead generation and cold outreach, and sales and marketing. Onita connects to the tools you already use — Gmail, Outlook, Google Workspace, Zoho, WhatsApp, Zoom, Microsoft Teams, Paystack and more — and works right where your business already lives. It's done-for-you: book a demo and our team sets it up and runs it for you, on your budget.",
  metaDescription:
    "Onita is the all-in-one AI work management platform — project management, HR, lead generation, sales & marketing and more, run for you by AI teammates. Book a demo.",
  founded: "2024",

  url: "https://www.onitaapp.com",
  appUrl: "https://app.onitaapp.com",
  demoUrl: "/book-demo",
  salesUrl: "/contact-sales",

  analytics: {
    gaId: "G-ESWJDHETCZ",
  },

  assets: {
    logo: "/brand/logo.png",
    ogImage: "/og/og-image.png",
    twitterImage: "/og/twitter-image.png",
  },

  contact: {
    generalEmail: "hello@onitaapp.com",
    salesEmail: "sales@onitaapp.com",
    supportEmail: "support@onitaapp.com",
    legalEmail: "legal@onitaapp.com",
  },

  address: {
    city: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
    full: "Lagos, Nigeria",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/onitaapp",
    x: "https://x.com/onitaapp",
    youtube: "https://www.youtube.com/@onitaapp",
    github: "https://github.com/onitaapp",
  },

  twitterHandle: "@onitaapp",

  aiModels: ["Claude", "GPT", "Gemini", "Llama"],

  stats: [
    { value: "30,000+", label: "people & teams on Onita" },
    { value: "12", label: "tools in one workspace" },
    { value: "2x", label: "more done" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
