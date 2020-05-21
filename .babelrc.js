module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    'react-hot-loader/babel',
  ],
}
