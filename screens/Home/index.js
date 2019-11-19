import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import fonts from '../../fonts';

import Seasons from './components/seasons';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

(fonts());

export default class Home extends Component {
  render() {
    return (
      <View style={ style.container }>
        <Seasons teste="oi" />
      </View>
    );
  }
}