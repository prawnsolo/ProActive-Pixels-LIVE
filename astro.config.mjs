import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://proactivepixels.com',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/assessment'),
    }),
  ],
});
