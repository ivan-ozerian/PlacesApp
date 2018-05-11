import React from 'react';
import MainScreen from './src/containers/MainScreen';

import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore'

export default class App extends React.Component {

    render() {
        const store = configureStore();

        return (
            <Provider store={store}>
                <MainScreen/>
            </Provider>
        );
    }
}
