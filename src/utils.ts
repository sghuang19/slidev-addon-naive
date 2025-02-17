const parseSize = (size: string): { value: number; unit: string } | null => {
  const match = /^(\d+(?:\.\d+)?)(px|rem|em)$/.exec(size);
  if (!match) {
    console.error("[Naive] Invalid size string:", size);
    return null;
  }
  return {
    value: parseFloat(match[1]),
    unit: match[2],
  };
};

export const deriveSize = (size: string, multiplier: number): string => {
  const parsedSize = parseSize(size);
  if (!parsedSize) {
    console.error(`[Naive] Invalid CSS size ${size}, fall back to base size.`);
    return size;
  }
  const { value, unit } = parsedSize;
  return `${String(
    unit === "px"
      ? Math.round(value * multiplier) // round to integer for px
      : Math.round(value * multiplier * 100) / 100, // round to 2 decimal places for rem | em
  )}${unit}`;
};

export const getMultiplier = (baseSize: string, targetSize: string): number => {
  const parsedBaseSize = parseSize(baseSize);
  const parsedTargetSize = parseSize(targetSize);
  if (!parsedBaseSize || !parsedTargetSize) {
    console.error("[Naive] Fall back to multiplier = 1");
    return 1;
  }
  return parsedTargetSize.value / parsedBaseSize.value;
};
