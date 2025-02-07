import { ref, computed } from "vue";
import { darkTheme, lightTheme } from "naive-ui";

import useDarkTheme from "./useDarkTheme.ts";

const useConfigProvider = (app) => {
  // Manually inject n-config-provider context
  const isDark = useDarkTheme();
  app.provide("n-config-provider", {
    mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
    mergedThemeOverridesRef: ref({}), // required
    mergedClsPrefixRef: ref("n"), // required for styles
  });
};

export default useConfigProvider;
