import type { Linter } from "eslint";

import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";

const config = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        // required for type-checking rules
        project: true, // uses tsconfig.json
      },
    },
  },
  js.configs.recommended,
  // @ts-expect-error TSEslint config type not compatible yet
  ...ts.configs.recommendedTypeChecked,
  // @ts-expect-error vue config type not compatible yet
  ...vue.configs["flat/recommended"],
] satisfies Linter.Config[];

export default config;
