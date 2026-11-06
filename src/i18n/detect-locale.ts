import { DEFAULT_LOCALE, type Locale } from "./config";

interface LanguagePreference {
  tag: string;
  quality: number;
}

function parseAcceptLanguage(header: string): LanguagePreference[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qualityParam = params.find((param) => param.trim().startsWith("q="));
      const parsedQuality = qualityParam
        ? Number.parseFloat(qualityParam.split("=")[1])
        : 1;

      return {
        tag: tag.trim().toLowerCase(),
        quality: Number.isFinite(parsedQuality) ? parsedQuality : 0,
      };
    })
    .filter((preference) => preference.tag.length > 0)
    .sort((a, b) => b.quality - a.quality);
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  for (const { tag, quality } of parseAcceptLanguage(acceptLanguage)) {
    if (quality <= 0) continue;
    if (tag === "pt" || tag.startsWith("pt-")) return "pt";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }

  return DEFAULT_LOCALE;
}
