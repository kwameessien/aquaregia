import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  globalIgnores([
    "**/node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Sanity is a separate app (own eslint/tsconfig). Skip studio output + bundles.
    "sanity/**",
  ]),
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
