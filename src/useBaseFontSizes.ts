import { ref, type Ref } from "vue";

const fontSize = ref("16px"); // default font size

const updateBaseFontSize = () => {
  const element = document.querySelector(".slidev-layout");
  if (element) {
    const computedStyle = window.getComputedStyle(element);
    fontSize.value = computedStyle.fontSize;
    console.debug("[Naive] Base font size:", fontSize.value);
  } else {
    console.error(
      "[Naive] .slidev-layout element not found, using default font size",
    );
  }
};

const useBaseFontSizes = (): Ref<string> => {
  if (typeof window === "undefined") {
    console.error(
      "[Naive] Window is undefined, can't observe DOM to set base font size, defaulting to 16px",
    );
    return fontSize;
  }

  // Setup observer for DOM changes
  const observer = new MutationObserver(() => {
    const slidevLayout = document.querySelector(".slidev-layout");

    if (slidevLayout) {
      console.debug("[Naive] Found .slidev-layout");
      observer.disconnect(); // stop observing the document body
      updateBaseFontSize();
    }
  });

  // Start observing the document body for layout appearance
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.debug("[Naive] Watching for .slidev-layout element to show up");

  return fontSize;
};

export default useBaseFontSizes;
