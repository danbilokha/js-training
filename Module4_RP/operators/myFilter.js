const Observable = require('./../Observable.js');

// Bad aproach. Imagine, that consumer, that use library with a prototype inheritance, assume, that myFilter is in library
// and he shouldn't import it. And you, in your library, come to conclusion, that you need to delete myFilter from your imports. And 
// you delete in all places carefully. But, your library consumer will face with a errors, that Observable don't has such method as 'myFilter'
Observable.prototype.myFilter = (string) => {
    return {
        subscribe: (observer) => {
            console.log(observer);
            const observable = new Observable(observer);

            return observable.unsubscribe();
        } 
    }
};
