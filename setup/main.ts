import { ref, computed, type Ref } from "vue";
import { defineAppSetup } from "@slidev/types";
import naive, { darkTheme, lightTheme } from "naive-ui";

function useDarkTheme(): Ref<boolean> {
  const isDark = ref(false);

  if (typeof window !== "undefined") {
    // Initialize with current state
    isDark.value = document.documentElement.classList.contains("dark");

    // Watch for changes in the 'dark' class
    const observer = new MutationObserver(() => {
      isDark.value = document.documentElement.classList.contains("dark");
    });

    // Start observing the html element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  return isDark;
}

export default defineAppSetup(({ app }) => {
  // Set up naive-ui
  app.use(naive);

  // TODO: can this be done by importing CSS?
  // Inject Naive UI styles into <head> element
  if (typeof window !== "undefined") {
    const head = document.head || document.getElementsByTagName("head")[0];
    ["naive-ui-style", "vueuc-style"].forEach((name) => {
      const meta = document.createElement("meta");
      meta.name = name;
      head.appendChild(meta);
    });

    // Manually inject n-config-provider context
    const isDark = useDarkTheme();
    /**
     * !!! IMPORTANT !!!
     * Missing properties here can cause misbehavior of components
     * If components behave unexpectedly, check n-config-provider properties first
     */
    app.provide("n-config-provider", {
      mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
      mergedThemeOverridesRef: ref(), // required
      mergedClsPrefixRef: ref("n"), // required for styles
    });
  }
});
