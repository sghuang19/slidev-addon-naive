import type { Linter } from "eslint";

import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";

const config = [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  // @ts-expect-error TSEslint config type not compatible yet
  ...ts.configs.recommendedTypeChecked,
  // @ts-expect-error vue config type not compatible yet
  ...vue.configs["flat/recommended"],
] satisfies Linter.Config[];

export default config;
