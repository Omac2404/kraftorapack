import { frContent } from "@/lib/i18n-fr";

// Site üç dilli: kaynak dil Türkçe, İngilizce panelden girilir, Fransızca statik
// çeviri sözlüğünden (lib/i18n-fr.ts) gelir. Dil tercihi `lang` çerezinde tutulur;
// adres çubuğu dile göre DEĞİŞMEZ (bkz. middleware.ts).

export type Lang = "tr" | "en" | "fr";
export const LANGS: Lang[] = ["tr", "en", "fr"];
export const DEFAULT_LANG: Lang = "tr";

// Dil tercihinin tutulduğu çerez
export const LANG_COOKIE = "lang";
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 yıl

// Dil seçicide gösterilen adlar (erişilebilirlik etiketi)
export const langNames: Record<Lang, string> = {
  tr: "Türkçe",
  en: "English",
  fr: "Français",
};

// Panelde düzenlenen iki dilli metin — veritabanında bu biçimde saklanır.
// Fransızca panelde girilmez; Türkçe kaynak metin üzerinden sözlükten okunur.
export type L = { tr: string; en: string };

export const emptyL = (): L => ({ tr: "", en: "" });

// İstenen dildeki metni döner. Çeviri yoksa boş bırakmak yerine sırayla düşer:
// FR → (sözlük) → EN → TR,  EN → TR,  TR → EN
export function t(value: L | undefined | null, lang: Lang): string {
  if (!value) return "";
  const tr = value.tr?.trim() ?? "";
  const en = value.en?.trim() ?? "";
  if (lang === "tr") return tr || en;
  if (lang === "en") return en || tr;
  return (tr && frContent[tr]) || en || tr;
}

export function isLang(value: unknown): value is Lang {
  return value === "tr" || value === "en" || value === "fr";
}
