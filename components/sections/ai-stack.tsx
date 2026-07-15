import Image from "next/image";
import { DotsThreeOutlineIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiProviders, integrations } from "@/lib/brands";

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
            {aiProviders.map((model) => (
              <li
                key={model.name}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
                  <Image src={model.logo} alt="" width={24} height={24} className="h-full w-full object-contain" />
                </span>
                <span className="font-display text-base font-semibold text-white">{model.name}</span>
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
            {integrations.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col items-center justify-center gap-3 rounded-card border border-white/10 bg-white/[0.04] p-6 text-center transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2.5">
                  <Image src={tool.logo} alt="" width={32} height={32} className="h-full w-full object-contain" />
                </span>
                <span className="text-sm font-medium text-white/75">{tool.name}</span>
              </li>
            ))}
            <li className="flex flex-col items-center justify-center gap-3 rounded-card border border-white/10 bg-white/[0.04] p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <DotsThreeOutlineIcon size={26} weight="fill" />
              </span>
              <span className="text-sm font-medium text-white/75">And more</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
