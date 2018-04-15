const path = require('path');

module.exports = (entry, output) => {
    return {
        entry: entry,
        output: {
            filename: output.name,
            path: path.resolve(__dirname, output.dist)
        }
    }
};
