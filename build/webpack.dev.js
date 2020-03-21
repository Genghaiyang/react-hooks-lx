const path = require('path')
const WebpackMerge = require('webpack-merge')
const Webpack = require('webpack')
const webpackConfig = require('./webpack.common.js')
module.exports = WebpackMerge(webpackConfig, {
  mode: 'development', // 开发模式
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/main.js')
    // path.resolve(__dirname,'../src/utils/setRem.js'),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3005,
    hot: true,
    contentBase: '../dist',
    open: true
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
})
