const Log = require('../models/Log');

const logging = (device_name, action) => {

    console.log('LOG: ', device_name, action);

    Log.create({
        id: Date.now(),
        action: action,
        device_name
    });
};

module.exports.logging = logging;