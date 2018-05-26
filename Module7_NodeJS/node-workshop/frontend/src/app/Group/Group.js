import React, {PureComponent} from 'react';
import './styles.css';
import {List} from './List/List';
import {API_GROUP_ENDPOINT} from '../../api/constant';
import {highFetch} from '../../api/api';

class Group extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            groupName: []
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    groupNameChange(e) {
        this.setState({
            groupName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        highFetch(API_GROUP_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.groupName,
                devices: []
            }),
        })
            .then(() => {
                this.setState({
                    groupName: ''
                })
            })
            .catch(err => console.log(`Err has been occured. Err: ${err}`));
    }

    render() {
        return (
            <div className='device_group'>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="deviceName" className="sr-only">Group name:</label>
                        <input type="text"
                               value={this.state.groupName}
                               onChange={this.groupNameChange.bind(this)}
                               className="form-control" id="deviceName"
                               placeholder="Group Name"/>
                    </div>
                    <button type="submit"
                            className="btn btn-primary mb-2">
                        Create group
                    </button>
                </form>

                <List/>
            </div>
        )
    }

}

export {Group};
