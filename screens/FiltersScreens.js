import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { render } from 'react-dom';

const FiltersScreen = props => {
    render (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;