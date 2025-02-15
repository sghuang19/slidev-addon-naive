// vite.config.ts
import { defineConfig } from "vite";
import type { Plugin } from "vite";

import { components } from "./setup/preparser.ts";

const naive = (): Plugin => {
  const virtualModuleId = "virtual:naive-components";
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
        // FIXME: virtual modules works, but this line is run before value is set
        return `export const components = ${JSON.stringify(components.value)}`;
      }
    },
  };
};

export default defineConfig({
  plugins: [naive()],
});
