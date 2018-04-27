import React, {PureComponent} from 'react';
import {load} from '../../http/http';
import {STUFF_END_POINT} from './SomeStuff.dictionaries';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import {Item} from './Item/Item';

class SomeStuff extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        return load(STUFF_END_POINT)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data
                })
            })
    }

    render() {
        const data = this.state.data;
        return (
            <View>
                <Text style={styles.title}>Here a list of items</Text>
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        return <Item title={item.title} body={item.body} />
                    }}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    caption: {
        fontWeight: 'bold'
    }
});


export {SomeStuff};
