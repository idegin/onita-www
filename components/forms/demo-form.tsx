"use client";

import { useId, useState } from "react";
import { CheckCircleIcon, CalendarCheckIcon } from "@phosphor-icons/react";
import { Field, TextInput, TextArea, SelectInput } from "@/components/forms/fields";

export function DemoForm() {
  const base = useId();
  const [submitted, setSubmitted] = useState(false);
  const f = (name: string) => `${base}-${name}`;

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-card-lg border border-success-500/30 bg-success-50 px-6 py-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-500 text-white">
          <CheckCircleIcon size={30} weight="fill" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-ink-800">Request received</h2>
        <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
          Thanks — our team will reach out within one business day to schedule your demo and learn how
          your firm works. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-card-lg border border-border bg-surface p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={f("name")} label="Full name" required>
          <TextInput id={f("name")} name="name" autoComplete="name" required placeholder="Jane Doe" />
        </Field>
        <Field id={f("email")} label="Work email" required>
          <TextInput
            id={f("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@yourfirm.com"
          />
        </Field>
        <Field id={f("company")} label="Company" required>
          <TextInput
            id={f("company")}
            name="company"
            autoComplete="organization"
            required
            placeholder="Your firm"
          />
        </Field>
        <Field id={f("firmType")} label="Firm type" required>
          <SelectInput id={f("firmType")} name="firmType" required defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            <option>Consulting firm</option>
            <option>Law firm</option>
            <option>Agency</option>
            <option>Other professional services</option>
          </SelectInput>
        </Field>
        <Field id={f("size")} label="Team size" className="sm:col-span-2">
          <SelectInput id={f("size")} name="size" defaultValue="">
            <option value="" disabled>
              Select a range…
            </option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>200+</option>
          </SelectInput>
        </Field>
        <Field
          id={f("goal")}
          label="What would you like your AI workforce to do?"
          hint="A sentence or two is plenty — e.g. proposals, contract review, campaign reporting."
          className="sm:col-span-2"
        >
          <TextArea
            id={f("goal")}
            name="goal"
            aria-describedby={`${f("goal")}-hint`}
            placeholder="We spend hours every week on…"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 font-display text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover sm:w-auto"
      >
        <CalendarCheckIcon size={20} weight="fill" aria-hidden="true" />
        Book my demo
      </button>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        By submitting, you agree to be contacted about Onita. We&apos;ll never share your details.
      </p>
    </form>
  );
}
