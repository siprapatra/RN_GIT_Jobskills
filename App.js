import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import mainReducer from "./src/store/reducers/MainReducer";
import JobsListScreen from './src/containers/JobsListScreen/index';
import JobDetailsScreen from './src/containers/JobDetailsScreen/index';
import BLEDevicesScreen from './src/containers/BLEDevicesScreen/index';

const drawerNav = createDrawerNavigator({
  screen: JobsListScreen,
})

const MainNavigator = createAppContainer(
  createStackNavigator({
    JobsListScreen: {
      screen: drawerNav,
      navigationOptions: ({ navigation }) => ({
        title: '',
        headerVisible: false,
        header: null,
      }),
    },
    BLEDevicesScreen: {
      screen: BLEDevicesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'BLE Scanner',
        headerVisible: true,
        headerStyle: {
          backgroundColor: 'rgb(37,166,223)'
        },
        headerTintColor: 'white'
      }),
    },
    JobDetailsScreen: {
      screen: JobDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("jobName").toUpperCase(),
        headerVisible: true,
      })
    }
  },
    {
      headerMode: "screen"
    })
)

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}