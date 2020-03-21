const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const devMode = process.argv.indexOf('--mode=production') === -1;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // mode:'development', // 开发模式

  output: {
    filename: '[name].[hash:8].js',      // 打包后的文件名称
    path: path.resolve(__dirname, '../dist')  // 打包后的目录
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin(),
    // new Webpack.HotModuleReplacementPlugin()
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })

  ],
  module: {
    rules: [

      {
        test: /\.(jpe?g|png|gif)$/i, // 图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/icon')],
        exclude: /node_modules/
      },

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/media')],
        exclude: /node_modules/
      },

      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/font')],
        exclude: /node_modules/
      },

      {
        test: /\.jsx?$/,

        /* use:{
                  loader:'babel-loader',

                }, */
        use: [
          'babel-loader',
          // 'eslint-loader',
        ],
        exclude: /node_modules/,
        include: /src/
      },
    ]
  }
}
