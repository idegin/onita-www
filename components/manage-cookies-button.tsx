"use client";

export function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("onita:manage-cookies"))}
      className="text-sm text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
    >
      Manage cookies
    </button>
  );
}
