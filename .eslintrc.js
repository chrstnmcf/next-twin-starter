module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'next', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'next',
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        // allow twin.macro as devDependency
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'internal',
              },
            ],
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
