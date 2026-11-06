export const LOCALES = ["br", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "br";

export const HTML_LANG: Record<Locale, string> = {
  br: "pt-BR",
  en: "en",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  br: "Português",
  en: "English",
};

export const OG_LOCALE: Record<Locale, string> = {
  br: "pt_BR",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
