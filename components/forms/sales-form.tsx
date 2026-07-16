"use client";

import { useId, useState } from "react";
import { CheckCircleIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { Field, TextInput, TextArea, SelectInput } from "@/components/forms/fields";

export function SalesForm() {
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
        <h2 className="mt-5 font-display text-2xl font-bold text-ink-800">Message sent</h2>
        <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
          Thanks for reaching out. A member of our sales team will get back to you within one business
          day to talk through your business&apos;s needs.
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
        <Field id={f("phone")} label="Phone">
          <TextInput id={f("phone")} name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </Field>
        <Field id={f("topic")} label="What can we help with?" className="sm:col-span-2">
          <SelectInput id={f("topic")} name="topic" defaultValue="">
            <option value="" disabled>
              Select a topic…
            </option>
            <option>Pricing &amp; plans</option>
            <option>Enterprise &amp; security</option>
            <option>Rolling out to my firm</option>
            <option>Partnerships</option>
            <option>Something else</option>
          </SelectInput>
        </Field>
        <Field id={f("message")} label="How can we help?" required className="sm:col-span-2">
          <TextArea
            id={f("message")}
            name="message"
            required
            rows={5}
            placeholder="Tell us about your business and what you're looking to do…"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-500 px-6 py-3.5 font-display text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-hover sm:w-auto"
      >
        <PaperPlaneTiltIcon size={19} weight="fill" aria-hidden="true" />
        Send message
      </button>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        By submitting, you agree to be contacted about Onita. We&apos;ll never share your details.
      </p>
    </form>
  );
}
