const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const deviceRouter = require('./controllers/device');
const groupRouter = require('./controllers/group');

mongoose.connect('mongodb://localhost/nodeWorkshop');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error unexpectable happened -->'));
db.once('open', () => console.info('db successfully opened'));

const app = express();
app.use(bodyParser.json());

app.use('/api/device', deviceRouter);
app.use('/api/group', groupRouter);

app.get('/', (req, res) => {
    res.json({
        status: 'Not OK'
    });
});

app.listen(3001);
