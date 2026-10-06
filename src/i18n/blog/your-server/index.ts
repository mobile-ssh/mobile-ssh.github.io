import type { LocaleCode } from "../../locales";
import type { YourServerPost } from "./types";
import { en } from "./en";
import { ar } from "./ar";
import { arz } from "./arz";
import { bn } from "./bn";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { id } from "./id";
import { ja } from "./ja";
import { mr } from "./mr";
import { pcm } from "./pcm";
import { pt } from "./pt";
import { ru } from "./ru";
import { ta } from "./ta";
import { te } from "./te";
import { tr } from "./tr";
import { ur } from "./ur";
import { yue } from "./yue";
import { zh } from "./zh";

const posts: Record<LocaleCode, YourServerPost> = {
  en, ar, arz, bn, de, es, fr, hi, id, ja, mr, pcm, pt, ru, ta, te, tr, ur, yue, zh,
};

export function getYourServer(locale: LocaleCode): YourServerPost {
  return posts[locale];
}

export type { YourServerBlock, YourServerPost } from "./types";
