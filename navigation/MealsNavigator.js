import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetails: MealDetailsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetails: MealDetailsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS = 'android' ?
    createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeTintColor: 'white',
            shifting: true
        })
    :
    createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

export default createAppContainer(MealsFavTabNavigator);