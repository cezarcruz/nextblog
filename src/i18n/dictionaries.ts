import type { Locale } from "./config";
import type { Dictionary } from "./types";
import br from "./dictionaries/br";
import en from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { br, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}
