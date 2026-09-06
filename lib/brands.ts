export type Brand = { name: string; logo: string };

export const aiProviders: Brand[] = [
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "GPT", logo: "/logos/openai.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "DeepSeek", logo: "/logos/deepseek.svg" },
  { name: "Llama", logo: "/logos/meta.svg" },
];

export type IntegrationCategory =
  | "Email"
  | "Docs & files"
  | "Calendar & scheduling"
  | "Meetings"
  | "Messaging & social"
  | "Payments";

export type Integration = Brand & { category: IntegrationCategory };

export const integrationCategories: IntegrationCategory[] = [
  "Email",
  "Docs & files",
  "Calendar & scheduling",
  "Meetings",
  "Messaging & social",
  "Payments",
];

export const integrations: Integration[] = [
  { name: "Gmail", logo: "/logos/tools/gmail.png", category: "Email" },
  { name: "Outlook", logo: "/logos/tools/outlook.png", category: "Email" },
  { name: "Zoho Mail", logo: "/logos/tools/zoho.png", category: "Email" },
  { name: "Google Drive", logo: "/logos/tools/google-drive.png", category: "Docs & files" },
  { name: "Google Docs", logo: "/logos/tools/google-docs.png", category: "Docs & files" },
  { name: "Google Sheets", logo: "/logos/tools/google-sheets.svg", category: "Docs & files" },
  { name: "Google Slides", logo: "/logos/tools/google-slides.svg", category: "Docs & files" },
  { name: "OneDrive", logo: "/logos/tools/onedrive.png", category: "Docs & files" },
  { name: "Zoho WorkDrive", logo: "/logos/tools/zoho.png", category: "Docs & files" },
  { name: "Google Calendar", logo: "/logos/tools/google-calendar.png", category: "Calendar & scheduling" },
  { name: "Outlook Calendar", logo: "/logos/tools/outlook.png", category: "Calendar & scheduling" },
  { name: "Zoho Bookings", logo: "/logos/tools/zoho.png", category: "Calendar & scheduling" },
  { name: "Google Meet", logo: "/logos/tools/google-meet.png", category: "Meetings" },
  { name: "Zoom", logo: "/logos/tools/zoom.svg", category: "Meetings" },
  { name: "Microsoft Teams", logo: "/logos/tools/microsoft-teams.svg", category: "Meetings" },
  { name: "WhatsApp", logo: "/logos/tools/whatsapp.svg", category: "Messaging & social" },
  { name: "Instagram", logo: "/logos/tools/instagram.svg", category: "Messaging & social" },
  { name: "YouTube", logo: "/logos/tools/youtube.svg", category: "Messaging & social" },
  { name: "Facebook", logo: "/logos/tools/facebook.svg", category: "Messaging & social" },
  { name: "TikTok", logo: "/logos/tools/tiktok.svg", category: "Messaging & social" },
  { name: "Telegram", logo: "/logos/tools/telegram.svg", category: "Messaging & social" },
  { name: "LinkedIn", logo: "/logos/tools/linkedin.svg", category: "Messaging & social" },
  { name: "Paystack", logo: "/logos/tools/paystack.png", category: "Payments" },
  { name: "Flutterwave", logo: "/logos/tools/flutterwave.png", category: "Payments" },
];

export const integrationsByCategory = integrationCategories.map((category) => ({
  category,
  items: integrations.filter((i) => i.category === category),
}));

export const hubIntegrations: Brand[] = [
  { name: "Gmail", logo: "/logos/tools/gmail.png" },
  { name: "Google Drive", logo: "/logos/tools/google-drive.png" },
  { name: "Google Calendar", logo: "/logos/tools/google-calendar.png" },
  { name: "Google Meet", logo: "/logos/tools/google-meet.png" },
  { name: "Outlook", logo: "/logos/tools/outlook.png" },
  { name: "OneDrive", logo: "/logos/tools/onedrive.png" },
  { name: "Zoom", logo: "/logos/tools/zoom.svg" },
  { name: "Microsoft Teams", logo: "/logos/tools/microsoft-teams.svg" },
  { name: "Zoho", logo: "/logos/tools/zoho.png" },
  { name: "Google Docs", logo: "/logos/tools/google-docs.png" },
  { name: "Google Sheets", logo: "/logos/tools/google-sheets.svg" },
  { name: "Google Slides", logo: "/logos/tools/google-slides.svg" },
  { name: "WhatsApp", logo: "/logos/tools/whatsapp.svg" },
  { name: "Instagram", logo: "/logos/tools/instagram.svg" },
  { name: "YouTube", logo: "/logos/tools/youtube.svg" },
  { name: "Facebook", logo: "/logos/tools/facebook.svg" },
  { name: "TikTok", logo: "/logos/tools/tiktok.svg" },
  { name: "Telegram", logo: "/logos/tools/telegram.svg" },
  { name: "LinkedIn", logo: "/logos/tools/linkedin.svg" },
  { name: "Paystack", logo: "/logos/tools/paystack.png" },
  { name: "Flutterwave", logo: "/logos/tools/flutterwave.png" },
];
