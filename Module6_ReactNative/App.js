import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SomeStuff} from './src/app/components/SomeStuff/SomeStuff';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SomeStuff/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
