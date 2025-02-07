import { ref, type Ref } from "vue";

const fontSize = ref("16px"); // default font size

const updateFontSize = () => {
  const element = document.querySelector(".slidev-layout");
  if (element) {
    const computedStyles = window.getComputedStyle(element);
    fontSize.value = computedStyles.fontSize;
    console.debug("[Naive] Base font size:", fontSize.value);
  }
};

const useBaseFontSizes = (): Ref<string> => {
  if (typeof window === "undefined") {
    console.error(
      "[Naive] Window is undefined, can't observe DOM to set base font size, defaulting to 16px",
    );
    return fontSize;
  }

  let observer: MutationObserver | null = null;

  // Setup observer for DOM changes
  observer = new MutationObserver((mutations) => {
    const slidevLayout = document.querySelector(".slidev-layout");

    if (slidevLayout) {
      console.debug(
        "[Naive] Found .slidev-layout, switching to style observation",
      );
      // Stop observing the document body
      observer?.disconnect();

      // Start observing the specific element for style changes
      observer?.observe(slidevLayout, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }
  });

  // Start observing the document body for element appearance
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.debug(
    "[Naive] Watching for .slidev-layout element to set base font size",
  );

  return fontSize;
};

export default useBaseFontSizes;
