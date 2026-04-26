import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mobile-ssh.github.io",
  integrations: [sitemap()]
});
