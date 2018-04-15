const path = require('path');

console.log(__dirname);

module.exports = (entry, output) => {
    console.log(entry, output);
    return {
        entry: entry,
        output: {
            filename: output.name,
            path: path.resolve(__dirname, output.dist)
        }
    }
};
    