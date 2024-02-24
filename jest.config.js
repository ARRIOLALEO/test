module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    preset: "ts-jest/presets/js-with-babel",
    transformIgnorePatterns: ["/node_modules/(?!(@bundled-es-modules)/)"],
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    }
  };