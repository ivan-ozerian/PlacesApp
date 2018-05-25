import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    itemSelectedHandler = key => {
        const selectedPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigation.navigate("PlaceDetail", {
            selectedPlace: selectedPlace
        })

    };

    render(){
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>

        );
    }
}

const mapStateToProps = state => {
    return {
        // places.places is because that we use in configureStore => combineReducers (places: placesReducer)
        // and placesReducer has it's also places: [].
        places: state.places.places
    }
};

export default connect(mapStateToProps)(FindPlaceScreen);