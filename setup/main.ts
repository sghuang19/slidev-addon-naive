import { defineAppSetup } from "@slidev/types";

import naive from "../src/index";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
