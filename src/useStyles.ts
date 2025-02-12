import { watch } from "vue";

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

const setStyles = () => {
  // set font size variants
  Object.entries(fontSizeMultipliers).forEach(([variant, multiplier]) => {
    document.documentElement.style.setProperty(
      variant === "default" ? "--n-font-size" : `--n-font-size-${variant}`,
      deriveSize(baseFontSize.value, multiplier),
    );
  });
};

export default function useStyles() {
  setStyles(); // set initial styles immediately
  watch(baseFontSize, setStyles);
}
