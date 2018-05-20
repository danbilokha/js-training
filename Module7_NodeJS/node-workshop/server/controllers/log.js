const Log = require('../models/Log');

const logging = (device_name, action) => {
    console.log(device_name, action);
    Log.create({
        id: Date.now(),
        action: action,
        device_name
    });
};

module.exports.logging = logging;