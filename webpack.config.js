const isDev = process.env.NODE_ENV !== 'production'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: 'file-loader',
        test: /\.(jpg|png|svg)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([{ from: 'src/assets' }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.join(__dirname, '/src/index.html'),
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),
  ],
}

const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

module.exports.serve = {
  add: (app, middleware, options) => {
    app.use(convert(proxy('/api', { target: 'http://localhost:3000' })))
    app.use(convert(history()))
  },
  content: [__dirname],
}
