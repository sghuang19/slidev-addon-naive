import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { definePreparserSetup } from "@slidev/types";

import naive from "naive-ui";

const extractComponents = (filepath: string): string[] => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const extractorPath = join(__dirname, "../src/extractor.sh");

  const output = execSync(`"${extractorPath}" "${filepath}"`, {
    encoding: "utf-8",
    shell: process.platform === "win32" ? "powershell.exe" : undefined,
  });

  return output.trim().split("\n");
};

// see https://sli.dev/custom/config-parser
export default definePreparserSetup(({ filepath }) => {
  try {
    process.env.NAIVE_COMPONENTS = extractComponents(filepath)
      .filter((component) => component in naive)
      .toString();
  } catch (error) {
    console.error(
      "  [Naive] Failed to extract Naive UI components, tree-shaking disabled:",
      error,
    );
  }
  return []; // do nothing
});
