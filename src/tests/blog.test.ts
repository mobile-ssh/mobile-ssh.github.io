import { describe, expect, it } from "vitest";
import { locales, nonDefaultLocales } from "../i18n/locales";
import { getLaptops } from "../i18n/blog/laptops";
import { getFlight } from "../i18n/blog/flight";
import { getSwitchAgents } from "../i18n/blog/switch-agents";
import { getBlogIndex } from "../i18n/blog/index-page";

// The blog posts render from per-locale content modules whose arrays are indexed
// positionally by the components. A locale that drops or reorders an entry does
// not fail to compile — it silently renders the wrong block, or nothing. These
// tests are the structural gate, the same job src/tests/translations.test.ts
// does for the UI dictionary.

const enLaptops = getLaptops("en");
const enFlight = getFlight("en");
const enSwitchAgents = getSwitchAgents("en");
const enIndex = getBlogIndex("en");

// "Blog | Mobile SSH" is genuinely identical in several languages, so metaTitle
// is a bad translation signal. These fields are prose and must differ.
const PROSE_MUST_DIFFER = ["pcm"];

describe("blog content parity", () => {
  for (const locale of nonDefaultLocales) {
    it(`${locale}: has its own content for every post and the index`, () => {
      expect(getLaptops(locale)).not.toBe(enLaptops);
      expect(getFlight(locale)).not.toBe(enFlight);
      expect(getSwitchAgents(locale)).not.toBe(enSwitchAgents);
      expect(getBlogIndex(locale)).not.toBe(enIndex);
    });

    it(`${locale}: switch-agents post matches the English shape`, () => {
      const t = getSwitchAgents(locale);
      expect(t.body).toHaveLength(enSwitchAgents.body.length);
      expect(t.body.map((b) => b.kind)).toEqual(enSwitchAgents.body.map((b) => b.kind));
      expect(t.limits.items).toHaveLength(enSwitchAgents.limits.items.length);
      expect(t.carry.rows).toHaveLength(enSwitchAgents.carry.rows.length);
      expect(t.carry.rows.map((row) => row.shared)).toEqual(
        enSwitchAgents.carry.rows.map((row) => row.shared),
      );
      expect(t.handoff.steps).toHaveLength(enSwitchAgents.handoff.steps.length);
      expect(t.cta.tags).toHaveLength(enSwitchAgents.cta.tags.length);
    });

    it(`${locale}: switch-agents keeps literal commands and placeholders`, () => {
      const t = getSwitchAgents(locale);
      expect(t.body.some((block) => "html" in block && block.html.includes("/usage-credits"))).toBe(true);
      expect(t.handoff.steps[0].body).toContain("git status --short");
      expect(t.cta.note).toContain("{playUrl}");
    });

    it(`${locale}: laptops post matches the English shape`, () => {
      const t = getLaptops(locale);
      expect(t.body).toHaveLength(enLaptops.body.length);
      expect(t.body.map((b) => b.kind)).toEqual(enLaptops.body.map((b) => b.kind));
      expect(t.ledger.entries).toHaveLength(enLaptops.ledger.entries.length);
      // Years may be rendered in the locale's own numerals (bn uses ১৯৭৪), so
      // assert they are present and that the "still running" flags line up
      // positionally, not that the digits match English.
      expect(t.ledger.entries.every((e) => e.year.trim().length > 0)).toBe(true);
      expect(t.ledger.entries.map((e) => e.on)).toEqual(
        enLaptops.ledger.entries.map((e) => e.on),
      );
      expect(t.estate).toHaveLength(enLaptops.estate.length);
      expect(t.cta.tags).toHaveLength(enLaptops.cta.tags.length);
    });

    it(`${locale}: laptops CTA keeps the {playUrl} placeholder`, () => {
      expect(getLaptops(locale).cta.note).toContain("{playUrl}");
    });

    it(`${locale}: flight post carries a translated masthead headline`, () => {
      // The split-flap tiles stay English in every locale, so this string is
      // what a reader actually sees as the headline.
      const m = getFlight(locale).masthead;
      expect(m.headlineTranslated, "headlineTranslated is required off English").toBeTruthy();
      expect(m.headlineTranslated).not.toBe(enFlight.masthead.headlineTranslated);
    });

    it(`${locale}: blog index covers every post`, () => {
      const t = getBlogIndex(locale);
      expect(Object.keys(t.posts).sort()).toEqual(Object.keys(enIndex.posts).sort());
      for (const slug of Object.keys(enIndex.posts) as (keyof typeof enIndex.posts)[]) {
        const post = t.posts[slug];
        expect(post.title.trim(), `${slug} title`).not.toBe("");
        expect(post.excerpt.trim(), `${slug} excerpt`).not.toBe("");
        expect(post.cta.trim(), `${slug} cta`).not.toBe("");
      }
    });

    if (!PROSE_MUST_DIFFER.includes(locale)) {
      it(`${locale}: blog index intro is translated`, () => {
        expect(getBlogIndex(locale).intro).not.toBe(enIndex.intro);
      });
    }
  }

  it("every locale resolves, including English", () => {
    for (const { code } of locales) {
      expect(getLaptops(code).body.length).toBeGreaterThan(0);
      expect(getFlight(code).masthead.headline).toBeTruthy();
      expect(getSwitchAgents(code).body.length).toBeGreaterThan(0);
      expect(Object.keys(getBlogIndex(code).posts).length).toBeGreaterThan(0);
    }
  });
});
