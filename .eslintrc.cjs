module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: ["eslint:recommended", "airbnb", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "react-hooks", "cypress"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    quotes: ["error", "single"],
  },
};
