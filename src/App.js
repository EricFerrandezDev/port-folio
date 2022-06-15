import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import getTheme from './utils/theme';
import Header from './components/Header';

const App = () => {
  const baseTheme = createTheme({ ...getTheme() });
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
