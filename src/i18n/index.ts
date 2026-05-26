import type { Dict } from "./types";
import type { LocaleCode } from "./locales";
import { en } from "./dict/en";
import { zh } from "./dict/zh";
import { hi } from "./dict/hi";
import { es } from "./dict/es";
import { fr } from "./dict/fr";
import { ar } from "./dict/ar";
import { bn } from "./dict/bn";
import { pt } from "./dict/pt";
import { ru } from "./dict/ru";
import { ur } from "./dict/ur";
import { id } from "./dict/id";
import { de } from "./dict/de";
import { ja } from "./dict/ja";
import { pcm } from "./dict/pcm";
import { arz } from "./dict/arz";
import { mr } from "./dict/mr";
import { te } from "./dict/te";
import { tr } from "./dict/tr";
import { ta } from "./dict/ta";
import { yue } from "./dict/yue";

const dicts: Record<LocaleCode, Dict> = {
  en, zh, hi, es, fr, ar, bn, pt, ru, ur, id, de, ja, pcm, arz, mr, te, tr, ta, yue
};

export function getDict(locale: LocaleCode): Dict {
  return dicts[locale] ?? en;
}

export type { Dict } from "./types";
