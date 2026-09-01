export const siteConfig = {
  name: "Onita AI",
  shortName: "Onita",
  legalName: "iDegin Technologies Ltd",
  tagline: "The #1 Rated Productivity Platform for the AI Era",
  slogan: "Double your productivity with AI.",
  description:
    "Onita is the #1 rated AI productivity platform for the AI era, built for individuals and teams of all sizes. It combines AI-powered products — Project Manager, Task Manager, Calendar, Meeting Notetaker, Docs, Dashboards, Workflows, and more — that handle the busywork so you get twice as much done. Book a demo and our team sets it all up for you.",
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
    { value: "2x", label: "more productive" },
    { value: "8+", label: "AI products in one place" },
    { value: "40+", label: "hours saved per week" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
