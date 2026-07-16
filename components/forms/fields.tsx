import type { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBase =
  "w-full rounded-input border border-border bg-surface px-4 py-3 text-base text-foreground shadow-soft transition-colors placeholder:text-gray-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/25";

type FieldWrapProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
};

export function Field({ id, label, required, hint, className = "", children }: FieldWrapProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-display text-sm font-semibold text-ink-800">
        {label}
        {required && (
          <span className="ml-1 text-danger-500" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {hint && (
        <span id={`${id}-hint`} className="mt-1 block text-xs text-muted-foreground">
          {hint}
        </span>
      )}
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function TextInput({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${fieldBase} ${className}`} {...props} />;
}

export function TextArea({ className = "", rows = 4, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={rows} className={`${fieldBase} resize-y ${className}`} {...props} />;
}

export function SelectInput({
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`${fieldBase} appearance-none bg-[length:1.15rem] bg-[right_0.9rem_center] bg-no-repeat pr-11 ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666677' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
