import { defineAppSetup } from "@slidev/types";

import naive from "../src/index.ts";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
