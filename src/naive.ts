import naive from "naive-ui";

import useConfigProvider from "./useConfigProvider";
import useInjectStyle from "./useInjectStyle";

export default {
  install(app) {
    app.use(naive); // setup Naive UI
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme and overrides
  },
};
