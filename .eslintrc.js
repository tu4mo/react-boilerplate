module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:testcafe/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  plugins: ['jsx-a11y', 'testcafe'],
  rules: {
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }]
  }
}
