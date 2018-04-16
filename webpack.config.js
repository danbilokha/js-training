const path = require('path');

module.exports = {
  entry: './Module4_RP/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};
