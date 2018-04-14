const path = require('path');

console.log(__dirname);

module.exports = (entry, output) => {
    entry: entry,
    output: {
        filename: output.name,
        path: path.resolve(__dirname, output.dist)
    }
};
    