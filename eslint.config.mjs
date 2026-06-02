// Minimal flat config for ESLint 10 — uses Next.js's official Next plugin
// directly (which works with ESLint 10) and skips eslint-plugin-react for
// now, since 7.37.x has a compat bug with ESLint 10's new context API.
// This will be re-enabled once Next.js bumps the react plugin dep.
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', '.vercel/**', 'next-env.d.ts'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];
