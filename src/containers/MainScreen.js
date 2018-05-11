import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../components/PlaceInput/PlaceInput';
import PlaceList from '../components/PlaceList/PlaceList';
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';
import {addPlace, unselectPlace, selectPlace, deletePlace} from '../store/actions/index';

class MainScreen extends React.Component {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    };

    modalClosedHandler = () => {
        this.props.onUnselectPlace();
    };

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onUnselectPlace: () => dispatch(unselectPlace())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
