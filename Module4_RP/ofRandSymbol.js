const _possibleValues = 'ABCDEFGHIKLMNOPQRSTVXYZ';

class ofRandSymbol {

    static get _possibleValues() { 
        return _possibleValues;
    };

    static get _possibleValuesLength() {
        return _possibleValues.length;
    }

    constructor(options) {
        this._options = options;
        this._source = setInterval(this.emit.bind(this), 1000);
    }

    emit() {
        return this._getRandomSymbol();
    }

    complete() {
        clearInterval(this._source);
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
        return ofRandSymbol._possibleValues[Math.floor(this._random(ofRandSymbol._possibleValuesLength))];
    }

    _toRandomLetterCase(letter) {
        return this._random() > this._random() ? letter.toUpperCase() : letter.toLowerCase();``
    }
}

module.exports = ofRandSymbol;
