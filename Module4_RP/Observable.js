class Observable {

    constructor(destination) {
        this._destination = destination;
    }

    next(value) {

        if(!this._error && !this._compelete && this._destination.next) {
            try {
                this._destination.next(value);
            } catch(err) {
                this.error();
            }
        }

        this.unsubscribe();
    }

    error() {
        console.error(`Error has been occured. Unsubscribe`);
        // Silent unsubscribe
        this.unsubscribe();
    }

    complete() {
        console.info(`Stream has been competed. Unsubscribe`);
        this.unsubscribe();
    }

    unsubscribe() {

    }
}

module.exports = Observable;
