import { defineAppSetup } from "@slidev/types";
import naive from "slidev-addon-naive";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
