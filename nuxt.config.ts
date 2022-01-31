import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [{ src: 'https://cdn.tailwindcss.com' }],
  },
  ssr: false,
});
