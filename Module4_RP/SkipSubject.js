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
        const subject = new Subject();

        this._subscriptions.push({
            observer: subject,
            valuesSkipped: 0
        });

        return subject.subscribe(observer).bind(subject);
    }
}

module.exports = SkipSubject;
