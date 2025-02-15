import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { type Ref, ref } from "vue";

import { definePreparserSetup } from "@slidev/types";

import { green, red } from "kolorist";

const extractComponents = (filepath: string): string[] => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const extractorPath = join(__dirname, "../src/extractor.sh");

  try {
    const output = execSync(`"${extractorPath}" "${filepath}"`, {
      encoding: "utf-8",
      shell: process.platform === "win32" ? "powershell.exe" : undefined,
    });

    const result = output.trim().split("\n");
    console.log(
      green(`  [Naive] Extracted components: ${JSON.stringify(result)}`),
    );

    return result;
  } catch (error) {
    if (!(error instanceof Error)) {
      console.error(
        red(
          `  [Naive] Failed to extract components due to unknown error: \
          ${String(error)}`,
        ),
      );
      return [];
    }

    if (error.name === "EACCES") {
      console.error(
        red(
          "  [Naive] Failed to extract Naive UI components due to permission \
          denied. Make sure the post-install script is executed.",
        ),
      );
    }

    console.error(
      red(`  [Naive] Failed to extract Naive UI components: ${error.message}`),
    );
    return [];
  }
};

export let components: Ref<string[]> | undefined;

// FIXME: preparser is only executed when used as a Slidev addon

// see https://sli.dev/custom/config-parser
export default definePreparserSetup(({ filepath }) => {
  components = ref(extractComponents(filepath));
  return []; // do nothing
});
