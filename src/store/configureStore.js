import {createStore, combineReducers, applyMiddleware} from 'redux';

import {middleware} from "../utils/redux";

import placesReducer from './reducers/places/index';
import navReducer from './reducers/navigation/index'

const rootReducer = combineReducers({
    places: placesReducer,
    nav: navReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(middleware));
};

export default configureStore;