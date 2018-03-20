let hello = require('app/app.js').hello;

function checkCreatorName() {
    console.log(hello());
    return 'ads';
}

exports.checkCreatorName = checkCreatorName;
