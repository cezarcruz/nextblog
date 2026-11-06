import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer";
import { CERTIFICATIONS } from "../components/certifications-data";
import {
  HTML_LANG,
  LOCALES,
  OG_LOCALE,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";
import { AVATAR_URL, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutParams = {
  lang: string;
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
};

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        "x-default": "/pt",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      url: `${SITE_URL}/${lang}`,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function buildJsonLd(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    image: AVATAR_URL,
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.personDescription,
    knowsAbout: dict.meta.knowsAbout,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    hasCredential: CERTIFICATIONS.map((certification) => ({
      "@type": "EducationalOccupationalCredential",
      name: certification.title,
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: certification.issuer,
      },
      url: certification.url,
    })),
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const jsonLd = buildJsonLd(dict, lang);

  return (
    <html lang={HTML_LANG[lang]}>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-100 text-black min-h-screen flex flex-col justify-between p-4 sm:p-6`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow flex items-center justify-center py-4">
          {children}
        </main>
        <Footer dict={dict} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
