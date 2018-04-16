const ofRandomSymbols = require('./ofRandomSymbols.js');

ofRandomSymbols().subscribe({
    next(v) { console.log('Next', v) },
    error(e) { console.log(`Error. Message ${e}`) },
    compete() { console.log('Compete') }
});