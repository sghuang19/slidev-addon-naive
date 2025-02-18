import { type Plugin } from "vue";

import "../style.css";
import components from "./components.ts";
import useConfigProvider from "./useConfigProvider.ts";
import useInjectStyle from "./useInjectStyle.ts";
import useStyles from "./useStyles.ts";

const naive: Plugin = (app) => {
  app.use(components); // register components
  useInjectStyle(); // inject styles to <head>
  useConfigProvider(app); // provide theme overrides
  useStyles(); // additional style adjustments
};

export default naive;
