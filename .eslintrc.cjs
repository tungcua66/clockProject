module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    camelcase: 'on',
    '@typescript-eslint/naming-convention': 'warn',
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'react/no-danger': 'error',
    'no-empty-pattern': 'warn',
    'react/function-component-definition': 0,
    'react/jsx-uses-react': 0,
    'react-hooks/rules-of-hooks': 'error',
    'max-len': ['warn', 110],
    'no-plusplus': 0,
    'no-console': 'off',
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: ['draft'],
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
