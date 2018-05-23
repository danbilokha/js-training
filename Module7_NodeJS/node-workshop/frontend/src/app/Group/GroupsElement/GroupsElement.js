import React, {PureComponent} from 'react';
import {API_GROUP_ENDPOINT} from '../../../api/constant';

class GroupsElement extends PureComponent {

    resolveButton(group, device, index) {
        if (this.isThere(group.devices, device.name)) {
            return (
                <button className='btn btn-success'
                        onClick={this.changeDeviceGroup.bind(this, device.name, group)}
                        key={index}>
                    {device.name}
                </button>
            )
        } else {
            return (
                <button className='btn btn-danger'
                        onClick={this.changeDeviceGroup.bind(this, device.name, group)}
                        key={index}>
                    {device.name}
                </button>
            )
        }
    }

    changeDeviceGroup(deviceName, group) {
        fetch(`${API_GROUP_ENDPOINT}/device/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deviceName,
                group
            }),
        })
            .then(this.props.update);
    }

    isThere(array, checker) {
        for (let i = 0, len = array.length; i < len; i += 1) {
            if (array[i] === checker) {
                return true;
            }
        }

        return false;
    }

    changeAllDevicesInGroup(group, action) {
        fetch(`${API_GROUP_ENDPOINT}/${action}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                group
            })
        })
            .then(this.props.update);
    }

    render() {
        const devices = this.props.devices;
        return (
            <div>
                <div>
                    <p><b>LEGEND</b>: Green - add device to group; Red - del</p>
                </div>
                {
                    this.props.group.map((group, index) => {
                            return (
                                <div key={index}
                                     className='device_group__element'>
                                    <h2> Group #{index} </h2>
                                    <p>Name: {group.name}</p>
                                    <div className='device_group__element_devices'>
                                        <p> Group devices: </p>
                                        {
                                            !!devices && devices.length !== 0
                                                ? devices
                                                    .filter(device => device.name !== '')
                                                    .map((device, index) => this.resolveButton(group, device, index))
                                                : <p>No devices available. add some first</p>
                                        }
                                    </div>
                                    <hr/>
                                    <button
                                        className='btn btn-default'
                                        onClick={this.changeAllDevicesInGroup.bind(this, group, 'disable')}>
                                        DISABLE GROUP
                                    </button>
                                    <button
                                        className='btn btn-primary'
                                        onClick={this.changeAllDevicesInGroup.bind(this, group, 'enable')}>
                                        ENABLE
                                    </button>
                                    <hr/>
                                </div>
                            )
                        }
                    )}
            </div>
        )
    }

}

export {GroupsElement};
