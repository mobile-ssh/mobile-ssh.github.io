import type { LocaleCode } from "../locales";
import type { CloudGuides } from "./types";
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

export const cloudGuides: Record<LocaleCode, CloudGuides> = {
  en, zh, hi, es, fr, ar, bn, pt, ru, ur, id, de, ja, pcm, arz, mr, te, tr, ta, yue
};

export function getCloudGuide(locale: LocaleCode): CloudGuides {
  return cloudGuides[locale];
}

export function providerText(text: string, provider: string): string {
  return text.replaceAll("{provider}", provider);
}
