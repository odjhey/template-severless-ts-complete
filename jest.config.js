module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@functions/(.*)$": "<rootDir>/src/functions/$1",
    "^@libs/(.*)$": "<rootDir>/src/libs/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/fixtures"],
};
