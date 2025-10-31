import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)", "**/?(*.)+(spec|test).[tj]sx?"],
  setupFilesAfterEnv: ["<rootDir>/lib/test/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^msw/node$": "<rootDir>/node_modules/msw/lib/node/index.js",
    "^msw/browser$": "<rootDir>/node_modules/msw/lib/browser/index.js",
    "^@mswjs/interceptors/(.*)$": "<rootDir>/node_modules/@mswjs/interceptors/lib/node/interceptors/$1/index.js",
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/lib/api/generated/**",
    "!**/dist/**",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "tsconfig.json",
    },
  },
  transformIgnorePatterns: [],
};

export default config;
