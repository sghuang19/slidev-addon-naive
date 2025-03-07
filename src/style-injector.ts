import { type Plugin } from "vue";

import { debug } from "./utils";

const styleInjector: Plugin = () => {
  // Inject Naive UI styles into <head> element
  if (typeof window !== "undefined") {
    const head = document.head;
    ["naive-ui-style", "vueuc-style"].forEach((name) => {
      const meta = document.createElement("meta");
      meta.name = name;
      head.appendChild(meta);
    });
    debug("Styles injected to <head>");
  }
};

export default styleInjector;
