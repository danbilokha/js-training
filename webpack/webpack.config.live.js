const webpackMerge = require('webpack-merge');
const path = require('path');

const baseCfgFn = require('../webpack.config.js');

module.exports = (...args) => {
    const baseCfg = baseCfgFn(...args); 
    return webpackMerge.smart(baseCfg, {
        stats: {
            colors: true,
            children: false,
            assets: false,
            chunks: false
        },
        devtool: 'eval-source-map',
    })
}
