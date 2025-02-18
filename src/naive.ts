import { type Plugin } from "vue";

import "../style.css";
import components from "./components.ts";
import configProvider from "./config-provider.ts";
import styleInjector from "./style-injector.ts";
import styles from "./styles.ts";

const naive: Plugin = (app) => {
  app.use(components); // register components
  app.use(styleInjector); // inject styles to <head>
  app.use(configProvider); // provide theme overrides
  app.use(styles); // additional style adjustments
};

export default naive;
