import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ryanmichaelhirst.us",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
