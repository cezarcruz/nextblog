import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cezar Cruz - Desenvolvedor de Software",
  description: "Página pessoal e portfólio de Cezar Cruz, desenvolvedor de software especialista em Java, AWS, e tecnologias de nuvem.",
  keywords: "Cezar Cruz, desenvolvedor, software, Java, AWS, Linux, Docker, backend, programador",
  authors: [{ name: "Cezar Cruz"}],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cezar Cruz',
  url: 'https://cezarcruz.com.br',
  image: 'https://avatars.githubusercontent.com/u/3604822?s=400&u=afaa0bd96470f6d7f75f96a3c46e09cd6ff80ddc&v=4',
  jobTitle: 'Desenvolvedor de Software',
  worksFor: {
    '@type': 'Organization',
    name: 'Cezar Cruz',
  },
  sameAs: [
    'https://github.com/cezarcruz',
    'https://www.linkedin.com/in/cezar-cruz/',
    'https://www.instagram.com/cezzao1914/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-black min-h-screen flex flex-col p-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
