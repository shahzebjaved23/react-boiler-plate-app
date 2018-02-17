var webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	context: path.resolve(__dirname, 'new'),
	entry: './App.js',
	output:{
		path: "./bin/bundle.js"
	},
	devtool: 'source-map',
	module: {
        rules: [
        	{
		        test: /\.js$/, 
		        loader: 'babel-loader',
                exclude: /node_modules/,
		        options: {
		        	plugins: [
						"transform-class-properties",
						"transform-decorators-legacy"
					],
					presets: ['es2015', 'react'],
		        }
		    },	
        	{
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
        ]
    },

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
	]

}


module.exports = config;