import React, {Component} from 'react';
import {ActivityIndicator, FlatList, SectionList, StyleSheet, Text, View} from "react-native";

/*
    RN组件SectionList不能很好支持上拉刷新，利用onEndReached只能大致模拟，
    主要onEndReached回调只会响应一次，而且不同分页的onEndReached之间没办法很方便进行同步，
    貌似JS本身也没有很好的同步工具，能想到的办法是保存一个Promise，每次onEndReached把新fetch任务加到原Promise的then里，
    然后更新Promise本身，可以把响应交互触发的异步任务串起来；
 */
export default class CityList extends Component {

    static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
        return {
            tabBarLabel: this.title,
        }
    };

    title = "城市列表";
    pageData = {
        originData: null,
        currentPage: 0,
    };

    currentPromise = null;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isSection: false,
            dataSource: [],
            isRefreshingFooter: 0,
        };
    }

    componentDidMount() {
        this._onRefresh();
    }

    _isRefreshAvailable = () => !this.state.isLoading && this.state.isSection;

    _isRefreshEnd = () => this.pageData.currentPage >= this.pageData.originData.length;

    _isRefreshingFooter = () => this.pageData.currentPage >= 1;

    _getRefreshState = () => {
        if (this._isRefreshEnd()) return 2;
        else if (this._isRefreshingFooter()) return 1;
        else return 0;
    };

    _onRefresh = () => {
        this.pageData.currentPage = 0;
        this.setState({
            isLoading: true,
            dataSource: [],
            isSection: false,
        }, function () {
            this.currentPromise = fetch('testurl')
                .then((response) => response.text())
                .then((text) => {
                    this.pageData.originData = JSON.parse(text.slice(text.indexOf("=") + 1))
                        .province.map(item => {
                            return {
                                title: item.name,
                                data: item.cities,
                            };
                        });
                    this.pageData.currentPage = 1;
                    let datas = new Array(this.pageData.originData.length);
                    datas[0] = this.pageData.originData[0];
                    this.setState({
                        isLoading: false,
                        dataSource: datas,
                        isSection: true,
                        isRefreshingFooter: 0,
                    });
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({
                        isLoading: false,
                        dataSource: [],
                        isSection: false,
                    }, function () {

                    });
                });
        });
    };

    _onRefreshPage = (page) => {
        console.log("_onRefreshPage " + page);
        this.currentPromise = this.currentPromise.then(
            () => {
                this.setState({
                    isRefreshingFooter: this._getRefreshState(),
                }, function () {
                    fetch('testurl')
                        .then((response) => response.text())
                        .then((text) => {
                            this.pageData.originData = JSON.parse(text.slice(text.indexOf("=") + 1))
                                .province.map(item => {
                                    return {
                                        title: item.name,
                                        data: item.cities,
                                    };
                                });
                            console.log(this.pageData.originData[page]);
                            this.setState({
                                isLoading: false,
                                dataSource: (() => {
                                    let datas = this.state.dataSource;
                                    datas[page] = this.pageData.originData[page];
                                    return datas;
                                })(),
                                isSection: true,
                                isRefreshingFooter: (page + 1) >= this.pageData.originData.length ? 2 : 0,
                            });
                        })
                        .catch((error) => {
                            console.error(error);
                            this.setState({
                                isLoading: false,
                                isRefreshingFooter: 0,
                            }, function () {

                            });
                        });
                });
            }
        );
    };

    _renderFooter = () => {
        if (this.state.isRefreshingFooter === 2) {
            return (
                <View style={{height: 30, alignItems: 'center', justifyContent: 'flex-start',}}>
                    <Text style={{color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if (this.state.isRefreshingFooter === 1) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator/>
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if (this.state.isRefreshingFooter === 0) {
            return (
                <View>
                </View>
            );
        }
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        else if (this.state.isSection) {
            return (
                <View style={styles.container}>
                    <SectionList
                        sections={this.state.dataSource}
                        renderItem={({item}) => <Text style={styles.item}>{item.cityid}, {item.cityname}</Text>}
                        ItemSeparatorComponent={() => <View style={styles.divider}/>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        refreshing={this.state.isLoading}
                        onRefresh={this._onRefresh}
                        onEndReachedThreshold={0.01}
                        onEndReached={({distanceFromEnd}) => {
                            console.log("onEndReached " + distanceFromEnd);
                            if (this._isRefreshAvailable() && !this._isRefreshEnd()) {
                                this._onRefreshPage(this.pageData.currentPage++);
                            }
                        }}
                        ListFooterComponent={this._renderFooter}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            );
        } else return (
            <View style={styles.container}>
                <Text>
                    There's no data here!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'center',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
    },
    divider: {
        height: 1,
        backgroundColor: 'red'
    },
    footer: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
});