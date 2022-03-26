const isDev = process.env.NODE_ENV !== 'production'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devServer: {
    hot: true
  },
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(js|ts|tsx)$/
      },
      {
        loader: 'file-loader',
        test: /\.(jpg|png|svg)$/
      }
    ]
  },
  plugins: [
    isDev && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/assets' }] }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/)
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
