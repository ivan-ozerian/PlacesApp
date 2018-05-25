import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import { connect } from 'react-redux';

import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component {

    placeDeletedHandler = (key) => {
        this.props.onDeletePlace(key);
        this.props.navigation.goBack();
    };

    render() {
        const selectedPlace = this.props.navigation.getParam('selectedPlace', 'empty-place');
        // always call functions in onPress or other through lambda onPress={() => }
        return (
            <View style={styles.container}>
                <View>
                    <Image source={selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.placeDeletedHandler(selectedPlace.key)}>
                        <View style={styles.deleteButton}>
                            <Ionicons size={30} name="ios-trash" color="red"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
};

export default connect(null, mapDispatchToProps)(PlaceDetail);