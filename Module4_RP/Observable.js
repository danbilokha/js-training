class Observable {

    constructor(destination) {
        this._destination = destination;
    }

    next(value) {
        if(!this.unsubscribed && !this._error && !this._compelete) {
            try {
                this._destination(value);
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

module.exports = Observable;
