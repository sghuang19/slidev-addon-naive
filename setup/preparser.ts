import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { definePreparserSetup } from "@slidev/types";

import { green, red } from "kolorist";

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
    console.log(
      green(`  [Naive] Extracted components: ${JSON.stringify(result)}`),
    );

    return result;
  } catch (error) {
    console.error(
      red(
        `  [Naive] Failed to extract Naive UI components: ${(error as Error).message}`,
      ),
    );
    return [];
  }
};

// see https://sli.dev/custom/config-parser
export default definePreparserSetup(({ filepath }) => {
  extractComponents(filepath);
  return []; // do nothing
});
