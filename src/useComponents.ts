import { type App } from "vue";

import { components } from "virtual:naive-components";

declare module "virtual:naive-components" {
  export const components: string[];
}

console.error(components);

// FIXME: typecheck to make sure component exists
// FIXME: importing components will attempt to run node only code on browser

const useComponents = async (app: App) => {
  if (import.meta.env.DEV) {
    // no-need for tree-shaking in dev environment or when extraction failed
    app.use((await import("naive-ui")).default);
    return;
  }
  // register components extracted
  const naive = await import("naive-ui");
  components.forEach((name) => {
    app.component(name, naive[name]);
  });
};

export default useComponents;
