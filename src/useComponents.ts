import { type App } from "vue";

import * as naive from "virtual:naive";

// FIXME: typecheck to make sure component exists

const useComponents = (app: App) => {
  if (naive.default) {
    console.warn("[Naive] Tree-shaking not available");
    app.use(naive.default);
  } else {
    Object.entries(naive).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};

export default useComponents;
