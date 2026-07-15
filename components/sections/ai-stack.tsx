import {
  GoogleLogoIcon,
  MicrosoftOutlookLogoIcon,
  WhatsappLogoIcon,
  YoutubeLogoIcon,
  PuzzlePieceIcon,
  SparkleIcon,
  CheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const integrations = [
  { name: "Google", Icon: GoogleLogoIcon },
  { name: "Microsoft", Icon: MicrosoftOutlookLogoIcon },
  { name: "WhatsApp", Icon: WhatsappLogoIcon },
  { name: "YouTube", Icon: YoutubeLogoIcon },
  { name: "Zoho", Icon: PuzzlePieceIcon },
  { name: "And more", Icon: PuzzlePieceIcon },
];

export function AiStack() {
  return (
    <Section id="ai-models" tone="dark" labelledBy="stack-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="stack-heading"
            invert
            align="left"
            eyebrow="AI models & integrations"
            title="Use the world's best AI models — with the tools you already run on."
            description="Pick the right model for each task, and connect the apps your team lives in. No rip-and-replace."
          />
          <ul className="mt-8 space-y-3">
            {siteConfig.aiModels.map((model) => (
              <li
                key={model}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-ai text-white">
                  <SparkleIcon size={16} weight="fill" />
                </span>
                <span className="font-display text-base font-semibold text-white">{model}</span>
                <CheckIcon size={16} weight="bold" className="ml-auto text-success-500" />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Connects to the tools you already use
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {integrations.map(({ name, Icon }) => (
              <li
                key={name}
                className="flex flex-col items-center justify-center gap-3 rounded-card border border-white/10 bg-white/[0.04] p-6 text-center transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Icon size={32} weight="fill" className="text-white" />
                <span className="text-sm font-medium text-white/75">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
