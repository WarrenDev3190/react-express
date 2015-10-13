var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname,'..','app','main.js');

module.exports = function(){
	// Pass in the config
	var bundleStart = null;
	var compiler = Webpack(webpackConfig);

	//Give notice in terminal when it starts bundle
	//and time it started
	compiler.plugin('compile',function(){
		console.log('Bundling...');
		bundleStart = Date.now();
	});

	compiler.plugin('done',function(){
		console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
	});

	var bundler = new WebpackDevServer(compiler, {
		publicPath: '/build/',
		hot: true,
		quiet: false,
		noInfo: true,
		stats:{
			colors: true
		}
	});

	bundler.listen(8080, 'localhost', function(){
		console.log('Building project, please wait...');
	});
}