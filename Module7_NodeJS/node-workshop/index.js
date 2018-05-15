const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const deviceRouter = require('./controllers/device');

mongoose.connect('mongodb://localhost/node-workshop');

const app = express();
app.use(bodyParser.json());

app.use('/api/device', deviceRouter);
app.get('/', (req, res) => {
    res.json({
        status: 'Not OK'
    });
});


app.listen(3001);

/*
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
*/