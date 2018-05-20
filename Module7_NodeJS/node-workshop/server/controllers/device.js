const router = require('express').Router();
const Device = require('../models/Device');
const fetchUrl = require('fetch').fetchUrl;
const {logging} = require('./log');
const Log = require('../models/Log');

router.get('/', (req, res) => {
    Device.find((err, docs) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        const devices = docs.map(doc => ({
            id: doc._id,
            name: doc.name,
            ip: doc.ip,
            isOn: doc.isOn
        }));

        res.json(devices);
    })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const isOn = req.body.isOn;

    const device = await Device.findById(id);
    const command = '/cm?cmnd=' + (isOn ? 'Power On' : 'Power off');

    fetchUrl(device.ip + command, async function (err, meta, body) {
        device.isOn = isOn;
        await device.save();

        logging(device.name, 'device was updated.');

        res.sendStatus(200);
    })
});

router.post('/', async (req, res) => {
    const device = req.body;

    const createdDevice = await Device.create({
        name: device.name,
        ip: device.ip,
        isOn: device.activate,
    });

    logging(createdDevice.name, 'device was created.');

    res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const deviceToDelete = Device.findByIdAndRemove(id);
    try {
        await deviceToDelete.exec();
        logging(deviceToDelete.name, 'device was successfully deleted');
        res.sendStatus(200);
    } catch (e) {
        logging(deviceToDelete.name, 'device wasn\'t deleted.');
        res.sendStatus(500);
    }
});

router.get('/log/:id', (req, res) => {
    Log.find((err, docs) => {
        if (err) {
            res.sendStatus(500);
            return;
        }

        const logs = docs.map(doc => ({
            device_name: doc.device_name,
            action: doc.action,
        }));

        console.log(logs);

        res.json(logs);
    })
});

module.exports = router;
