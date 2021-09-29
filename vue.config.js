const isProduction = process.env.NODE_ENV !== 'development';
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://139.196.88.14/',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	productionSourceMap: !isProduction,
	// publicPath: '',
	chainWebpack: (config) => {
		config.resolve.symlinks(true);
	},
	configureWebpack: (config) => {
		config.entry.app = ['babel-polyfill', './src/main.js'];
		if (isProduction) {
			const productionGzipExtensions = ['html', 'js', 'css'];
			config.plugins.push(
				new CompressionPlugin({
					filename: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8,
					deleteOriginalAssets: false
				})
			);
			config.plugins.push(
				new UglifyJsPlugin({
					uglifyOptions: {
						compress: {
							drop_debugger: true,
							drop_console: true,
							pure_funcs: ['console.log']
						}
					},
					sourceMap: false,
					parallel: true
				})
			);
		}
		config.optimization = {
			splitChunks: {
				cacheGroups: {
					vendor: {
						chunks: 'all',
						test: 'node_modules',
						name: 'vendor',
						minChunks: 3,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 100
					},
					common: {
						chunks: 'all',
						test: /[\\/]src[\\/]js[\\/]/,
						name: 'common',
						minChunks: 2,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 60
					},
					styles: {
						name: 'styles',
						test: /\.(sa|sc|c)ss$/,
						chunks: 'all',
						enforce: true
					},
					runtimeChunk: {
						name: 'manifest'
					}
				}
			}
		};
	}
};
