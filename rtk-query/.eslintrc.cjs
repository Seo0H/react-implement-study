module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '^react*,',
            patternOptions: {
              matchBase: true,
            },
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '*.svg',
            patternOptions: {
              matchBase: true,
            },
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'internal'],
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'index'],
          ['sibling', 'type', 'object'],
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-console': 'warn',
    'no-unused-vars': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: './src',
      },
      node: {
        extension: ['.ts', '.tsx'],
      },
    },
  },
};
