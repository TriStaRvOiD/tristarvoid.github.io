import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tristarvoid.github.io",
  trailingSlash: "always",
  integrations: [sitemap()],
});
