import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { en } from "../i18n/dict/en";
import { nonDefaultLocales, type LocaleCode } from "../i18n/locales";
import { getDict } from "../i18n";

const DOCS = [
  "getting-started",
  "terminal",
  "file-transfer",
  "port-forwarding",
  "troubleshooting",
];

const PAGES_DIR = join(import.meta.dirname, "..", "pages");

// Pages that exist for every locale (as Astro routes)
const LOCALE_PAGES = ["", "/features", "/compare", "/docs", "/about", "/privacy"];

// ── helpers ──────────────────────────────────────────────────────────────────

function isTranslated(value: string, enValue: string): boolean {
  // A string counts as translated if it differs from English OR is a known
  // locale-independent value (proper nouns, URLs, etc.).
  const localeIndependent =
    /^https?:\/\//.test(value) ||       // URLs
    /^[0-9\s\-()]+$/.test(value) ||    // pure numbers/punctuation
    ["Mobile SSH", "SSH", "SFTP", "tmux", "Termux", "Termius",
     "Google Play", "Android", "Claude Code", "Codex"].includes(value);
  return localeIndependent || value !== enValue;
}

// ── dict structure tests ──────────────────────────────────────────────────────

describe("locale dicts – structure", () => {
  for (const locale of nonDefaultLocales) {
    it(`${locale}: loads without error`, () => {
      expect(() => getDict(locale)).not.toThrow();
    });

    it(`${locale}: advantages has 9 items`, () => {
      const t = getDict(locale);
      expect(t.home.advantages).toHaveLength(en.home.advantages.length);
    });

    it(`${locale}: features has 13 items`, () => {
      const t = getDict(locale);
      expect(t.home.features).toHaveLength(en.home.features.length);
    });

    it(`${locale}: galleryAlts has ${en.home.galleryAlts.length} items`, () => {
      const t = getDict(locale);
      expect(t.home.galleryAlts).toHaveLength(en.home.galleryAlts.length);
    });

    it(`${locale}: galleryIosAlts has ${en.home.galleryIosAlts.length} items`, () => {
      const t = getDict(locale);
      expect(t.home.galleryIosAlts).toHaveLength(en.home.galleryIosAlts.length);
    });

    it(`${locale}: muxItems has ${en.home.muxItems.length} items, all fields set`, () => {
      const t = getDict(locale);
      // Home.astro pairs these positionally with a fixed list of video files
      // (tmux, herdr, Zellij) — a short or reordered array renders the wrong
      // caption against the wrong take, and an empty alt is a silent a11y hole.
      expect(t.home.muxItems).toHaveLength(en.home.muxItems.length);
      for (const item of t.home.muxItems) {
        expect(item.text.trim()).not.toBe("");
        expect(item.androidAlt.trim()).not.toBe("");
        expect(item.iosAlt.trim()).not.toBe("");
      }
    });

    it(`${locale}: demoItems has ${en.home.demoItems.length} items, all fields set`, () => {
      const t = getDict(locale);
      // Home.astro pairs these positionally with a fixed list of Android-only
      // video files, so a short or reordered array captions the wrong take and
      // an empty androidAlt is a silent a11y hole — the same contract muxItems
      // has, and the same failure it had before it was asserted.
      expect(t.home.demoItems).toHaveLength(en.home.demoItems.length);
      for (const item of t.home.demoItems) {
        expect(item.title.trim()).not.toBe("");
        expect(item.text.trim()).not.toBe("");
        expect(item.androidAlt.trim()).not.toBe("");
      }
    });

    it(`${locale}: demo section heading and intro are set`, () => {
      const t = getDict(locale);
      expect(t.home.demoHead.trim()).not.toBe("");
      expect(t.home.demoIntro.trim()).not.toBe("");
    });

    it(`${locale}: graphics demo copy is set`, () => {
      const t = getDict(locale);
      expect(t.home.graphicsHead.trim()).not.toBe("");
      expect(t.home.graphicsBody.trim()).not.toBe("");
      expect(t.home.graphicsAlt.trim()).not.toBe("");
    });

    it(`${locale}: versionLine keeps {count}/{version}/{iosVersion} placeholders`, () => {
      const t = getDict(locale);
      expect(t.home.versionLine).toContain("{count}");
      expect(t.home.versionLine).toContain("{version}");
      expect(t.home.versionLine).toContain("{iosVersion}");
    });

    it(`${locale}: iOS keys are set (ctaIos, platform labels, videoIosAlt)`, () => {
      const t = getDict(locale);
      expect(t.home.ctaIos).toBeTruthy();
      expect(t.home.platformAndroid).toBeTruthy();
      expect(t.home.platformIos).toBeTruthy();
      expect(t.home.videoIosAlt).toBeTruthy();
    });

    it(`${locale}: about notices include the iOS libraries`, () => {
      const t = getDict(locale);
      expect(t.about.notices.length).toBe(en.about.notices.length);
    });

    it(`${locale}: featureRows has ${en.compare.featureRows.length} rows`, () => {
      const t = getDict(locale);
      expect(t.compare.featureRows).toHaveLength(en.compare.featureRows.length);
    });

    it(`${locale}: featureHeading is set`, () => {
      const t = getDict(locale);
      expect(t.compare.featureHeading).toBeTruthy();
    });

    it(`${locale}: agentAppsRows has ${en.compare.agentAppsRows.length} rows`, () => {
      const t = getDict(locale);
      expect(t.compare.agentAppsRows).toHaveLength(en.compare.agentAppsRows.length);
    });

    it(`${locale}: agentApps heading/intro/note are set`, () => {
      const t = getDict(locale);
      expect(t.compare.agentAppsHeading).toBeTruthy();
      expect(t.compare.agentAppsIntro).toBeTruthy();
      expect(t.compare.agentAppsNote).toBeTruthy();
    });

    it(`${locale}: every agentAppsRow has all app columns filled`, () => {
      const t = getDict(locale);
      for (const row of t.compare.agentAppsRows) {
        for (const col of ["mobile", "onepilot", "happy", "omnara", "chatgpt", "claude"] as const) {
          expect(row[col], `${locale} agentAppsRow "${row.feature}" missing ${col}`).toBeTruthy();
        }
      }
    });

    it(`${locale}: compare rows has ${en.compare.rows.length} rows`, () => {
      const t = getDict(locale);
      expect(t.compare.rows).toHaveLength(en.compare.rows.length);
    });

    it(`${locale}: features.groups has ${en.features.groups.length} groups`, () => {
      const t = getDict(locale);
      expect(t.features.groups).toHaveLength(en.features.groups.length);
    });

    it(`${locale}: each feature group has same item count as English`, () => {
      const t = getDict(locale);
      for (let i = 0; i < en.features.groups.length; i++) {
        expect(t.features.groups[i].items).toHaveLength(
          en.features.groups[i].items.length,
        );
      }
    });

    it(`${locale}: privacy sections has ${en.privacy.sections.length} sections`, () => {
      const t = getDict(locale);
      expect(t.privacy.sections).toHaveLength(en.privacy.sections.length);
    });

    it(`${locale}: docsIndex cards has ${en.docsIndex.cards.length} cards`, () => {
      const t = getDict(locale);
      expect(t.docsIndex.cards).toHaveLength(en.docsIndex.cards.length);
    });
  }
});

// ── translation quality tests ─────────────────────────────────────────────────

describe("locale dicts – translated (not English copy-paste)", () => {
  // Languages that are closely related to English or intentionally share strings
  const CLOSE_TO_EN: LocaleCode[] = ["pcm"]; // Nigerian Pidgin shares many English words

  for (const locale of nonDefaultLocales) {
    if (CLOSE_TO_EN.includes(locale)) continue;

    it(`${locale}: home.h1 translated`, () => {
      const t = getDict(locale);
      // h1 is "Mobile SSH" for all locales — skip
    });

    it(`${locale}: home.intro translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.home.intro, en.home.intro)).toBe(true);
    });

    it(`${locale}: features.intro translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.features.intro, en.features.intro)).toBe(true);
    });

    it(`${locale}: compare.intro translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.compare.intro, en.compare.intro)).toBe(true);
    });

    it(`${locale}: featureHeading translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.compare.featureHeading, en.compare.featureHeading)).toBe(true);
    });

    it(`${locale}: privacy.intro translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.privacy.intro, en.privacy.intro)).toBe(true);
    });

    it(`${locale}: nav.home translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.nav.home, en.nav.home)).toBe(true);
    });

    it(`${locale}: at least 4 of 7 advantages have translated titles`, () => {
      const t = getDict(locale);
      const translated = t.home.advantages.filter((a, i) =>
        isTranslated(a.title, en.home.advantages[i].title),
      );
      expect(translated.length).toBeGreaterThanOrEqual(4);
    });

    it(`${locale}: demo copy is translated`, () => {
      const t = getDict(locale);
      expect(isTranslated(t.home.demoHead, en.home.demoHead)).toBe(true);
      expect(isTranslated(t.home.demoIntro, en.home.demoIntro)).toBe(true);
      for (let i = 0; i < en.home.demoItems.length; i++) {
        expect(
          isTranslated(t.home.demoItems[i].title, en.home.demoItems[i].title),
          `${locale} demoItems[${i}].title is the English string`,
        ).toBe(true);
        expect(
          isTranslated(t.home.demoItems[i].androidAlt, en.home.demoItems[i].androidAlt),
          `${locale} demoItems[${i}].androidAlt is the English string`,
        ).toBe(true);
      }
    });

    it(`${locale}: featureRows have translated categories`, () => {
      const t = getDict(locale);
      // At least the first featureRow's category should differ from English
      const categories = [...new Set(t.compare.featureRows.map(r => r.category))];
      const enCategories = [...new Set(en.compare.featureRows.map(r => r.category))];
      const translatedCount = categories.filter(
        (cat, i) => isTranslated(cat, enCategories[i] ?? cat),
      ).length;
      expect(translatedCount).toBeGreaterThan(0);
    });
  }
});

// ── doc files ─────────────────────────────────────────────────────────────────

describe("doc files – all locales have all docs", () => {
  for (const locale of nonDefaultLocales) {
    for (const doc of DOCS) {
      it(`${locale}/docs/${doc}.md exists`, () => {
        const path = join(PAGES_DIR, locale, "docs", `${doc}.md`);
        expect(existsSync(path), `Missing: src/pages/${locale}/docs/${doc}.md`).toBe(true);
      });
    }
  }
});

// ── doc files – translated content ───────────────────────────────────────────

describe("doc files – not empty and appear translated", () => {
  for (const locale of nonDefaultLocales) {
    it(`${locale}: all docs are non-empty`, () => {
      for (const doc of DOCS) {
        const path = join(PAGES_DIR, locale, "docs", `${doc}.md`);
        const content = readFileSync(path, "utf8");
        expect(content.length, `${locale}/docs/${doc}.md is too short`).toBeGreaterThan(500);
      }
    });

    it(`${locale}: docs use correct layout path (../../../layouts/DocLayout.astro)`, () => {
      for (const doc of DOCS) {
        const path = join(PAGES_DIR, locale, "docs", `${doc}.md`);
        const content = readFileSync(path, "utf8");
        expect(
          content,
          `${locale}/docs/${doc}.md has wrong layout path`,
        ).toContain("../../../layouts/DocLayout.astro");
      }
    });
  }
});

// ── doc files – same sections as English ─────────────────────────────────────

function headings(markdown: string): string[] {
  return markdown.split("\n").filter((line) => /^#{2,3} /.test(line));
}

function frontmatterTitle(markdown: string): string | null {
  const m = markdown.match(/^title:\s*"(.*)"/m);
  return m ? m[1] : null;
}

function firstH1(markdown: string): string | null {
  const m = markdown.match(/^# (.+)$/m);
  return m ? m[1].trim() : null;
}

describe("doc files – section parity with English", () => {
  // A translated page can be over 500 characters, use the right layout, and
  // still be missing whole sections the English page has — Russian was short
  // "Choose a transport" and "Plugins" for months, and nine locales were short
  // somewhere. Nothing failed, because nothing compared the two.
  for (const doc of DOCS) {
    const en = readFileSync(join(PAGES_DIR, "docs", `${doc}.md`), "utf8");
    const enCount = headings(en).length;

    for (const locale of nonDefaultLocales) {
      it(`${locale}/docs/${doc}.md has ${enCount} sections like English`, () => {
        const content = readFileSync(join(PAGES_DIR, locale, "docs", `${doc}.md`), "utf8");
        expect(
          headings(content).length,
          `${locale}/docs/${doc}.md has ${headings(content).length} headings, English has ${enCount}`,
        ).toBe(enCount);
      });

      it(`${locale}/docs/${doc}.md keeps English's heading levels`, () => {
        // Same count is not enough: a ### promoted to ## reorganises the page.
        const content = readFileSync(join(PAGES_DIR, locale, "docs", `${doc}.md`), "utf8");
        const level = (h: string) => h.match(/^#+/)![0].length;
        expect(headings(content).map(level)).toEqual(headings(en).map(level));
      });
    }
  }
});

describe("doc cards name the page they open", () => {
  // The /docs card, the page's frontmatter title and its H1 are three separate
  // strings for one page name. When they drift the link renames itself on
  // click, which is how it shipped in 15 locales.
  for (const locale of nonDefaultLocales) {
    it(`${locale}: every docs card title matches its page`, () => {
      const t = getDict(locale);
      DOCS.forEach((doc, i) => {
        const content = readFileSync(join(PAGES_DIR, locale, "docs", `${doc}.md`), "utf8");
        const card = t.docsIndex.cards[i].title;
        expect(card, `${locale}/${doc}: card vs frontmatter`).toBe(frontmatterTitle(content));
        expect(card, `${locale}/${doc}: card vs H1`).toBe(firstH1(content));
      });
    });
  }
});

// ── page route files ──────────────────────────────────────────────────────────

describe("locale page directories exist", () => {
  for (const locale of nonDefaultLocales) {
    it(`${locale}: page directory exists in src/pages`, () => {
      expect(existsSync(join(PAGES_DIR, locale))).toBe(true);
    });

    it(`${locale}: docs directory exists`, () => {
      expect(existsSync(join(PAGES_DIR, locale, "docs"))).toBe(true);
    });
  }
});
