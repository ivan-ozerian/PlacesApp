import React from 'react';

import {createDrawerNavigator, createStackNavigator} from 'react-navigation';

import SideDrawer from '../SideDrawer/SideDrawer';

const DrawerBar = createDrawerNavigator(
    {
        SideDrawer: {
            screen: SideDrawer
        }
    }
);

const DrawerStackBar = createStackNavigator(
    {
        SideDrawer: {
            screen: DrawerBar
        },
    },
);

export default DrawerStackBar;