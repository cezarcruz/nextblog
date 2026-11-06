import { NextResponse, type NextRequest } from "next/server";
import { LOCALES } from "./i18n/config";
import { detectLocale } from "./i18n/detect-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  const locale = detectLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language");

  return response;
}

export const config = {
  // Skip Next.js internals, API routes, and files with an extension
  // (robots.txt, sitemap.xml, icon.svg, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
