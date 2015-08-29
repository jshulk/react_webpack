var path = require("path"),
	node_modules = path.resolve(__dirname, 'node_modules'),
	webpack = require("webpack"),
	pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		 path.resolve(__dirname, 'app/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, //accepts either js or jsx
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'app')
			},
			{
				test: /\.css$/,
				loader: 'style!css'	
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;