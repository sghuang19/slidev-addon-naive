import { type ComputedRef, computed, watch } from "vue";

import { type GlobalThemeOverrides } from "naive-ui";

import baseFontSize from "./useBaseFontSize.ts";
import { deriveSize, getMultiplier } from "./utils.ts";

const multiplier: ComputedRef<number> = computed(() =>
  getMultiplier("14px", baseFontSize.value),
);

// see https://naiveui.com/en-US/os-theme/docs/theme#use-theme-vars
const DEFAULT_FONT_SIZES = {
  "": "14px",
  mini: "12px",
  tiny: "12px",
  small: "14px",
  medium: "14px",
  large: "15px",
  huge: "16px",
} as const;

/** Theme overrides injected to Naive context */
export const themeOverrides: ComputedRef<GlobalThemeOverrides> = computed(
  () => {
    const derivedFontSizes = Object.fromEntries(
      Object.entries(DEFAULT_FONT_SIZES).map(([variant, size]) => [
        `fontSize${variant}`,
        deriveSize(size, multiplier.value),
      ]),
    );

    console.debug("[Naive] Derived font sizes:", derivedFontSizes);

    return { common: derivedFontSizes };
  },
);

const setStyles = () => {
  // set font size variants
  Object.entries(DEFAULT_FONT_SIZES).forEach(([variant, size]) => {
    document.documentElement.style.setProperty(
      `--n-font-size${variant && `-${variant}`}`,
      deriveSize(size, multiplier.value),
    );
  });
};

export default function useStyles() {
  setStyles(); // set initial styles immediately
  watch(multiplier, setStyles);
}
