import { computed, watch } from "vue";

import baseFontSize from "./useBaseFontSize.ts";
import { deriveSize } from "./utils.ts";

const fontSizeMultipliers = {
  tiny: 0.75,
  small: 0.875,
  default: 1,
  medium: 1,
  large: 1.125,
  huge: 1.25,
};

/** Theme overrides injected to Naive context */
export const themeOverrides = computed(() => {
  const derivedFontSizes = Object.fromEntries(
    Object.entries(fontSizeMultipliers).map(([variant, multiplier]) => [
      `fontSize${variant === "default" ? "" : variant[0].toUpperCase() + variant.slice(1)}`,
      deriveSize(baseFontSize.value, multiplier),
    ]),
  );

  console.debug("[Naive] Derived font sizes:", derivedFontSizes);

  return { common: derivedFontSizes };
});

const setStyles = () => {
  // set font size variants
  Object.entries(fontSizeMultipliers).forEach(([variant, multiplier]) => {
    document.documentElement.style.setProperty(
      `--n-font-size${variant === "default" ? "" : `-${variant}`}`,
      deriveSize(baseFontSize.value, multiplier),
    );
  });
};

export default function useStyles() {
  setStyles(); // set initial styles immediately
  watch(baseFontSize, setStyles);
}
