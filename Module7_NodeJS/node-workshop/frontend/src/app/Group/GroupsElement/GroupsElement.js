import React, {PureComponent} from 'react';

class GroupsElement extends PureComponent {

    resolveButton(group, device, index) {
        if (this.isThere(group.devices, device.name)) {
            return (
                <button className='btn btn-danger'
                        onClick={this.changeDeviceGroup.bind(this, device.name, group)}
                        key={index}>
                    {device.name}
                </button>
            )
        } else {
            return (
                <button className='btn btn-success'
                        onClick={this.changeDeviceGroup.bind(this, device.name, group)}
                        key={index}>
                    {device.name}
                </button>
            )
        }
    }

    changeDeviceGroup(deviceName, group) {
        fetch(`/api/group/device/`, {
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
            .then(() => {

            })
    }

    isThere(array, checker) {
        for (let i = 0, len = array.length; i < len; i += 1) {
            if (array[i] === checker) {
                return true;
            }
        }

        return false;
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
                                    <p>Group name: {group.name}</p>
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
                                </div>
                            )
                        }
                    )}
            </div>
        )
    }

}

export {GroupsElement};
