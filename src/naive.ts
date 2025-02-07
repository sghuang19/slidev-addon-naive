import { ref, computed } from "vue";
import naive, { darkTheme, lightTheme } from "naive-ui";

import useDarkTheme from "./useDarkTheme";

export default {
  install(app) {
    // Set up naive-ui
    app.use(naive);

    // Inject Naive UI styles into <head> element
    if (typeof window !== "undefined") {
      const head = document.head;
      ["naive-ui-style", "vueuc-style"].forEach((name) => {
        const meta = document.createElement("meta");
        meta.name = name;
        head.appendChild(meta);
      });
    }

    // Manually inject n-config-provider context
    const isDark = useDarkTheme();
    app.provide("n-config-provider", {
      mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
      mergedThemeOverridesRef: ref({}), // required
      mergedClsPrefixRef: ref("n"), // required for styles
    });
  },
};
