import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github";

// Reemplaza con el nombre de tu repo
const repo = "Jhan.github.io";

export default defineConfig({
  site: `https://tu-usuario.github.io/${repo}`,
  base: `/${repo}/`, // Importante para GitHub Pages
  output: "static",
  adapter: github(),
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
