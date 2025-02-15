import { type App } from "vue";

import "../style.css";
import useComponents from "./useComponents.ts";
import useConfigProvider from "./useConfigProvider.ts";
import useInjectStyle from "./useInjectStyle.ts";
import useStyles from "./useStyles.ts";

export default {
  async install(app: App) {
    await useComponents(app); // register components
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme overrides
    useStyles(); // additional style adjustments
  },
};
