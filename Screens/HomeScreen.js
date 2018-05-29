import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

type Props = {};
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> This is the the HomeScreen </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HomeScreen', () => CustomComponent);
