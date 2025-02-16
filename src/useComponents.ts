import { type App } from "vue";

import * as naive from "virtual:naive";

// FIXME: typecheck to make sure component exists

const useComponents = (app: App) => {
  Object.entries(naive).forEach(([name, component]) => {
    app.component(name, component);
  });
};

export default useComponents;
