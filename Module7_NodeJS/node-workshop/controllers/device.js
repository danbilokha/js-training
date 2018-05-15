const router = require('express').Router();
// let devices = require('../data/device');
const Device = require('../models/device');
const fetchUrl = require('fetch').fetchUrl;

let nextId = 3;

router.get('/', (req, res) => {
  Device.find((err, docs) => {
    if(err){
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
  const command = '/cm?cmnd='+( isOn? 'Power On': 'Power off');

  fetchUrl(device.ip + command, async function(err, meta, body){
    device.isOn = isOn;
    await device.save();

    res.sendStatus(200);
  })

  // await Device.findByIdAndUpdate(id, {
  //   isOn
  // }).exec();
  // res.sendStatus(200);
});

router.post('/', async(req, res) => {
  const device = req.body;

  await Device.create({
    name: device.name,
    ip: device.ip,
    isOn: false,
  });
  res.sendStatus(200);
  // const {name, ip} = req.body;
  // devices.push({ name, ip, id: nextId++});
  // res.json(devices);
});

router.delete('/:id', async(req, res) => {
  const id = req.params.id;

  try {
    await Device.findByIdAndRemove(id).exec();
    res.sendStatus(200);
  // devices = devices.filter((device) => device.id != id)
  // res.json(devices);
  } catch(e) {
    res.sendStatus(500);
  }
});

module.exports = router;