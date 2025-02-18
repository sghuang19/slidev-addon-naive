import { ref } from "vue";

const isDark = ref(false);

export default isDark;

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
