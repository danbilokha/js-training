import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Item extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.caption}>Title:</Text><Text>{this.props.title}</Text>
                <Text style={styles.caption}>Body:</Text><Text>{this.props.body}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    caption: {
        fontWeight: 'bold'
    }
});


export {Item};
