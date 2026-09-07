import { describe, expect, it } from "vitest";
import { matchLocale, parseAcceptLanguage } from "../i18n/match";
import { locales, type LocaleCode } from "../i18n/locales";

// matchLocale decides which of the twenty locales a reader is offered, and it
// fails silently: every wrong answer is a real language code, so the reader
// gets a page in the wrong language and nothing throws. The three languages
// whose site code is not their BCP 47 prefix — arz, yue, pcm — are where that
// happens, in both directions, so both directions are asserted here.
//
// See AGENTS.md ("Locale codes differ from the apps") for the policy these
// tests encode.

const CODES = locales.map((l) => l.code);

describe("matchLocale – every site locale resolves to itself", () => {
  for (const code of CODES) {
    it(`${code} and its region-qualified forms resolve to ${code}`, () => {
      expect(matchLocale([code])).toBe(code);
      expect(matchLocale([code.toUpperCase()])).toBe(code);
      expect(matchLocale([`${code}-XX`])).toBe(code);
      expect(matchLocale([`${code}-Latn-XX`])).toBe(code);
    });
  }
});

describe("matchLocale – languages whose site code is not their prefix", () => {
  // yue-Hant-HK is the maximized form of yue (Intl.Locale("yue").maximize())
  // and what Apple platforms report for a Cantonese preference. It reached zh
  // before this was guarded.
  it.each([
    "yue",
    "YUE",
    "zh-yue",
    "zh-yue-HK",
    "yue-HK",
    "yue-CN",
    "yue-Hant",
    "yue-Hant-HK",
    "yue-Hans-CN",
  ])("%s resolves to yue, not zh", (tag) => {
    expect(matchLocale([tag])).toBe("yue");
  });

  it.each(["arz", "arz-EG", "arz-Arab-EG"])("%s resolves to arz", (tag) => {
    expect(matchLocale([tag])).toBe("arz");
  });

  it.each(["pcm", "pcm-NG", "pcm-Latn-NG"])("%s resolves to pcm", (tag) => {
    expect(matchLocale([tag])).toBe("pcm");
  });

  // Indonesian's ISO 639-1 code was `in` until 1989. Java emits `in_ID` and
  // older Android WebView `in-ID`; the bare subtag is the rare form.
  it.each(["in", "in-ID", "in_ID", "IN-id"])("%s resolves to id", (tag) => {
    expect(matchLocale([tag])).toBe("id");
  });
});

describe("matchLocale – the mappings we deliberately refuse", () => {
  // An ar-EG reader is asking for Arabic in Egypt and reads Modern Standard
  // Arabic. arz is a different language, not a region of this one.
  it.each(["ar-EG", "ar-Arab-EG", "ar"])("%s stays ar", (tag) => {
    expect(matchLocale([tag])).toBe("ar");
  });

  // zh-HK is Chinese as written in Hong Kong, which is not a request for
  // Cantonese.
  it.each(["zh-HK", "zh-Hant-HK", "zh-Hant", "zh-Hans-CN"])("%s stays zh", (tag) => {
    expect(matchLocale([tag])).toBe("zh");
  });

  // en-NG is English as spoken in Nigeria.
  it.each(["en-NG", "en-GB", "en-US"])("%s stays en", (tag) => {
    expect(matchLocale([tag])).toBe("en");
  });

  it("holds when the refused pair arrives in the other order", () => {
    // The forward cases above would also pass if the first tag simply always
    // won. These pin that the refusal is about the tag, not its position.
    expect(matchLocale(["zh-Hant-HK", "yue-Hant-HK"])).toBe("zh");
    expect(matchLocale(["ar-EG", "arz"])).toBe("ar");
    expect(matchLocale(["en-NG", "pcm"])).toBe("en");
  });
});

describe("matchLocale – tags carrying script, region and extensions", () => {
  // A real device sends more than two subtags. This matters more than it looks:
  // the extlang branch reads the second subtag, and six site locales are
  // languages of India, whose region subtag is `IN` — one character off the
  // `in` alias sitting in the same table.
  it.each([
    ["hi-IN-u-nu-deva", "hi"],
    ["ta-IN-u-nu-tamldec", "ta"],
    ["te-IN-u-ca-gregory", "te"],
    ["bn-IN-u-nu-beng", "bn"],
    ["mr-IN-x-foo", "mr"],
    ["ur-IN-u-nu-latn", "ur"],
    ["en-IN-u-nu-latn", "en"],
    ["ja-JP-u-ca-japanese", "ja"],
    ["de-DE-u-co-phonebk", "de"],
    ["pt-BR-u-nu-latn", "pt"],
    ["en-US-u-va-posix", "en"],
    ["zh-Hant-HK-u-ca-chinese", "zh"],
    ["yue-Hant-HK-u-ca-chinese", "yue"],
    ["in-ID-u-nu-latn", "id"],
    ["in-Latn-ID", "id"],
  ])("%s resolves to %s", (tag, expected) => {
    expect(matchLocale([tag])).toBe(expected);
  });
});

describe("matchLocale – preference order", () => {
  it("takes the first tag that resolves, not the first tag", () => {
    expect(matchLocale(["xx", "zz-ZZ", "fr-CA", "de"])).toBe("fr");
  });

  it("prefers a named language over the regional English behind it", () => {
    // A Nigerian Pidgin device sends pcm-NG ahead of en-NG. Reading only the
    // second is how that reader silently got English.
    expect(matchLocale(["pcm-NG", "en-NG", "en-US"])).toBe("pcm");
    expect(matchLocale(["yue-Hant-HK", "zh-Hant-HK", "en-US"])).toBe("yue");
    expect(matchLocale(["in-ID", "en-US"])).toBe("id");
  });

  it("skips a wildcard or blank entry rather than stopping at it", () => {
    // `*` is the tail of most Accept-Language headers. Treating it as the end
    // of the list, rather than as one unusable entry, would throw away every
    // preference behind it.
    expect(matchLocale(["*", "de"])).toBe("de");
    expect(matchLocale(["", "fr"])).toBe("fr");
    expect(matchLocale(["   ", "ta"])).toBe("ta");
    expect(matchLocale(["*", "xx", "pt-BR"])).toBe("pt");
    expect(matchLocale(parseAcceptLanguage("*, de;q=0.9"))).toBe("de");
  });

  it("returns null rather than guessing when nothing matches", () => {
    expect(matchLocale([])).toBeNull();
    expect(matchLocale(["xx", "zz-ZZ"])).toBeNull();
    expect(matchLocale(["*"])).toBeNull();
    expect(matchLocale([""])).toBeNull();
    expect(matchLocale(["   "])).toBeNull();
  });

  it("normalises case, underscores and surrounding space", () => {
    expect(matchLocale(["en_GB"])).toBe("en");
    expect(matchLocale(["  FR  "])).toBe("fr");
    expect(matchLocale(["PT-br"])).toBe("pt");
    expect(matchLocale(["ZH_hans_CN"])).toBe("zh");
  });
});

describe("matchLocale – never returns a value that is not a locale", () => {
  // EXACT and localeMap are plain objects. Before this was guarded,
  // matchLocale(["constructor"]) returned the Object constructor — a function,
  // from a signature typed LocaleCode | null — and parseAcceptLanguage feeds
  // this function from a client-controlled header.
  it.each([
    "constructor",
    "constructor-US",
    "__proto__",
    "toString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "prototype",
  ])("%s is not a language and resolves to null", (tag) => {
    expect(matchLocale([tag])).toBeNull();
  });

  it("returns a real locale code or null for any input", () => {
    const hostile = [
      "",
      " ",
      "*",
      "-",
      "--",
      "-en",
      "en-",
      "a".repeat(200),
      "constructor",
      "__proto__",
      "0",
      "zz-ZZ-zz-ZZ",
      "en;q=0.5",
    ];
    for (const tag of hostile) {
      const result = matchLocale([tag]);
      expect(
        result === null || CODES.includes(result as LocaleCode),
        `matchLocale([${JSON.stringify(tag)}]) returned ${String(result)} (${typeof result})`,
      ).toBe(true);
    }
  });
});

describe("parseAcceptLanguage", () => {
  it("orders by q value, highest first", () => {
    expect(parseAcceptLanguage("fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5")).toEqual([
      "fr-CH",
      "fr",
      "en",
      "de",
      "*",
    ]);
  });

  it("treats the q parameter name as case-insensitive (RFC 9110 §5.6.6)", () => {
    // Read as q=1 these invert the order the sender asked for, because the
    // sort is stable and every weight collapses to the same value.
    expect(parseAcceptLanguage("en;Q=0.5, de")).toEqual(["de", "en"]);
    expect(parseAcceptLanguage("en;Q=0.3, de;Q=0.9, fr;Q=0.6")).toEqual(["de", "fr", "en"]);
    expect(matchLocale(parseAcceptLanguage("en;Q=0.3, de;Q=0.9"))).toBe("de");
  });

  it("drops q=0, which means 'not acceptable'", () => {
    expect(parseAcceptLanguage("es;q=0, fr;q=0.1")).toEqual(["fr"]);
    expect(parseAcceptLanguage("es;Q=0, fr;q=0.1")).toEqual(["fr"]);
  });

  it("keeps source order for equal weights", () => {
    expect(parseAcceptLanguage("de, fr, en")).toEqual(["de", "fr", "en"]);
    expect(parseAcceptLanguage("de;q=0.5, fr;q=0.5, en;q=0.5")).toEqual(["de", "fr", "en"]);
  });

  it("handles empty and whitespace-only headers", () => {
    expect(parseAcceptLanguage("")).toEqual([]);
    expect(parseAcceptLanguage("   ")).toEqual([]);
    expect(parseAcceptLanguage(",,")).toEqual([]);
  });

  it("feeds matchLocale end to end", () => {
    expect(matchLocale(parseAcceptLanguage("pt-BR,pt;q=0.9,en;q=0.8"))).toBe("pt");
    expect(matchLocale(parseAcceptLanguage("yue-Hant-HK,zh-Hant-HK;q=0.9"))).toBe("yue");
    expect(matchLocale(parseAcceptLanguage("ar-EG,ar;q=0.9"))).toBe("ar");
    expect(matchLocale(parseAcceptLanguage("constructor;q=1"))).toBeNull();
    expect(matchLocale(parseAcceptLanguage("xx-XX"))).toBeNull();
  });
});
