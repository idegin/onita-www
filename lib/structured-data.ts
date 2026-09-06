import { siteConfig } from "@/lib/site-config";

const abs = (path: string) => `${siteConfig.url}${path}`;

const onitaKnowsAbout = [
  "AI work management",
  "AI project management",
  "Task tracking",
  "Human resources and hiring",
  "Lead generation and cold outreach",
  "Sales and marketing",
  "Business process automation",
  "AI agents for business",
  "Managed AI workforce",
];

const onitaFeatureList = [
  "AI project management & task tracking",
  "Docs, spreadsheets, slides & forms",
  "Dashboards & reporting",
  "Email, calendar & scheduling",
  "AI meeting notetaker",
  "AI workflow automation",
  "AI teammates for HR & hiring",
  "AI teammates for lead generation & cold outreach",
  "AI teammates for sales & marketing",
  "Integrations with Gmail, Outlook, Google Workspace, Zoho, WhatsApp, Zoom, Microsoft Teams, Paystack & Flutterwave",
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: abs(siteConfig.assets.logo),
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  foundingDate: siteConfig.founded,
  knowsAbout: onitaKnowsAbout,
  areaServed: ["Nigeria", "Worldwide"],
  email: siteConfig.contact.generalEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.countryCode,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.salesEmail,
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.supportEmail,
      availableLanguage: ["English"],
    },
  ],
  sameAs: Object.values(siteConfig.socials),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-US",
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI Work Management Platform",
  operatingSystem: "Web",
  description: siteConfig.description,
  url: siteConfig.url,
  keywords: onitaKnowsAbout.join(", "),
  featureList: onitaFeatureList,
  audience: {
    "@type": "BusinessAudience",
    name: "Individuals, teams, and businesses of all sizes",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: abs(siteConfig.demoUrl),
    description: "Book a demo and we set up and run your AI work management platform for you.",
  },
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function productSchema(product: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Onita ${product.name}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Productivity Platform",
    operatingSystem: "Web",
    description: product.description,
    url: abs(`/products/${product.slug}`),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: abs(siteConfig.demoUrl),
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}

export function serviceSchema(service: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Onita for ${service.name}`,
    serviceType: service.name,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "Worldwide",
    url: abs(`/use-cases/${service.slug}`),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: abs(siteConfig.demoUrl),
    },
  };
}

export function personSchema(person: {
  name: string;
  slug: string;
  role: string;
  description: string;
  sameAs: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/team/${person.slug}/#person`,
    name: person.name,
    jobTitle: person.role,
    description: person.description,
    url: abs(`/team/${person.slug}`),
    ...(person.image ? { image: abs(person.image) } : {}),
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    sameAs: person.sameAs,
  };
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: abs(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
