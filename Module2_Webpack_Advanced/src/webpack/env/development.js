const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackBaseConfigFn = require('./config.js');

module.exports = () => {

    let baseConfig = webpackBaseConfigFn();
    return webpackMerge(baseConfig, {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                                {
                                    loader: "css-loader"
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
                                    loader: "css-loader"
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
