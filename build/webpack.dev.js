const path = require('path')
const apiMocker = require('mocker-api')
const WebpackMerge = require('webpack-merge')
const Webpack = require('webpack')
const webpackConfig = require('./webpack.common.js')
module.exports = WebpackMerge(webpackConfig, {
	mode: 'development', // 开发模式
	entry: [
		'@babel/polyfill',
		'react-hot-loader/patch',
		path.resolve(__dirname, '../src/main.js')
	],
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port: 3005,
		hot: true,
		contentBase: '../dist',
		open: true,
		before(app) {
			apiMocker(app, path.resolve('./mocker/mocker.js'), {
				proxy: {
					'/api/repos/(.*)': 'http://127.0.0.1:3721/'
				},
				changeHost: true
			})
		}
	},
	plugins: [new Webpack.HotModuleReplacementPlugin()],

	module: {
		rules: [
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                /* include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../node_modules')
				], */
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				/* include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../node_modules')
                ], */
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
