// see https://sli.dev/custom/config-parser
import { definePreparserSetup } from "@slidev/types";

import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const extractComponents = (filepath: string): string[] => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const extractorPath = join(__dirname, "../src/extractor.sh");

  try {
    execSync(`chmod +x ${extractorPath}`);
    const output = execSync(`"${extractorPath}" "${filepath}"`, {
      encoding: "utf-8",
    });

    const result = output.trim().split("\n");
    console.log(`  [Naive] Extracted components: ${JSON.stringify(result)}`);

    return result;
  } catch (error) {
    console.error(
      `  [Naive] Failed to extract Naive UI components: ${(error as Error).message}`,
    );
    return [];
  }
};

export default definePreparserSetup(({ filepath }) => {
  extractComponents(filepath);
  return []; // do nothing
});
