module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb-typescript",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest-dom/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:testing-library/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: [
    "**/dist/*",
    "node_modules/",
    "**/*.css",
  ],
  rules: {
    "react/style-prop-object": "off", // This interferes with React aria component style prop
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/indent": [
      "error",
      4
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-inferrable-types": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "indent": "off",
    "max-len": [
      "error",
      200
    ],
    "no-console": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-use-before-define": "off",
    "object-curly-newline": [
      "error",
      {
        "ObjectPattern": {
          "minProperties": 3,
          "multiline": true
        },
        "ExportDeclaration": {
          "minProperties": 3,
          "multiline": true
        },
        "ImportDeclaration": {
          "minProperties": 3,
          "multiline": true
        }
      }
    ],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline"
    ],
    "react/jsx-indent": [
      "error",
      4
    ],
    "react/jsx-indent-props": [
      "error",
      4
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 2
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "jsx-quotes": ["error", "prefer-double"],
  }
};