import React from 'react';
import {createStackNavigator} from 'react-navigation';

import AuthScreen from './src/screens/Auth/Auth'

const RootStack = createStackNavigator(
    {
        Auth: {
            screen: AuthScreen,
            navigationOptions: {
                title: "Login"
            },
        }
    },
    {
        initialRouteName: 'Auth'
    }
);

export default class App extends React.Component {

    render() {
        return (
            <RootStack/>
        );
    }
}
