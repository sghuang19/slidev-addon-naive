import { type ComputedRef, computed, ref } from "vue";

import { debug, getMultiplier } from "./utils.ts";

const fontSize = ref("14px"); // default font size

const multiplier: ComputedRef<number> = computed(() => {
  const newVal = getMultiplier("14px", fontSize.value);
  debug(`[Naive] Multiplier set to ${newVal}`);
  return newVal;
});

export default multiplier;

const setFontSize = () => {
  const element = document.querySelector(".slidev-layout");
  if (element) {
    const computedStyle = window.getComputedStyle(element);
    fontSize.value = computedStyle.fontSize;
    debug("[Naive] Base font size updated:", fontSize.value);
  } else {
    console.error(
      "[Naive] .slidev-layout not found, using default font size (14px)",
    );
  }
};

const observeFontSize = () => {
  // Setup observer for DOM changes and font size changes
  const layoutObserver = new MutationObserver(() => {
    const layout = document.querySelector(".slidev-layout");
    if (!layout) {
      return;
    }

    debug("[Naive] Found .slidev-layout, switching to style observer");
    layoutObserver.disconnect(); // stop observing the document body

    // Create new observers to get updated font size
    const sizeObserver = new ResizeObserver(setFontSize);
    // somehow needed to get styles from UnoCSS @apply directives
    sizeObserver.observe(layout);

    const styleObserver = new MutationObserver(setFontSize);
    // needed to get styles update in runtime
    styleObserver.observe(layout, {
      attributes: true,
      attributeFilter: ["style"],
    });

    setFontSize(); // make an attempt to set the font size
  });

  // Start observing the document body for layout appearance
  layoutObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  debug("[Naive] Watching for .slidev-layout element to show up");
};

if (typeof window === "undefined") {
  console.error(
    `[Naive] Window is undefined, can't observe DOM to set base font size`,
  );
} else {
  observeFontSize();
}
