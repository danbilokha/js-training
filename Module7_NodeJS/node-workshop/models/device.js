const mongoose = require('mongoose')

const Device = mongoose.model('Device', {
 name: String,
 ip: String,
 isOn: Boolean
});

module.exports = Device;