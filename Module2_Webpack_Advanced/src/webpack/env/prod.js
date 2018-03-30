const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackBaseConfigFn = require('./config.js');

module.exports = () => {

    let baseConfig = webpackBaseConfigFn();

    return webpackMerge(baseConfig, {
        cache: false,
        devtool: false,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        minimize: true
                                    }
                                },
                                {
                                    loader: "postcss-loader"
                                }
                            ]
                    }),
                    exclude: /node_module/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        minimize: true
                                    }
                                },
                                {
                                    loader: "postcss-loader"
                                },
                                {
                                    loader: "sass-loader"
                                }
                            ]
                    }),
                    exclude: /node_module/
                }
            ]
        }, 
    });
};
