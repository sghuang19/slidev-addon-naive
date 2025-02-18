import { type Plugin } from "vue";

import * as naive from "virtual:naive";

const plugin = naive.default;

const components: Plugin = (app) => {
  if (plugin) {
    console.warn("[Naive] Tree-shaking not available");
    app.use(plugin);
  } else {
    Object.entries(naive).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};

export default components;
