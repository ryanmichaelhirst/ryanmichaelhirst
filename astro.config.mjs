import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryanmichaelhirst.us',
  integrations: [react(), sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['flubber'],
    },
    ssr: {
      noExternal: ['flubber'],
    },
    build: {
      commonjsOptions: {
        include: [/flubber/, /node_modules/],
      },
    },
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
