module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "jest"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off",
  },
};
