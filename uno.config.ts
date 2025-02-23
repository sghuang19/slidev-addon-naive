/*
 * - https://sli.dev/custom/config-unocss
 * - https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts
 */
import { defineConfig, presetWind3 } from "unocss";

// Makes UnoCSS override Naive UI styles. This is needed for some UnoCSS
// utility classes to take effect without adding ! prefix
export default defineConfig({ presets: [presetWind3({ important: true })] });
