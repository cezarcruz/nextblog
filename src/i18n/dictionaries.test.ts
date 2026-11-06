import { describe, it, expect } from 'vitest';
import { LOCALES } from './config';
import { getDictionary, hasLocale } from './dictionaries';

describe('dictionaries', () => {
  it('retorna o dicionário de cada locale', () => {
    expect(getDictionary('br').profile.role).toBe('Desenvolvedor de Software');
    expect(getDictionary('en').profile.role).toBe('Software Developer');
  });

  it('reconhece apenas locales suportados', () => {
    expect(hasLocale('br')).toBe(true);
    expect(hasLocale('en')).toBe(true);
    expect(hasLocale('pt')).toBe(false);
  });

  it('mantém os mesmos ids de experiência nos dois idiomas', () => {
    const brIds = getDictionary('br').experience.items.map((item) => item.id);
    const enIds = getDictionary('en').experience.items.map((item) => item.id);

    expect(enIds).toEqual(brIds);
  });

  it('expõe todas as locales configuradas', () => {
    expect(LOCALES).toEqual(['br', 'en']);
  });
});
