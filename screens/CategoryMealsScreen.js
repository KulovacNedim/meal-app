import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { render } from 'react-dom';

const CategoryMealsScreen = props => {
    render (
        <View style={styles.screen}>
            <Text>The Category Meals Screen Screen</Text>
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

export default CategoryMealsScreen;