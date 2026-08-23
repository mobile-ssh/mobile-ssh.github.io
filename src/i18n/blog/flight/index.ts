import type { LocaleCode } from "../../locales";
import type { FlightPost } from "./types";
import { en } from "./en";
import { bn } from "./bn";
import { pt } from "./pt";
import { fr } from "./fr";
import { id } from "./id";
import { pcm } from "./pcm";
import { zh } from "./zh";
import { de } from "./de";
import { ru } from "./ru";
import { ja } from "./ja";
import { arz } from "./arz";
import { hi } from "./hi";
import { ur } from "./ur";
import { es } from "./es";
import { tr } from "./tr";
import { yue } from "./yue";
import { ar } from "./ar";
import { mr } from "./mr";
import { te } from "./te";
import { ta } from "./ta";

// Per-locale content modules land here as they are translated: import them and
// add them to the map. Anything not listed falls back to English, so the post
// builds for all 20 locales from day one instead of failing the build.
const posts: Partial<Record<LocaleCode, FlightPost>> = {
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
  ta
};

export function getFlight(locale: LocaleCode): FlightPost {
  return posts[locale] ?? en;
}

export type { FlightPost } from "./types";
