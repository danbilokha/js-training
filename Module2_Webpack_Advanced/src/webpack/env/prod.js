const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackBaseConfigFn = require('./config.js');

module.exports = () => {

    let baseConfig = webpackBaseConfigFn();

    // Minimize CSS
    baseConfig.module.rules = changeLoaderOption(
        baseConfig,
        'css',
        'css-loader',
        {minimize: true}
    );

    // Remove source map
    // baseConfig.module.rules = changeLoaderOption(
    //     baseConfig,
    //     'ts',
    //     'css-loader',
    //     {minimize: true}
    // );

    return webpackMerge(baseConfig, {
        cache: false,
        devtool: false
    });
};

// Not sure make function pure or unpure
const changeLoaderOption = (config, containingWord, loader, newOption) => {
    let _rules = [];
    _rules = config.module.rules;
    _rules.forEach(rule => {
        if(rule.test.toString().indexOf(containingWord) > -1) {
            rule.use.forEach(loaderDef => {
                if(loaderDef.loader === loader) {
                    loaderDef.options = newOption;
                }
            });
        }
    });
    return _rules;
}
