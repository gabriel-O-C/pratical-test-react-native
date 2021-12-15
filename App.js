/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {GlobalStyles} from './src/styles/global.styles';

const App = () => {
  return (
    <SafeAreaView>
      <GlobalStyles />
      <View>
        <Text>oi</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
