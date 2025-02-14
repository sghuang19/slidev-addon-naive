const parseSize = (size: string): { value: number; unit: string } | null => {
  const match = size.match(/^(\d+(?:\.\d+)?)(px|rem|em)$/);
  if (!match) {
    console.error(`[Naive] Invalid size string: ${size}`);
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
  return `${
    unit === "px"
      ? Math.round(value * multiplier) // round to integer for px
      : Math.round(value * multiplier * 100) / 100 // round to 2 decimal places for rem | em
  }${unit}`;
};
