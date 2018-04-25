const colors = require('ansi-colors');
const fs = require('fs');

const gulpDictionary = require('./gulpfile.dictionary.js');

const {ConsoleMessageType} = gulpDictionary; 

const resolveFile = (file, path) => {
    return isFileExist(file)
        ? file 
        : isFileExist(`${path}/${file}`)
            ? `${path}/${file}`
            : null;
}

const isFileExist = (file) => {
    try {
        fs.accessSync(file); // If will pass - file exist
        return true;
    } catch(err) { // Silent error
        printConsole(ConsoleMessageType.error, `Error has been occured while try to read file - ${file}. No such file.`);
        return false;
    }
}

const printConsole = (type, message) => {
    switch (type) {
        case ConsoleMessageType.info:
            console.log(colors.bold(colors.yellow(`[INFO] ${message}`), colors.blue(message)));
            break;
        case ConsoleMessageType.error:
            console.log(colors.bold(colors.red(`[ERROR] ${message}`)));
            break;
        case ConsoleMessageType.error: 
            console.log(colors.bold(colors.orange(`[WARNING] ${message}`)));
            break;
        default:
            break;
    }
}

module.exports = {
    resolveFile,
    isFileExist,
    printConsole
};
