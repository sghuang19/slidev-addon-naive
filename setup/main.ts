import naive from "naive-ui";
import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
