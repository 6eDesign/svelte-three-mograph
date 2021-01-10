module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base/legacy', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'no-multiple-empty-lines': 0,
    'prefer-template': 'error',
  },
};
