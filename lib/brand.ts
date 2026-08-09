/**
 * Single source of truth for public branding.
 *
 * Wordmark: set `wordmarkParts` and which segment gets the gradient (`wordmarkAccentIndex`).
 * Page copy, SEO, and copyright use `fullName`.
 */
export const brand = {
  /** Logo text segments — rendered flush as one word (e.g. Gen + AI + Seer → GenAISeer) */
  wordmarkParts: ["Gen", "AI", "Seer"],
  /** Index into `wordmarkParts` for the gradient segment; use -1 for no accent */
  wordmarkAccentIndex: 2,
  /** Full name for titles, copyright, hero (keep casing as you want it displayed) */
  fullName: "GenAISeer",
  slug: "genaiseer",
  tagline: "AI-first software engineering",
} as const;

export type Brand = typeof brand;

export function wordmarkPlainText(): string {
  return brand.wordmarkParts.join("");
}
