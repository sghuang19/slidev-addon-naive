import { type App } from "vue";

import { components } from "../setup/preparser.ts";

// FIXME: typecheck to make sure component exists
// FIXME: importing components will attempt to run node only code on browser

const useComponents = async (app: App) => {
  if (components) {
    const module = await import("naive-ui");
    components.value.forEach((name) => {
      app.component(name, module[name]);
    });
  } else {
    // lazy import
    console.info("[Naive] Loading all components without tree-shaking");
    const { default: naive } = await import("naive-ui");
    app.use(naive); // register all components without tree-shaking
  }
};

export default useComponents;
