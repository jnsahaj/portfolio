import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://iamsahaj.xyz",
    integrations: [tailwind(), react(), icon(), mdx()],
    image: {
        service: passthroughImageService(),
    },
});
