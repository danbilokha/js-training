const Observable = require('./Observable.js');

/*
    To see 2 uncomment from here
*/
const randomSymbol = require('./randomSymbol.js');
const {OfRandmSymbols, RandSymbolDataSource} = randomSymbol;

const observable = (
    new OfRandmSymbols((observer) => {
        const randSymbolDataSource = new RandSymbolDataSource();

        randSymbolDataSource.onError = (err) => observer.error(err);
        randSymbolDataSource.onData = (data) => observer.next(data);
        randSymbolDataSource.onComplete = () => observer.complete();

        return () => randSymbolDataSource.destroy();
    })
);

// observable.subscribe(
//     v => console.log(v),
//     err => console.log('ERROR', err),
//     () => console.log('COMPLETE')
// );

                                                                                                                                    ////setTimeout(subscription, 3000);
/*
    To here. End of 2 task
*/


/*
    To see 3 uncomment 2 task and from here
*/
const myFilter = require('./operators/myFilter.js');

observable
    .myFilter('ABCDEFGHIKLMNOPQRSTVXYZ')
    .subscribe({
        next: v => console.log(v),
        error: err => console.log('ERROR', err),
        compete: () => console.log('COMPLETE')
    });

/*
    To here. End of 3 task
*/