import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// next/font is compiled away by Next.js at build time, so it must be
// stubbed when the layout is imported directly by Vitest.
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

import RootLayout, { generateMetadata } from './layout';

async function renderLayout(locale: 'br' | 'en' = 'br') {
  const element = await RootLayout({
    children: <p>conteúdo de teste</p>,
    params: Promise.resolve({ lang: locale }),
  });

  return render(element);
}

describe('RootLayout', () => {
  it('expõe os metadados essenciais de SEO em português', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'br' }),
    });

    expect(metadata.metadataBase?.toString()).toBe('https://cezarcruz.com.br/');
    expect(metadata.title).toMatchObject({
      default: 'Cezar Cruz - Desenvolvedor de Software',
      template: '%s | Cezar Cruz',
    });
    expect(metadata.description).toContain('Cezar Cruz');
    expect(metadata.alternates).toMatchObject({
      canonical: '/br',
      languages: {
        'pt-BR': '/br',
        en: '/en',
        'x-default': '/br',
      },
    });
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
    });
  });

  it('expõe os metadados essenciais de SEO em inglês', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'en' }),
    });

    expect(metadata.title).toMatchObject({
      default: 'Cezar Cruz - Software Developer',
    });
    expect(metadata.alternates).toMatchObject({ canonical: '/en' });
    expect(metadata.openGraph).toMatchObject({
      url: 'https://cezarcruz.com.br/en',
      locale: 'en_US',
    });
  });

  it('mantém o contrato de compartilhamento (OpenGraph e Twitter)', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'br' }),
    });

    expect(metadata.openGraph).toMatchObject({
      url: 'https://cezarcruz.com.br/br',
      siteName: 'Cezar Cruz',
      locale: 'pt_BR',
      type: 'website',
    });
    expect(metadata.twitter).toMatchObject({
      card: 'summary_large_image',
    });
  });

  it('renderiza no idioma correto com o conteúdo e o rodapé', async () => {
    await renderLayout('br');

    expect(document.documentElement.lang).toBe('pt-BR');
    expect(screen.getByText('conteúdo de teste')).toBeInTheDocument();
    expect(screen.getByText(/Cezar Cruz\. Todos os direitos reservados/)).toBeInTheDocument();
  });

  it('renderiza a versão em inglês do rodapé', async () => {
    await renderLayout('en');

    expect(document.documentElement.lang).toBe('en');
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it('injeta o JSON-LD válido do schema Person', async () => {
    const { container } = await renderLayout('br');

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();

    const data = JSON.parse(script!.textContent ?? '{}');
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Cezar Cruz');
    expect(data.jobTitle).toBe('Desenvolvedor de Software');
    expect(data.sameAs).toContain('https://github.com/cezarcruz');
    expect(data.hasCredential.length).toBeGreaterThan(0);
  });

  it('localiza o JSON-LD em inglês', async () => {
    const { container } = await renderLayout('en');

    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script!.textContent ?? '{}');

    expect(data.jobTitle).toBe('Software Developer');
    expect(data.url).toBe('https://cezarcruz.com.br/en');
  });
});
