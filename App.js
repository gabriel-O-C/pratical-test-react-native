import React from 'react';
import { SafeAreaView } from 'react-native';
import { theme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Heading, ProfileImage, Header } from './src/components/';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Header>
          <Heading>Bookshelf</Heading>
          <ProfileImage />
        </Header>
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
