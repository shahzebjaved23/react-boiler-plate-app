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
		        test: /\.js$/, // Support decorators for fontkit module
		        loader: 'babel-loader',
		        query:
		        {
		          plugins:
		          [
		            "transform-class-properties",
  					"transform-decorators-legacy"
		          ],
		          presets: ['es2015', 'react'],
		        }
		      },
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

}

module.exports = config;