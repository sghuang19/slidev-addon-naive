import { defineAppSetup } from "@slidev/types";
import naive from "../naive";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
