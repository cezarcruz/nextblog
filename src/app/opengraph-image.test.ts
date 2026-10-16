import { describe, it, expect } from 'vitest';
import { ImageResponse } from 'next/og';
import Image, { alt, size, contentType } from './opengraph-image';

describe('OpenGraph Image', () => {
  it('expõe as dimensões e o tipo de conteúdo esperados', () => {
    expect(alt).toBe('Cezar Cruz - Desenvolvedor de Software');
    expect(size).toEqual({ width: 1200, height: 630 });
    expect(contentType).toBe('image/png');
  });

  it('gera uma ImageResponse sem lançar erro', async () => {
    const image = await Image();
    expect(image).toBeInstanceOf(ImageResponse);
  });
});
