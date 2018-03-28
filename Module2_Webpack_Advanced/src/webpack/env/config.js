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
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"]
                    }),
                    exclude: /node_module/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: ["css-loader", "postcss-loader", "sass-loader"]
                    }),
                    exclude: /node_module/
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
