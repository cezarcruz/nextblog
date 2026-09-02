import { describe, it, expect } from 'vitest';
import sitemap from './sitemap';
import robots from './robots';

describe('SEO & Metadata Routes', () => {
  it('gera sitemap corretamente com URL base e prioridade', () => {
    const map = sitemap();
    expect(Array.isArray(map)).toBe(true);
    expect(map.length).toBeGreaterThan(0);
    expect(map[0].url).toBe('https://cezarcruz.com.br');
    expect(map[0].priority).toBe(1);
    expect(map[0].changeFrequency).toBe('monthly');
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

