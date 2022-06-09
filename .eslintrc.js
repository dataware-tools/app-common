module.exports = {
  extends: [
    "./node_modules/@dataware-tools/dev-deps-for-apps/configs/eslint.config.js",
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/all"],
      rules: {
        // Config for plugin-jest
        // force to use single name
        "jest/consistent-test-it": ["error", { fn: "test" }],
        // incompatible waitFor in @testing-library/react
        "jest/prefer-expect-assertions": "off",
        // Too strict
        "jest/prefer-lowercase-title": "off",
        "jest/no-hooks": "off",
        "jest/require-top-level-describe": "off",

        // Config for plugin-testing-library
        // Too strict
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ],
};
