import type { Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en";
import pt from "./dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}
