"use client";

import { useId, useMemo, useState } from "react";
import { ArrowRightIcon, TrendUpIcon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const WORK_HOURS_PER_YEAR = 2080;
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type Field = {
  key: "employees" | "salary" | "hours";
  label: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
};

const fields: Field[] = [
  { key: "employees", label: "Team members", min: 1, max: 500, step: 1, format: (v) => `${v}` },
  { key: "salary", label: "Average annual salary", min: 30000, max: 200000, step: 5000, format: (v) => currency.format(v) },
  { key: "hours", label: "Hours saved per person / week", min: 1, max: 30, step: 1, format: (v) => `${v} hrs` },
];

export function RoiCalculator() {
  const baseId = useId();
  const [values, setValues] = useState({ employees: 25, salary: 65000, hours: 8 });

  const annualSavings = useMemo(() => {
    const hourlyRate = values.salary / WORK_HOURS_PER_YEAR;
    return Math.round(values.employees * values.hours * hourlyRate * 52);
  }, [values]);

  return (
    <Section id="roi" tone="light" labelledBy="roi-heading">
      <SectionHeading
        id="roi-heading"
        eyebrow="ROI calculator"
        title="See what an AI workforce is worth to you."
        description="Estimate how much your team saves by automating repetitive work — instead of hiring for it."
      />

      <div className="mt-14 grid gap-6 overflow-hidden rounded-card-lg border border-border bg-surface shadow-hover lg:grid-cols-2">
        <form className="space-y-8 p-8 lg:p-10" aria-label="ROI inputs">
          {fields.map((field) => {
            const inputId = `${baseId}-${field.key}`;
            return (
              <div key={field.key}>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={inputId} className="text-sm font-semibold text-ink-800">
                    {field.label}
                  </label>
                  <output htmlFor={inputId} className="font-display text-lg font-bold text-brand-600">
                    {field.format(values[field.key])}
                  </output>
                </div>
                <input
                  id={inputId}
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={values[field.key]}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [field.key]: Number(e.target.value) }))
                  }
                  className="mt-3 w-full accent-brand-500"
                />
              </div>
            );
          })}
        </form>

        <div className="flex flex-col justify-center gap-6 bg-gradient-hero p-8 text-white lg:p-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <TrendUpIcon size={14} weight="bold" className="text-brand-300" />
            Estimated annual savings
          </span>
          <p
            className="font-display text-5xl font-extrabold leading-none tracking-tight lg:text-6xl"
            aria-live="polite"
          >
            {currency.format(annualSavings)}
          </p>
          <p className="text-sm text-white/70">
            Based on {values.employees} people saving {values.hours} hours each week. That&rsquo;s time
            your team reinvests in growth — no extra payroll required.
          </p>
          <a
            href={siteConfig.signupUrl}
            className="inline-flex w-fit items-center gap-2 rounded-button bg-white px-6 py-3.5 text-base font-semibold text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-hover"
          >
            Start saving free
            <ArrowRightIcon size={18} weight="bold" />
          </a>
        </div>
      </div>
    </Section>
  );
}
