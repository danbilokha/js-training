const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackBaseConfigFn = require('./config.js');

module.exports = () => {

    let baseConfig = webpackBaseConfigFn();
    return baseConfig;
};