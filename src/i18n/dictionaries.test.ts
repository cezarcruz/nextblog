import { describe, it, expect } from 'vitest';
import { LOCALES } from './config';
import { getDictionary, hasLocale } from './dictionaries';

describe('dictionaries', () => {
  it('retorna o dicionário de cada locale', () => {
    expect(getDictionary('pt').profile.role).toBe('Desenvolvedor de Software');
    expect(getDictionary('en').profile.role).toBe('Software Developer');
  });

  it('reconhece apenas locales suportados', () => {
    expect(hasLocale('pt')).toBe(true);
    expect(hasLocale('en')).toBe(true);
    expect(hasLocale('fr')).toBe(false);
  });

  it('mantém os mesmos ids de experiência nos dois idiomas', () => {
    const ptIds = getDictionary('pt').experience.items.map((item) => item.id);
    const enIds = getDictionary('en').experience.items.map((item) => item.id);

    expect(enIds).toEqual(ptIds);
  });

  it('expõe todas as locales configuradas', () => {
    expect(LOCALES).toEqual(['pt', 'en']);
  });
});
