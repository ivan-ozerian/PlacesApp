import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';
import AppWithNavigationState from './src/navigators/AppNavigator'

const store = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
