import {createBottomTabNavigator} from "react-navigation";
import React, {Component} from 'react';
import Button from "../screens/Button";
import CityList from "../screens/CityList";

const RouteConfig = {
    Button: {
        screen: Button,
        navigationOptions: {
            tabBarLabel: "按钮"
        }
    },
    CityList: {
        screen: CityList,
        navigationOptions: {
            tabBarLabel: "城市列表"
        }
    },
};

const TabBottomNavigator = createBottomTabNavigator(
    RouteConfig, {
        navigationOptions: ({navigation, navigationOptions, screenProps}) => {
            return {}
        },
    });

// 上一层导航器的对应options直接在本navigator上设置，对应类内部的static变量；
TabBottomNavigator.navigationOptions = ({navigation, navigationOptions}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    let headerTitle = RouteConfig[routeName].navigationOptions.tabBarLabel;
    return {
        headerTitle,
    };
};

export default TabBottomNavigator;