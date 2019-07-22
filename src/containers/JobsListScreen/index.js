import React, { Component } from "react";
import {
    Text, View, FlatList, ActivityIndicator, TouchableOpacity,
    StatusBar, Image, SafeAreaView, Platform
} from 'react-native';
import { getJobsListAction } from "../../store/actions/JobListAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from "./styles";
import SearchHeader from 'react-native-search-header';

class JobsListScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
            dataSource: [],
            responseDataSource: []
        }

    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        this.props.getJobsListAction(this.state.text);
    }

    SearchFilterFunction(text) {
        if ((text != "undefined" || text != null)) {
            var newData = this.state.responseDataSource.filter((item) => {
                return item.normalized_job_title.substr(0, text.length).toUpperCase() == text.toUpperCase()
            })
            this.setState({
                text: text,
                isLoading: false,
                dataSource: newData
            })
        } else {
            this.setState({
                dataSource: this.state.responseDataSource
            })
        }
        this.forceUpdate()
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={{ tintColor: "white", height: 20, width: 20, marginHorizontal: 10 }} source={require("../../../assets/drawer_menu.png")} />
                    </TouchableOpacity>
                    <Text style={styles.label}> Jobs Titles </Text>
                    <TouchableOpacity onPress={() => this.searchHeader.show()}>
                        <Image style={{ tintColor: "white", height: 20, width: 20, marginHorizontal: 10 }} source={require("../../../assets/search_icon.png")} />
                    </TouchableOpacity>
                </View>
                <SearchHeader
                    topOffset={Platform.OS == "ios" ? 24 : 0}
                    ref={(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}

                    placeholder='Search Job..'
                    enableSuggestion={false}
                    placeholderColor='gray'
                    headerHeight={56}
                    pinnedSuggestions={[`react-native-search-header`, `react-native`, `javascript`]}
                    onClear={() => {
                        console.log(`Clearing input!`);
                        this.SearchFilterFunction('')
                    }}
                    onEnteringSearch={({ nativeEvent }) => this.SearchFilterFunction(nativeEvent.text)}
                />
                {
                    this.state.isLoading ?

                        <View style={{ flex: 1, paddingTop: 20 }}>
                            <ActivityIndicator />
                        </View>

                        :
                        <FlatList
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            extraData={this.state.isLoading}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity key={item.uuid}
                                    style={{ width: "100%" }}
                                    onPress={() => this.props.navigation.navigate("JobDetailsScreen", {
                                        jobUUID: item.uuid,
                                        jobName: item.normalized_job_title
                                    })}>
                                    <Text
                                        style={styles.rowViewContainer}
                                    >
                                        {item.normalized_job_title}</Text>
                                </TouchableOpacity>}
                            enableEmptySections={true}
                            style={{ marginTop: 10, width: "100%" }}
                        />
                }

                <TouchableOpacity style={{ backgroundColor: "rgb(37,166,223)", borderRadius: 5 }}
                    onPress={() => this.props.navigation.navigate("BLEDevicesScreen")}>
                    <Text style={{ paddingVertical: 15, paddingHorizontal: 20, fontSize: 17, textAlign: "center", color: "white" }}>BLE Scanner</Text>
                </TouchableOpacity>

            </SafeAreaView >
        );

    }

    componentWillReceiveProps(nextProps) {

        if (!nextProps.jobList.isLoading && nextProps.jobList.error == null) {
            this.setState({
                dataSource: nextProps.jobList.jobsData,
                responseDataSource: nextProps.jobList.jobsData,
                isLoading: nextProps.jobList.isLoading
            });
        } else if (nextProps.jobList.error != null) {
            this.state.isLoading = nextProps.jobList.isLoading;
        }
        this.forceUpdate();
    }
}

function mapStateToProps(state) {
    return {
        jobList: state.jobList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getJobsListAction: getJobsListAction
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobsListScreen);
