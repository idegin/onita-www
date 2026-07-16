"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CaretDownIcon, ListIcon, XIcon, CalendarCheckIcon } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/brand-logo";
import { primaryNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-border bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-10">
        <BrandLogo tone={solid ? "dark" : "light"} />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((group) =>
            group.items ? (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? "text-gray-700 hover:bg-gray-100 hover:text-ink-800"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {group.label}
                  <CaretDownIcon
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="invisible absolute left-1/2 top-full z-10 w-[min(560px,90vw)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-card border border-border bg-surface p-3 shadow-hover">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl p-3 transition-colors hover:bg-brand-50"
                      >
                        <span className="block text-sm font-semibold text-ink-800">{item.label}</span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={group.label}
                href={group.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-gray-700 hover:bg-gray-100 hover:text-ink-800"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {group.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={siteConfig.salesUrl}
            className={`rounded-button px-3.5 py-2 text-sm font-semibold transition-colors ${
              solid ? "text-gray-700 hover:text-ink-800" : "text-white/85 hover:text-white"
            }`}
          >
            Talk to sales
          </Link>
          <Link
            href={siteConfig.demoUrl}
            className="inline-flex items-center gap-1.5 rounded-button bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-600 hover:shadow-hover"
          >
            <CalendarCheckIcon size={15} weight="fill" />
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-button lg:hidden ${
            solid ? "text-ink-800" : "text-white"
          }`}
        >
          {mobileOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-surface px-4 pb-10 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((group) => (
              <div key={group.label} className="border-b border-border py-1">
                {group.items ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-3 py-3 text-base font-semibold text-ink-800">
                      {group.label}
                      <CaretDownIcon
                        size={18}
                        weight="bold"
                        className="text-muted-foreground transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="flex flex-col pb-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-xl px-6 py-2.5 text-sm text-gray-700 hover:bg-brand-50"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-3 py-3 text-base font-semibold text-ink-800"
                  >
                    {group.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={siteConfig.demoUrl}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-button bg-brand-500 px-4 py-3.5 text-base font-semibold text-white shadow-soft"
            >
              <CalendarCheckIcon size={17} weight="fill" />
              Book a demo
            </Link>
            <Link
              href={siteConfig.salesUrl}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-button border border-border px-4 py-3.5 text-base font-semibold text-ink-800"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
