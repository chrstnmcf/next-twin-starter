module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
  },
};
