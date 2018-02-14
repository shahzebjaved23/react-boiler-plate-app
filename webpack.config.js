var webpack = require('webpack');
const path = require('path');

const config = {
	entry: './new/App.js',
	output:{
		path: path.resolve(__dirname ,'bin/'),
		publicPath: '/bin/',
		filename:'bundle.js'
	},
	module: {
 		loaders: [
    		{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
                    presets: ['es2015','react']
				}
			}
 
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

}

module.exports = config;