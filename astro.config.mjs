// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://anyelineabarca09.github.io',
  vite: /** @type {any} */ ({
    plugins: [tailwindcss()]
  }),
  integrations: [icon()]
});