import {createStackNavigator} from "react-navigation";
import BlinkApp from "../screens/Blink";
import TabHome from "./TabHome";
import TextInput from "../screens/TextInput";
import ScrollView from "../screens/ScrollView";
import Styles from "../screens/Styles";
import CityListWithSwipe from "../screens/CityListWithSwipe";
import FlexBox from "../screens/FlexBox";
import CityList from "../screens/CityList";
import Button from "../screens/Button";

const StackNavigator = createStackNavigator({
    Home: {
        screen: TabHome,
    },
    Blink: {
        screen: BlinkApp,
    },
    Input: {
        screen: TextInput,
    },
    Scroll: {
        screen: ScrollView,
    },
    Styles: {
        screen: Styles,
    },
    CityListStack: {
        screen: CityListWithSwipe,
    },
    Flex: {
        screen: FlexBox,
    },
    CityTab: {
        screen: CityList,
    },
    ButtonTab:{
        screen: Button,
    },
}, {
    initialRouteName: "Home",
    navigationOptions: ({navigation, navigationOptions, screenProps}) => {
        return {
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#f4511e',
            },
        }
    },
});

// 首页外的屏幕不弹出侧边栏
StackNavigator.navigationOptions = ({ navigation }) => {
    let drawerLockMode = navigation.state.index > 0 ? "locked-closed" : "unlocked";
    return {
        drawerLockMode,
    }
};

export default StackNavigator;