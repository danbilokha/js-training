const Subject = require('./Subject.js');

class SkipSubject extends Subject {

    constructor(valuesToSkip = 0) {
        super();
        this._valuesToSkip = valuesToSkip;
        this._subscriptions = [];
    }

    next(value) {
        this._subscriptions
            .map(subscription => {
                if(subscription.valuesSkipped >= this._valuesToSkip) {
                    subscription.observer.next(value);
                } else {
                    subscription.valuesSkipped += 1;
                }
            })
    }

    subscribe(observer) {
        this._subscriptions.push({
            observer: super.subscribe(observer),
            valuesSkipped: 0
        });
    }
}

module.exports = SkipSubject;
