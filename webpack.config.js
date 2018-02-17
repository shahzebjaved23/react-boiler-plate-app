var webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		        	plugins: [
						"transform-class-properties",
						"transform-decorators-legacy"
					],
					presets: ['es2015', 'react'],
		        }
		    },	
        	{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass'), 
          	}
        ]
    },

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('/fuck.css', {
            allChunks: true
        })
	]

}

module.exports = config;