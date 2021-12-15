/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { GlobalStyles } from './src/styles/global.styles';
import { theme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components';
const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <View>
          <Text>oi</Text>
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
