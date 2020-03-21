const path = require('path');
const WebpackMerge = require('webpack-merge')
const webpackConfig = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = WebpackMerge(webpackConfig,{
    entry: ["@babel/polyfill",path.resolve(__dirname,'../src/main.js'),path.resolve(__dirname,'../src/utils/setRem.js')],
    mode:'production',
    devtool:'cheap-module-source-map',
    plugins:[
        
      new CopyWebpackPlugin([{
        from:path.resolve(__dirname,'../public'),
        to:path.resolve(__dirname,'../dist')
      }]),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
    ],
    module:{
      rules:[
        {
          test:/\.css$/,
          include:[path.resolve(__dirname,'../src')],
          exclude:/node_modules/,
          use:[
            MiniCssExtractPlugin.loader,            
            'css-loader'                     
            ],
                        
        },
        {
          test:/\.less$/,
          include:[path.resolve(__dirname,'../src')],
          exclude:/node_modules/,
          use:[
             MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader']
        }
      ]
    },
    optimization:{
     minimizer:[
        new UglifyJsPlugin({//压缩js
          cache:true,
          parallel:true,
          sourceMap:true
      }),
      new OptimizeCssAssetsPlugin({})
      ],
      splitChunks:{
        chunks:'all',
        cacheGroups:{
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // 只打包初始时依赖的第三方
          }
        }
      }
    }
  })