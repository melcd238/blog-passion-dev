
const jestConfig = {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    //collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    }
  }

module.exports = jestConfig
  