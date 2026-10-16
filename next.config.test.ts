import { describe, it, expect } from 'vitest';
import nextConfig from './next.config';

describe('next.config', () => {
  it('permite imagens remotas dos domínios usados no site', () => {
    const hostnames = (nextConfig.images?.remotePatterns ?? []).map(
      (pattern) => (pattern as { hostname?: string }).hostname
    );

    // GitHub (foto de perfil) e Credly (badges das certificações)
    expect(hostnames).toContain('avatars.githubusercontent.com');
    expect(hostnames).toContain('images.credly.com');
  });
});
