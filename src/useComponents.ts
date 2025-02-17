import type { App, DefineComponent, Plugin } from "vue";

import * as naive from "virtual:naive";

const useComponents = (app: App) => {
  if (naive.default) {
    console.warn("[Naive] Tree-shaking not available");
    app.use(naive.default as Plugin<[]>);
  } else {
    Object.entries(naive).forEach(([name, component]) => {
      app.component(name, component as DefineComponent);
    });
  }
};

export default useComponents;
