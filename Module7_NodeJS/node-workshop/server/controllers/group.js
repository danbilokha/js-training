const router = require('express').Router();
const Group = require('../models/Group');
const Device = require('../models/Device');
const {logging} = require('./log');

router.get('/', async (req, res) => {
    const group = await Group.find().exec();
    const devices = await Device.find().exec();

    group.map(v => {
        return {name: v.name, devices: v.devices};
    });
    devices.map(v => {
        return v.name;
    });

    res.send({
        group: group,
        devices: devices
    });
});

router.post('/device', async (req, res) => {
    const {deviceName, group} = req.body;

    const foundedGroups = await Group.find(group).exec(),
        foundedGroup = foundedGroups[0];

    for (let i = 0, len = foundedGroup.devices.length; i < len; i += 1) {
        if (foundedGroup.devices[i] === deviceName) {
            foundedGroup.devices.splice(i, 1);

            foundedGroup.save();
            res.sendStatus(200);

            return;
        }
    }

    foundedGroup.devices.push(deviceName);
    foundedGroup.save();
    res.sendStatus(200);
});

router.post('/disable', async (req, res) => {
    const {group} = req.body;

    const foundedGroups = await Group.find(group).exec(),
        foundedGroup = foundedGroups[0];

    foundedGroup.devices = [];
    foundedGroup.save();
    res.sendStatus(200);
});

router.post('/enable', async (req, res) => {
    const {group} = req.body;

    const foundedGroups = await Group.find(group).exec(),
        foundedGroup = foundedGroups[0];

    const allDevices = await Device.find().exec();

    allDevices.forEach(device => {
        foundedGroup.devices.push(device.name);
    });

    foundedGroup.save();
    res.sendStatus(200);
});

router.post('/', async (req, res) => {
    const new_group = req.body;

    const createdGroup = await Group.create({
        name: new_group.name,
        devices: new_group.devices
    });

    logging(createdGroup.name, 'device group was created.');

    res.sendStatus(200);
});

router.delete('/:name', async (req, res) => {
});

module.exports = router;
