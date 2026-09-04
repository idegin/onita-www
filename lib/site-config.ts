export const siteConfig = {
  name: "Onita AI",
  shortName: "Onita",
  legalName: "iDegin Technologies Ltd",
  tagline: "The all-in-one workspace with an AI workforce",
  slogan: "Your team, plus a team of AI workers.",
  description:
    "Onita is the all-in-one workspace where your team and AI teammates get work done side by side. It brings spreadsheets, docs, slides, forms, dashboards, email, calendar, scheduling, and automated workflows into one place — and adds AI teammates you set up in minutes that chase leads, sort your inbox, take meeting notes, and follow up for you. You stay in control: anything that can't be undone waits for your one-tap approval. Book a demo and our team sets it all up for you.",
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
