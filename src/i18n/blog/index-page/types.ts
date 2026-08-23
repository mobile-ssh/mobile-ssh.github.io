// Translatable content for the blog index page (/blog/, /<locale>/blog/).
//
// Everything here is human-readable copy. The things that are *not* translatable
// — post slugs/hrefs, machine-readable dates, the "→" and "·" glyphs — live in
// src/components/blog/BlogIndex.astro.

/** Post slugs, newest first. Also the key each locale must supply copy for. */
export type BlogPostSlug = "eleven-hours-over-the-atlantic" | "laptops-are-dead";

export interface BlogIndexPostContent {
  /** Category pill, e.g. "Field report". */
  tag: string;
  /** Human-readable date, e.g. "August 10, 2026". The machine date is in the component. */
  dateLabel: string;
  /** e.g. "8 min read". */
  readingTime: string;
  /** Post title. Plain text: it is also used as the card link's aria-label. */
  title: string;
  /** Teaser paragraph. Prose — may contain inline HTML. */
  excerpt: string;
  /** Call to action; the component appends the "→" glyph. */
  cta: string;
}

export interface BlogIndexContent {
  metaTitle: string;
  metaDescription: string;
  /** Small uppercase label above the heading. */
  eyebrow: string;
  h1: string;
  /** Lead paragraph. Prose — may contain inline HTML. */
  intro: string;
  posts: Record<BlogPostSlug, BlogIndexPostContent>;
}
