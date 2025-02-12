import { type App } from "vue";

import naive from "naive-ui";

import useConfigProvider from "./useConfigProvider.ts";
import useInjectStyle from "./useInjectStyle.ts";
import useStyles from "./useStyles.ts";

import "../style.css";

export default {
  install(app: App) {
    app.use(naive); // setup Naive UI
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme overrides
    useStyles(); // additional style adjustments
  },
};
