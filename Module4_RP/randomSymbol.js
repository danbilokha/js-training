const Observable = require('./Observable.js');

const _possibleValues = 'ABCDEFGHIKLMNOPQRSTVXYZ';

class RandSymbolDataSource {

    static get _possibleValues() {
        return _possibleValues;
    };

    static get _possibleValuesLength() {
        return _possibleValues.length;
    }

    constructor(options) {
        this._options = options;
        this._source = setInterval(this.emit.bind(this), 1000);

        this._emitedTimes = 0;
    }

    emit() {
      if(this._options && this._options.timesToEmit && this._emitedTimes >= this._options.timesToEmit) {
        return this.complete();
      }

      this.onData(this._getRandomSymbol());
      this._emitedTimes += 1;
    }

    complete() {
        clearInterval(this._source);
        this.onComplete();
    }

    destroy() {
        this.complete():
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
        return RandSymbolDataSource._possibleValues[Math.floor(this._random(RandSymbolDataSource._possibleValuesLength))];
    }

    _toRandomLetterCase(letter) {
        return this._random() > this._random() ? letter.toUpperCase() : letter.toLowerCase();``
    }
}

class OfRandmSymbols {

    constructor(subscribe) {
        this._subscribe = subscribe;
    }

    subscribe(observer) {
        const observable = new Observable(observer);
        observable.destroy = this._subscribe(observable);

        return observable.unsubscribe.bind(observable);
    }
}

function observableOfRandomSymbol() {
    return new OfRandmSymbols((observer) => {
        const randSymbolDataSource = new RandSymbolDataSource();

        randSymbolDataSource.onError = (err) => observer.error(err);
        randSymbolDataSource.onData = (data) => observer.next(data);
        randSymbolDataSource.onComplete = () => observer.complete();

        return () => randSymbolDataSource.destroy();
    });
};

// Could be improved
const takeSymbolKey = (symbol) => symbol[symbol.indexOf('(') + 1];

module.exports = {
    OfRandmSymbols,
    RandSymbolDataSource,
    observableOfRandomSymbol,
    takeSymbolKey
};
