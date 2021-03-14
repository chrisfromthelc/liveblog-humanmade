var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'eval',
	entry: [
		'whatwg-fetch',
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				include: /node_modules\/react-components\//,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
