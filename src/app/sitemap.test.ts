import { describe, it, expect } from 'vitest';
import sitemap from './sitemap';
import robots from './robots';

describe('SEO & Metadata Routes', () => {
  it('gera sitemap com as duas versões de idioma', () => {
    const map = sitemap();
    expect(Array.isArray(map)).toBe(true);
    expect(map).toHaveLength(2);

    expect(map[0].url).toBe('https://cezarcruz.com.br/pt');
    expect(map[1].url).toBe('https://cezarcruz.com.br/en');

    map.forEach((entry) => {
      expect(entry.priority).toBe(1);
      expect(entry.changeFrequency).toBe('monthly');
      expect(entry.alternates?.languages).toMatchObject({
        'pt-BR': 'https://cezarcruz.com.br/pt',
        en: 'https://cezarcruz.com.br/en',
      });
    });
  });

  it('gera robots.txt permitindo crawling e referenciando o sitemap', () => {
    const robotsConfig = robots();
    expect(robotsConfig.sitemap).toBe('https://cezarcruz.com.br/sitemap.xml');
    expect(robotsConfig.rules).toEqual({
      userAgent: '*',
      allow: '/',
    });
  });
});
