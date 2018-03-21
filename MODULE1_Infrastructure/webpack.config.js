const path = require('path');
const jusmineSpec = require('./spec/webpack.jasmine.js');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

jusmineSpec();
