import { CtaButtons } from "@/components/ui/cta-buttons";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-hero py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow"
      />
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2
          id="final-cta-heading"
          className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          Ready to grow without growing your payroll?
        </h2>
        <p className="mt-5 text-lg text-white/75">
          Build your first AI employee in minutes. {siteConfig.slogan}
        </p>
        <CtaButtons invert align="center" className="mt-9" />
        <p className="mt-5 text-sm text-white/55">Start free · No credit card required</p>
      </div>
    </section>
  );
}
