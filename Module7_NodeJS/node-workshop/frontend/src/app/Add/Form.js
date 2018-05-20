import React, {PureComponent} from 'react';

class Form extends PureComponent {

    constructor() {
        super();
        this.name = React.createRef();
        this.ip = React.createRef();
        this.isActitve = false;

        this.changeActive = this.changeActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeActive(e) {
        this.isActitve = e.target.value;
    }

    onSubmit(e) {
        e.preventDefault();

        const name = this.name.current.value,
            ip = this.ip.current.value,
            activate = this.isActitve;

        this.props.addDevice(name, ip, activate);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="deviceName" className="sr-only">Device Name</label>
                    <input type="text" ref={this.name} className="form-control" id="deviceName"
                           placeholder="Device Name"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="deviceAddress" className="sr-only">IP Address</label>
                    <input type="text" ref={this.ip} className="form-control" id="deviceAddress"
                           placeholder="IP Address"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label>Active:</label>
                    <label>Yes</label>
                    <input type="radio"
                           name='active'
                           onClick={this.changeActive}
                           className="form-control" id="isActive"
                           value='true' />
                    <label>No</label>
                    <input type="radio"
                           name='active'
                           checked
                           onClick={this.changeActive}
                           className="form-control" id="isActive"
                           value='false' />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add Device</button>
            </form>
        );
    }
}

export default Form;
