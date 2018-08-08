const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.vue', '.js']
	},
	module: {
		rules: [
			{ test: /\.vue$/, use: 'vue-loader' },
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				use: { 
					loader: 'babel-loader', 
					options: { 
						presets: ['@babel/preset-env'],
						plugins: [
							['@babel/plugin-proposal-decorators', { 'legacy': true }],
							'@babel/plugin-proposal-class-properties',
							'babel-plugin-transform-vue-jsx'
						] 
					} 
				}
			},
			{ 
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'vue-style-loader',
          			{ loader: 'css-loader', options: { importLoaders: 1 } },
          			'postcss-loader'
        		]
      		}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(['dist/*']),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};