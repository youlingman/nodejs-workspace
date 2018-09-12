import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {

    static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
        return {
            headerTitle: '闪烁12', // 设置头部标题
        }
    };

    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
                <Button
                    onPress={() => this.props.navigation.navigate("Styles")}
                    title="jump to styles"/>
            </View>
        );
    }
}