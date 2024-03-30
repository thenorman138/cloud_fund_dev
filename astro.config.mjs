import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),lottie(),],
  output: "server",
  adapter: netlify()
});