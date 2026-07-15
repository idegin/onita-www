import Link from "next/link";
import {
  LinkedinLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
  GithubLogoIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/brand-logo";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedinLogoIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: YoutubeLogoIcon },
  { label: "X", href: siteConfig.socials.x, Icon: XLogoIcon },
  { label: "GitHub", href: siteConfig.socials.github, Icon: GithubLogoIcon },
];

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <BrandLogo tone="light" />
            <p className="mt-5 text-sm leading-6 text-white/60">{siteConfig.description}</p>

            <address className="mt-6 flex flex-col gap-2.5 text-sm not-italic text-white/60">
              <a
                href={`mailto:${siteConfig.contact.generalEmail}`}
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <EnvelopeSimpleIcon size={17} weight="bold" className="text-brand-300" />
                {siteConfig.contact.generalEmail}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <PhoneIcon size={17} weight="bold" className="text-brand-300" />
                {siteConfig.contact.phone}
              </a>
              <span className="inline-flex items-start gap-2.5">
                <MapPinIcon size={17} weight="bold" className="mt-0.5 shrink-0 text-brand-300" />
                {siteConfig.address.full}
              </span>
            </address>

            <form className="mt-7" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Get the latest on the AI workforce
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-input border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex items-center justify-center rounded-input bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  <ArrowRightIcon size={17} weight="bold" />
                </button>
              </div>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={19} weight="fill" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
