import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { defineConfig } from "vite";
import type { Plugin } from "vite";

import { visualizer } from "rollup-plugin-visualizer";

const naive = (): Plugin => {
  const virtualModuleId = "virtual:naive";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "naive-components",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const components = JSON.parse(
          readFileSync(join(tmpdir(), "slidev-addon-naive.json"), "utf-8"),
        ) as string[];
        return `export { ${components.join(", ")} } from "naive-ui";`;
      }
    },
  };
};

export default defineConfig({
  plugins: [naive(), visualizer({ open: true, gzipSize: true })],
});
