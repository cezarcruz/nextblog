import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  // CSS is irrelevant to unit tests and the app's PostCSS/Tailwind pipeline is
  // not resolvable outside of Next.js, so skip it entirely.
  css: {
    postcss: { plugins: [] },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});

