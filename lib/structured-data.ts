import { siteConfig } from "@/lib/site-config";

const abs = (path: string) => `${siteConfig.url}${path}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: abs(siteConfig.assets.logo),
  description: siteConfig.description,
  foundingDate: siteConfig.founded,
  email: siteConfig.contact.generalEmail,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.salesEmail,
      telephone: siteConfig.contact.phone,
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
  operatingSystem: "Web",
  description: siteConfig.description,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: abs(siteConfig.demoUrl),
    description: "Book a demo and we design, build, and run your AI workforce for you.",
  },
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
