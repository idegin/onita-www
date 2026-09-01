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

const brand = siteConfig.name;
const company = siteConfig.legalName;
const legalEmail = siteConfig.contact.legalEmail;
const UPDATED = "24 August 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Onita AI collects, uses, shares, and protects your information — written to be read, not decoded.",
    updated: UPDATED,
    summary:
      "This Privacy Policy explains what information we collect when you use our websites, apps, and services, why we collect it, who we share it with, and the choices and rights you have over your data.",
    sections: [
      {
        heading: "Who we are and what this covers",
        paragraphs: [
          `${brand} is an agentic business platform that helps small and medium-sized businesses run their work with AI assistants (“agents”), automations, and connections to the tools you already use. ${brand} is built and operated by ${company} (“iDegin”, “${brand}”, “we”, “us”, or “our”), a company registered in Nigeria.`,
          `This Privacy Policy explains what information we collect when you use our websites, apps, and services (together, the “Service”), why we collect it, who we share it with, and the choices and rights you have. It applies to everyone who uses ${brand} — account holders, people invited into a workspace, and visitors to public pages such as this website, shared documents, and booking links.`,
          `In short: we collect what we need to run the Service for you — your account details, the content you and your team create, the accounts you choose to connect, and basic technical data. We use trusted third-party providers to deliver AI, payments, email, and hosting. We do not sell your personal data, and we do not use your private business content to train our own AI models.`,
          `If you use ${brand} as part of a team or company workspace, that organisation controls the workspace and its content. In that case we handle much of your information on the organisation’s behalf, and their own policies may also apply to you.`,
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect information in three ways: information you give us, information created as you use the Service, and information from accounts you choose to connect.",
        ],
        bullets: [
          "Account details — your name, email address, and a password (stored only in a securely hashed form; we never see or store your actual password). You may also add a profile photo.",
          "Workspace and organisation details — the name of your workspace or organisation, your role and team members, and, for billing, an organisation contact’s name, email, and phone number.",
          `Content you create — the documents, notes, files, tables, forms, chat messages with your agents, comments, attachments, and approvals you and your team produce inside ${brand}. We call this your “Customer Content”.`,
          "Invitations and contacts — email addresses you use to invite people into a workspace or share content with, and contact details your agents gather or you enter as part of your work.",
          `Form and booking submissions — if you or a visitor fills in an ${brand} form or booking link, we collect the answers submitted, which may include an email address and any details the form asks for.`,
          "Support and communications — messages you send us and your notification preferences.",
          "Usage and activity — actions taken in your workspace, an audit trail of changes and approvals, when you were last active, and which notifications you have read.",
          "AI usage records — for billing and limits, we record which AI model was used, how many tokens were processed, and the cost, linked to your account, agent, and conversation.",
          "Device and technical data — your IP address, browser or device type (user-agent), and session information needed to keep you signed in securely.",
          "Push and notification data — if you enable push notifications, the technical subscription details your browser or device provides so we can deliver them.",
          "Connected-account data — when you connect a third-party account such as Google, Microsoft, Zoho, or Zoom, we receive the access permissions (tokens) you grant and the data needed to perform the tasks you ask your agents to do. You control which accounts you connect and can disconnect them at any time.",
          "Payment information — when you pay, our payment providers (Paystack and Flutterwave) process your card or transfer details directly. We do not store your full card number; we keep only a record of the transaction — amount, currency, status, and a reference — to manage your invoices and credits.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: ["We use the information above to:"],
        bullets: [
          "Provide, maintain, and secure the Service — including signing you in, running your agents and automations, and keeping your data in sync across your devices.",
          "Carry out the tasks you ask for, such as drafting documents, sending email through a connected account, scheduling meetings, or researching on the web.",
          "Send you service messages you need — security codes, invitations, approval requests, and important account notices.",
          "Send product notifications you have chosen to receive; you can adjust or turn these off in your notification settings, and every non-essential email includes a one-click unsubscribe.",
          "Process payments, manage subscriptions and AI credits, and prevent fraud and abuse.",
          "Understand how the Service is used so we can fix problems and improve it.",
          "Meet legal, tax, and regulatory obligations, and enforce our Terms of Service.",
        ],
      },
      {
        heading: "Lawful bases for processing",
        paragraphs: [
          "Under Nigeria’s data protection law, we rely on one or more lawful bases to process your personal data: performing our contract with you, your consent (for example, connecting an account or enabling push notifications), our legitimate interests in running and improving the Service safely, and compliance with our legal obligations.",
        ],
      },
      {
        heading: "How AI processes your information",
        paragraphs: [
          `${brand} is powered by artificial intelligence. To answer you and carry out tasks, your agents send the relevant content of a conversation — your messages, the documents or data you reference, and results from tools such as web search — to third-party AI providers that run the underlying models.`,
          "We route this through an AI gateway (OpenRouter) to leading model providers such as Anthropic (Claude), and use additional providers for specific jobs such as generating text embeddings for search. We choose providers that offer strong security and confidentiality terms.",
          "We do not use your private Customer Content to train our own AI models, and we instruct our AI providers not to use it to train theirs. Your business content is processed to serve you, not to build a general model.",
          "Because AI can make mistakes, the Service is built around human-in-the-loop approvals: sensitive or significant actions an agent proposes (like sending an external email) can be held for a person to review and approve. You are responsible for reviewing agent output before relying on it.",
        ],
      },
      {
        heading: "Connected accounts and connectors",
        paragraphs: [
          `${brand} can connect to other services so your agents can work across your tools. You decide which accounts to connect and what they may do. When you connect an account, we securely store the access tokens needed to act on your behalf — always encrypted — and you can revoke access at any time from your settings or from the provider directly. Connectors currently include:`,
        ],
        bullets: [
          "Google Workspace — Gmail, Calendar, Drive, Docs, and Sheets.",
          "Microsoft 365 — Outlook mail and calendar, Teams, OneDrive, and Excel.",
          "Zoho — Mail and Calendar.",
          "Zoom — meetings and webinars.",
        ],
      },
      {
        heading: "Google and Microsoft data use",
        paragraphs: [
          `${brand}’s use and transfer of information received from Google APIs, and from Microsoft Graph, adheres to the Google API Services User Data Policy and Microsoft’s equivalent requirements, including their Limited Use requirements. We only access the data needed to provide features you request, we do not sell it, we do not use it for advertising, and we do not let humans read it except with your permission, for security, to comply with the law, or where required to operate or improve user-facing features in line with those policies.`,
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "We use a small number of cookies that are essential to run the Service — chiefly a secure sign-in (session) cookie that keeps you logged in. This cookie cannot be read by scripts and is not used for advertising.",
          "On our production website we also use analytics tools to understand how the Service is used so we can improve it. These may set their own cookies or identifiers:",
        ],
        bullets: [
          "PostHog — product analytics (pages viewed, features used, and feature flags), using event and identifier data, not the content of your documents, chats, or emails.",
          "Microsoft Clarity — anonymised heatmaps and session replay that show how people navigate our interface.",
          "Google Analytics — aggregate website traffic and usage statistics.",
        ],
      },
      {
        heading: "When we share information",
        paragraphs: [
          "We do not sell your personal data. We share information only in these situations:",
        ],
        bullets: [
          "With your workspace — content you create is visible to the people you share it with and to administrators of your workspace or organisation.",
          `With service providers (sub-processors) who help us run ${brand}, under contracts that require them to protect your data and use it only to provide their service to us. The current list is below.`,
          "At your direction — with third-party accounts you connect, or when you publish or share content via a public link.",
          `For legal reasons — where we must comply with the law, a lawful request, or to protect the rights, safety, and property of ${brand}, our users, or the public.`,
          "In a business transfer — if we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that deal, subject to this Policy.",
        ],
      },
      {
        heading: "Our sub-processors",
        paragraphs: [
          "These are the key third parties that process personal data to help us deliver the Service. We may update this list as our providers change, and we only involve a provider for an optional connector if you choose to use it.",
        ],
        bullets: [
          "OpenRouter, Anthropic, and other AI providers — AI model processing for agents and automations (conversation content and referenced data you send to an agent).",
          "Google Gemini and OpenAI — text embeddings and search features (content indexed for search within your workspace).",
          "Web search and research tools (such as Tavily) — web search and page reading when an agent researches (the search terms and URLs your agent uses).",
          "Zoho ZeptoMail — sending transactional and notification email (recipient email address and message content).",
          "Paystack and Flutterwave — payment and subscription processing (payment details, amount, and transaction reference).",
          "PostHog, Microsoft Clarity, and Google Analytics — product and website analytics (usage events and device data, not your content).",
          "Google, Microsoft, Zoho, and Zoom — connectors you choose to link (the data needed for tasks you authorise).",
          "Tigris object storage — storing your files and attachments (files, attachments, and documents you upload).",
          "Fly.io — cloud hosting and database (all Service data, hosted in the United States).",
        ],
      },
      {
        heading: "International data transfers",
        paragraphs: [
          `${brand} is operated from Nigeria, and our providers may store and process data in other countries, including the United States and the European Union. This means your information may be transferred outside your home country.`,
          "When we transfer personal data internationally, we take steps required by Nigeria’s data protection law to keep it protected — for example, by using providers that offer adequate safeguards and appropriate contractual protections. By using the Service, you understand that your information will be processed in the locations described in this Policy.",
        ],
      },
      {
        heading: "How long we keep information",
        paragraphs: [
          "We keep your information for as long as your account or workspace is active and for as long as we need it for the purposes in this Policy.",
          "Some records are kept longer where the law requires it — for example, billing and payment records for tax and accounting. When you delete your account or workspace, we delete or de-identify the associated personal data within a reasonable period, except where we must retain it for legal reasons or to resolve disputes.",
          "Some data is also removed automatically:",
        ],
        bullets: [
          "Read notifications are deleted after about 30 days, and notifications generally after about 90 days.",
          "Resolved approvals and completed change-history records are removed after about 90 days, while document version snapshots may be kept so you can undo and audit changes.",
          "Temporary file attachments are deleted after they expire.",
        ],
      },
      {
        heading: "How we protect your information",
        paragraphs: [
          "We use technical and organisational measures designed to protect your information. No online service can be perfectly secure, so please protect your password, use the human-approval features for sensitive actions, and tell us promptly if you suspect any unauthorised access to your account. Our measures include:",
        ],
        bullets: [
          "Encryption of data in transit (HTTPS) across the Service.",
          "Encryption of sensitive credentials, such as connected-account tokens and API keys, while stored.",
          "Passwords stored only as strong, one-way hashes; we never store them in readable form.",
          "Secure sign-in cookies, rate limiting on sensitive actions, and redaction of secrets from our logs.",
          "Access controls so that only authorised people and systems can reach your data.",
        ],
      },
      {
        heading: "Your privacy rights",
        paragraphs: [
          `Subject to Nigeria’s data protection law (and any other law that applies to you), you can exercise the rights below by emailing us at ${legalEmail}. We will respond within the time the law requires. If your data is held inside a workspace controlled by your employer or organisation, we may direct your request to them as the controller of that workspace. Your rights include the right to:`,
        ],
        bullets: [
          "Access the personal data we hold about you.",
          "Ask us to correct information that is wrong or incomplete.",
          "Ask us to delete your personal data in certain circumstances.",
          "Object to or ask us to restrict certain processing, and withdraw consent you have given (such as for connectors or notifications).",
          "Request a copy of certain data in a portable format.",
          "Complain to the Nigeria Data Protection Commission (NDPC) if you believe we have mishandled your data.",
        ],
      },
      {
        heading: "Children’s privacy",
        paragraphs: [
          `${brand} is a business product and is not intended for children. We do not knowingly collect personal data from anyone under 18. If you believe a child has provided us with personal data, contact us and we will delete it.`,
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          `We may update this Privacy Policy from time to time. When we make material changes, we will update the “Last updated” date above and, where appropriate, let you know inside the Service or by email. Continuing to use ${brand} after a change means you accept the updated Policy.`,
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [
          `If you have questions about this Policy or how we handle your data, contact ${company} (operator of ${brand}) at ${legalEmail}.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    metaTitle: "Terms of Service",
    metaDescription:
      "The agreement between you and iDegin Technologies Ltd for using Onita AI — in plain language.",
    updated: UPDATED,
    summary:
      "These Terms of Service govern your access to and use of the Onita AI platform, websites, and apps. By using the Service, you agree to these terms.",
    sections: [
      {
        heading: "Agreement to these terms",
        paragraphs: [
          `These Terms of Service (“Terms”) are a legal agreement between you and ${company} (“iDegin”, “${brand}”, “we”, “us”), the company that provides the ${brand} platform, websites, apps, and related services (together, the “Service”).`,
          `By creating an account, accepting an invitation, or using the Service, you agree to these Terms and to our Privacy Policy. If you are using ${brand} for an organisation, you confirm you are authorised to accept these Terms on its behalf, and “you” includes that organisation. If you do not agree, please do not use the Service.`,
        ],
      },
      {
        heading: "Key terms",
        bullets: [
          "Workspace — the shared environment where you and your team organise work, run agents, and store content.",
          "Agent — an AI assistant you configure to perform tasks inside your workspace.",
          "Automation — a rule or scheduled workflow that runs tasks automatically.",
          "Connector — a link to a third-party service (such as Google or Microsoft) that you authorise.",
          "Customer Content — the data, documents, messages, files, and other material you and your team create, upload, or bring into the Service.",
          "Credits — the prepaid units used to pay for AI usage.",
        ],
      },
      {
        heading: "Eligibility and your account",
        paragraphs: [
          `You must be at least 18 years old and able to enter into a contract to use ${brand}. You are responsible for the information you provide, for keeping your login secure, and for everything that happens under your account.`,
          "If you invite others into your workspace, you are responsible for managing their access and for their use of the Service within it. In using your account, you agree to:",
        ],
        bullets: [
          "Give accurate account information and keep it up to date.",
          "Keep your password confidential and do not share your login.",
          `Tell us promptly at ${legalEmail} if you suspect any unauthorised use of your account.`,
        ],
      },
      {
        heading: "The Service and your workspace",
        paragraphs: [
          `${brand} gives you a workspace with AI products, automations, documents, and connectors to help you run your business. We may add, change, or remove features over time to improve the Service. If we make a change that materially reduces core functionality of a paid plan, we will give you reasonable notice.`,
          "You are responsible for having the accounts, devices, and internet access needed to use the Service, and for configuring your agents, automations, and connectors appropriately for your needs.",
        ],
      },
      {
        heading: "AI products, automations, and human approval",
        paragraphs: [
          `${brand} uses artificial intelligence to generate content and take actions on your instruction. AI is powerful but imperfect: it can be inaccurate, incomplete, or unexpected. You are responsible for reviewing what your agents produce and for the actions you allow them to take.`,
          "The Service lets you require human approval before an agent takes sensitive or significant actions — such as sending an external email or making a change to a connected system. We strongly recommend using these approval controls. You decide what your agents and automations are permitted to do, and you are responsible for those decisions and their outcomes.",
        ],
        bullets: [
          "Do not rely on AI output for legal, financial, medical, or other professional decisions without independent verification.",
          "You are responsible for making sure the tasks you automate — and any messages or actions your agents send on your behalf — comply with the law and with the terms of any connected service.",
        ],
      },
      {
        heading: "Connected services",
        paragraphs: [
          `You may connect third-party services to ${brand}. When you do, you authorise us to access and use those services on your behalf to perform the tasks you request, within the permissions you grant. We are not responsible for third-party services, their availability, or their handling of your data once it reaches them. When you connect a service:`,
        ],
        bullets: [
          "Your use of a connected service is also governed by that provider’s own terms and privacy policy.",
          `You are responsible for having the rights and permissions to connect an account and to let ${brand} act on it.`,
          "You can disconnect a service at any time; some features may stop working when you do.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          `You are responsible for how you use AI products and automations, including making sure their output and actions are lawful and appropriate. We may investigate and act on violations, including suspending or removing content or access. You agree not to use ${brand} to:`,
        ],
        bullets: [
          "Break the law or infringe anyone’s rights.",
          "Send spam, phishing, or unsolicited bulk messages, or violate anti-spam or marketing rules through connected accounts.",
          "Upload or generate content that is unlawful, harmful, hateful, harassing, or that exploits or endangers minors.",
          "Infringe intellectual property, or upload data you do not have the right to use.",
          "Attempt to breach security, probe or scan our systems, bypass usage limits, or disrupt the Service.",
          "Reverse engineer, resell, or copy the Service except as the law expressly permits.",
          "Use the Service to build a competing product, or to train a competing AI model.",
        ],
      },
      {
        heading: "Your content and who owns what",
        paragraphs: [
          `You own your Customer Content. We do not claim ownership of the documents, data, and material you bring into or create with ${brand}.`,
          "To run the Service, you grant us a limited licence to host, store, copy, transmit, display, and process your Customer Content — and to share it with the sub-processors described in our Privacy Policy — only as needed to provide and improve the Service for you. We do not use your private Customer Content to train our own AI models.",
          "You are responsible for your Customer Content: for having the rights to use it, for its accuracy, and for keeping your own backups of anything important. If you give us feedback or suggestions, you allow us to use them to improve the Service without obligation to you.",
        ],
      },
      {
        heading: "Fees, credits, and billing",
        paragraphs: [
          "Paid plans, seats, storage, and AI usage are billed as described when you subscribe or purchase. Prices may be shown in Nigerian Naira (NGN) or another currency, and payments are handled by our payment providers (Paystack and Flutterwave).",
          "Except where required by law, fees and used credits are non-refundable. You can cancel a subscription at any time; cancellation takes effect at the end of the current billing period, and you remain responsible for amounts already due. Billing works as follows:",
        ],
        bullets: [
          "Subscriptions and seats — recurring fees are billed in advance for the billing period and are based on your plan and the number of active members.",
          "AI credits — AI features consume prepaid credits. When your balance runs low, AI features may pause until you top up. A workspace may set daily spend limits.",
          "Taxes — fees are exclusive of taxes unless stated; you are responsible for any applicable taxes.",
          "Late or failed payment — we may suspend or downgrade access if payment fails or an account falls into arrears.",
        ],
      },
      {
        heading: "Our intellectual property",
        paragraphs: [
          `The Service — including its software, design, branding, and the ${brand} and iDegin names and logos — belongs to ${company} and its licensors, and is protected by intellectual-property laws. We grant you a limited, non-exclusive, non-transferable right to use the Service in line with these Terms. Nothing here transfers any of our intellectual-property rights to you, except the limited licence stated.`,
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "The Service works with third-party products (such as AI providers, connectors, and payment processors) and may contain links to third-party sites. We do not control and are not responsible for third parties, their content, or their practices. Your dealings with them are between you and them, and may be subject to their own terms.",
        ],
      },
      {
        heading: "Suspension and termination",
        paragraphs: [
          "You may stop using the Service and close your account at any time. We may suspend or terminate your access if you breach these Terms, if your use poses a security or legal risk, if payment is overdue, or if we are required to by law. Where practical and lawful, we will give you notice.",
          "On termination, your right to use the Service ends. We will make your Customer Content available for a reasonable period so you can export it, after which we may delete it in line with our Privacy Policy. Terms that by their nature should survive — such as payment obligations, content licences, disclaimers, and limitations of liability — will continue to apply.",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          "The Service is provided “as is” and “as available”. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose, merchantability, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or secure, or that AI output will be accurate, complete, or suitable for your purposes. You use the Service, and rely on its output, at your own risk.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          `To the fullest extent permitted by law, ${company} and its officers, employees, and suppliers will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business, arising from or related to your use of (or inability to use) the Service — even if we were advised such damages were possible.`,
          "Our total liability for all claims relating to the Service in any twelve-month period will not exceed the greater of the amount you paid us for the Service in that period, or ₦50,000 (fifty thousand Naira). Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.",
        ],
      },
      {
        heading: "Indemnification",
        paragraphs: [
          `You agree to defend, indemnify, and hold harmless ${company} from claims, damages, and reasonable costs (including legal fees) arising out of your Customer Content, your use of the Service, your use of connected accounts, or your breach of these Terms or of any law or third-party right.`,
        ],
      },
      {
        heading: "Governing law and disputes",
        paragraphs: [
          "These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-laws rules. You and iDegin agree to first try to resolve any dispute informally by contacting us. If we cannot resolve it, the dispute will be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria, and you consent to that jurisdiction and venue.",
        ],
      },
      {
        heading: "Changes to the Service or these Terms",
        paragraphs: [
          `We may update these Terms from time to time. When we make material changes, we will update the “Last updated” date above and, where appropriate, notify you inside the Service or by email. If you keep using ${brand} after the changes take effect, you accept the updated Terms. If you do not agree, you should stop using the Service.`,
        ],
      },
      {
        heading: "General terms",
        bullets: [
          "Entire agreement — these Terms and the Privacy Policy are the entire agreement between you and us about the Service.",
          "Assignment — you may not transfer your rights under these Terms without our consent; we may assign ours in connection with a merger, acquisition, or sale of assets.",
          "Severability — if any part of these Terms is found unenforceable, the rest stays in effect.",
          "No waiver — if we do not enforce a right, that is not a waiver of it.",
          "Force majeure — we are not liable for delays or failures caused by events beyond our reasonable control.",
          `Notices — we may send notices to your account email; you can reach us at ${legalEmail}.`,
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [
          `Questions about these Terms? Contact ${company} (operator of ${brand}) at ${legalEmail}.`,
        ],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    metaTitle: "Security at Onita AI",
    metaDescription:
      "How Onita AI protects your data — encryption, scoped permissions, human-in-the-loop approvals, audit logging, and secure operations behind the platform.",
    updated: UPDATED,
    summary:
      "Security is foundational to how Onita AI works. This page summarises the controls and practices we use to protect your data; for full detail on how we handle information, see our Privacy Policy.",
    sections: [
      {
        heading: "Encryption",
        paragraphs: [
          "Data is encrypted in transit using HTTPS across the Service. Sensitive credentials — such as connected-account tokens and API keys — are encrypted while stored, and passwords are kept only as strong, one-way hashes that we can never read.",
        ],
      },
      {
        heading: "Access controls and permissions",
        paragraphs: [
          "Every AI agent operates within scoped permissions that bound exactly what it can read and do. Access controls ensure that only authorised people and systems can reach your data, and you decide what your agents and teammates are allowed to do.",
        ],
      },
      {
        heading: "Human-in-the-loop approvals",
        paragraphs: [
          "Sensitive and client-facing actions can be held for human approval. You decide where approval gates sit, and agents do not take gated actions without sign-off.",
        ],
      },
      {
        heading: "Audit logging and history",
        paragraphs: [
          "Actions taken in your workspace are recorded with an audit trail of changes and approvals, giving you a reviewable record of what happened and when.",
        ],
      },
      {
        heading: "Secure operations",
        paragraphs: [
          "We apply rate limiting on sensitive actions, redact secrets from our logs, and choose infrastructure and AI providers that offer strong security and confidentiality terms. Your data is hosted with reputable cloud providers; see our Privacy Policy for where data is processed.",
        ],
      },
      {
        heading: "Reporting a concern",
        paragraphs: [
          `No online service can be perfectly secure. If you discover a vulnerability or suspect unauthorised access to your account, contact us at ${legalEmail}, and protect your account by keeping your password confidential and using human-approval controls for sensitive actions.`,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy",
    metaDescription:
      "How Onita AI uses cookies and similar technologies on its website, the categories we use, and how you can control them.",
    updated: UPDATED,
    summary:
      "This Cookie Policy explains how Onita AI uses cookies and similar technologies, the types we use, and the choices available to you. It forms part of our Privacy Policy.",
    sections: [
      {
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They help a site function and provide information to the site owners. We also use similar technologies such as browser storage and analytics identifiers.",
        ],
      },
      {
        heading: "Cookies we set",
        paragraphs: [
          "We use a small number of cookies that are essential to run the Service, chiefly a secure sign-in (session) cookie that keeps you logged in. This cookie cannot be read by scripts and is not used for advertising. Without it, you could not stay signed in.",
        ],
      },
      {
        heading: "Analytics and measurement",
        paragraphs: [
          "On our production website we use analytics tools to understand how the Service is used so we can improve it. These may set their own cookies or identifiers:",
        ],
        bullets: [
          "PostHog — product analytics (pages viewed, features used, and feature flags), using event and identifier data, not the content of your documents, chats, or emails.",
          "Microsoft Clarity — anonymised heatmaps and session replay showing how people navigate our interface.",
          "Google Analytics — aggregate website traffic and usage statistics.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can control and delete cookies through your browser settings, and opt out of many analytics tools using their own controls or standard browser privacy features. Turning off analytics does not affect your ability to use the Service, but blocking essential cookies may stop you from staying signed in.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [`Questions about our use of cookies? Contact us at ${legalEmail}.`],
      },
    ],
  },
  {
    slug: "gdpr",
    title: "Data Protection & GDPR",
    metaTitle: "Data Protection & GDPR",
    metaDescription:
      "How Onita AI protects personal data under Nigeria's data protection law and honours GDPR rights for visitors and customers in the EU, UK, and elsewhere.",
    updated: UPDATED,
    summary:
      "Onita AI is operated from Nigeria and built to protect personal data under Nigeria's data protection law. Where the EU or UK GDPR (or another law) applies to you, we honour the equivalent rights described here.",
    sections: [
      {
        heading: "Our role",
        paragraphs: [
          `For personal data about website visitors and prospects, ${company} acts as a data controller. For Customer Content processed within the workspaces we run for organisations, we act as a data processor under the organisation’s instructions.`,
        ],
      },
      {
        heading: "Lawful bases for processing",
        paragraphs: [
          "We process personal data on the bases of performing our contract with you, your consent (for example, connecting an account or enabling notifications), our legitimate interests in operating and improving the Service safely, and compliance with our legal obligations. These bases mirror both Nigeria’s data protection law and the GDPR.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["Subject to the law that applies to you, you have the right to:"],
        bullets: [
          "Access the personal data we hold about you.",
          "Ask us to correct data that is wrong or incomplete.",
          "Ask us to delete your personal data in certain circumstances.",
          "Object to or restrict certain processing, and withdraw consent you have given.",
          "Request a copy of certain data in a portable format.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          `${brand} is operated from Nigeria and our providers may store and process data in other countries, including the United States and the European Union. When we transfer personal data internationally, we rely on appropriate safeguards and contractual protections, consistent with Nigeria’s data protection law and, where applicable, the GDPR.`,
        ],
      },
      {
        heading: "Complaints and contact",
        paragraphs: [
          `If you believe we have mishandled your data, you can complain to the Nigeria Data Protection Commission (NDPC), or to your local supervisory authority if you are in the EU or UK. To exercise your rights or ask a data-protection question, contact ${company} at ${legalEmail}.`,
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
