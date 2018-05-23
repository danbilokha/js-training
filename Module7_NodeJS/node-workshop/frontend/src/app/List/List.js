import React, {PureComponent} from 'react';
import {API_DEVICE_ENDPOINT} from '../../api/constant';
import {highFetch} from '../../api/api';

class List extends PureComponent {

    onUpdateStatus = async (id, isOn) => {
        await highFetch(`${API_DEVICE_ENDPOINT}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isOn
            })
        });

        this.props.updateDevice();
    };

    onLogClicked(name) {
        highFetch(`${API_DEVICE_ENDPOINT}/log/${name}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(`Error has been occured. ${err}`));
    }

    onDelete(index) {
        this.props.delDevice(index);
    }

    renderDevice(index) {
        const device = this.props.devices[index];
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{device.name}</td>
                <td>{device.ip}</td>
                <td>
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button onClick={this.onUpdateStatus.bind(this, device.id, true)}
                                    disabled={device.isOn}
                                    type="button"
                                    className='btn'>On
                            </button>
                            <button onClick={this.onUpdateStatus.bind(this, device.id, false)}
                                    type="button"
                                    disabled={!device.isOn}
                                    className='btn'>Off
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-warning"
                                    onClick={this.props.onDelete.bind(this, device.id)}>Delete
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <button
                        onClick={this.onLogClicked.bind(this, device.name)}>
                        Get logs
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        const deviceList = this.props.devices.map((device, index) => this.renderDevice(index));

        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Device Address</th>
                    <th scope="col">Actions</th>
                    <th scope='col'>Logs</th>
                </tr>
                </thead>
                <tbody>
                {deviceList}
                </tbody>
            </table>
        );
    }
}

export default List;