import { ref } from "vue";

// must be a ref for Naive components to be rendered with overrides
const fontSize = ref("16px"); // default font size

const setBaseFontSize = () => {
  const element = document.querySelector(".slidev-layout");
  if (element) {
    const computedStyle = window.getComputedStyle(element);
    fontSize.value = computedStyle.fontSize;
    console.debug("[Naive] Base font size updated:", fontSize.value);
  } else {
    console.error(
      "[Naive] .slidev-layout not found, using default font size (16px)",
    );
  }
};

const observeBaseFontSize = () => {
  // Setup observer for DOM changes and font size changes
  const layoutObserver = new MutationObserver(() => {
    const layout = document.querySelector(".slidev-layout");
    if (!layout) {
      return;
    }

    console.debug("[Naive] Found .slidev-layout, switching to style observer");
    layoutObserver.disconnect(); // stop observing the document body

    // Create new observers to get updated font size
    const sizeObserver = new ResizeObserver(setBaseFontSize);
    // somehow needed to get styles from UnoCSS @apply directives
    sizeObserver.observe(layout);

    const styleObserver = new MutationObserver(setBaseFontSize);
    // needed to get styles update in runtime
    styleObserver.observe(layout, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // TODO: this won't change font size in runtime. a polling approach can be
    // used, but I'm hesitating because of performance concerns

    setBaseFontSize(); // make an attempt to set the font size
  });

  // Start observing the document body for layout appearance
  layoutObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.debug("[Naive] Watching for .slidev-layout element to show up");
};

if (typeof window === "undefined") {
  console.error(
    `[Naive] Window is undefined, can't observe DOM to set base font size`,
  );
} else {
  observeBaseFontSize();
}

export default fontSize;
