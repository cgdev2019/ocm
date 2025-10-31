import js from "@eslint/js";
import testingLibrary from "eslint-plugin-testing-library";
import jestPlugin from "eslint-plugin-jest";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const config = defineConfig([
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@next/next/no-img-element": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-restricted-imports": [
        "error",
        {
          paths: [],
          patterns: [
            {
              group: ["../*"],
              message:
                "Utilise les alias @/ pour les imports transverses afin de garder une structure stable.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/__tests__/**/*", "**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    plugins: {
      "testing-library": testingLibrary,
      jest: jestPlugin,
    },
    rules: {
      ...testingLibrary.configs.dom.rules,
      ...jestPlugin.configs["flat/recommended"].rules,
    },
  },
  {
    files: ['tests/e2e/**/*.ts'],
    rules: {
      'testing-library/prefer-screen-queries': 'off',
      'testing-library/prefer-user-event': 'off',
    },
  },
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "playwright-report/**",
    "next-env.d.ts",
  ]),
]);

export default config;
