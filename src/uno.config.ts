/*
 * Slidev uses presetUno by default, see:
 *
 * - https://sli.dev/custom/config-unocss
 * - https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts
 *
 * However, the "important" option is only available in presetWind
 *
 */

import { defineConfig, presetWind } from "unocss";

export default defineConfig({
  presets: [
    presetWind({
      important: ":root", // makes UnoCSS override Naive UI styles
    }),
  ],
});
