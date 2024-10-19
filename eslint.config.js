import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    extends: ['@mate-academy/eslint-config-react-typescript']
  }
];