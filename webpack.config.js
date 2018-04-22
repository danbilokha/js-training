const path = require('path');

module.exports = {
  entry: './Module5_Frameworks/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};
