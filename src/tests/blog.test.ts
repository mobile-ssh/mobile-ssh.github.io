import { describe, expect, it } from "vitest";
import { locales, nonDefaultLocales } from "../i18n/locales";
import { getLaptops } from "../i18n/blog/laptops";
import { getFlight } from "../i18n/blog/flight";
import { getSwitchAgents } from "../i18n/blog/switch-agents";
import { getBlogIndex } from "../i18n/blog/index-page";
import { getGoOutside } from "../i18n/blog/go-outside";
import { getYourServer } from "../i18n/blog/your-server";
import { defineYourServer } from "../i18n/blog/your-server/define";

// The blog posts render from per-locale content modules whose arrays are indexed
// positionally by the components. A locale that drops or reorders an entry does
// not fail to compile — it silently renders the wrong block, or nothing. These
// tests are the structural gate, the same job src/tests/translations.test.ts
// does for the UI dictionary.

const enLaptops = getLaptops("en");
const enFlight = getFlight("en");
const enSwitchAgents = getSwitchAgents("en");
const enIndex = getBlogIndex("en");
const enGoOutside = getGoOutside("en");
const enYourServer = getYourServer("en");

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
      expect(getGoOutside(locale)).not.toBe(enGoOutside);
      expect(getYourServer(locale)).not.toBe(enYourServer);
    });

    it(`${locale}: go-outside post matches the English shape`, () => {
      const t = getGoOutside(locale);
      expect(t.body).toHaveLength(enGoOutside.body.length);
      expect(t.body.map((b) => b.kind)).toEqual(enGoOutside.body.map((b) => b.kind));
      expect(t.checklist.steps).toHaveLength(enGoOutside.checklist.steps.length);
      expect(t.cta.tags).toHaveLength(enGoOutside.cta.tags.length);
      // The board is read positionally by the component and its rows carry
      // session names and booleans that are not translatable — a reordered or
      // relabelled row would render an amber "needs you" against the wrong one.
      expect(t.board.rows.map((r) => r.name)).toEqual(enGoOutside.board.rows.map((r) => r.name));
      expect(t.board.rows.map((r) => r.swell)).toEqual(enGoOutside.board.rows.map((r) => r.swell));
      expect(t.board.rows.map((r) => r.needsYou)).toEqual(
        enGoOutside.board.rows.map((r) => r.needsYou),
      );
      // Same for the honest-limits table: the yes/no column is a factual claim
      // about the platforms, not something a translator should be able to flip.
      expect(t.truth.rows).toHaveLength(enGoOutside.truth.rows.length);
      expect(t.truth.rows.map((r) => r.survives)).toEqual(
        enGoOutside.truth.rows.map((r) => r.survives),
      );
    });

    it(`${locale}: go-outside keeps its placeholder, clock and Hawaiian`, () => {
      const t = getGoOutside(locale);
      expect(t.cta.note).toContain("{playUrl}");
      expect(t.board.timeLabel).toBe(enGoOutside.board.timeLabel);
      // "pau hana" is kept in Hawaiian in every locale; the gloss beside it is
      // what gets translated. If a translator localised the phrase itself the
      // sentence still reads, which is exactly why it needs asserting.
      const body = t.body.map((b) => ("html" in b ? b.html : "")).join(" ").toLowerCase();
      expect(body).toContain("pau hana");
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
      it(`${locale}: ownership article prose is translated`, () => {
        const t = getYourServer(locale);
        expect(t.title).not.toBe(enYourServer.title);
        expect(t.standfirst).not.toBe(enYourServer.standfirst);
        t.body.forEach((block, i) => {
          const source = enYourServer.body[i];
          if ("html" in block && "html" in source) {
            expect(block.html, `body block ${i}`).not.toBe(source.html);
          }
        });
        expect(getBlogIndex(locale).posts["your-server-your-rules"].excerpt)
          .not.toBe(enIndex.posts["your-server-your-rules"].excerpt);
      });

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
      expect(getGoOutside(code).body.length).toBeGreaterThan(0);
      expect(getYourServer(code).body.length).toBeGreaterThan(0);
      expect(Object.keys(getBlogIndex(code).posts).length).toBeGreaterThan(0);
    }
  });
});

describe("ownership article", () => {
  it("includes the comparison and checklist once in the shared article structure", () => {
    expect(enYourServer.body.filter(block => block.kind === "comparison")).toHaveLength(1);
    expect(enYourServer.body.filter(block => block.kind === "checklist")).toHaveLength(1);
  });

  // Check all fields, including figure/table copy and the source labels: those
  // are just as visible as prose and must never silently disappear in a locale.
  function expectComplete(actual: unknown, source: unknown, path = "post") {
    if (typeof source === "string") {
      expect(typeof actual, path).toBe("string");
      expect((actual as string).trim().length, path).toBeGreaterThan(0);
    } else if (Array.isArray(source)) {
      expect(Array.isArray(actual), path).toBe(true);
      expect(actual, path).toHaveLength(source.length);
      source.forEach((item, i) => expectComplete((actual as unknown[])[i], item, `${path}[${i}]`));
    } else if (source && typeof source === "object") {
      expect(actual, path).toBeTruthy();
      expect(Object.keys(actual as object).sort(), path).toEqual(Object.keys(source).sort());
      for (const [key, value] of Object.entries(source)) {
        expectComplete((actual as Record<string, unknown>)[key], value, `${path}.${key}`);
      }
    }
  }

  for (const { code } of locales) {
    it(`${code}: keeps complete content and hosting model identities`, () => {
      const t = getYourServer(code);
      expectComplete(t, enYourServer);
      expect(t.body.map(block => block.kind)).toEqual(enYourServer.body.map(block => block.kind));
      expect(t.figure.hosts.map(host => host.id)).toEqual(["owned", "cloud"]);
      expect(t.comparison.models.map(model => model.id)).toEqual(["managed", "cloud", "owned"]);
      expect(t.comparison.rows.map(row => row.id)).toEqual([
        "hardware", "admin", "storage", "access", "portability", "maintenance",
      ]);
      expect(t.checklist.steps).toHaveLength(6);
    });

    it(`${code}: keeps citations and product names in the article`, () => {
      const t = getYourServer(code);
      const body = t.body.map(block => "html" in block ? block.html : "").join(" ");
      expect([...body.matchAll(/href="(#[^"]+)"/g)].map(match => match[1])).toEqual([
        "#source-cloud", "#source-claude", "#source-gemini",
      ]);
      for (const product of ["Mobile SSH", "Codex", "Claude Code", "Gemini CLI", "tmux", "herdr", "Zellij"]) {
        expect(body).toContain(product);
      }
    });

    it(`${code}: card names the article it opens`, () => {
      const t = getYourServer(code);
      const card = getBlogIndex(code).posts["your-server-your-rules"];
      expect(card.title).toBe(t.title);
      expect(card.tag).toBe(t.eyebrow);
      expect(card.dateLabel).toBe(t.date);
      expect(card.readingTime).toBe(t.readingTime);
    });
  }

  it("rejects incomplete body translations instead of shifting later paragraphs", () => {
    const body = enYourServer.body.flatMap(block => "html" in block ? [block.html] : []);
    expect(() => defineYourServer({ ...enYourServer, body: body.slice(1) })).toThrow(/expected 22/);
  });
});
