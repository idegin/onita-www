import { siteConfig } from "@/lib/site-config";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  updated: string;
  summary: string;
  sections: LegalSection[];
};

const company = siteConfig.legalName;
const contactEmail = siteConfig.contact.generalEmail;
const privacyEmail = "privacy@onitaai.com";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Onita collects, uses, and protects the personal information of website visitors and customers, and the choices you have over your data.",
    updated: "January 1, 2026",
    summary:
      "This Privacy Policy explains what information Onita collects when you visit our website or engage our services, how we use it, who we share it with, and the rights you have over your personal data.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect information you provide directly to us — such as your name, work email, company, and message — when you book a demo, contact sales, or otherwise reach out.",
          "We also collect limited technical information automatically, including your device type, browser, and pages visited, to operate and improve the website.",
        ],
      },
      {
        heading: "How we use your information",
        bullets: [
          "To respond to demo and sales enquiries and provide the services you request.",
          "To design, build, host, and run the AI workforce we deliver as a managed service.",
          "To operate, secure, and improve our website and services.",
          "To send you communications about your engagement, which you can opt out of at any time.",
        ],
      },
      {
        heading: "How we share information",
        paragraphs: [
          "We do not sell your personal information. We share it only with service providers who process it on our behalf under contract, and where required by law.",
          "Customer data processed within the AI workforce we run for you is handled under the terms of your service agreement and data processing addendum.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "We retain personal information only as long as necessary for the purposes described here, to comply with our legal obligations, resolve disputes, and enforce our agreements.",
        ],
      },
      {
        heading: "Your choices and rights",
        paragraphs: [
          "Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing.",
          `To exercise any of these rights, contact us at ${privacyEmail}.`,
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [
          `If you have questions about this policy or our data practices, contact ${company} at ${privacyEmail}.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    metaTitle: "Terms of Service",
    metaDescription:
      "The terms that govern your use of the Onita website and the managed AI Workforce Platform services provided by Onita.",
    updated: "January 1, 2026",
    summary:
      "These Terms of Service govern your access to and use of the Onita website and the managed AI Workforce Platform services we provide. By using our site or services, you agree to these terms.",
    sections: [
      {
        heading: "Use of the website",
        paragraphs: [
          "You may use this website for lawful purposes only. You agree not to misuse it, interfere with its operation, or attempt to access it in any way other than through the interface we provide.",
        ],
      },
      {
        heading: "Our services",
        paragraphs: [
          "Onita is a done-for-you, managed service. Following a demo, our team designs, builds, hosts, and runs an AI workforce for your business under a separate written service agreement.",
          "The website itself does not provide self-serve account creation, sign-up, or login. The specific scope, fees, and service levels of any engagement are set out in your service agreement.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The website, its content, and the Onita platform are owned by us and protected by intellectual property laws. These terms do not grant you any right to our trademarks or branding.",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          "The website is provided on an “as is” and “as available” basis without warranties of any kind, to the fullest extent permitted by law.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, Onita will not be liable for any indirect, incidental, or consequential damages arising from your use of the website.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [`Questions about these terms can be sent to ${contactEmail}.`],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    metaTitle: "Security at Onita",
    metaDescription:
      "How Onita protects your data — encryption, access controls, audit logging, human-in-the-loop approvals, and the compliance practices behind our managed AI workforce.",
    updated: "January 1, 2026",
    summary:
      "Security is foundational to a managed AI workforce. This page describes the controls and practices Onita uses to protect your data across the platform we build, host, and run for you.",
    sections: [
      {
        heading: "Encryption",
        paragraphs: [
          "Data is encrypted in transit using TLS and at rest using industry-standard encryption. Secrets and credentials are stored in dedicated, access-controlled vaults.",
        ],
      },
      {
        heading: "Access controls and permissions",
        paragraphs: [
          "Every AI agent operates within scoped permissions that bound exactly what it can read and do. Role-based access control governs what people on your team can see and manage.",
        ],
      },
      {
        heading: "Human-in-the-loop approvals",
        paragraphs: [
          "Sensitive and client-facing actions require human approval. You decide where approval gates sit, and agents never take gated actions without sign-off.",
        ],
      },
      {
        heading: "Audit logging",
        paragraphs: [
          "Every action an agent takes is logged, giving you a complete, reviewable record of what happened, when, and why.",
        ],
      },
      {
        heading: "Data ownership and residency",
        paragraphs: [
          "With Onita Private, we deploy and run a dedicated instance in your own environment so your data stays under your ownership and control, meeting strict residency and compliance requirements.",
        ],
      },
      {
        heading: "Compliance and reporting",
        paragraphs: [
          `We align our practices with recognized frameworks including SOC 2. To request our security documentation or report a concern, contact ${contactEmail}.`,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy",
    metaDescription:
      "How Onita uses cookies and similar technologies on its website, the categories we use, and how you can control them.",
    updated: "January 1, 2026",
    summary:
      "This Cookie Policy explains how Onita uses cookies and similar technologies on our website, the types we use, and the choices available to you.",
    sections: [
      {
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They help the site function and provide information to the site owners.",
        ],
      },
      {
        heading: "How we use cookies",
        bullets: [
          "Essential cookies that are required for the website to work.",
          "Analytics cookies that help us understand how visitors use the site so we can improve it.",
          "Preference cookies that remember choices such as your theme.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can control and delete cookies through your browser settings. Blocking some cookies may affect how the website functions.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [`For questions about our use of cookies, contact ${privacyEmail}.`],
      },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR",
    metaTitle: "GDPR & Data Protection",
    metaDescription:
      "How Onita supports compliance with the EU General Data Protection Regulation, including lawful bases, data subject rights, and international transfers.",
    updated: "January 1, 2026",
    summary:
      "This page describes how Onita approaches the EU General Data Protection Regulation (GDPR) and supports our customers and website visitors in exercising their data protection rights.",
    sections: [
      {
        heading: "Our role",
        paragraphs: [
          "For personal data we handle about website visitors and prospects, Onita acts as a data controller. For customer data processed within the AI workforce we run, we act as a data processor under your instructions and a data processing addendum.",
        ],
      },
      {
        heading: "Lawful bases for processing",
        paragraphs: [
          "We process personal data on the bases of your consent, our legitimate interests in operating our business, and the performance of a contract, as applicable.",
        ],
      },
      {
        heading: "Your rights",
        bullets: [
          "The right to access the personal data we hold about you.",
          "The right to rectification of inaccurate data.",
          "The right to erasure and to restrict or object to processing.",
          "The right to data portability.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "Where we transfer personal data outside your region, we rely on appropriate safeguards such as standard contractual clauses.",
        ],
      },
      {
        heading: "Contact our data team",
        paragraphs: [
          `To exercise your rights or ask a data protection question, contact ${company} at ${privacyEmail}.`,
        ],
      },
    ],
  },
];

export const legalMap: Record<string, LegalDoc> = Object.fromEntries(
  legalDocs.map((d) => [d.slug, d])
);

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalMap[slug];
}
