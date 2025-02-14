import { type App, computed, ref } from "vue";

import { darkTheme, lightTheme } from "naive-ui";
import { ConfigProviderInjection } from "naive-ui/es/config-provider/src/internal-interface.js";

import isDark from "./useDarkTheme.ts";
import { themeOverrides } from "./useStyles.ts";

/**
 * I'm trying to mimic the design of original Naive UI, which can be found by
 * checking default theme variables or inspecting Naive UI website.
 *
 * https://www.naiveui.com/en-US/docs/theme
 */

const useConfigProvider = (app: App) => {
  // Manually inject n-config-provider context
  app.provide("n-config-provider", {
    mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
    mergedThemeOverridesRef: themeOverrides, // required
    mergedClsPrefixRef: ref("n"), // required for styles
  } as Partial<ConfigProviderInjection>);
};

export default useConfigProvider;
