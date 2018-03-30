const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {root, dist, src} = require('../paths.js');

module.exports = () => {
    return {
        entry: {
            index: resolveRootPath('./src/index.ts')
        },
        output: {
            filename: '[name].js',
            path: dist
        },
        resolve: {
            extensions: ['.ts', '.js', '.scss', '.css']
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    options: require('../../../tslint.json')
                },
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'ts-loader',
                        options: require('../../../tsconfig.json')                        
                    },
                    exclude: /node_module/
                }
            ]
        }, 
        optimization: {
            splitChunks: {
                chunks: "async",
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: true,
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                title: 'Hello webpachina!',
                template: resolveRootPath('./src/index.html'),
                favicon: resolveRootPath('./src/assets/favicon.png')
            })
        ]
    }
};

function resolveRootPath(resolvingPath) {
    return path.resolve(root, resolvingPath)
}
