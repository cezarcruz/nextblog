import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cezarcruz.com.br"),
  title: {
    default: "Cezar Cruz - Desenvolvedor de Software",
    template: "%s | Cezar Cruz",
  },
  description:
    "Página pessoal e portfólio de Cezar Cruz, desenvolvedor de software especialista em Java, AWS, Spring Boot e arquitetura backend em nuvem.",
  keywords: [
    "Cezar Cruz",
    "Desenvolvedor de Software",
    "Desenvolvedor Java",
    "Java",
    "AWS",
    "Spring Boot",
    "Kotlin",
    "Docker",
    "Linux",
    "Backend Developer",
    "Cloud Architecture",
    "Microsserviços",
  ],
  authors: [{ name: "Cezar Cruz", url: "https://cezarcruz.com.br" }],
  creator: "Cezar Cruz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cezar Cruz - Desenvolvedor de Software",
    description:
      "Página pessoal e portfólio de Cezar Cruz, desenvolvedor de software especialista em Java, AWS e arquitetura backend.",
    url: "https://cezarcruz.com.br",
    siteName: "Cezar Cruz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cezar Cruz - Desenvolvedor de Software",
    description:
      "Página pessoal e portfólio de Cezar Cruz, desenvolvedor de software especialista em Java, AWS e arquitetura backend.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cezar Cruz",
  url: "https://cezarcruz.com.br",
  image: "https://avatars.githubusercontent.com/u/3604822?s=400&u=afaa0bd96470f6d7f75f96a3c46e09cd6ff80ddc&v=4",
  jobTitle: "Desenvolvedor de Software",
  description: "Desenvolvedor de software especialista em Java, AWS, Spring Boot e arquitetura de nuvem.",
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Amazon Web Services (AWS)",
    "Kotlin",
    "Docker",
    "Linux",
    "Microsserviços",
    "Arquitetura de Software",
    "PostgreSQL",
    "JavaScript",
  ],
  sameAs: [
    "https://github.com/cezarcruz",
    "https://www.linkedin.com/in/cezar-cruz/",
    "https://www.instagram.com/cezzao1914/",
    "https://www.credly.com/users/cezar-cruz",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Cloud Practitioner",
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Amazon Web Services",
      },
      url: "https://www.credly.com/badges/e20d04c6-939b-4454-8978-ab20bb4a8b70/public_url",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Cloud Quest: Cloud Practitioner",
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Amazon Web Services",
      },
      url: "https://www.credly.com/badges/d3c5b139-0139-4376-b203-b83831f53d59/public_url",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Oracle",
      },
      url: "https://www.credly.com/badges/011b4270-8a80-47c8-b9fb-3ed42ad20407/public_url",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-100 text-black min-h-screen flex flex-col justify-between p-4 sm:p-6`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow flex items-center justify-center py-4">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
