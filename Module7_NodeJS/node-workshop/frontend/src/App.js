import React, {PureComponent} from 'react';
// import mongoose from 'mongoose';
import List from './List';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {
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
            .then(data => console.log('here2', data))
            .then((res) => this.setState({devices: res}))
    }

    componentDidMount() {
        this.updateDeviceList();
    }

    addDevice(name, ip) {
        fetch('/api/device', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ip
            }),
        });
        this.updateDeviceList();
    }

    delDevice(id) {
        fetch(`api/device/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {}
        })
            .then(res => res.json())
            .then(res => {
                this.setState({...this.state, devices: res});
            });
        this.updateDeviceList();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <List devices={this.state.devices || []} onDelete={this.delDevice}
                          updateDevice={this.updateDeviceList}/>
                    <Form addDevice={this.addDevice}/>
                </div>
            </div>
        );
    }
}

export default App;
