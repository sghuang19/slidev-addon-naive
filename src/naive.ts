import { type App } from "vue";

import "../style.css";
import useComponents from "./useComponents.ts";
import useConfigProvider from "./useConfigProvider.ts";
import useInjectStyle from "./useInjectStyle.ts";
import useStyles from "./useStyles.ts";

export default {
  install(app: App) {
    useComponents(app); // register components
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme overrides
    useStyles(); // additional style adjustments
  },
};
