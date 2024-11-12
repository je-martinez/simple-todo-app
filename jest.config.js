export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Optional: Ignore any other unwanted directories
  testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
