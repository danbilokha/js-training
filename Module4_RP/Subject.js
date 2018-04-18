const Observable = require('./Observable.js');

class Subject {
    next(value) {
        this._observable.next(value);
    }

    subscribe(observer) {
        const observable = new Observable(observer);
        this._observable = observable;

        return observable.unsubscribe.bind(observable);
    }
}

module.exports = Subject;
