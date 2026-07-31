import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner portal",
  description: "Private access for Onita partners to track referrals and commission.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: undefined },
};

export default function ResellerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
