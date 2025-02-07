import naive from "naive-ui";

import useConfigProvider from "./useConfigProvider.ts";
import useInjectStyle from "./useInjectStyle.ts";
import useBaseFontSizes from "./useBaseFontSizes.ts";

export default {
  install(app) {
    app.use(naive); // setup Naive UI
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme and overrides
    useBaseFontSizes();
  },
};
