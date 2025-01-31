import naive from "naive-ui";
import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ app }) => {
  app.use(naive);
  if (typeof window !== "undefined") {
    const head = document.head || document.getElementsByTagName("head")[0];
    ["naive-ui-style", "vueuc-style"].forEach(name => {
      const meta = document.createElement("meta");
      meta.name = name;
      head.appendChild(meta);
    });
  }
});
