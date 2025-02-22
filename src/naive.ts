import { type App } from "vue";

import "../style.css";
import useComponents from "./useComponents";
import useConfigProvider from "./useConfigProvider";
import useInjectStyle from "./useInjectStyle";
import useStyles from "./useStyles";

export default {
  install(app: App) {
    useComponents(app); // register components
    useInjectStyle(); // inject styles to <head>
    useConfigProvider(app); // provide theme overrides
    useStyles(); // additional style adjustments
  },
};
