import React, {PureComponent} from 'react';
import List from '../List/List';
import Form from '../Add/Form';
import '../App.css';

class Main extends PureComponent {
    constructor() {
        super();

        this.state = {devices: []};

        this.updateDeviceList = this.updateDeviceList.bind(this);
        this.delDevice = this.delDevice.bind(this);
        this.addDevice = this.addDevice.bind(this);
    }

    updateDeviceList() {
        fetch('/api/device')
            .then(res => res.json())
            .then((devices) => this.setState({devices: devices}));
    }

    componentDidMount() {
        this.updateDeviceList();
    }

    addDevice(name, ip, activate) {
        fetch('/api/device', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ip,
                activate
            }),
        });

        this.updateDeviceList();
    }

    delDevice(id) {
        fetch(`api/device/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.updateDeviceList();
                } else {
                    alert('Cannot del');
                }
            });
    }

    render() {
        return (
            <div className="App">

                <div className="App-intro">
                    <div className='device_list'>
                        <List devices={this.state.devices || []} onDelete={this.delDevice}
                              updateDevice={this.updateDeviceList}/>
                    </div>

                    <div className='device_add'>
                        <Form addDevice={this.addDevice}/>
                    </div>
                </div>
            </div>
        );
    }
}

export {Main};