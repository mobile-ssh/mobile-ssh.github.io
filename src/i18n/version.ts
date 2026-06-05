import { locales, type LocaleCode } from "./locales";

// Single source of truth for the Mobile SSH app version surfaced on the site.
// Bump these on app release; per-locale dicts only carry templates with
// {count} and {version} placeholders.
export const VERSION_NAME = "1.6";
export const VERSION_CODE = 12;
export const LANGUAGE_COUNT = locales.length;

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.github.mobile_ssh";

export const PLAY_STORE_BETA_URL =
  "https://play.google.com/apps/testing/io.github.mobile_ssh";

// "1.6 (12)" — Latin digits, locale-independent (matches prior behavior on
// the About page across all locales).
export const versionDisplay = `${VERSION_NAME} (${VERSION_CODE})`;

// Replace each run of ASCII digits with the locale's default numbering
// system. Decimal/grouping separators are left as-is so "1.6" → "১.৬" in bn
// and "١.٦" in ar (digits localized, dot preserved), matching the original
// mixed-script rendering.
function localizeDigits(s: string, locale: LocaleCode): string {
  try {
    return s.replace(/\d+/g, (m) =>
      Number(m).toLocaleString(locale, { useGrouping: false }),
    );
  } catch {
    return s;
  }
}

export function renderVersionLine(template: string, locale: LocaleCode): string {
  return template
    .replace("{count}", localizeDigits(String(LANGUAGE_COUNT), locale))
    .replace("{version}", localizeDigits(VERSION_NAME, locale));
}
