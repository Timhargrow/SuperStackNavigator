import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {LoginScreen} from './Screens/LoginScreen';
import {HomeScreen} from './Screens/HomeScreen';
export default class App extends React.Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home:  HomeScreen,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
