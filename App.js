import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default class App extends React.Component {
    state = {
        placeName: "",
        places: []
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        })
    };
    
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        })
    }

    render() {
        const placesOutput = this.state.places.map((place, index) => (
            <Text key={index}>{place}</Text>
        ));

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.placeName}
                        placeholder="An awesome place"
                        onChangeText={this.placeNameChangedHandler}
                        style={styles.placeInput}
                    />
                    <Button 
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                </View>
                <View>
                    {placesOutput}
                </View>
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
    },
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});
