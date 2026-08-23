import type { LocaleCode } from "../../locales";
import type { BlogIndexContent } from "./types";
import { en } from "./en";
import { bn } from "./bn";
import { pt } from "./pt";
import { fr } from "./fr";
import { id } from "./id";
import { pcm } from "./pcm";
import { zh } from "./zh";
import { de } from "./de";
import { ja } from "./ja";
import { arz } from "./arz";
import { hi } from "./hi";
import { ur } from "./ur";
import { ru } from "./ru";
import { es } from "./es";
import { tr } from "./tr";
import { yue } from "./yue";
import { ar } from "./ar";
import { mr } from "./mr";
import { te } from "./te";
import { ta } from "./ta";

// Per-locale files are added here as posts get translated. Until a locale has
// its own file it renders the English copy — a missing locale must never fail
// the build.
const content: Partial<Record<LocaleCode, BlogIndexContent>> = {
  en,
  ar,
  bn,
  pt,
  fr,
  id,
  pcm,
  zh,
  de,
  ja,
  arz,
  hi,
  ur,
  ru,
  es,
  tr,
  yue,
  mr,
  te,
  ta,
};

export function getBlogIndex(locale: LocaleCode): BlogIndexContent {
  return content[locale] ?? en;
}

export type { BlogIndexContent, BlogIndexPostContent, BlogPostSlug } from "./types";
