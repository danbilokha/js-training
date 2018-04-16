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
        this._source = setInterval(this.emit.bind(this), 1000);
        this._emitedTimes = 0;
    }

    emit() {
      if(this._emitedTimes >= 5) {
        return this.complete();
      }

      this.onData(this._getRandomSymbol());
      this._emitedTimes += 1;
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

class OfRandmSymbols {
  subscribe(observer) {
    const randomSymbol = new RandSymbol();
    const observable = new Observable(observer);

    randomSymbol.onData = (data) => observable.next(data);
    randomSymbol.onComplete = () => observable.complete();

    return () => observable.unsubscribe();
  }
}


const obs = (new OfRandmSymbols).subscribe(
  v => console.log(v),
  err => console.log('ERROR', err),
  () => console.log('COMPLETE')
);

setTimeout(obs, 3000);

module.exports = OfRandmSymbols;
