import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// next/font is compiled away by Next.js at build time, so it must be
// stubbed when the layout is imported directly by Vitest.
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

import RootLayout, { metadata } from './layout';

describe('RootLayout', () => {
  it('expõe os metadados essenciais de SEO', () => {
    expect(metadata.metadataBase?.toString()).toBe('https://cezarcruz.com.br/');
    expect(metadata.title).toMatchObject({
      default: 'Cezar Cruz - Desenvolvedor de Software',
      template: '%s | Cezar Cruz',
    });
    expect(metadata.description).toContain('Cezar Cruz');
    expect(metadata.alternates).toMatchObject({ canonical: '/' });
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
    });
  });

  it('mantém o contrato de compartilhamento (OpenGraph e Twitter)', () => {
    expect(metadata.openGraph).toMatchObject({
      url: 'https://cezarcruz.com.br',
      siteName: 'Cezar Cruz',
      locale: 'pt_BR',
      type: 'website',
    });
    expect(metadata.twitter).toMatchObject({
      card: 'summary_large_image',
    });
  });

  it('renderiza no idioma correto com o conteúdo e o rodapé', () => {
    render(
      <RootLayout>
        <p>conteúdo de teste</p>
      </RootLayout>
    );

    expect(document.documentElement.lang).toBe('pt-BR');
    expect(screen.getByText('conteúdo de teste')).toBeInTheDocument();
    expect(screen.getByText(/Cezar Cruz\. Todos os direitos reservados/)).toBeInTheDocument();
  });

  it('injeta o JSON-LD válido do schema Person', () => {
    const { container } = render(
      <RootLayout>
        <p>conteúdo de teste</p>
      </RootLayout>
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();

    const data = JSON.parse(script!.textContent ?? '{}');
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Cezar Cruz');
    expect(data.sameAs).toContain('https://github.com/cezarcruz');
    expect(data.hasCredential.length).toBeGreaterThan(0);
  });
});
