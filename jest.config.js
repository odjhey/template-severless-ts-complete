const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  preset: "@shelf/jest-mongodb",
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: {
    "^@functions/(.*)$": "<rootDir>/src/functions/$1",
    "^@libs/(.*)$": "<rootDir>/src/libs/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/fixtures"],
};
