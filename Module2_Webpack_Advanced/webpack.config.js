const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
    console.log(env);

    return {
        entry: {
            index: './src/index.ts'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
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
                    options: require('./tslint.json')
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
                    use: 'ts-loader',
                    exclude: /node_module/
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                title: 'Hello webpachina!',
                template: './src/index.html',
                favicon: './src/assets/favicon.png'
            })
        ]
    }
};

// if(NODE_ENV === 'development') {
//     console.log('here2');
//     module.exports.devtool = 'source-map';
// }

// if(NODE_ENV === 'production') {
//     console.log('here3');
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warning: false,
//                 drop_console: true,
//                 unsafe: false
//             }
//         })
//     )
// }
