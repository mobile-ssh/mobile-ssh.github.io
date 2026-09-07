import { localeMap, type LocaleCode } from "./locales";

/**
 * Pick the best site locale for a browser's language preferences.
 *
 * `navigator.languages` is already in priority order, so the first tag that
 * resolves wins. Returns null when nothing matches — the caller then leaves the
 * reader where they are rather than guessing.
 *
 * The site's locale codes are not BCP 47 tags and the gap is not cosmetic, so
 * three languages carry an explicit alias table. See AGENTS.md ("Locale codes
 * differ from the apps") for why these are the hard ones:
 *
 *   - `arz` is Egyptian Arabic, a distinct language, NOT the Egypt region of
 *     Arabic. An `ar-EG` browser is asking for Arabic in Egypt, and its reader
 *     reads Modern Standard Arabic; sending them to `arz` is a different
 *     language than the one they asked for. `arz` is matched only when named.
 *   - `yue` is Cantonese, likewise its own language. `zh-HK` is Chinese as
 *     written in Hong Kong, which is not the same request. Only a tag whose own
 *     language subtag is `yue` (or the legacy extlang `zh-yue`) resolves to it.
 *   - `pcm` is Nigerian Pidgin, which browsers rarely send. `en-NG` is English
 *     as spoken in Nigeria and stays English.
 *
 * That policy needs no guard, because it already falls out of the language
 * subtag: `ar-EG`, `zh-HK` and `en-NG` say `ar`, `zh` and `en`, and land there.
 * Matching on the language subtag is also what lets the canonical forms real
 * devices send — `yue-Hant-HK`, `arz-EG`, `pcm-NG`, Java's `in_ID` — reach the
 * language they name rather than falling through to the next preference.
 *
 * Everything else falls back to its primary subtag, so `pt-BR`, `es-419` and
 * `de-AT` land on `pt`, `es` and `de`.
 */

/**
 * Tags that must resolve to something other than their primary subtag.
 *
 * Consulted against the whole tag first and then against its language subtag,
 * so a region- or script-qualified form resolves the same way the bare one does.
 */
const EXACT: Record<string, LocaleCode> = {
  // Indonesian's ISO 639-1 code was `in` until 1989 and Java still emits it.
  in: "id",
  // Cantonese, however it is spelled.
  yue: "yue",
  "zh-yue": "yue",
  "yue-hant": "yue",
  "yue-hk": "yue",
  // Egyptian Arabic, only when named as such.
  arz: "arz",
  // Nigerian Pidgin, only when named as such.
  pcm: "pcm"
};

function normalise(tag: string): string {
  return tag.trim().toLowerCase().replace(/_/g, "-");
}

export function matchLocale(preferred: readonly string[]): LocaleCode | null {
  for (const raw of preferred) {
    const tag = normalise(raw);
    if (!tag || tag === "*") continue;

    // `Object.hasOwn` rather than a truthiness test or `in`: both tables are
    // plain objects, so `constructor` would otherwise hit Object.prototype and
    // be returned as a locale by a function typed `LocaleCode | null`.
    if (Object.hasOwn(EXACT, tag)) return EXACT[tag];

    // An exact hit on one of our own codes (e.g. "de", "ta").
    if (Object.hasOwn(localeMap, tag)) return tag as LocaleCode;

    const primary = tag.split("-")[0];
    if (Object.hasOwn(EXACT, primary)) return EXACT[primary];
    if (Object.hasOwn(localeMap, primary)) return primary as LocaleCode;
  }
  return null;
}

/**
 * Parse an Accept-Language header into an ordered list of tags.
 *
 * Not used by the browser banner (which reads `navigator.languages`), but it is
 * the same decision, so it lives next to it rather than growing a second
 * opinion elsewhere. Parameter names are case-insensitive per RFC 9110 §5.6.6,
 * so `Q=` weights rank the same as `q=` ones — read as `q=1` they would invert
 * the order the sender asked for.
 */
export function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.split(";").map((s) => s.trim());
      const q = params
        .map((p) => /^q=([0-9.]+)$/.exec(p.toLowerCase()))
        .find(Boolean);
      return { tag, q: q ? Number.parseFloat(q[1]) : 1 };
    })
    .filter((e) => e.tag && Number.isFinite(e.q) && e.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((e) => e.tag);
}
