import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [vue({
    appEntrypoint: '/src/main',
    // https://github.com/withastro/astro/issues/9328
    template: {
      transformAssetUrls: {
        includeAbsolute: false,
      },
    }
  })],
  adapter: cloudflare({
    mode: 'directory',
    routes: {
      strategy: 'include',
      include: ['/index.html'],
    },
  })
});