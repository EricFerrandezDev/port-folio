import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import getTheme from './utils/theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const baseTheme = createTheme({ ...getTheme() });
  return (
    <Router>
      <ThemeProvider theme={baseTheme}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
