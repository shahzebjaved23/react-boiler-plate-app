var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: './new/App.js',
	output:{
		path: path.resolve(__dirname ,'bin/'),
		publicPath: '/bin/',
		filename:'bundle.js'
	},

	module: {
        rules: [
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
                use: ExtractTextPlugin.extract('css!scss'), 
          	}
        ]
    },

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('stye.css', {
            allChunks: true
        })
	],

	resolve : { 
		extensions: [ '.js' ,'.scss' ,'.json'] 
	}

}


module.exports = config;