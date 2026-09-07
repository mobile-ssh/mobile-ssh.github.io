import type { LocaleCode } from "../../locales";
import type { GoOutsidePost } from "./types";
import { en } from "./en";
import { zh } from "./zh";
import { hi } from "./hi";
import { es } from "./es";
import { fr } from "./fr";
import { ar } from "./ar";
import { bn } from "./bn";
import { pt } from "./pt";
import { ru } from "./ru";
import { ur } from "./ur";
import { id } from "./id";
import { de } from "./de";
import { ja } from "./ja";
import { pcm } from "./pcm";
import { arz } from "./arz";
import { mr } from "./mr";
import { te } from "./te";
import { tr } from "./tr";
import { ta } from "./ta";
import { yue } from "./yue";

/**
 * Every locale is present, so this is a strict Record rather than the
 * Partial + `?? en` fallback the older posts use: omitting a locale here should
 * be a compile error, not a page that silently renders in English.
 */
const posts: Record<LocaleCode, GoOutsidePost> = {
  en, zh, hi, es, fr, ar, bn, pt, ru, ur, id, de, ja, pcm, arz, mr, te, tr, ta, yue,
};

export function getGoOutside(locale: LocaleCode): GoOutsidePost {
  return posts[locale];
}

export type { GoOutsideBlock, GoOutsidePost } from "./types";
