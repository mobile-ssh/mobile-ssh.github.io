import type { LocaleCode } from "../../locales";
import type { LaptopsPost } from "./types";
import { en } from "./en";
import { bn } from "./bn";
import { pt } from "./pt";
import { id } from "./id";
import { fr } from "./fr";
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

// Per-locale files are added here as the post gets translated. Until a locale
// has its own file it renders the English copy — a missing locale must never
// fail the build.
const content: Partial<Record<LocaleCode, LaptopsPost>> = {
  en,
  ar,
  bn,
  pt,
  id,
  fr,
  pcm,
  zh,
  de,
  ru,
  ja,
  arz,
  hi,
  ur,
  es,
  tr,
  yue,
  mr,
  te,
  ta,
};

export function getLaptops(locale: LocaleCode): LaptopsPost {
  return content[locale] ?? en;
}

export type {
  LaptopsPost,
  LaptopsBlock,
  LaptopsCta,
  LaptopsEstateItem,
  LaptopsLeadFigure,
  LaptopsLedger,
  LaptopsLedgerEntry,
  LaptopsTerminal,
  LaptopsToast
} from "./types";
