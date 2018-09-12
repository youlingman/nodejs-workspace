import {createDrawerNavigator} from "react-navigation";
import TextInput from "../screens/TextInput";
import StackHome from "./StackHome";
import ScrollView from "../screens/ScrollView";

/*
    drawer导航器作为最外层，下嵌stack导航器，最后再嵌bottomTab导航作为首页；
    stack包在bottomTab外层是为了可以全局用同一个stack，不同stack导航器之间屏幕跳转后相应back按钮和预期不一致；
 */
const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
            drawerLabel: "首页",
        }
    },
    Input: {
        screen: TextInput,
        navigationOptions: {
            drawerLabel: "输入",
        }
    },
    Scroll: {
        screen: ScrollView,
        navigationOptions: {
            drawerLabel: "滚动",
        }
    },
}, {
    initialRouteName: "Home",
});

export default DrawerNavigator;