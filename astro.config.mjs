// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://welcom-int.fr",
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: "en",
    // Order here = display order in the language selector.
    locales: ["en", "fr", "es", "pt-BR", "zh-CN", "zh-TW", "hi", "vi", "ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
