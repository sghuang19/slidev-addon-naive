import { type Plugin, defineConfig } from "vite";

const naivePlugin = (): Plugin => {
  const virtualModuleId = "virtual:naive";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "naive",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return (
          `export { ${
            globalThis.__SLIDEV_NAIVE_COMPONENTS__?.join(",") ?? "default"
          } } from "naive-ui";` +
          `export const config = ${JSON.stringify(globalThis.__SLIDEV_NAIVE_CONFIG__)};`
        );
      }
    },
  };
};

export default defineConfig({
  plugins: [naivePlugin()],
});
