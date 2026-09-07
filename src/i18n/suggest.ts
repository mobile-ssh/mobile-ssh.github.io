import type { LocaleCode } from "./locales";

/**
 * The language-suggestion banner, in every language.
 *
 * This does NOT live in `Dict`. A dictionary is the strings for the page's own
 * locale, but this banner is shown to someone whose browser asked for a
 * different one, and its whole point is to be legible to them: a Chinese
 * reader who landed on the English page must see Chinese, on the English page.
 * So the component ships all twenty and picks at runtime.
 *
 * Keep these short. The banner is one line above the header on a phone.
 */
export interface Suggestion {
  /** Statement that the page exists in this language. */
  text: string;
  /** Link label. */
  cta: string;
  /** Accessible label for the dismiss button. */
  dismiss: string;
}

export const suggestions: Record<LocaleCode, Suggestion> = {
  en:  { text: "This page is also available in English.",        cta: "Read in English",       dismiss: "Dismiss" },
  zh:  { text: "本页面也有中文版。",                                cta: "切换到中文",             dismiss: "关闭" },
  hi:  { text: "यह पृष्ठ हिन्दी में भी उपलब्ध है।",                    cta: "हिन्दी में पढ़ें",           dismiss: "बंद करें" },
  es:  { text: "Esta página también está en español.",           cta: "Leer en español",       dismiss: "Cerrar" },
  fr:  { text: "Cette page existe aussi en français.",           cta: "Lire en français",      dismiss: "Fermer" },
  ar:  { text: "هذه الصفحة متوفّرة بالعربية أيضًا.",                  cta: "اقرأها بالعربية",         dismiss: "إغلاق" },
  bn:  { text: "এই পৃষ্ঠাটি বাংলাতেও পড়া যায়।",                      cta: "বাংলায় পড়ুন",           dismiss: "বন্ধ করুন" },
  pt:  { text: "Esta página também está em português.",          cta: "Ler em português",      dismiss: "Fechar" },
  ru:  { text: "Эта страница есть и на русском.",                cta: "Открыть на русском",    dismiss: "Закрыть" },
  ur:  { text: "یہ صفحہ اردو میں بھی دستیاب ہے۔",                  cta: "اردو میں پڑھیں",         dismiss: "بند کریں" },
  id:  { text: "Halaman ini juga tersedia dalam bahasa Indonesia.", cta: "Baca dalam bahasa Indonesia", dismiss: "Tutup" },
  de:  { text: "Diese Seite gibt es auch auf Deutsch.",          cta: "Auf Deutsch lesen",     dismiss: "Schließen" },
  ja:  { text: "このページは日本語でもご覧いただけます。",                cta: "日本語で読む",            dismiss: "閉じる" },
  pcm: { text: "Dis page dey for Naijá too.",                    cta: "Read am for Naijá",     dismiss: "Close am" },
  arz: { text: "الصفحة دي موجودة بالمصري كمان.",                   cta: "اقراها بالمصري",         dismiss: "اقفل" },
  mr:  { text: "हे पान मराठीतही उपलब्ध आहे.",                        cta: "मराठीत वाचा",            dismiss: "बंद करा" },
  te:  { text: "ఈ పేజీ తెలుగులో కూడా ఉంది.",                        cta: "తెలుగులో చదవండి",         dismiss: "మూసివేయి" },
  tr:  { text: "Bu sayfa Türkçe olarak da mevcut.",              cta: "Türkçe oku",            dismiss: "Kapat" },
  ta:  { text: "இந்தப் பக்கம் தமிழிலும் உள்ளது.",                      cta: "தமிழில் படிக்க",           dismiss: "மூடு" },
  yue: { text: "呢版都有粵語版本。",                                 cta: "睇粵語版",               dismiss: "閂咗佢" }
};
