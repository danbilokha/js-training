const webpackMerge = require('webpack-merge');

const webpackBaseConfig  = require('./webpack.config.js');

module.exports = () => {
    let baseConfig = webpackBaseConfig;
    console.log(baseConfig);
    return baseConfig;
}
