import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class ButtonBasics extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You longpressed the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton}>
                        <Text>Press Me</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate("Blink")}
                        title="jump to Blink"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate("CityListStack")}
                        title="jump to CityListStack"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});