import { locales, type LocaleCode } from "./locales";

// Single source of truth for the Mobile SSH app versions surfaced on the site.
// Bump these on app release; per-locale dicts only carry templates with
// {count}, {version}, and {iosVersion} placeholders.
export const VERSION_NAME = "2.13.4";
export const VERSION_CODE = 50;
export const IOS_VERSION_NAME = "1.70";
export const LANGUAGE_COUNT = locales.length;

// The Play listing. While Android is in closed testing this page only works for
// accounts already opted in, so it is NOT the install link — use
// PLAY_STORE_BETA_URL for any "get the app" call to action.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.github.mobile_ssh";

// Closed-test opt-in link. This is the Android install path today: it must be
// opened in a mobile browser (the closed test may not be visible inside the
// Google Play app) with the Google account the tester will use.
export const PLAY_STORE_BETA_URL =
  "https://play.google.com/apps/testing/io.github.mobile_ssh";

// The iOS app ships through TestFlight (public beta link); there is no public
// App Store listing yet, so this is the iOS install link the site carries.
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/Ku4JtTEg";

// Version line on the About page — Latin digits and platform names are
// locale-independent (matches prior behavior across all locales).
export const versionDisplay = `Android ${VERSION_NAME} (${VERSION_CODE}) · iOS ${IOS_VERSION_NAME} (TestFlight)`;

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
    .replace("{version}", localizeDigits(VERSION_NAME, locale))
    .replace("{iosVersion}", localizeDigits(IOS_VERSION_NAME, locale));
}
