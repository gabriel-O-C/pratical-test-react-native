import React from 'react';
import { theme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/Templates';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
export default App;
