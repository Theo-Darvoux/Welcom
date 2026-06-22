// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    // Order here = display order in the language selector.
    locales: ["en", "fr", "es", "pt-BR", "zh-CN", "zh-TW", "hi", "vi", "ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
