export const siteConfig = {
  name: "Onita AI",
  shortName: "Onita",
  legalName: "iDegin Technologies Ltd",
  tagline: "The AI Productivity Platform for Growing Businesses",
  slogan: "Less busywork. More business.",
  description:
    "Onita AI helps growing businesses automate daily operations, follow up with customers, coordinate work and stay on top of their business with AI teammates — set up and run for you. Individuals and teams of all sizes.",
  metaDescription:
    "Automate daily operations, follow up with customers and coordinate work with AI teammates. For growing businesses of all sizes — we set it all up and run it for you.",
  founded: "2024",

  url: "https://www.onitaapp.com",
  appUrl: "https://app.onitaapp.com",
  loginUrl: "https://app.onitaapp.com",
  signUpUrl: "https://app.onitaapp.com/auth/sign-up",
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

} as const;

export type SiteConfig = typeof siteConfig;
