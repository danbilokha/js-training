class Observable {

    constructor(destination) {
        this._destination = destination;
    }

    next(value) {
        if(!this.unsubscribed && !this._error && !this._compelete) {
            try {
                chooseResponseStrategy(value, 'next', this);
            } catch(err) {
                this.error(err);
            }
        }
    }

    error(err) {
        console.error(`Error has been occured: ${err}. Unsubscribe`);
        chooseResponseStrategy(err, 'error', this);
        // Silent unsubscribe
        this.unsubscribe();
    }

    complete() {
        console.info(`Stream has been competed. Unsubscribe`);
        //this._destination.complete();
        this.unsubscribe();
    }

    unsubscribe() {
        console.info(`You successfully unsubcribed from stream`);

        this.unsubscribed = true;
        if(this.destroy) {
            return this.destroy();
        }
    }
}

const chooseResponseStrategy = (value, action, context) => {
    if(context._destination[action]) {
        return context._destination[action](value);
    }

    context._destination(value);
}

module.exports = Observable;
