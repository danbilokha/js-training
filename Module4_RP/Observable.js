class Observable {

    constructor(destination) {
        this._destination = destination;
    }

    next(value) {
        if(!this.unsubscribed && !this._error && !this._compelete && this._destination.next) {
            try {
                this._destination.next(value);
            } catch(err) {
                this.error(err);
            }
        }
    }

    error(err) {
        console.error(`Error has been occured. Unsubscribe`);
        this._destination.error(err);
        // Silent unsubscribe
        this.unsubscribe();
    }

    complete() {
        console.info(`Stream has been competed. Unsubscribe`);
        this._destination.complete();
        this.unsubscribe();
    }

    unsubscribe() {
        this.unsubscribed = true;
    }

    subscribe() {
        this._destination();
        return this.unsubscribe.bind(this);
    }
}

module.exports = Observable;
