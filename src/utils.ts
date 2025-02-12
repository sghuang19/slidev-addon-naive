export const deriveSize = (baseSize: string, multiplier: number): string => {
  const match = baseSize.match(/^(\d+(?:\.\d+)?)(px|rem|em)$/);
  if (!match) {
    console.error(
      "[Naive] Invalid CSS size, fall back to base size:",
      baseSize,
    );
    return baseSize;
  }

  const baseSizeValue = parseFloat(match[1]);
  const unit = match[2];
  const newSizeValue = Math.round(baseSizeValue * multiplier);

  return `${newSizeValue}${unit}`;
};
