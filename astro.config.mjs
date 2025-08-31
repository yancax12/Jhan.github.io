import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const repo = "Jhan.github.io"; // tu repo de GitHub

export default defineConfig({
  site: `https://tu-usuario.github.io/${repo}`,
  base: `/${repo}/`,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});
