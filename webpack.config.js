var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname,'node_modules');
var buildPath = path.resolve(__dirname,'public','build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');


var config = {

	devTool:'eval',
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		mainPath
	],
	output:{
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module:{
		loaders: [
			{
				test:/\.js$/,
				loaders:['babel'],
				exclude: [nodeModulesPath]
			},
			{
				test:/\.sass$/,
				loaders: ['style','css','sass']
			}
		]
	},
	plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;