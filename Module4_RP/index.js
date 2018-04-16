const Observable = require('./Observable.js');

/*
    To see 2 uncomment from here
*/
const randomSymbol = require('./randomSymbol.js');
const {OfRandmSymbols, RandSymbolDataSource} = randomSymbol;

const subscription = (
        new OfRandmSymbols((observer) => {
            const randSymbolDataSource = new RandSymbolDataSource();

            randSymbolDataSource.onError = (err) => observer.console.error(err);
            randSymbolDataSource.onData = (data) => observer.next(data);
            randSymbolDataSource.onComplete = () => observer.complete();

            return () => randSymbolDataSource.destroy();
        })
    )
    .subscribe(
        v => console.log(v),
        err => console.log('ERROR', err),
        () => console.log('COMPLETE')
    );

//setTimeout(subscription, 3000);
/*
    To here. End of 2 task
*/


/*
    To see 3 uncomment from here
*/
// const myFilter = require('./operators/myFilter.js');

// (new Observable())
//     .myFilter('asdasd')
//     .subscribe(v => console.log(v));
    /*
    To here. End of 3 task
*/