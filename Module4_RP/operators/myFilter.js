const Observable = require('./../Observable.js');
const {OfRandmSymbols, takeSymbolKey} = require('./../randomSymbol.js');

// Bad aproach. Imagine, that consumer, that use library with a prototype inheritance, assume, that myFilter is in library
// and he shouldn't import it. And you, in your library, come to conclusion, that you need to delete myFilter from your imports. And 
// you delete in all places carefully. But, your library consumer will face with a errors, that Observable don't has such method as 'myFilter'
OfRandmSymbols.prototype.myFilter = function(expression) {

    return (() => {
        const isFilterPassed = (symbol) => expression.indexOf(takeSymbolKey(symbol.toString())) > -1 ? true : false;
        return new OfRandmSymbols((observer) => {
            const myFilterObserver = {
                next: (x) => isFilterPassed(x) ? observer.next(x) : null,
                error: (err) => observer.error(err),
                complete: () => observer.complete()
            }

            return this.subscribe(myFilterObserver);
        })
    })()
};
