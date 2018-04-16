const Observable = require('./../Observable.js');
const {OfRandmSymbols} = require('./../randomSymbol.js');

// Bad aproach. Imagine, that consumer, that use library with a prototype inheritance, assume, that myFilter is in library
// and he shouldn't import it. And you, in your library, come to conclusion, that you need to delete myFilter from your imports. And 
// you delete in all places carefully. But, your library consumer will face with a errors, that Observable don't has such method as 'myFilter'
OfRandmSymbols.prototype.myFilter = (string, value) => {
    console.log('myFilter Observer', string, value);
    const filter = (x) => { return 'sss'; }
    return new OfRandmSymbols((observer) => {
        const myFilterObserver = {
            next: (x) => observer.next(filter(x)),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        }

        return this.subscribe(myFilterObserver);
    })
};
