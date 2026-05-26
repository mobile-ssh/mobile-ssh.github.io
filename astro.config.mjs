import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mobile-ssh.github.io",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en", "zh", "hi", "es", "fr", "ar", "bn", "pt", "ru", "ur",
      "id", "de", "ja", "pcm", "arz", "mr", "te", "tr", "ta", "yue"
    ],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()]
});
