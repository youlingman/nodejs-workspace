import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Button from "./Button";

export default class LotsOfStyles extends Component {

    static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
        console.log("Styles navigation");
        console.log(navigation);
        console.log("Styles parent navigation");
        console.log(navigation.dangerouslyGetParent());
        return {
        }
    };

    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Blink")}
                    title="jump to blink"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
