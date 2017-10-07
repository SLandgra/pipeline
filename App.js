import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Platform
} from 'react-native';
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Login from "./components/login/index";
import Home from "./components/home/index";
import NewJob from "./components/newJob/index";
const AppNavigator = StackNavigator({
  Login: {screen: Login},

  Home: {screen: Home},
  NewJob: {screen: NewJob}
},
{
  initialRouteName: "Login",
  headerMode: "none"
})
export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigator/>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
