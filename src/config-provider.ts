import { type Plugin, computed, ref } from "vue";

import { darkTheme, lightTheme } from "naive-ui";
import { ConfigProviderInjection } from "naive-ui/es/config-provider/src/internal-interface";

import { themeOverrides } from "./styles";
import isDark from "./useDarkMode";

/**
 * I'm trying to mimic the design of original Naive UI, which can be found by
 * checking default theme variables or inspecting Naive UI website.
 *
 * https://www.naiveui.com/en-US/docs/theme
 */

const configProvider: Plugin = (app) => {
  // Manually inject n-config-provider context
  app.provide(
    "n-config-provider",
    /* eslint sort-keys: "error" */
    {
      mergedClsPrefixRef: ref("n"), // required for styles
      mergedNamespaceRef: ref(), // required for popovers to be rendered
      mergedThemeOverridesRef: themeOverrides, // required
      mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
    } as Partial<ConfigProviderInjection>,
  );
};

export default configProvider;
