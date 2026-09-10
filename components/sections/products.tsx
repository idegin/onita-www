"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeProductSlugs, productMap } from "@/lib/products";

const products = homeProductSlugs.map((slug) => {
  const p = productMap[slug]!;
  return {
    name: p.name,
    tab: p.tab,
    desc: p.subhead,
    points: p.highlights,
    href: `/products/${p.slug}`,
    Icon: p.Icon,
    illustration: `/products/${p.slug}.png`,
    alt: `A 3D illustration of Onita ${p.name} in action`,
  };
});

const INTERVAL = 5000;

export function Products() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const autoplay = !paused && !stopped && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % products.length), INTERVAL);
    return () => clearTimeout(id);
  }, [autoplay, active]);

  function select(index: number) {
    setStopped(true);
    setActive(index);
    tabRefs.current[index]?.focus();
    tabRefs.current[index]?.scrollIntoView({ inline: "center", block: "nearest" });
  }

  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select((index + 1) % products.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select((index - 1 + products.length) % products.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(products.length - 1);
    }
  }

  const current = products[active];

  return (
    <Section
      id="products"
      tone="muted"
      labelledBy="products-heading"
      className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center"
    >
      <SectionHeading
        id="products-heading"
        eyebrow="Products"
        title="Everything your team needs, in one workspace."
        description="Replace a stack of disconnected apps with products that share the same data — and AI teammates that can use every one of them for you."
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          role="tablist"
          aria-label="Onita products"
          className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7"
        >
          {products.map((product, index) => {
            const isActive = index === active;
            return (
              <button
                key={product.name}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                type="button"
                id={`product-tab-${index}`}
                aria-selected={isActive}
                aria-controls="product-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={`group flex flex-col items-center justify-start gap-2.5 rounded-card border px-2 py-4 text-center transition-all ${
                  isActive
                    ? "border-transparent bg-brand-500 text-white shadow-soft"
                    : "border-border bg-surface text-foreground hover:border-brand-200 hover:bg-brand-50/60"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    isActive ? "bg-white/15" : "bg-brand-50 group-hover:bg-white"
                  }`}
                >
                  <product.Icon
                    size={22}
                    weight="fill"
                    aria-hidden="true"
                    className={isActive ? "text-white" : "text-brand-500"}
                  />
                </span>
                <span className="font-display text-xs font-semibold leading-tight sm:text-sm">
                  {product.tab}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${active}`}
          className="mt-6 grid items-center gap-8 lg:grid-cols-5 lg:gap-14"
        >
          <div className="relative overflow-hidden rounded-card-lg border border-border bg-gradient-to-br from-brand-50 via-surface to-surface shadow-hover lg:col-span-3">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-glow opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-glow opacity-50"
            />
            <div className="relative aspect-[3/2]">
              {products.map((product, index) => (
                <Image
                  key={product.name}
                  src={product.illustration}
                  alt={index === active ? product.alt : ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={`object-contain object-center transition-opacity duration-700 ease-out ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
              <current.Icon size={24} weight="fill" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-ink-800 sm:text-3xl">
              {current.name}
            </h3>
            <p className="mt-3 max-w-prose text-base leading-7 text-muted-foreground">
              {current.desc}
            </p>
            <ul className="mt-6 space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckIcon size={14} weight="bold" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={current.href}
              className="mt-8 inline-flex items-center gap-1.5 rounded-button bg-brand-500 px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Explore {current.name}
              <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
