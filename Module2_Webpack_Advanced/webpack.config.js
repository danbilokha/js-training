const path = require('path');

let configStrategy;

module.exports = (env) => {
    if(env === "production") {
        configStrategy = require('./src/webpack/env/prod.js');
    } else {
        configStrategy = require('./src/webpack/env/development.js');
    };

    return configStrategy();
};