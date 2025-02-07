import { ref, type Ref } from "vue";

const useDarkTheme = (): Ref<boolean> => {
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
};

export default useDarkTheme;
