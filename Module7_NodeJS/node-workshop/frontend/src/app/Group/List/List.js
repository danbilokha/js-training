import React, {PureComponent} from 'react';
import {GroupsElement} from '../GroupsElement/GroupsElement';
import {API_GROUP_ENDPOINT} from '../../../api/constant';
import {highFetch} from '../../../api/api';

class List extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

        this.fetchList = this.fetchList.bind(this);
    }

    fetchList() {
        highFetch(API_GROUP_ENDPOINT, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: {
                        group: data.group,
                        devices: data.devices
                    }
                });
            })
            .catch(err => console.log(`Err has been occured. Err: ${err}`));
    }

    componentDidMount() {
        this.fetchList();
    }

    render() {
        return (
            <div className='device_group_list'>
                {
                    !!this.state.data
                    && !!this.state.data.group
                    && this.state.data.group.length !== 0
                        ? <GroupsElement {...this.state.data} update={this.fetchList}/>
                        : <div> Loading ... </div>
                }
            </div>
        )
    }

}

export {List};
