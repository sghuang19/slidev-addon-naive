import { expect, test } from "vitest";

import { extractComponents } from "../setup/preparser.ts";

test("components extraction", () => {
  expect(extractComponents("__test__/test.md")).toEqual(
    ["NButton", "NButtonGroup", "NAlert", "NConfigProvider"].sort(),
  );
});
