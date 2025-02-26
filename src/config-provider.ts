import { type Plugin, computed, ref } from "vue";

import { darkTheme, lightTheme } from "naive-ui";
import { ConfigProviderInjection } from "naive-ui/es/config-provider/src/internal-interface";

import config from "./useConfig";
import isDark from "./useDarkMode";

/**
 * Mimics the design of original Naive UI
 * https://naiveui.com/en-US/os-theme/docs/theme
 */

const { darkThemeOverrides, lightThemeOverrides, ...themeOverrides } =
  config.value;

const configProvider: Plugin = (app) => {
  /* eslint sort-keys: "error" */
  app.provide<Partial<ConfigProviderInjection>>("n-config-provider", {
    mergedClsPrefixRef: ref("n"),
    mergedThemeOverridesRef: computed(() => ({
      ...themeOverrides,
      ...(isDark.value ? darkThemeOverrides : lightThemeOverrides),
    })),
    mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)),
  });
};

export default configProvider;
