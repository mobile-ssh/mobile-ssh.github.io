export type LocaleCode =
  | "en"
  | "zh"
  | "hi"
  | "es"
  | "fr"
  | "ar"
  | "bn"
  | "pt"
  | "ru"
  | "ur"
  | "id"
  | "de"
  | "ja"
  | "pcm"
  | "arz"
  | "mr"
  | "te"
  | "tr"
  | "ta"
  | "yue";

export interface LocaleInfo {
  code: LocaleCode;
  nativeName: string;
  englishName: string;
  htmlLang: string;
  dir: "ltr" | "rtl";
}

export const defaultLocale: LocaleCode = "en";

export const locales: LocaleInfo[] = [
  { code: "en",  nativeName: "English",             englishName: "English",            htmlLang: "en",     dir: "ltr" },
  { code: "zh",  nativeName: "中文",                 englishName: "Mandarin Chinese",   htmlLang: "zh-CN",  dir: "ltr" },
  { code: "hi",  nativeName: "हिन्दी",               englishName: "Hindi",              htmlLang: "hi",     dir: "ltr" },
  { code: "es",  nativeName: "Español",             englishName: "Spanish",            htmlLang: "es",     dir: "ltr" },
  { code: "fr",  nativeName: "Français",            englishName: "French",             htmlLang: "fr",     dir: "ltr" },
  { code: "ar",  nativeName: "العربية",             englishName: "Arabic",             htmlLang: "ar",     dir: "rtl" },
  { code: "bn",  nativeName: "বাংলা",                englishName: "Bengali",            htmlLang: "bn",     dir: "ltr" },
  { code: "pt",  nativeName: "Português",           englishName: "Portuguese",         htmlLang: "pt",     dir: "ltr" },
  { code: "ru",  nativeName: "Русский",             englishName: "Russian",            htmlLang: "ru",     dir: "ltr" },
  { code: "ur",  nativeName: "اردو",                englishName: "Urdu",               htmlLang: "ur",     dir: "rtl" },
  { code: "id",  nativeName: "Bahasa Indonesia",    englishName: "Indonesian",         htmlLang: "id",     dir: "ltr" },
  { code: "de",  nativeName: "Deutsch",             englishName: "German",             htmlLang: "de",     dir: "ltr" },
  { code: "ja",  nativeName: "日本語",                englishName: "Japanese",           htmlLang: "ja",     dir: "ltr" },
  { code: "pcm", nativeName: "Naijá",               englishName: "Nigerian Pidgin",    htmlLang: "pcm",    dir: "ltr" },
  { code: "arz", nativeName: "مصرى",                englishName: "Egyptian Arabic",    htmlLang: "arz",    dir: "rtl" },
  { code: "mr",  nativeName: "मराठी",                englishName: "Marathi",            htmlLang: "mr",     dir: "ltr" },
  { code: "te",  nativeName: "తెలుగు",               englishName: "Telugu",             htmlLang: "te",     dir: "ltr" },
  { code: "tr",  nativeName: "Türkçe",              englishName: "Turkish",            htmlLang: "tr",     dir: "ltr" },
  { code: "ta",  nativeName: "தமிழ்",                englishName: "Tamil",              htmlLang: "ta",     dir: "ltr" },
  { code: "yue", nativeName: "粵語",                 englishName: "Cantonese",          htmlLang: "yue",    dir: "ltr" }
];

export const localeMap: Record<LocaleCode, LocaleInfo> = locales.reduce(
  (acc, l) => {
    acc[l.code] = l;
    return acc;
  },
  {} as Record<LocaleCode, LocaleInfo>
);

export const nonDefaultLocales: LocaleCode[] = locales
  .map((l) => l.code)
  .filter((c) => c !== defaultLocale);

export function localizedHref(locale: LocaleCode, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean === "/" ? "/" : clean}`;
}
