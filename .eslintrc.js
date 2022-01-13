module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "standard",
    "standard-jsx",
    "standard-react",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:compat/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "react-hooks",
    "jest",
    "testing-library",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
    },
    jest: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      version: require("jest/package.json").version,
    },
  },
  rules: {
    // Non-exist error  can't be disabled
    "eslint-comments/no-unused-disable": "error",

    // This rule make mean only when using "prop-type" library(https://ja.reactjs.org/docs/typechecking-with-proptypes.html)
    "react/prop-types": "off",

    // rules relating import are recommended that do not use with eslint-plugin-import
    // See: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",

    // Rules relating indentation are recommended that do not use with prettier
    // See https://typescript-eslint.io/docs/linting/troubleshooting#the-indent--typescript-eslintindent-rules
    indent: "off",
    "@typescript-eslint/indent": "off",

    // no-undef rule is strongly recommended that do not use in typescript project
    // See: https://typescript-eslint.io/docs/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    "no-undef": "off",

    // no-use-before-define should be use with disabling eslint same rule
    // See: https://typescript-eslint.io/rules/no-use-before-define/#how-to-use
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    "sort-imports": "off",

    // Sort import statements by alphabet order
    "import/order": ["warn", { alphabetize: { order: "asc" } }],
    "unused-imports/no-unused-imports": "error",
  },
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
        "jest/lowercase-name": "off",
        "jest/no-hooks": "off",
        "jest/require-top-level-describe": "off",

        // Config for plugin-testing-library
        // Too strict
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ],
};
