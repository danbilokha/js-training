const mongoose = require('mongoose');

const Log = mongoose.model('Log', {
    id: String,
    action: String,
    device_name: String
});

module.exports = Log;
