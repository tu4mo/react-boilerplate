module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
      !api.env('production') && 'react-refresh/babel'
    ].filter(Boolean)
  }
}
