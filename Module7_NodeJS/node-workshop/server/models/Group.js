const mongoose = require('mongoose');

const Group = mongoose.model('Group', {
    name: String,
    devices: Array
});

module.exports = Group;
