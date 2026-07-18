import { ImageResponse } from "next/og";
import type { Accent } from "@/lib/products";
import { ogIconPaths, type OgIconName } from "@/lib/og-icons";
import { siteConfig } from "@/lib/site-config";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

export type OgTheme = "dark" | "light" | "gradient";
export type OgLayout = "standard" | "centered" | "split";

const accentPairs: Record<Accent, [string, string]> = {
  brand: ["#765af3", "#ce3e98"],
  accent: ["#ce3e98", "#765af3"],
  info: ["#3b82f6", "#765af3"],
  success: ["#21c16b", "#3b82f6"],
  warning: ["#f6b100", "#ce3e98"],
};

export function accentPair(accent: Accent = "brand"): [string, string] {
  return accentPairs[accent];
}

const themeTokens: Record<
  OgTheme,
  { base: string; fg: string; muted: string; grid: string; glow: string }
> = {
  dark: {
    base: "#0f0630",
    fg: "#ffffff",
    muted: "rgba(255,255,255,0.62)",
    grid: "rgba(255,255,255,0.06)",
    glow: "rgba(118,90,243,0.45)",
  },
  gradient: {
    base: "#250e5d",
    fg: "#ffffff",
    muted: "rgba(255,255,255,0.72)",
    grid: "rgba(255,255,255,0.08)",
    glow: "rgba(206,62,152,0.5)",
  },
  light: {
    base: "#fbfbfd",
    fg: "#250e5d",
    muted: "#5b5b6b",
    grid: "rgba(37,14,93,0.05)",
    glow: "rgba(118,90,243,0.28)",
  },
};

export type OgOptions = {
  title: string;
  eyebrow?: string;
  icon?: OgIconName;
  theme?: OgTheme;
  layout?: OgLayout;
  accent?: Accent;
  badge?: string;
  footer?: string;
};

export function createOgImage({
  title,
  eyebrow,
  icon,
  theme = "dark",
  layout = "standard",
  accent = "brand",
  badge,
  footer = siteConfig.tagline,
}: OgOptions) {
  const t = themeTokens[theme];
  const [c1, c2] = accentPair(accent);
  const centered = layout === "centered";
  const split = layout === "split";

  const background =
    theme === "gradient"
      ? `linear-gradient(135deg, #250e5d 0%, #4a2ba0 55%, #765af3 100%)`
      : theme === "light"
        ? t.base
        : `radial-gradient(1100px 620px at 82% -8%, ${t.glow}, transparent 60%), radial-gradient(900px 520px at 0% 108%, rgba(206,62,152,0.28), transparent 55%), ${t.base}`;

  const iconPaths = icon ? ogIconPaths[icon] : undefined;
  const iconTile = (dim: number, radius: number, iconSize: number) =>
    iconPaths ? (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: dim,
          height: dim,
          borderRadius: radius,
          backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})`,
          boxShadow: `0 24px 60px ${c1}55`,
        }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 256 256" fill="#ffffff">
          {iconPaths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
    ) : null;

  const wordmark = (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          display: "flex",
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})`,
        }}
      />
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: t.fg }}>
        Onita
        <span style={{ color: theme === "light" ? "#765af3" : "#b7a4f8", marginLeft: 6 }}>AI</span>
      </div>
    </div>
  );

  const badgePill = badge ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 999,
        border: `1px solid ${theme === "light" ? "rgba(37,14,93,0.14)" : "rgba(255,255,255,0.22)"}`,
        background: theme === "light" ? "rgba(118,90,243,0.08)" : "rgba(255,255,255,0.08)",
        padding: "10px 20px",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: theme === "light" ? "#5235c9" : "#e9e4fd",
      }}
    >
      {badge}
    </div>
  ) : null;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: 72,
          background,
          backgroundColor: t.base,
          color: t.fg,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, ${t.grid} 1px, transparent 1px), linear-gradient(to bottom, ${t.grid} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {wordmark}
          {badgePill}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            position: "relative",
            flexDirection: split ? "row" : "column",
            alignItems: centered ? "center" : split ? "center" : "flex-start",
            justifyContent: "center",
            textAlign: centered ? "center" : "left",
            gap: split ? 56 : 0,
          }}
        >
          {!split && iconTile(112, 28, 60)}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: centered ? "center" : "flex-start",
              maxWidth: split ? 660 : centered ? 960 : 900,
            }}
          >
            {eyebrow && (
              <div
                style={{
                  display: "flex",
                  marginTop: split ? 0 : 34,
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: theme === "light" ? "#6446e3" : "#b7a4f8",
                }}
              >
                {eyebrow}
              </div>
            )}
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: title.length > 46 ? 62 : 76,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: t.fg,
              }}
            >
              {title}
            </div>
          </div>

          {split && iconTile(240, 48, 128)}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            fontSize: 24,
            color: t.muted,
          }}
        >
          <div style={{ display: "flex", fontWeight: 600 }}>onitaai.com</div>
          <div style={{ display: "flex" }}>{footer}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
