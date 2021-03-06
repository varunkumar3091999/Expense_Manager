const ExtractTextPlugin = require("extract-text-webpack-plugin")

const path = require('path')

module.exports = (env) => {
	const isProduction = env === "production";
	const CSSExtract = new ExtractTextPlugin("styles.css");

	return (
		{
			entry: './src/app.js',
			output: {
				path: path.join(__dirname, 'public'),
				filename: 'bundle.js'
			},
			mode: 'development',
			module: {
				rules: [{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node-modules/
				}, {
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: "css-loader",
								options: {
									sourceMap: true
								}
							},
							{
								loader: "sass-loader",
								options: {
									sourceMap: true
								}
							}
						]
					})
				}]
			},
			plugins: [
				CSSExtract
			],
			// devtool: 'cheap-module-eval-source-map'
			devtool: isProduction ? 'source-map' : 'inline-source-map',

			devServer: {
				contentBase: path.join(__dirname, 'public'),
				historyApiFallback: true
			}
		}
	)
};

