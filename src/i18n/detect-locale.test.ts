import { describe, it, expect } from 'vitest';
import { detectLocale } from './detect-locale';

describe('detectLocale', () => {
  it('usa português como padrão quando não há header', () => {
    expect(detectLocale(null)).toBe('br');
    expect(detectLocale('')).toBe('br');
  });

  it('detecta português e inglês', () => {
    expect(detectLocale('pt-BR,pt;q=0.9,en;q=0.8')).toBe('br');
    expect(detectLocale('en-US,en;q=0.9,pt;q=0.5')).toBe('en');
  });

  it('respeita a ordem de qualidade', () => {
    expect(detectLocale('pt;q=0.4,en;q=0.9')).toBe('en');
  });

  it('cai no padrão para idiomas não suportados', () => {
    expect(detectLocale('fr-FR,fr;q=0.9')).toBe('br');
    expect(detectLocale('de-DE')).toBe('br');
  });

  it('ignora idiomas com qualidade zero', () => {
    expect(detectLocale('en;q=0,pt;q=0.5')).toBe('br');
  });
});
