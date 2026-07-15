export const siteConfig = {
  name: "Onita AI",
  shortName: "Onita",
  legalName: "Onita AI, Inc.",
  tagline: "The AI Workforce Platform",
  slogan: "Your team just got bigger.",
  description:
    "Onita is the AI Workforce Platform. Build AI employees that collaborate with your team, automate repetitive work, and help your business scale without hiring more people.",
  founded: "2024",

  url: "https://onitaai.com",
  appUrl: "https://app.onitaai.com",
  loginUrl: "https://app.onitaai.com/login",
  signupUrl: "https://app.onitaai.com/signup",
  demoUrl: "/book-demo",
  salesUrl: "/contact-sales",

  assets: {
    logo: "/brand/logo.png",
    ogImage: "/og/og-image.png",
    twitterImage: "/og/twitter-image.png",
  },

  contact: {
    generalEmail: "hello@onitaai.com",
    salesEmail: "sales@onitaai.com",
    supportEmail: "support@onitaai.com",
    phone: "+1 (415) 555-0142",
    phoneHref: "tel:+14155550142",
  },

  address: {
    street: "548 Market Street, Suite 3210",
    city: "San Francisco",
    region: "CA",
    postalCode: "94104",
    country: "United States",
    countryCode: "US",
    full: "548 Market Street, Suite 3210, San Francisco, CA 94104, United States",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/onitaai",
    x: "https://x.com/onitaai",
    youtube: "https://www.youtube.com/@onitaai",
    github: "https://github.com/onitaai",
  },

  twitterHandle: "@onitaai",

  aiModels: ["Claude", "GPT", "Gemini", "DeepSeek", "Llama"],

  stats: [
    { value: "10x", label: "faster team output" },
    { value: "9", label: "AI employees, ready to hire" },
    { value: "40+", label: "hours saved per week" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
