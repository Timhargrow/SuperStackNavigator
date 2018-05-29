import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> This is the login Screen </Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('LoginScreen', () => CustomComponent);
