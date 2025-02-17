import type { App, DefineComponent } from "vue";

import * as naive from "virtual:naive";

const plugin = naive.default;

const useComponents = (app: App) => {
  if (plugin) {
    console.warn("[Naive] Tree-shaking not available");
    app.use(plugin);
  } else {
    Object.entries(naive).forEach(([name, component]) => {
      app.component(name, component as DefineComponent);
    });
  }
};

export default useComponents;
