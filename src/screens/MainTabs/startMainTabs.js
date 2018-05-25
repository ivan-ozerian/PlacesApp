import React from 'react';

import {createBottomTabNavigator} from 'react-navigation';

import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';

import {Ionicons} from '@expo/vector-icons';

const MainTabs = createBottomTabNavigator(
    {
        FindPlace: FindPlace,
        SharePlace: SharePlace
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'FindPlace') {
                    iconName = `ios-map${focused ? '' : '-outline'}`;
                } else if (routeName === 'SharePlace') {
                    iconName = `ios-share-alt${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

export default MainTabs;