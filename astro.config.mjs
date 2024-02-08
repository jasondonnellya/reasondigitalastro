import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [vue({
    appEntrypoint: '/src/main',
    // https://github.com/withastro/astro/issues/9328
    template: {
      transformAssetUrls: {
        includeAbsolute: false,
      },
    }
  })],
});