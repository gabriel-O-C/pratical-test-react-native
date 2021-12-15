import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { theme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components';
import Heading from './src/components/Heading';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Heading>teste</Heading>
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
