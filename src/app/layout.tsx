import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cezar Cruz - Desenvolvedor",
  description: "Página pessoal e links de Cezar Cruz, desenvolvedor de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-black min-h-screen flex flex-col p-4">
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
