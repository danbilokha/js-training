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
//const myFilter = require('./operators/myFilter.js');

// observable
//     .myFilter('ABCDEFGHIKLMNOPQRSTVXYZ')
//     .subscribe({
//         next: v => console.log(v),
//         error: err => console.log('ERROR', err),
//         compete: () => console.log('COMPLETE')
//     });

/*
    To here. End of 3 task
*/

/*
    To see 4 uncomment 2 and from here
*/
// const myFilter = require('./operators/myFilter.js');
// const switchCase = require('./operators/switchCase.js');

// observable
//     .switchCase()
//     .subscribe({
//         next: v => console.log(v),
//         error: err => console.log('ERROR', err),
//         compete: () => console.log('COMPLETE')
//     });

/*
    To here. End of 4 task
*/

/*
    To here. End of 3 task
*/

/*
    To see 5 from here
*/
const Subject = require('./Subject.js');

const subject = new Subject();
subject.subscribe(v => console.log('Sub1', v));

subject.next(123);

const SkipSubject = require('./SkipSubject.js');

const skipSubject = new SkipSubject(2);
skipSubject.subscribe(v => console.log('SkipSub1', v));

skipSubject.next(1);

skipSubject.next(2);

skipSubject.next(3);

skipSubject.next(4);

skipSubject.subscribe(v => console.log('SkipSub2', v));

skipSubject.next(5);

skipSubject.next(6);

skipSubject.next(7);

skipSubject.next(8);

/*
    To here. End of 5 task
*/
