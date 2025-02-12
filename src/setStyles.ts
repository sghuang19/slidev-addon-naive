import fontSize from "./useBaseFontSize.ts";

/** Sets styles based on the base font size */
const setStyles = () => {
  const match = fontSize.value.match(/^(\d+(?:\.\d+)?)(px|rem|em)$/);
  if (!match) {
    console.error("[Naive] Invalid font size format:", fontSize.value);
    return;
  }

  const baseSize = parseFloat(match[1]);
  const unit = match[2];

  // Calculate relative sizes
  document.documentElement.style.setProperty(
    "--n-font-size-tiny",
    `${baseSize * 0.75}${unit}`,
  );
  document.documentElement.style.setProperty(
    "--n-font-size-small",
    `${baseSize * 0.875}${unit}`,
  );
  document.documentElement.style.setProperty(
    "--n-font-size",
    `${baseSize}${unit}`,
  );
  document.documentElement.style.setProperty(
    "--n-font-size-medium",
    `${baseSize}${unit}`,
  );
  document.documentElement.style.setProperty(
    "--n-font-size-large",
    `${baseSize * 1.125}${unit}`,
  );
  document.documentElement.style.setProperty(
    "--n-font-size-huge",
    `${baseSize * 1.25}${unit}`,
  );
};

export default setStyles;
