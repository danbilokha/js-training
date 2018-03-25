var plato = require('plato');
const path = require('path');

var files = [
    path.resolve(__dirname, 'src/')
];

var outputDir = './output/dir';
// null options for this example
var options = {
  title: 'Plato'
};

var callback = function (report){
    console.log("analysis done");
};

plato.inspect(files, outputDir, options, callback);
