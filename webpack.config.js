const LogAfterCompilationPlugin = require("./logger.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
require("dotenv").config();

// Specify the port that your app will run on either from here or a .env file
let appPort = process.env.PORT || 3036;

module.exports = {
	module: {
		rules: [
			{
				// Babel to handle react jsx
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				// Compile css
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				// Compile with media
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
				},
			},
		],
	},
	plugins: [
		// Use css
		new MiniCssExtractPlugin(),
		// Use custom log
		new LogAfterCompilationPlugin(appPort),
		// Expose env variables for use throughout the application
		new webpack.EnvironmentPlugin(Object.keys(process.env)),
		// Use html
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		// Use ESlint
		new ESLintPlugin({
			extensions: ["js", "jsx"],
		}),
	],
	resolve: {
		// Resolve these files
		extensions: [".js", ".jsx"],
	},
	// Tell webpack to watch source map
	devtool: "source-map",
	// Establish development server
	devServer: {
		// Specify port to run at
		port: appPort,
		// Catch 404 cases
		historyApiFallback: true,
		// Only log erros (removes webpack bloat)
		devMiddleware: {
			stats: "errors-only",
		},
		// Use public assets
		static: {
			directory: path.join(__dirname, "public"),
		},
		// Allow hot reloads
		hot: true,
	},
	// Output for production build
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
};
