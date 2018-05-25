import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import AuthScreen from '../screens/Auth/Auth';
import MainTabs from "../screens/MainTabs/startMainTabs";
import PlaceDetail from '../screens/PlaceDetail/PlaceDetail';
import DrawerStackBar from '../screens/MainTabs/drawerStackBar';
import {addListener} from "../utils/redux";

export const AppNavigator = createStackNavigator(
    {
        Auth: {
            screen: AuthScreen,
            navigationOptions: {
                title: "Login"
            },
        },
        MainTabs: {
            screen: MainTabs
        },
        PlaceDetail: {
            screen: PlaceDetail
        },
        DrawerStackBar: {
            screen: DrawerStackBar
        }
    },
    {
        initialRouteName: 'Auth'
    }
);

class AppWithNavigationState extends Component {

    render() {
        const {dispatch, nav} = this.props;

        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);