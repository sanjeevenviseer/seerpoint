/**
 * Single source of truth for public branding.
 * Page copy follows `northlane-ai.html`.
 */
export const brand = {
  /** Logo text segments — rendered flush as one word */
  wordmarkParts: ["RTS", "Point"],
  /** Index into `wordmarkParts` for an accent segment; use -1 for no accent */
  wordmarkAccentIndex: 1,
  /** Full name for titles, copyright, and SEO */
  fullName: "RTSPoint AI",
  slug: "rtspoint",
  tagline: "Production AI, engineered and run for you.",
  email: "hello@rtspoint.ai",
  location: "Pune, India · working globally",
  responseTime: "Within one business day",
} as const;

export type Brand = typeof brand;

export function wordmarkPlainText(): string {
  return brand.wordmarkParts.join("");
}
