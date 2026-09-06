import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkflowCanvas } from "@/components/sections/workflow-canvas";

export function Workflow() {
  return (
    <Section id="workflow" tone="light" labelledBy="workflow-heading">
      <SectionHeading
        id="workflow-heading"
        eyebrow="Orchestrate workflows"
        title="Orchestrate work from start to finish."
        description="Wire a trigger, your tools, your AI teammates, and your approvals into one flow that runs itself — a visual builder where you drop a human check exactly where it counts."
      />

      <WorkflowCanvas />

      <p className="mx-auto mt-10 max-w-prose text-center text-sm leading-6 text-muted-foreground">
        Every flow can include a human check exactly where you want one — so work moves fast and
        nothing important happens without you.
      </p>
    </Section>
  );
}
