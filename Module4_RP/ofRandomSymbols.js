const Observable = require('./Observable.js');

const _possibleValues = 'ABCDEFGHIKLMNOPQRSTVXYZ';

class RandSymbol {

    static get _possibleValues() { 
        return _possibleValues;
    };

    static get _possibleValuesLength() {
        return _possibleValues.length;
    }

    constructor() {
        console.log('asd');
        this._source = setInterval(this.emit.bind(this), 1000);
    }

    emit() {
        console.log(this._getRandomSymbol());
        this.onData(this._getRandomSymbol());
    }

    complete() {
        clearInterval(this._source);
        this.onComplete();
    }

    _getRandomSymbol() {
        return Symbol(
            this._toRandomLetterCase(
                this._getRandomLetter()
            )
        );
    }

    _random(range = 1) {
        return Math.random() * range;
    }

    _getRandomLetter() {
        return RandSymbol._possibleValues[Math.floor(this._random(RandSymbol._possibleValuesLength))];
    }

    _toRandomLetterCase(letter) {
        return this._random() > this._random() ? letter.toUpperCase() : letter.toLowerCase();``
    }
}

const ofRandomSymbols = () => {
    return {
        subscribe: (observer) => new Observable((observer) => { // Need to be changed smth here
            const randSymbol = new RandSymbol();
            
            randSymbol.onData = (data) => observer.next(data);
            randSymbol.onError = (err) => observer.error(data);
            randSymbol.onComplete = () => observer.complete();

            return () => randSymbol.complete();
        })
    }
}

module.exports = ofRandomSymbols;
