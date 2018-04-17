const Observable = require('./../Observable.js');
const {OfRandmSymbols, takeSymbolKey} = require('./../randomSymbol.js');

const UPPER_CASE = 'ABCDEFGHIKLMNOPQRSTVXYZ';

OfRandmSymbols.prototype.switchCase = function(startWithSmall = true) {
    let isPrevSymbolKeySmall = !startWithSmall;

    return (() => {
        const switchCase = (symbol) => {
            const symbolKey = takeSymbolKey(symbol.toString());
            const symbolKeyIsInUpperCase = UPPER_CASE.indexOf(symbolKey) > -1 ? true : false;

            // Could be improve
            if(isPrevSymbolKeySmall) {
                isPrevSymbolKeySmall = !isPrevSymbolKeySmall;                
                if(symbolKeyIsInUpperCase) {
                    return symbol;
                } else {
                    return Symbol(symbolKey.toUpperCase());
                }
            } else {
                isPrevSymbolKeySmall = !isPrevSymbolKeySmall;                    
                if(symbolKeyIsInUpperCase) {
                    return Symbol(symbolKey.toLowerCase());
                } else {
                    return symbol;
                }
            }
        }
        return new OfRandmSymbols((observer) => {
            const myFilterObserver = {
                next: (x) => observer.next(switchCase(x)),
                error: (err) => observer.error(err),
                complete: () => observer.complete()
            }

            return this.subscribe(myFilterObserver);
        })
    })()
};
