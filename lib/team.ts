import type { Icon } from "@phosphor-icons/react";
import type { Accent } from "@/lib/products";
import type { OgIconName } from "@/lib/og-icons";
import {
  CompassIcon,
  CpuIcon,
  UsersThreeIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react/dist/ssr";

export type TeamSocial = {
  label: string;
  href: string;
  handle: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: string;
  accent: Accent;
  ogIcon: OgIconName;
  image?: string;
  ogImage?: string;
  location: string;
  pronouns?: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  bio: string[];
  focus: { title: string; desc: string; Icon: Icon }[];
  highlights: { value: string; label: string }[];
  socials: TeamSocial[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "ifeora-emeka",
    name: "Ifeora Emeka",
    role: "Founder & CEO",
    group: "Leadership",
    accent: "brand",
    ogIcon: "UsersThree",
    image: "/team/ifeora-emeka.png",
    location: "Lagos, Nigeria",
    tagline: "Building the AI productivity platform so teams of all sizes get more done with AI.",
    metaTitle: "Ifeora Emeka — Founder & CEO of Onita",
    metaDescription:
      "Meet Ifeora Emeka, Founder & CEO of Onita — the AI Productivity Platform. He leads the team that sets up and runs Onita for individuals and teams of all sizes.",
    summary:
      "Ifeora Emeka is the Founder and CEO of Onita. He started the company on a simple belief: individuals and teams shouldn't have to choose between ambition and the hours in a day. Today he leads the team that sets up and runs Onita for people and companies of every size.",
    bio: [
      "Ifeora founded Onita to close the gap between what small teams are asked to deliver and the number of people they can actually hire. He watched capable teams drown in repetitive work spread across ten disconnected tools — and became convinced the answer wasn't another app, but a suite of AI products that could carry the busywork and let people do the work only people can do.",
      "As CEO he sets the product direction, keeps the company honest about being a fully managed service rather than a self-serve tool, and works closely with early customers to configure the AI products around how each business actually operates.",
      "Ifeora is Founder & CEO of iDegin Technologies (idegin.com), the parent company of Onita AI. Before founding iDegin he spent four years at Sheruta NG, an early-stage startup where he helped build and ship the product before leaving in 2023 to start his own company. That experience — watching a lean team try to operate across too many disconnected tools — became the founding insight behind Onita.",
    ],
    focus: [
      {
        title: "Product & vision",
        desc: "Sets where Onita is headed and guards the core idea — an AI productivity platform we set up and run for you.",
        Icon: CompassIcon,
      },
      {
        title: "Applied AI",
        desc: "Shapes how the AI is trained on a business, wired into its tools, and kept reliable in production.",
        Icon: CpuIcon,
      },
      {
        title: "Customers & delivery",
        desc: "Works alongside early teams to build the agents around how their business truly operates.",
        Icon: UsersThreeIcon,
      },
      {
        title: "Company building",
        desc: "Builds the team and culture behind a managed platform that companies can trust to run mission-critical work.",
        Icon: RocketLaunchIcon,
      },
    ],
    highlights: [
      { value: "2024", label: "founded Onita" },
      { value: "4 years", label: "at Sheruta NG" },
      { value: "iDegin", label: "parent company" },
    ],
    socials: [
      {
        label: "X",
        href: "https://x.com/ifeora_emeka",
        handle: "@ifeora_emeka",
      },
      {
        label: "LinkedIn",
        href: "https://ng.linkedin.com/in/ifeora-emeka",
        handle: "ifeora-emeka",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/ifeora_emeka/",
        handle: "ifeora_emeka",
      },
    ],
  },
];

export const teamMap: Record<string, TeamMember> = Object.fromEntries(
  teamMembers.map((m) => [m.slug, m])
);

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMap[slug];
}
