import { describe, expect, it } from "vitest";
import { suggestions } from "../i18n/suggest";
import { locales, type LocaleCode } from "../i18n/locales";

// The suggestion banner is the one set of translated strings on the site that
// is not part of Dict, so src/tests/translations.test.ts does not see it. It
// needs its own gate for the same reason: a locale left in English compiles,
// builds, and ships.
//
// It is also the only copy shown to a reader who is NOT on that locale's page —
// someone whose browser asked for Chinese, looking at the English page. If it
// renders in the wrong language it is useless to the only person who ever sees
// it, and there is no page around it to make the mistake obvious.

const CODES = locales.map((l) => l.code);

// The script each locale is actually written in. A string in the wrong script
// is either untranslated or pasted from the wrong locale.
const SCRIPT: Record<LocaleCode, RegExp> = {
  en: /\p{Script=Latin}/u,
  es: /\p{Script=Latin}/u,
  fr: /\p{Script=Latin}/u,
  pt: /\p{Script=Latin}/u,
  de: /\p{Script=Latin}/u,
  id: /\p{Script=Latin}/u,
  tr: /\p{Script=Latin}/u,
  pcm: /\p{Script=Latin}/u,
  zh: /\p{Script=Han}/u,
  yue: /\p{Script=Han}/u,
  ja: /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u,
  hi: /\p{Script=Devanagari}/u,
  mr: /\p{Script=Devanagari}/u,
  bn: /\p{Script=Bengali}/u,
  te: /\p{Script=Telugu}/u,
  ta: /\p{Script=Tamil}/u,
  ru: /\p{Script=Cyrillic}/u,
  ar: /\p{Script=Arabic}/u,
  arz: /\p{Script=Arabic}/u,
  ur: /\p{Script=Arabic}/u,
};

const LATIN_SCRIPT_LOCALES: LocaleCode[] = ["en", "es", "fr", "pt", "de", "id", "tr", "pcm"];

// What the banner has to say to do its job: the name of the language it is
// offering, in that language. This is the only check with teeth for the
// Latin-script locales, where "is it in the right script?" is answered yes by
// any English sentence, and it is also the only one that catches a row pasted
// into a same-script neighbour — zh and yue, hi and mr, ar and arz all pass a
// script test for each other's text.
//
// Stems rather than whole words, because these languages inflect: Russian
// writes на русском, Tamil drops the virama under suffixation (தமிழ் → தமிழில்).
// `id` needs the whole "bahasa Indonesia" because "Indonesia" is a substring of
// the English word "Indonesian", which would let an untranslated row pass.
const ENDONYM: Record<LocaleCode, string> = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "español",
  fr: "français",
  ar: "العربية",
  bn: "বাংলা",
  pt: "português",
  ru: "русск",
  ur: "اردو",
  id: "bahasa Indonesia",
  de: "Deutsch",
  ja: "日本語",
  pcm: "Naijá",
  arz: "مصري",
  mr: "मराठी",
  te: "తెలుగు",
  tr: "Türkçe",
  ta: "தமிழ",
  yue: "粵語",
};

// pcm is English-lexified, so sharing vocabulary with English is correct —
// the same exemption src/tests/translations.test.ts makes.
const SHARES_ENGLISH_WORDS: LocaleCode[] = ["pcm"];

// Not a typographic measurement — scripts differ far too much in how much a
// character is worth for that. This is a guard against someone answering the
// banner's one line with a paragraph.
const MAX = { text: 64, cta: 36, dismiss: 20 };

const FIELDS = ["text", "cta", "dismiss"] as const;

describe("suggestion banner – covers every locale", () => {
  it("has exactly one entry per locale, and no others", () => {
    expect(Object.keys(suggestions).sort()).toEqual([...CODES].sort());
  });

  for (const code of CODES) {
    it(`${code}: every field is set`, () => {
      const s = suggestions[code];
      for (const field of FIELDS) {
        expect(s[field].trim(), `${code}.${field} is empty`).not.toBe("");
      }
    });

    it(`${code}: stays short enough for one line`, () => {
      const s = suggestions[code];
      for (const field of FIELDS) {
        expect(
          s[field].length,
          `${code}.${field} is ${s[field].length} chars: ${s[field]}`,
        ).toBeLessThanOrEqual(MAX[field]);
      }
    });
  }
});

describe("suggestion banner – written in the reader's language", () => {
  for (const code of CODES) {
    it(`${code}: is written in the right script`, () => {
      const s = suggestions[code];
      for (const field of FIELDS) {
        expect(
          SCRIPT[code].test(s[field]),
          `${code}.${field} is not in the expected script: ${s[field]}`,
        ).toBe(true);
      }
    });

    if (!LATIN_SCRIPT_LOCALES.includes(code)) {
      it(`${code}: carries no Latin text`, () => {
        // None of these banners name a product, so any Latin letter here is
        // English that was never translated.
        const s = suggestions[code];
        for (const field of FIELDS) {
          expect(
            /\p{Script=Latin}/u.test(s[field]),
            `${code}.${field} contains Latin letters: ${s[field]}`,
          ).toBe(false);
        }
      });
    }

    it(`${code}: names its own language in its own language`, () => {
      const s = suggestions[code];
      const endonym = ENDONYM[code].toLowerCase();
      for (const field of ["text", "cta"] as const) {
        expect(
          s[field].toLowerCase().includes(endonym),
          `${code}.${field} never says ${ENDONYM[code]}: ${s[field]}`,
        ).toBe(true);
      }
    });

    it(`${code}: does not name another locale's language`, () => {
      // A row pasted into the wrong locale keeps the wrong endonym, and for
      // same-script neighbours that is the only trace it leaves.
      const s = suggestions[code];
      const others = CODES.filter(
        (other) => other !== code && !ENDONYM[code].toLowerCase().includes(ENDONYM[other].toLowerCase()),
      );
      for (const other of others) {
        expect(
          s.cta.toLowerCase().includes(ENDONYM[other].toLowerCase()),
          `${code}.cta says ${ENDONYM[other]}, which is ${other}'s language: ${s.cta}`,
        ).toBe(false);
      }
    });

    if (code !== "en" && !SHARES_ENGLISH_WORDS.includes(code)) {
      it(`${code}: is not the English string`, () => {
        for (const field of FIELDS) {
          expect(suggestions[code][field], `${code}.${field}`).not.toBe(suggestions.en[field]);
        }
      });
    }
  }

  it("no two locales share a string", () => {
    // Twenty near-identical sentences are easy to paste into the wrong row.
    for (const field of FIELDS) {
      const byValue = new Map<string, LocaleCode[]>();
      for (const code of CODES) {
        const value = suggestions[code][field];
        byValue.set(value, [...(byValue.get(value) ?? []), code]);
      }
      const shared = [...byValue.entries()].filter(([, codes]) => codes.length > 1);
      expect(shared.map(([value, codes]) => `${field} ${JSON.stringify(value)}: ${codes}`)).toEqual(
        [],
      );
    }
  });
});
