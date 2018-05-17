import React from 'react';
import {createStackNavigator} from 'react-navigation';

import AuthScreen from './src/screens/Auth/Auth'
import MainTabs from "./src/screens/MainTabs/startMainTabs"

const RootStack = createStackNavigator(
    {
        Auth: AuthScreen,
        MainTabs: MainTabs
    },
    {
        navigationOptions: ({navigation}) => ({
            title: navigation.state.routeName
        }),
    }
);

export default class App extends React.Component {

    render() {
        return (
            <RootStack/>
        );
    }
}
