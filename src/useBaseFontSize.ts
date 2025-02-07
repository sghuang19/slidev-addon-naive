import { ref } from "vue";

// must be a ref for Naive components to be rendered with overrides
const fontSize = ref("16px"); // default font size

const setBaseFontSize = () => {
  const element = document.querySelector(".slidev-layout");
  if (element) {
    const computedStyle = window.getComputedStyle(element);
    fontSize.value = computedStyle.fontSize;
    console.debug("[Naive] Base font size:", fontSize.value);
  } else {
    console.error(
      "[Naive] .slidev-layout not found, using default font size (16px)",
    );
  }
};

if (typeof window === "undefined") {
  console.error(
    `[Naive] Window is undefined, can't observe DOM to set base font size`,
  );
} else {
  // Setup observer for DOM changes
  const observer = new MutationObserver(() => {
    const slidevLayout = document.querySelector(".slidev-layout");

    if (slidevLayout) {
      console.debug("[Naive] Found .slidev-layout");
      observer.disconnect(); // stop observing the document body
      setBaseFontSize();
    }
  });

  // Start observing the document body for layout appearance
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.debug("[Naive] Watching for .slidev-layout element to show up");
}

export default fontSize;
