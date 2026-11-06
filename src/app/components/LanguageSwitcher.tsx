import Link from "next/link";
import {
  HTML_LANG,
  LOCALES,
  LOCALE_NAMES,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface LanguageSwitcherProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export default function LanguageSwitcher({
  dict,
  currentLocale,
}: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={dict.language.label}
      className="flex items-center justify-end gap-2 font-mono text-[10px] font-bold uppercase tracking-wide"
    >
      {LOCALES.map((locale) => {
        const label = dict.language[locale];

        if (locale === currentLocale) {
          return (
            <span
              key={locale}
              aria-current="page"
              aria-label={LOCALE_NAMES[locale]}
              title={LOCALE_NAMES[locale]}
              className="border-2 border-black bg-yellow-400 px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]"
            >
              {label}
            </span>
          );
        }

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={HTML_LANG[locale]}
            lang={HTML_LANG[locale]}
            aria-label={LOCALE_NAMES[locale]}
            title={LOCALE_NAMES[locale]}
            className="px-2 py-0.5 underline-offset-2 hover:underline"
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
