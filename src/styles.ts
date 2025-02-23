import { type ComputedRef, type Plugin, computed, watch } from "vue";

import { type GlobalThemeOverrides } from "naive-ui";

import multiplier from "./useMultiplier.ts";
import { deriveSize } from "./utils.ts";

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
        `fontSize${variant.charAt(0).toUpperCase() + variant.slice(1)}`,
        deriveSize(size, multiplier.value),
      ]),
    );

    console.debug("[Naive] Derived font sizes:", derivedFontSizes);

    return { common: derivedFontSizes };
  },
);

/** Styles set directly in DOM */
const setStyles = () => {
  // set font size variants
  Object.entries(DEFAULT_FONT_SIZES).forEach(([variant, size]) => {
    document.documentElement.style.setProperty(
      `--n-font-size${variant && `-${variant}`}`,
      deriveSize(size, multiplier.value),
    );
  });

  // set icon size
  const iconSize = deriveSize("24px", multiplier.value);
  document.documentElement.style.setProperty(
    "--n-icon-size",
    `${iconSize} !important`,
  );

  // also needed since Alert has inline styles
  const style = document.createElement("style");
  style.textContent = `.n-alert { --n-icon-size: ${iconSize} !important; }`;
  document.head.appendChild(style);
};

const styles: Plugin = () => {
  setStyles(); // set initial styles immediately
  watch(multiplier, setStyles);
};

export default styles;
