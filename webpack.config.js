module.exports = {
	entry: './src/scripts/main.js',
	output: {
		path: __dirname + "./app",
		filename: 'app.bundle.js'
	},
	devServer: {
	contentBase: "./app",
	port: 3000,
	stats: "errors-only"
	}
}