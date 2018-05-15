const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');

const deviceRouter = require('./controllers/device'); 

mongoose.connect('mongodb://localhost/node-workshop');

app.use(bodyParser.json())

// let devices = [
//   {
//     id: 1,
//     name: 'Device 1',
//     ip: null
//   },{
//     id: 2,
//     name: 'Device 2',
//     ip: null
//   }
// ];
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