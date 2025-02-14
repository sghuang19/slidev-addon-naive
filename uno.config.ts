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

// Makes UnoCSS override Naive UI styles. This is needed for some UnoCSS
// utility classes to take effect without adding ! prefix
export default defineConfig({ presets: [presetWind({ important: true })] });
