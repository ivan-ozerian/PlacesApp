import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class AuthScreen extends Component {

    render(){
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate('MainTabs')}/>
            </View>
        );
    }
}

export default AuthScreen;